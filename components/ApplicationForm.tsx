'use client';

import { useState } from 'react';

export type FormType = 'fund' | 'partner' | 'academy' | 'pods';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: FormType;
}

const programs = [
  { id: 'welding', name: 'VR Welding & Industrial Fabrication' },
  { id: 'solar', name: 'Solar Installation & Green Energy' },
  { id: 'ev', name: 'EV & Mechatronics Engineering' },
  { id: 'customer-care', name: 'Customer Care & Workplace Readiness' },
  { id: 'career-guidance', name: 'VR Career Guidance for Secondary Schools' }
];

export default function ApplicationForm({ isOpen, onClose, formType }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: '+256',
    organization: '',
    country: '',
    program: '',
    message: '',
    // Pods-specific fields
    podLane: '',
    stack: '',
    topTasks: '',
    duration: '',
    podSize: '',
    numInterns: ''
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
      case 'pods':
        return 'Request Billy Pod Profiles';
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
      case 'pods':
        return 'Tell us about your Pod needs and we\'ll send 3–5 matched profiles with a simple start plan.';
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
            program: '',
            message: '',
            // reset pods-specific fields as well
            podLane: '',
            stack: '',
            topTasks: '',
            duration: '',
            podSize: '',
            numInterns: ''
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-none border border-gray-200 shadow-2xl">
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
            <h2 className="font-bebas text-5xl uppercase tracking-tight text-black mb-3">
              {getFormTitle()}
            </h2>
            <p className="blueox-body text-gray-600">
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
              <h3 className="text-2xl font-bold text-black mb-2">Submission Successful!</h3>
              <p className="text-gray-600">We'll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
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
                      className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
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
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                    placeholder="712 345 678"
                  />
                </div>
              </div>

              {/* Program Selection (for academy) */}
              {formType === 'academy' && (
                <div>
                  <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Select Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
                  >
                    <option value="">Choose a program...</option>
                    {programs.map((prog) => (
                      <option key={prog.id} value={prog.id}>{prog.name}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Pods specific fields */}
              {formType === 'pods' && (
                <>
                  <div>
                    <label htmlFor="numInterns" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Number of Interns
                    </label>
                    <select
                      id="numInterns"
                      name="numInterns"
                      required
                      value={formData.numInterns}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 (Solo Pod)</option>
                      <option value="2">2</option>
                      <option value="3">3 (Team Pod)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="podLane" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Which Pod Lane
                    </label>
                    <select
                      id="podLane"
                      name="podLane"
                      required
                      value={formData.podLane}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
                    >
                      <option value="">Choose a track...</option>
                      <option value="qa">QA Pod</option>
                      <option value="react">React Pod</option>
                      <option value="python">Python/Data Pod</option>
                      <option value="support">Support Engineering Pod</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="stack" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Your Stack & Tools
                    </label>
                    <input
                      id="stack"
                      name="stack"
                      required
                      value={formData.stack}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                      placeholder="e.g. React + Next.js + TypeScript + Jira + GitHub"
                    />
                  </div>

                  <div>
                    <label htmlFor="topTasks" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Top 3–5 Tasks
                    </label>
                    <textarea
                      id="topTasks"
                      name="topTasks"
                      required
                      rows={3}
                      value={formData.topTasks}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition resize-none blueox-body"
                      placeholder="Describe the tickets or outcomes you need shipped..."
                    />
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Duration
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      required
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
                    >
                      <option value="">Choose duration...</option>
                      <option value="8">8 weeks</option>
                      <option value="12">12 weeks</option>
                      <option value="16">16 weeks</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="podSize" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Pod Size
                    </label>
                    <select
                      id="podSize"
                      name="podSize"
                      required
                      value={formData.podSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black focus:border-[#F58220] focus:outline-none transition appearance-none blueox-body"
                    >
                      <option value="">Choose...</option>
                      <option value="solo">Solo Pod (1 intern)</option>
                      <option value="team">Team Pod (3 interns)</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                </>
              )}

              {/* Organization (for partners/funders) */}
              {(formType === 'fund' || formType === 'partner') && (
                <div>
                  <label htmlFor="organization" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                    placeholder="Company or organization name"
                  />
                </div>
              )}

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Country *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition blueox-body"
                  placeholder="Your country"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-black placeholder-gray-500 focus:border-[#F58220] focus:outline-none transition resize-none blueox-body"
                  placeholder={formType === 'academy' ? 'Tell us about your background and why you want to join...' : 'Tell us more about your interest...'}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border border-[#F58220] bg-[#F58220] text-white font-bold text-sm py-3 uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#F58220] disabled:opacity-50 disabled:cursor-not-allowed"
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









