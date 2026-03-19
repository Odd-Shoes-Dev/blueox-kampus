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

  const images = [
    '/assets/images/image1.png',
    '/assets/images/image2.png',
    '/assets/images/image3.png'
  ];

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-start sm:items-center justify-center bg-white pt-8 sm:pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-12 md:py-0">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center">
              {/* Hero Content */}
              <div className="text-center flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 pt-24 sm:pt-20 md:pt-0 text-black">
                  What if the only thing between <span className="text-[#e05a3a]">a refugee and a career</span>… was a <span className="text-blue-500">VR headset</span>?
                </h1>

                <h2 className="blueox-body text-base sm:text-lg text-gray-700 mb-8 sm:mb-10">
                  Tens of thousands displaced.<br/>
                  Zero accessible training centers.
                </h2>
                
                {/* Intro Video */}
                <div className="max-w-3xl mx-auto my-8 sm:my-12">
                  <video 
                    className="w-full rounded-2xl shadow-2xl border border-gray-300"
                    autoPlay
                    muted
                    controls
                    playsInline
                  >
                    <source src="/assets/videos/BlueOx_intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
                  <div className="bg-white/5 border border-gray-300 rounded-xl p-4 sm:p-6 hover:bg-black/10 transition">
                    <div className="blueox-subheading text-3xl sm:text-4xl font-black text-[#e05a3a] mb-2">32</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-tight">
                      Trainers-of-trainers trained<br/>(Kampala, DIT partnership)
                    </p>
                  </div>
                  <div className="bg-white/5 border border-gray-300 rounded-xl p-4 sm:p-6 hover:bg-black/10 transition">
                    <div className="blueox-subheading text-2xl sm:text-3xl font-black text-blue-500 mb-2">Uganda's First<br/>VR Training Center</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-tight">
                      Upgrading traditional<br/>vocational training
                    </p>
                  </div>
                  <div className="bg-white/5 border border-gray-300 rounded-xl p-4 sm:p-6 hover:bg-black/10 transition">
                    <div className="blueox-subheading text-2xl sm:text-3xl font-black text-blue-500 mb-2">VR-First</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-tight">
                      Easier transition to<br/>physical welding
                    </p>
                  </div>
                  <div className="bg-white/5 border border-gray-300 rounded-xl p-4 sm:p-6 hover:bg-black/10 transition">
                    <div className="blueox-subheading text-3xl sm:text-4xl font-black text-[#e05a3a] mb-2">500+</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-tight">
                      Internationally certified welders<br/>(Kenya program)
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-0">
                  <a
                    href="/fund"
                    className="bg-[#e05a3a] hover:bg-[#c94e30] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl"
                    title="One learner. One cohort cycle. Assessed and job-ready."
                  >
                    Train 1 Person for $50
                  </a>
                  <a
                    href="/fund"
                    className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-500 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
                    title="Bring mobile training to settlements, towns, and schools—where traditional TVET won't reach."
                  >
                    Deploy a VR Lab
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Image Gallery Section */}
      <div className="relative bg-white py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`VR Training ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
          <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-[#e05a3a]/20 rounded-full" />
          <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-[#e05a3a]/30" />
        </div>
      </div>

      {/* Talent is Everywhere Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-black">
                Talent is everywhere. <span className="text-[#e05a3a]">Access isn't.</span><br/>
                <span className="text-blue-500">So we moved the lab.</span>
              </h2>
              <p className="blueox-body text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Displaced learners, women with caregiving responsibilities, youth with disabilities, and rural students often can't travel to training—so we bring training to them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-4xl mx-auto space-y-12">
              {/* What We Deliver */}
              <div className="blueox-card border border-gray-200 rounded-2xl p-8 sm:p-12">
                <p className="blueox-body text-xl md:text-2xl text-black leading-relaxed mb-8">
                  VR welding, solar installation, EV skills, workplace readiness, and career guidance—delivered directly to settlements, towns, and schools.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="blueox-subheading text-blue-500 text-lg mb-2">Safer learning</div>
                    <p className="blueox-body text-gray-600 text-sm">No burns, no injuries, no risk</p>
                  </div>
                  <div>
                    <div className="blueox-subheading text-[#e05a3a] text-lg mb-2">Lower cost</div>
                    <p className="blueox-body text-gray-600 text-sm">90% less than physical consumables</p>
                  </div>
                  <div>
                    <div className="blueox-subheading text-blue-500 text-lg mb-2">Zero waste</div>
                    <p className="blueox-body text-gray-600 text-sm">No metal, gas, or material waste</p>
                  </div>
                </div>
                <p className="blueox-body text-gray-600 text-lg mt-8 leading-relaxed">
                  Training aligned to real job demand.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Evidence Section - Light Background */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <details className="bg-white border-2 border-[#e05a3a] rounded-2xl p-8 sm:p-10 group">
            <summary className="blueox-subheading text-xl sm:text-2xl text-black cursor-pointer list-none flex items-center justify-between group-hover:text-[#e05a3a] transition">
              <span>See the evidence ↓</span>
            </summary>
            <div className="mt-6 space-y-4">
              <p className="blueox-body text-gray-700 leading-relaxed text-lg">
                Not experimental: Toolkit and GIZ deployed VR welding in Kakuma Refugee Camp, Kenya. 
                In Uganda, Toolkit iSkills partnered with the Directorate of Industrial Training 
                and Dig in Vision to train 32 trainers-of-trainers on VR welding technology. 
                Toolkit reports VR-first learners transition more easily into physical practice. 
                Blue Ox brings this model to Western Uganda—toward refugee settlements, towns, 
                and rural schools.
              </p>
              <a 
                href="/model" 
                className="inline-block text-[#e05a3a] hover:text-[#c94e30] font-bold text-lg transition mt-4"
              >
                See how the model works →
              </a>
            </div>
          </details>
        </div>
      </section>

      <InsideTheKampus />

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">Ready to pull up?</h2>
          <p className="blueox-body text-gray-600 mb-12 uppercase tracking-widest text-sm">Applications for Feb 2026 Intake are Open</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => openForm('academy')} className="inline-block border border-[#e05a3a] bg-transparent text-[#e05a3a] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#e05a3a] hover:text-white">
              JOIN ACADEMY
            </button>
            <button onClick={() => openForm('partner')} className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
              PARTNER PORTAL
            </button>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section className="py-16 px-6 bg-white/50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="blueox-body text-gray-600 leading-relaxed text-sm sm:text-base">
            Built with <span className="text-blue-500 font-bold">Dig in Vision</span> and informed by field deployments with <span className="text-blue-500 font-bold">Toolkit Foundation</span> and <span className="text-blue-500 font-bold">GIZ</span>; including VR welding deployment in Kakuma Refugee Camp, Kenya.
          </p>
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








