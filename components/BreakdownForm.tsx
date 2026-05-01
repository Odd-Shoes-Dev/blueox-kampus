'use client';

import { useState } from 'react';

interface BreakdownFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BreakdownForm({ isOpen, onClose }: BreakdownFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    topChallenge: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Product/Backlog: ${formData.product}\n\nTop challenge: ${formData.topChallenge}\n\nAdditional notes: ${formData.message}`,
          formType: 'breakdown',
          submittedAt: new Date().toISOString()
        })
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', product: '', topChallenge: '', message: '' });
        }, 2500);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const challenges = [
    'Too much backlog, not enough dev time',
    'Can\'t afford to hire full-time developers',
    'Product ships too slowly',
    'Need specific skills I don\'t have in-house',
    'Quality issues — bugs, no QA process',
    'Missing a technical co-founder',
    'Other'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#F58220] mb-2">Free · 15 Minutes</p>
            <h2 className="font-bebas text-5xl uppercase tracking-tight text-black mb-2">
              Get Your Pod Breakdown
            </h2>
            <p className="text-gray-600 text-sm">
              Tell us what you're building and your biggest bottleneck. We'll map out exactly how a pod clears your backlog — no commitment required.
            </p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Request Received!</h3>
              <p className="text-gray-600">We'll reach out within 24 hours to schedule your breakdown.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  What are you building? *
                </label>
                <input
                  type="text"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="e.g. SaaS dashboard, mobile app, e-commerce platform..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  What's your biggest challenge right now? *
                </label>
                <select
                  name="topChallenge"
                  required
                  value={formData.topChallenge}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-black focus:border-[#F58220] focus:outline-none transition text-sm appearance-none"
                >
                  <option value="">Select your top challenge...</option>
                  {challenges.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Anything else we should know?
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Stack, team size, timeline, budget — anything helpful..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-[#F58220] bg-[#F58220] text-white font-bold text-sm py-3 uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#F58220] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Book My Free Breakdown →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
