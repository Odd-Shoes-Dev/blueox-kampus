# Whop Payment Integration Guide

## Overview
This document outlines how to integrate Whop payment processing for the Blue Ox Kampus funding page.

## Setup Steps

### 1. Create Whop Account
- Go to https://whop.com
- Sign up for a business account
- Complete KYC verification
- Set up your payout method

### 2. Create Products in Whop Dashboard

Create the following products with these exact prices:

| Product Name | Price | Product ID (you'll get this) |
|-------------|-------|------------------------------|
| Buy a Laptop | $500 | `prod_laptop_xxxxx` |
| Train 1 Person | $50 | `prod_one_person_xxxxx` |
| Fund a Cohort | $500 | `prod_cohort_xxxxx` |
| VR Headset | $1,200 | `prod_headset_xxxxx` |
| Mobile VR Lab | $5,000 | `prod_mobile_lab_xxxxx` |
| Full Deployment | $15,000 | `prod_full_deploy_xxxxx` |
| Custom Amount | Variable | `prod_custom_xxxxx` |

### 3. Get Your API Keys

From Whop Dashboard:
- Go to Settings → API Keys
- Copy your **Public Key** (starts with `pk_`)
- Copy your **Secret Key** (starts with `sk_`) - **Keep this secure!**

### 4. Environment Variables

Add to `.env.local`:

```env
# Whop Payment Keys
NEXT_PUBLIC_WHOP_PUBLIC_KEY=pk_your_public_key_here
WHOP_SECRET_KEY=sk_your_secret_key_here

# Whop Product IDs
NEXT_PUBLIC_WHOP_LAPTOP_ID=prod_laptop_xxxxx
NEXT_PUBLIC_WHOP_ONE_PERSON_ID=prod_one_person_xxxxx
NEXT_PUBLIC_WHOP_COHORT_ID=prod_cohort_xxxxx
NEXT_PUBLIC_WHOP_HEADSET_ID=prod_headset_xxxxx
NEXT_PUBLIC_WHOP_MOBILE_LAB_ID=prod_mobile_lab_xxxxx
NEXT_PUBLIC_WHOP_FULL_DEPLOY_ID=prod_full_deploy_xxxxx
NEXT_PUBLIC_WHOP_CUSTOM_ID=prod_custom_xxxxx

# Success/Cancel URLs
NEXT_PUBLIC_SITE_URL=https://blueoxkampus.com
```

### 5. Install Whop SDK

```bash
npm install @whop-sdk/core
```

### 6. Code Implementation

#### Update `app/fund/page.tsx`

Replace the `handleFund` function with: 

```typescript
const handleFund = async (optionId: string, price: number) => {
  try {
    // Map option IDs to Whop product IDs
    const productMap: Record<string, string> = {
      'laptop': process.env.NEXT_PUBLIC_WHOP_LAPTOP_ID!,
      'one-person': process.env.NEXT_PUBLIC_WHOP_ONE_PERSON_ID!,
      'cohort': process.env.NEXT_PUBLIC_WHOP_COHORT_ID!,
      'vr-headset': process.env.NEXT_PUBLIC_WHOP_HEADSET_ID!,
      'mobile-lab': process.env.NEXT_PUBLIC_WHOP_MOBILE_LAB_ID!,
      'full-deployment': process.env.NEXT_PUBLIC_WHOP_FULL_DEPLOY_ID!,
    };

    const productId = productMap[optionId];

    if (!productId) {
      console.error('Invalid product ID');
      return;
    }

    // Redirect to Whop checkout
    const checkoutUrl = new URL('https://whop.com/checkout');
    checkoutUrl.searchParams.append('product', productId);
    checkoutUrl.searchParams.append('success_url', `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`);
    checkoutUrl.searchParams.append('cancel_url', `${process.env.NEXT_PUBLIC_SITE_URL}/fund`);
    
    window.location.href = checkoutUrl.toString();
  } catch (error) {
    console.error('Payment error:', error);
    alert('Something went wrong. Please try again.');
  }
};
```

Update the button onClick handlers:

```typescript
<button
  onClick={() => handleFund(option.id, option.price)}
  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
    option.featured
      ? 'bg-[#ff4040] hover:bg-[#ff2020] text-white shadow-xl'
      : 'bg-blue-500 hover:bg-blue-600 text-white'
  }`}
>
  Fund Now
