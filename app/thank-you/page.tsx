'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: new Date().getTime(),
        value: 0, // Will be updated by webhook
        currency: 'USD'
      });
    }
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center bg-white px-6 pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-5xl font-black text-black mb-6 uppercase">
            Thank You for <span className="text-[#F58220]">Funding</span> Training!
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Your contribution is directly changing lives. You'll receive a confirmation email with your receipt and impact report details.
          </p>
          <div className="bg-white/5 border border-gray-300 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="text-black font-bold">Confirmation Email</div>
                  <div className="text-gray-600 text-sm">Receipt and tax documentation sent within 24 hours</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <div className="text-black font-bold">Impact Updates</div>
                  <div className="text-gray-600 text-sm">Monthly reports on learner progress and outcomes</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤝</div>
                <div>
                  <div className="text-black font-bold">Donor Community</div>
                  <div className="text-gray-600 text-sm">Invitation to exclusive updates and site visits</div>
                </div>
              </div>
            </div>
          </div>
          <Link 
            href="/"
            className="inline-block bg-[#F58220] hover:bg-[#c94e30] text-white px-12 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}








