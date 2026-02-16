import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get('whop-signature');

    // In production, you should verify the webhook signature
    // const isValid = verifyWhopSignature(body, signature, process.env.WHOP_WEBHOOK_SECRET);
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    const payload = JSON.parse(body);

    // Handle different event types
    switch (payload.event) {
      case 'payment.succeeded':
        console.log('Payment successful:', payload.data);
        
        // Extract payment details
        const amount = payload.data.amount || 0;
        const productName = payload.data.product_name || 'Training Funding';
        const customerEmail = payload.data.customer_email || 'No email provided';
        const transactionId = payload.data.id || 'N/A';
        const createdAt = payload.data.created_at ? new Date(payload.data.created_at).toLocaleString() : new Date().toLocaleString();

        // Send email notification to Blue Ox team
        await resend.emails.send({
          from: 'Blue Ox Kampus <noreply@blueoxkampus.com>',
          to: 'blueoxrecruit@gmail.com',
          subject: `🎉 New Funding: $${amount} - ${productName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ff4040;">New Funding Received!</h2>
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
      
      case 'payment.failed':
        console.log('Payment failed:', payload.data);
        
        // Optionally send a notification about failed payment
        await resend.emails.send({
          from: 'Blue Ox Kampus <noreply@blueoxkampus.com>',
          to: 'blueoxrecruit@gmail.com',
          subject: '⚠️ Payment Failed',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ff4040;">Payment Failed</h2>
              <p>A payment attempt failed. Check your Whop dashboard for details.</p>
              <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `
        });
        break;

      case 'payment.refunded':
        console.log('Payment refunded:', payload.data);
        
        // Send refund notification
        await resend.emails.send({
          from: 'Blue Ox Kampus <noreply@blueoxkampus.com>',
          to: 'blueoxrecruit@gmail.com',
          subject: '🔄 Payment Refunded',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Payment Refunded</h2>
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
