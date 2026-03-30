'use client';

import { useState } from 'react';

interface BuilderFAQFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: 'Do I need prior coding experience to join?',
    answer: 'No. Our academy accepts builders at all levels. We have tracks for complete beginners through to experienced developers. What matters most is your commitment and willingness to ship real work every week.'
  },
  {
    question: 'How much does it cost to train?',
    answer: 'Training at Blue OX Kampus is free for accepted builders. Our model is funded by the founders who hire pods — so you train at no cost, and once you\'re placed, you earn from day one.'
  },
  {
    question: 'How long does the training program take?',
    answer: 'The core program runs 8 weeks. By the end you\'ve shipped real features in a live pod, have a portfolio of work, and are eligible for placement with a paying founder.'
  },
  {
    question: 'What happens after training — how do I get placed?',
    answer: 'After completing training, builders are eligible for pod placements with vetted founders. Placements are performance-based — we match you to a founder whose product fits your skill set and place you within a managed team.'
  },
  {
    question: 'Can I join remotely from outside Uganda?',
    answer: 'Yes. While we are based in Mbarara, Uganda, we run hybrid and fully remote cohorts. We have builders and partners across the EU, US, and Gulf regions. A reliable internet connection is required.'
  },
  {
    question: 'What do I build during the program?',
    answer: 'You\'ll work on real products — not toy projects. Each builder is assigned to a pod that ships features for actual clients. You will push code, attend standups, and deliver weekly output from week one.'
  },
  {
    question: 'How do I apply?',
    answer: 'Click "Apply Now" on the builders page and fill out the application form. We review applications on a rolling basis and aim to respond within 48 hours. Cohorts start every 8 weeks.'
  }
];

export default function BuilderFAQForm({ isOpen, onClose }: BuilderFAQFormProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          message: formData.message,
          formType: 'builder_question',
          submittedAt: new Date().toISOString()
        })
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setFormData({ name: '', email: '', message: '' });
          setOpenFaq(null);
        }, 2500);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-2xl">
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
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
              Ask a Question
            </h2>
            <p className="text-gray-600 text-sm">
              Browse common questions below. If yours isn't listed, send it directly and we'll reply within 24 hours.
            </p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Question Sent!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              {/* FAQ Section */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest text-[#F58220] mb-4">Common Questions</p>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-gray-200">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition"
                      >
                        <span className="text-sm font-semibold text-black pr-4">{faq.question}</span>
                        <svg
                          className={`w-4 h-4 text-[#F58220] shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 border-t border-gray-100 bg-gray-50">
                          <p className="text-sm text-gray-600 leading-relaxed pt-3">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Still have a question?</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Contact Form */}
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
                    Your Question *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your question here..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-[#F58220] bg-[#F58220] text-white font-bold text-sm py-3 uppercase tracking-wider transition-all duration-300 hover:bg-[#c94e30] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send My Question'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
