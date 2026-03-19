'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import InsideTheKampus from '../../components/InsideTheKampus';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';

export default function HousePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('academy');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const rooms = [
    {
      id: 1,
      name: 'Room 1',
      type: 'Shared Accommodation',
      capacity: 'Up to 2 People',
      amenities: ['3 meals daily (breakfast, lunch, supper)', 'High-speed WiFi', 'Shared kitchen', 'Shared sitting room', 'Desk & workspace', 'Air conditioning'],
      price: '$20/night per person',
      available: true,
      image: '[Add image: Comfortable shared accommodation room]'
    },
    {
      id: 2,
      name: 'Room 2',
      type: 'Shared Accommodation',
      capacity: 'Up to 2 People',
      amenities: ['3 meals daily (breakfast, lunch, supper)', 'High-speed WiFi', 'Shared kitchen', 'Shared sitting room', 'Desk & workspace', 'Air conditioning'],
      price: '$20/night per person',
      available: true,
      image: '[Add image: Comfortable shared accommodation room]'
    }
  ];

  const facilities = [
    { icon: 'package.svg', name: 'Shared Kitchen', desc: 'Fully equipped kitchen with modern appliances' },
    { icon: 'strategy.svg', name: 'Coworking Space', desc: '24/7 access to workspace with high-speed internet' },
    { icon: 'target.svg', name: 'Fitness Area', desc: 'Basic gym equipment for your wellness' },
    { icon: 'global.svg', name: 'Garden', desc: 'Outdoor relaxation area with seating' },
    { icon: 'shield.svg', name: 'Security', desc: '24/7 security and CCTV surveillance' },
    { icon: 'settings.svg', name: 'Housekeeping', desc: 'Daily cleaning services included' }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-white">
        {/* Full-width ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8 bg-white py-3">
          <div className="academy-ticker bg-white" aria-label="The House features ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">ACCOMMODATION</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">3 MEALS DAILY</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIGH-SPEED WIFI</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COWORKING SPACE</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">24/7 SECURITY</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY LIVING</span>
                <span className="academy-ticker-sep">•</span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">ACCOMMODATION</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">3 MEALS DAILY</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIGH-SPEED WIFI</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COWORKING SPACE</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">24/7 SECURITY</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY LIVING</span>
                <span className="academy-ticker-sep">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-black">
                The <span className="gradient-text-3d">House</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your home away from home at Blue OX Kampus. Supporting your technical skills development, professional growth, and pathway to global opportunity.
              </p>
            </div>
          </Reveal>

          {/* House Video */}
          <Reveal delay={0.2}>
            <div className="relative mb-16 flex justify-center">
              <div className="w-full max-w-lg aspect-video rounded-2xl border-2 border-[#e05a3a]/30 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/room_vid.MP4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InsideTheKampus />

      {/* Facilities Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Facilities & <span className="text-[#e05a3a]">Amenities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for a comfortable and productive stay
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => (
              <Reveal key={index} delay={0.4 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#e05a3a]/50 transition-all duration-300">
                  <img src={`/icons/${facility.icon}`} alt={facility.name} className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">{facility.name}</h3>
                  <p className="text-gray-600">{facility.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Policies */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <Reveal delay={0.7}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <img src="/icons/location.svg" alt="Location" className="w-8 h-8 mr-3" />Location
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-[#e05a3a] mt-1">•</span>
                    <span>Located in Mbarara, Uganda</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#e05a3a] mt-1">•</span>
                    <span>Walking distance to Blue OX Kampus training facilities</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#e05a3a] mt-1">•</span>
                    <span>Close to restaurants, shops, and transportation</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#e05a3a] mt-1">•</span>
                    <span>Quiet, safe neighborhood </span>
                  </p>
                </div>

                <div className="mt-8 p-4 bg-[#e05a3a]/10 border border-[#e05a3a]/30 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="text-[#e05a3a] font-semibold">Need directions?</span> Contact us on WhatsApp for detailed location information.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Policies */}
            <Reveal delay={0.8}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <img src="/icons/planner.svg" alt="House Policies" className="w-8 h-8 mr-3" />House Policies
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Booking Duration</h4>
                    <p className="text-sm">Flexible stays from 1 week to 3 months. Extended stays (3+ months) receive special rates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Academy Integration</h4>
                    <p className="text-sm">Direct access to Blue OX Kampus training facilities. Accommodation includes shuttle service to academy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Community Standards</h4>
                    <p className="text-sm">We foster a professional learning environment. Respect for peers, facilities, and shared spaces is essential.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Safety & Wellness</h4>
                    <p className="text-sm">24/7 security, medical assistance on standby, and emergency protocols aligned with international standards.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Professional Conduct</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• Maintain hygiene and respect shared facilities</li>
                      <li>• Quiet hours: 10 PM - 7 AM for focus & rest</li>
                      <li>• Professional dress code in common areas</li>
                      <li>• Substance-free environment (no smoking/alcohol in rooms)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal delay={0.9}>
            <div className="glass rounded-2xl border-2 border-[#e05a3a]/50 p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Book Your Stay?
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Submit your booking request and we'll get back to you with availability and special offers for Academy students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('academy')}
                  className="inline-block border border-[#e05a3a] bg-transparent text-[#e05a3a] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#e05a3a] hover:text-white"
                >
                  BOOK NOW
                </button>
                <a 
                  href="tel:+3197010209759"
                  className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  CALL US
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                <img src="/icons/lightbulb.svg" alt="Tip" className="inline w-5 h-5 mr-2" />
                <span className="text-[#e05a3a]">Special discount:</span> Academy students get 20% off their stay!
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
      />

      <Footer />
    </>
  );
}