</button>
```

#### Create Webhook Handler

Create `app/api/whop-webhook/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get('whop-signature');

    // Verify webhook signature
    // (Whop provides signature verification method)

    const payload = JSON.parse(body);

    // Handle different event types
    switch (payload.event) {
      case 'payment.succeeded':
        // Log successful payment
        console.log('Payment successful:', payload.data);
        
        // Send confirmation email
        // Update database
        // Send to CRM
        
        break;
      
      case 'payment.failed':
        console.log('Payment failed:', payload.data);
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 400 });
  }
}
```

### 7. Create Thank You Page

Create `app/thank-you/page.tsx`:

```typescript
'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: new Date().getTime(),
        value: 0, // Will be updated by webhook
        currency: 'USD'
      });
    }
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0f1a] to-black px-6 pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-5xl font-black text-white mb-6 uppercase">
            Thank You for <span className="text-[#ff4040]">Funding</span> Training!
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Your contribution is directly changing lives. You'll receive a confirmation email with your receipt and impact report details.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-white font-bold">Confirmation Email</div>
                  <div className="text-gray-400 text-sm">Receipt and tax documentation sent within 24 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <div className="text-white font-bold">Impact Updates</div>
                  <div className="text-gray-400 text-sm">Monthly reports on learner progress and outcomes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤝</div>
                <div>
                  <div className="text-white font-bold">Donor Community</div>
                  <div className="text-gray-400 text-sm">Invitation to exclusive updates and site visits</div>
                </div>
              </div>
            </div>
          </div>
          <Link 
            href="/"
            className="inline-block bg-[#ff4040] hover:bg-[#ff2020] text-white px-12 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

### 8. Configure Whop Webhooks

In Whop Dashboard:
1. Go to Settings → Webhooks
2. Add webhook URL: `https://blueoxkampus.com/api/whop-webhook`
3. Select events to listen to:
   - `payment.succeeded`
   - `payment.failed`
   - `payment.refunded`
4. Copy webhook secret
5. Add to `.env.local`: `WHOP_WEBHOOK_SECRET=whsec_xxxxx`

### 9. Testing

#### Test Mode:
1. Use Whop test keys (starts with `pk_test_` and `sk_test_`)
2. Use test card: `4242 4242 4242 4242`
3. Any future expiry date and CVV

#### Production Checklist:
- [ ] All product IDs configured
- [ ] Environment variables set on production (Vercel)
- [ ] Webhook endpoint verified
- [ ] Test successful payment flow
- [ ] Test failed payment flow
- [ ] Verify email notifications work
- [ ] Check thank you page displays correctly
- [ ] Confirm webhook receives events

### 10. Custom Amount Handling

For custom amounts, create a separate flow:

```typescript
const handleCustomAmount = async (amount: number) => {
  if (amount < 1) {
    alert('Please enter an amount greater than $0');
    return;
  }

  // For custom amounts, you may need to create a checkout session via API
  const response = await fetch('/api/whop-checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, productId: process.env.NEXT_PUBLIC_WHOP_CUSTOM_ID })
  });

  const { checkoutUrl } = await response.json();
  window.location.href = checkoutUrl;
};
```

## Email to blueoxrecruit@gmail.com

Send payment notifications to `blueoxrecruit@gmail.com` using the existing Resend integration:

```typescript
// In app/api/whop-webhook/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// After payment.succeeded event:
await resend.emails.send({
  from: 'Blue Ox Kampus <noreply@blueoxkampus.com>',
  to: 'blueoxrecruit@gmail.com',
  subject: `New Funding: $${payload.data.amount} - ${payload.data.product_name}`,
  html: `
    <h2>New Funding Received</h2>
    <p><strong>Amount:</strong> $${payload.data.amount}</p>
    <p><strong>Product:</strong> ${payload.data.product_name}</p>
    <p><strong>Donor Email:</strong> ${payload.data.customer_email}</p>
    <p><strong>Transaction ID:</strong> ${payload.data.id}</p>
    <p><strong>Date:</strong> ${new Date(payload.data.created_at).toLocaleString()}</p>
  `
});
```

## Support & Resources

- **Whop Documentation:** https://docs.whop.com
- **Whop Dashboard:** https://dash.whop.com
- **Support:** support@whop.com

## Notes
- Keep all API keys secure and never commit them to Git
- Use environment variables for all sensitive data
- Test thoroughly in test mode before going live
- Monitor webhook logs for any issues
- Set up error alerting for failed payments

---

**Last Updated:** February 16, 2026  
**Status:** Ready for implementation  
**Contact:** blueoxrecruit@gmail.com
