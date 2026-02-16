'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import VRShowcase from '../../components/VRShowcase';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';
import Link from 'next/link';

export default function AcademyPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('academy');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <>
      <Header onFundClick={() => openForm('fund')} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-red-600/30 backdrop-blur-sm text-[#ff8080] text-sm font-bold mb-6 border border-[#ff4040]/30">
                • Foundation Programs
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                Immersive <span className="text-[#ff4040]">Technical Education</span> for All
              </h1>
              <p className="text-gray-400 text-lg mb-12">(Zero material waste. Zero injury risk. Maximum impact.)</p>

              {/* Program Overview Section */}
              <div className="max-w-5xl mx-auto">
                <div className="blueox-card p-8 md:p-12">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    OUR <span className="text-[#ff4040]">5 PROGRAMS</span>
                  </h4>

                  <div className="space-y-6 mb-8">
                    <div className="bg-black/30 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/icons/fire.svg" alt="Fire" className="w-10 h-10" />
                        <h5 className="text-xl font-bold text-white">
                          1. VR Welding & Industrial Fabrication
                        </h5>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Advanced simulation training that builds muscle memory, safety discipline, and procedural accuracy without material waste. Aligned with European industry standards through partnership with Dig in Vision.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/icons/solar-panel.svg" alt="Solar Panel" className="w-10 h-10" />
                        <h5 className="text-xl font-bold text-white">
                          2. Solar Installation & Green Energy
                        </h5>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Hands-on simulation training in photovoltaic installation, system troubleshooting, and maintenance. Supporting Uganda's renewable energy growth and regional green economy.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/icons/charging-station.svg" alt="Charging Station" className="w-10 h-10" />
                        <h5 className="text-xl font-bold text-white">
                          3. EV & Mechatronics Engineering
                        </h5>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Foundational skills for emerging electric mobility and industrial automation sectors. Preparing youth for future-facing industries.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/icons/headset.svg" alt="Headset" className="w-10 h-10" />
                        <h5 className="text-xl font-bold text-white">
                          4. Customer Care & Workplace Readiness
                        </h5>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Structured soft-skill and service excellence training to improve employability in local and international markets.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <img src="/icons/graduation-cap.svg" alt="Graduation Cap" className="w-10 h-10" />
                        <h5 className="text-xl font-bold text-white">
                          5. VR Career Guidance for Secondary Schools
                        </h5>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Immersive career exposure for students lacking real-world insight into technical professions. Students explore trades virtually before making academic decisions.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button onClick={() => openForm('academy')} className="inline-block bg-[#ff4040] hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                      <img src="/icons/user-check.svg" alt="Enroll" className="inline w-6 h-6 mr-2" />
                      ENROLL NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Background Section */}
      <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
        <iframe
          src="https://www.youtube.com/embed/JUApsTgSYtQ?autoplay=1&mute=1&loop=1&playlist=JUApsTgSYtQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
          className="w-full h-full object-cover opacity-60 pointer-events-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
          <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-[#ff4040]/20 rounded-full" />
          <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-[#ff4040]/30" />
        </div>
      </div>

      {/* VR Showcase Section */}
      <VRShowcase />

      {/* Why VR Training? */}
      <section className="relative py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.5}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Why <span className="text-[#ff4040]">VR</span> Training?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                VR makes technical training accessible, affordable, and safe for everyone.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Reveal delay={0.6}>
              <div className="blueox-card p-8">
                <div className="text-5xl font-black text-[#ff4040] mb-4">90%</div>
                <h3 className="text-2xl font-bold text-white mb-3">Lower Training Cost</h3>
                <p className="text-gray-400">
                  VR reduces per-student training cost from $500 to $50 through simulation efficiency
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="blueox-card p-8">
                <div className="text-5xl font-black text-blue-400 mb-4">0</div>
                <h3 className="text-2xl font-bold text-white mb-3">Material Waste</h3>
                <p className="text-gray-400">
                  No gas, electrodes, or metal waste. Practice unlimited times without consumables
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="blueox-card p-8">
                <div className="text-5xl font-black text-red-500 mb-4">100%</div>
                <h3 className="text-2xl font-bold text-white mb-3">Safety</h3>
                <p className="text-gray-400">
                  Zero injury risk, accessible for persons with disabilities, portable to remote zones
                </p>
              </div>
            </Reveal>
          </div>

          {/* Target Beneficiaries */}
          <Reveal delay={0.9}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Who We <span className="text-[#ff4040]">Serve</span></h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/home.svg" alt="Home" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Refugees</h4>
                  <p className="text-gray-400">In Nakivale Settlement and across Western Uganda</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/female.svg" alt="Female" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Women</h4>
                  <p className="text-gray-400">Entering technical trades and technical fields</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/user-graduate.svg" alt="User Graduate" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Out-of-School Youth</h4>
                  <p className="text-gray-400">Second-chance skills training opportunities</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/building.svg" alt="Building" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">TVET Institutions</h4>
                  <p className="text-gray-400">Upgrading traditional vocational training</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/school.svg" alt="Students" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Students</h4>
                  <p className="text-gray-400">Technical training and career guidance for all educational levels</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enrollment Process */}
          <Reveal delay={1.0}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">How to <span className="text-[#ff4040]">Apply</span></h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Choose Program', desc: 'Select the training track that matches your goals and interests', icon: 'clipboard-list.svg' },
                  { step: 2, title: 'Complete Application', desc: 'Fill out the enrollment form via WhatsApp or in-person', icon: 'user-check.svg' },
                  { step: 3, title: 'Start Training', desc: 'Begin VR simulations with expert guidance from local instructors', icon: 'vr-cardboard.svg' },
                  { step: 4, title: 'Graduate & Work', desc: 'Complete program, get certified, and access job placement support', icon: 'certificate.svg' }
                ].map((step) => (
                  <div key={step.step} className="blueox-card p-6 text-center">
                    <div className="w-16 h-16 bg-[#ff4040] rounded-full flex items-center justify-center mx-auto mb-4">
                      <img src={`/icons/${step.icon}`} alt={step.title} className="w-8 h-8" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Step {step.step}</h4>
                    <h5 className="text-lg font-semibold text-[#ff4040] mb-2">{step.title}</h5>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Enroll CTA */}
          <div className="text-center mb-16">
            <button onClick={() => openForm('academy')} className="inline-block bg-[#ff4040] hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
              <img src="/icons/user-check.svg" alt="Enroll" className="inline w-6 h-6 mr-2" />
              ENROLL NOW
            </button>
          </div>

          {/* FAQs */}
          <Reveal delay={1.1}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked <span className="text-[#ff4040]">Questions</span></h3>
              <div className="space-y-4">
                {[
                  { q: 'Do I need VR experience to start?', a: 'No! We provide complete orientation and training on VR equipment. Most students adapt within the first session.' },
                  { q: 'Are the programs free?', a: 'We offer scholarship opportunities for refugees, women, and persons with disabilities. Contact us to discuss eligibility and funding options.' },
                  { q: 'What happens after I complete the program?', a: 'We provide job placement assistance through our ethical workforce pathways—both local Ugandan opportunities and international placements through formal labor agreements.' },
                  { q: 'Can persons with disabilities participate?', a: 'Yes! VR training is highly accessible. We work with each individual to ensure equipment and programs are adapted to their needs.' },
                  { q: 'How long are the programs?', a: 'Programs range from 8-20 weeks depending on the track. We offer flexible scheduling to accommodate different needs.' },
                  { q: 'Do you offer mobile training units?', a: 'Yes! We deploy mobile VR training labs directly to refugee settlements, rural schools, and underserved communities.' }
                ].map((faq, i) => (
                  <div key={i} className="blueox-card p-6">
                    <h4 className="text-lg font-bold text-white mb-2">
                      <img src="/icons/question-circle.svg" alt="Question" className="inline w-6 h-6 mr-2" />
                      {faq.q}
                    </h4>
                    <p className="text-gray-400 ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={1.2}>
            <div className="text-center">
              <div className="blueox-card border-2 border-[#ff4040]/50 p-8 mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Master a New Skill?
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  Join us in building the workforce of the future
                </p>
                <p className="text-gray-400">
                  Training cohorts starting soon
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={() => openForm('academy')} className="bg-[#ff4040] hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3">
                  <img src="/icons/users.svg" alt="Apply" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
                  APPLY NOW
                </button>
                <Link href="/" className="border-2 border-white/30 px-10 py-5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg text-white flex items-center gap-3">
                  <img src="/icons/arrow-right.svg" alt="Back" className="w-5 h-5" style={{ filter: 'brightness(0) invert(1)', transform: 'rotate(180deg)' }} />
                  Back to Home
                </Link>
              </div>
              
              <div className="mt-8 text-gray-400">
                <p>Or visit us: <span className="text-white">Blue Ox Kampus, Western Uganda</span></p>
                <p className="mt-2 text-sm">Want to support our mission? <button onClick={() => openForm('partner')} className="text-[#ff4040] hover:underline cursor-pointer">Become a Funding Partner</button></p>
              </div>
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
