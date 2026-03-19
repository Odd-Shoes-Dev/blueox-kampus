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
              <div className="text-center flex-1 max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 pt-24 sm:pt-20 md:pt-0 text-black leading-tight">
                  What if the only thing between<br/>
                  <span className="text-[#e05a3a]">a refugee and a career</span>…<br/>
                  was a <span className="text-blue-500">VR headset</span>?
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
                  <div className="bg-white border border-gray-300 rounded-none p-5 hover:border-[#e05a3a] transition-colors duration-200">
                    <div className="blueox-subheading text-3xl sm:text-4xl font-black text-[#e05a3a] mb-1">32</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-snug">
                      Trainers-of-trainers trained (Kampala, DIT partnership)
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-none p-5 hover:border-[#e05a3a] transition-colors duration-200">
                    <div className="blueox-subheading text-xl sm:text-2xl font-black text-blue-500 mb-1">Uganda's First VR Training Center</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-snug">
                      Upgrading traditional vocational training
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-none p-5 hover:border-[#e05a3a] transition-colors duration-200">
                    <div className="blueox-subheading text-2xl sm:text-3xl font-black text-blue-500 mb-1">VR-First</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-snug">
                      Easier transition to physical welding
                    </p>
                  </div>
                  <div className="bg-white border border-gray-300 rounded-none p-5 hover:border-[#e05a3a] transition-colors duration-200">
                    <div className="blueox-subheading text-3xl sm:text-4xl font-black text-[#e05a3a] mb-1">500+</div>
                    <p className="blueox-body text-xs sm:text-sm text-gray-600 leading-snug">
                      Internationally certified welders (Kenya program)
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-0">
                  <a
                    href="/fund"
                    className="inline-block border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#c94e30] hover:border-[#c94e30]"
                    title="One learner. One cohort cycle. Assessed and job-ready."
                  >
                    TRAIN 1 PERSON FOR $50
                  </a>
                  <a
                    href="/fund"
                    className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                    title="Bring mobile training to settlements, towns, and schools—where traditional TVET won't reach."
                  >
                    DEPLOY A VR LAB
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-black">
                Talent is everywhere. <span className="text-[#e05a3a]">Access isn't.</span><br/>
                <span className="text-blue-500">So we moved the lab.</span>
              </h2>
              <p className="blueox-body text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
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

      {/* Bridge Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-4">How it all fits together</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 max-w-3xl">
              One campus. Two expressions of the same mission.
            </h2>
            <p className="blueox-body text-gray-600 text-base max-w-2xl mb-12">
              The Kampus is not two organisations sharing a building. It is one integrated model where every part funds and feeds every other part.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            <Reveal delay={0.1}>
              <div className="bg-white p-10">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Track 01 — Vocational</p>
                <h3 className="text-lg font-extrabold text-black mb-4">VR Training for displaced communities</h3>
                <p className="blueox-body text-gray-600 text-sm leading-relaxed mb-6">
                  Refugees and youth in Western Uganda learn vocational skills — welding, fabrication — using VR headsets before ever touching real equipment. Cheaper. Safer. Proven. VR-first learners transition to physical practice faster than traditional methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">VR headsets replace expensive equipment and physical infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">Trainers-of-trainers model multiplies impact across communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">Certified welders placed into employment or self-employment</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-white p-10">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Track 02 — Software</p>
                <h3 className="text-lg font-extrabold text-black mb-4">Execution pods for founders who need to ship</h3>
                <p className="blueox-body text-gray-600 text-sm leading-relaxed mb-6">
                  Software engineering students from across Uganda compete weekly. Top performers are selected into the Kampus, trained further, and placed into Billy Pods — lean execution teams that ship real products for international founders within 7 days.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">Weekly competitions surface the top 1% of builders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">Pods generate revenue that directly funds vocational training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#e05a3a] font-bold mt-0.5">→</span>
                    <span className="blueox-body text-gray-700 text-sm">Builders earn internationally while staying rooted in Uganda</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="border-l-4 border-[#e05a3a] bg-gray-50 border border-gray-200 mt-px p-8">
              <p className="blueox-body text-gray-700 text-sm leading-relaxed">
                <span className="font-extrabold text-black">The loop closes itself.</span> Founders pay pods → pods revenue funds VR training → trained welders get jobs → employed welders support the next cohort → more builders enter the Kampus. No grants required to sustain the cycle.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audience Router */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="mb-10">
              <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-4">More than one side of this mission</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-2">BlueOx serves more than one audience.</h2>
              <p className="blueox-body text-gray-600 text-base">Jump to what's relevant to you.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            <Reveal delay={0.1}>
              <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="bg-white p-8 block group hover:bg-gray-50 transition-colors duration-200">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-3">Founders</p>
                <h3 className="text-lg font-extrabold text-black mb-2 group-hover:text-[#e05a3a] transition-colors">Request a Pod</h3>
                <p className="blueox-body text-gray-600 text-sm">Ready to ship? 7 days to kickoff.</p>
                <span className="inline-block mt-4 text-[#e05a3a] text-sm font-semibold">→</span>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a href="/academy" className="bg-white p-8 block group hover:bg-gray-50 transition-colors duration-200">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-3">Builders</p>
                <h3 className="text-lg font-extrabold text-black mb-2 group-hover:text-[#e05a3a] transition-colors">Join a Pod</h3>
                <p className="blueox-body text-gray-600 text-sm">Compete. Get placed. Ship real work internationally.</p>
                <span className="inline-block mt-4 text-[#e05a3a] text-sm font-semibold">→</span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a href="/partners" className="bg-white p-8 block group hover:bg-gray-50 transition-colors duration-200">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-3">Universities</p>
                <h3 className="text-lg font-extrabold text-black mb-2 group-hover:text-[#e05a3a] transition-colors">Partner with us</h3>
                <p className="blueox-body text-gray-600 text-sm">Structured placements. Tracked outcomes. Zero admin.</p>
                <span className="inline-block mt-4 text-[#e05a3a] text-sm font-semibold">→</span>
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <a href="/fund" className="bg-white p-8 block group hover:bg-gray-50 transition-colors duration-200">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-3">Investors & Donors</p>
                <h3 className="text-lg font-extrabold text-black mb-2 group-hover:text-[#e05a3a] transition-colors">Back the mission</h3>
                <p className="blueox-body text-gray-600 text-sm">Fund training. Deploy capital with measurable impact.</p>
                <span className="inline-block mt-4 text-[#e05a3a] text-sm font-semibold">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who We Are / Christian Identity */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="border border-gray-200 p-10 sm:p-16">
              <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#e05a3a] mb-6">Who we are</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-3 max-w-2xl">
                A Christian-first technology hub. Not Christian-adjacent. Not faith-friendly. <span className="text-[#e05a3a]">Christian first.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8 mb-12">
                <p className="blueox-body text-gray-600 leading-relaxed">
                  Every builder at BlueOx Kampus is a Christian. They're selected through weekly Saturday coding competitions from software engineering students across Uganda — the top performers enter our system, commit to our code of Redemptive Technology, and ship for founders who are building products that push back darkness in the world.
                </p>
                <p className="blueox-body text-gray-600 leading-relaxed">
                  We plant churches with our finances. We practice radical generosity through supporting refugees. We are inspired by the conviction that the Church is called to minister in Word and Deed, and that technology is one of the most powerful tools available to do both.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
                <div className="p-5 border border-gray-200">
                  <h4 className="font-extrabold text-black text-sm mb-2">Build for people</h4>
                  <p className="blueox-body text-gray-600 text-sm">Technology that serves, not exploits. Products that create value for the people who use them.</p>
                </div>
                <div className="p-5 border border-gray-200">
                  <h4 className="font-extrabold text-black text-sm mb-2">Excellence as worship</h4>
                  <p className="blueox-body text-gray-600 text-sm">Doing excellent work is an act of worship. Shipping matters. Quality matters. Integrity matters.</p>
                </div>
                <div className="p-5 border border-gray-200">
                  <h4 className="font-extrabold text-black text-sm mb-2">Radical generosity</h4>
                  <p className="blueox-body text-gray-600 text-sm">Revenue funds church plants, supports refugees, and keeps training free for builders who have nothing.</p>
                </div>
                <div className="p-5 border border-gray-200">
                  <h4 className="font-extrabold text-black text-sm mb-2">Jesus as framework</h4>
                  <p className="blueox-body text-gray-600 text-sm">Not a values statement on a wall. The actual model for how we work, lead, build, and relate to one another.</p>
                </div>
              </div>
              <p className="blueox-body text-gray-500 text-sm mt-8">
                Aligned with the Faith Driven Entrepreneur movement and inspired by <a href="https://solving.org" target="_blank" rel="noopener noreferrer" className="text-[#e05a3a] hover:underline">solving.org</a> — the conviction that Christians are called to Build, Invest, and Give toward the world's 32 greatest problems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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








