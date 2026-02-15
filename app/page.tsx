'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import InsideTheKampus from '../components/InsideTheKampus';
import ApplicationForm from '../components/ApplicationForm';

type FormType = 'fund' | 'partner' | 'academy';

export default function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('fund');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };
  return (
    <>
      <Header onFundClick={() => openForm('fund')} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-start sm:items-center justify-center bg-black pt-8 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-12 md:py-0">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center">
              {/* Hero Content */}
              <div className="text-center flex-1">
                <h1 className="blueox-heading text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white mb-2 sm:mb-3 md:mb-4 pt-24 sm:pt-20 md:pt-0">
                  THE BLUE OX: <span className="text-[#ff4040]">UGANDA'S</span> AI & VR <span className="text-blue-500">TRAINING</span> KAMPUS
                </h1>
                
                {/* Intro Video */}
                <div className="max-w-2xl mx-auto my-6 sm:my-8">
                  <video 
                    className="w-full rounded-2xl shadow-2xl border border-white/10"
                    controls
                    playsInline
                  >
                    <source src="/assets/videos/BlueOx_intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <p className="text-lg sm:text-lg md:text-2xl text-gray-300 leading-relaxed mb-4 sm:mb-8 pt-4 sm:pt-0">
                  Blue Ox Kampus delivers immersive, industry-aligned technical education to refugees, women, persons with disabilities, underserved youth, and students, bridging the last mile between talent and opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-8 sm:pt-0">
                  <button
                    onClick={() => openForm('fund')}
                    className="bg-[#ff4040] hover:bg-[#ff2020] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-lg md:text-lg transition-all hover:scale-105 shadow-2xl"
                  >
                    Fund a Training Cohort
                  </button>
                  <button
                    onClick={() => openForm('partner')}
                    className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-lg md:text-lg transition-all hover:scale-105"
                  >
                    Partner With Us
                  </button>
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

      {/* Talent Exists Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-[#0a0f1a] to-black">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
                Talent Exists. <span className="text-[#ff4040]">Access Does Not.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Across Western Uganda and refugee settlements like Nakivale, thousands of youth are capable, motivated, and ready to work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              {/* Left Column - What They Lack */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-[#ff4040] pl-4">
                  But they lack:
                </h3>
                <div className="space-y-4">
                  {[
                    'Exposure to real technical career pathways',
                    'Access to modern training equipment',
                    'Financial ability to afford consumable-based TVET',
                    'Geographic proximity to certified institutions',
                    'Career guidance before choosing life-altering academic paths'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-[#ff4040] rounded-full mt-2 group-hover:scale-150 transition-transform" />
                      <p className="text-lg md:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Who's Excluded */}
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                    Traditional vocational systems are expensive, centralized, and material-heavy.
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
                    The most vulnerable are excluded first:
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Women with caregiving responsibilities',
                      'Refugees without travel means',
                      'Youth with disabilities',
                      'Rural secondary students without career exposure'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform" />
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <InsideTheKampus />

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-8 uppercase italic">Ready to pull up?</h2>
          <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">Applications for Feb 2026 Intake are Open</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => openForm('academy')} className="bg-[#ff4040] hover:bg-[#ff2020] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition">
              Join Academy
            </button>
            <button onClick={() => openForm('partner')} className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition">
              Partner Portal
            </button>
          </div>
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
