'use client';

import { useState } from 'react';

export type FormType = 'fund' | 'partner' | 'academy';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
}

export default function ApplicationForm({ isOpen, onClose, formType }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: '+256',
    organization: '',
    country: '',
    message: ''
  });

  const countryCodes = [
    { code: '+256', country: 'Uganda', flagCode: 'ug' },
    { code: '+254', country: 'Kenya', flagCode: 'ke' },
    { code: '+255', country: 'Tanzania', flagCode: 'tz' },
    { code: '+250', country: 'Rwanda', flagCode: 'rw' },
    { code: '+257', country: 'Burundi', flagCode: 'bi' },
    { code: '+27', country: 'South Africa', flagCode: 'za' },
    { code: '+234', country: 'Nigeria', flagCode: 'ng' },
    { code: '+233', country: 'Ghana', flagCode: 'gh' },
    { code: '+44', country: 'UK', flagCode: 'gb' },
    { code: '+1', country: 'USA/Canada', flagCode: 'us' },
    { code: '+31', country: 'Netherlands', flagCode: 'nl' },
    { code: '+48', country: 'Poland', flagCode: 'pl' },
    { code: '+971', country: 'UAE', flagCode: 'ae' },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const getFormTitle = () => {
    switch (formType) {
      case 'fund':
        return 'Fund a Training Cohort';
      case 'partner':
        return 'Partner With Us';
      case 'academy':
        return 'Join Academy';
      default:
        return 'Application Form';
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'fund':
        return 'Help us empower the next generation of technical talent. Fill out the form below and our team will contact you.';
      case 'partner':
        return 'Join our network of global partners supporting skills development in Africa.';
      case 'academy':
        return 'Start your journey with Blue OX Kampus. Submit your application below.';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to your API endpoint
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            phoneCountryCode: '+256',
            organization: '',
            country: '',
            message: ''
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0f1a] rounded-2xl border border-white/10 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-black uppercase text-white mb-3">
              {getFormTitle()}
            </h2>
            <p className="text-gray-400">
              {getFormDescription()}
            </p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Submission Successful!</h3>
              <p className="text-gray-400">We'll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Phone Number *
                </label>
                <div className="flex gap-3">
                  <div className="relative w-40">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <img 
                        src={`https://flagcdn.com/w40/${countryCodes.find(c => c.code === formData.phoneCountryCode)?.flagCode}.png`}
                        alt="flag"
                        className="w-5 h-4 object-cover"
                      />
                    </div>
                    <select
                      name="phoneCountryCode"
                      value={formData.phoneCountryCode}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:border-[#ff4040] focus:outline-none transition appearance-none"
                      style={{ backgroundImage: 'none' }}
                    >
                      {countryCodes.map((item) => (
                        <option key={item.code} value={item.code}>
                          {item.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition"
                    placeholder="712 345 678"
                  />
                </div>
              </div>

              {/* Organization (for partners/funders) */}
              {(formType === 'fund' || formType === 'partner') && (
                <div>
                  <label htmlFor="organization" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition"
                    placeholder="Company or organization name"
                  />
                </div>
              )}

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition"
                  placeholder="Your country"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#ff4040] focus:outline-none transition resize-none"
                  placeholder={formType === 'academy' ? 'Tell us about your background and why you want to join...' : 'Tell us more about your interest...'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ff4040] hover:bg-[#ff2020] text-white py-4 rounded-full font-black uppercase tracking-widest transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
