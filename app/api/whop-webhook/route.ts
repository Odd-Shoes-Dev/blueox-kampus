import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Resend } from 'resend';
import { checkRateLimit, getClientIp, isLikelyScraperUserAgent, isSearchCrawler } from '../../../lib/security';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const userAgent = req.headers.get('user-agent') || '';
    const isCrawler = isSearchCrawler(userAgent);
    if (!isCrawler && isLikelyScraperUserAgent(userAgent)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(req.headers);
    const rate = checkRateLimit(`api:whop:${ip}`, 20, 60_000);
    if (!rate.ok) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429, headers: { 'Retry-After': String(rate.retryAfter) } }
      );
    }

    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }

    const body = await req.text();
    const signature = headers().get('whop-signature');

    // In production, you should verify the webhook signature
    // const isValid = verifyWhopSignature(body, signature, process.env.WHOP_WEBHOOK_SECRET);
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    let payload: any;
    try {
      payload = JSON.parse(body);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    // Handle different event types
    switch (payload.event) {
      case 'payment_succeeded':
        console.log('Payment successful:', payload.data);
        
        // Extract payment details
        const amount = payload.data.amount || 0;
        const productName = payload.data.product_name || 'Training Funding';
        const customerEmail = payload.data.customer_email || 'No email provided';
        const transactionId = payload.data.id || 'N/A';
        const createdAt = payload.data.created_at ? new Date(payload.data.created_at).toLocaleString() : new Date().toLocaleString();

        // Send email notification to Blue Ox team
        await resend.emails.send({
          from: 'Blue Ox Kampus <onboarding@resend.dev>',
          to: 'blueoxrecruit@gmail.com',
          subject: `🎉 New Funding: $${amount} - ${productName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #e05a3a;">New Funding Received!</h2>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Amount:</strong> $${amount}</p>
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Donor Email:</strong> ${customerEmail}</p>
                <p><strong>Transaction ID:</strong> ${transactionId}</p>
                <p><strong>Date:</strong> ${createdAt}</p>
              </div>
              <p style="color: #666;">Log in to your Whop dashboard for full transaction details.</p>
            </div>
          `
        });

        console.log('Email notification sent to blueoxrecruit@gmail.com');
        break;
      
      case 'payment_failed':
        console.log('Payment failed:', payload.data);
        
        // Optionally send a notification about failed payment
        await resend.emails.send({
          from: 'Blue Ox Kampus <onboarding@resend.dev>',
          to: 'blueoxrecruit@gmail.com',
          subject: '⚠️ Payment Failed',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #e05a3a;">Payment Failed</h2>
              <p>A payment attempt failed. Check your Whop dashboard for details.</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `
        });
        break;

      case 'refund_created':
        console.log('Refund created:', payload.data);
        
        // Send refund notification
        await resend.emails.send({
          from: 'Blue Ox Kampus <onboarding@resend.dev>',
          to: 'blueoxrecruit@gmail.com',
          subject: '🔄 Refund Created',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Refund Created</h2>
              <p>A payment has been refunded. Check your Whop dashboard for details.</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `
        });
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 400 });
  }
}
