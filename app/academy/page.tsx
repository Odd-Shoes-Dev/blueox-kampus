'use client';

import { useState } from 'react';
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const libreBaskerville = Libre_Baskerville({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-libre' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';
import Link from 'next/link';

export default function AcademyPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('academy');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const programs = [
    {
      icon: 'rocket.svg',
      number: '01',
      title: 'VR Welding & Industrial Fabrication',
      category: 'Industrial Training',
      description: 'Advanced simulation training that builds muscle memory, safety discipline, and procedural accuracy without material waste. Aligned with European industry standards through partnership with Dig in Vision.',
      skills: ['MIG Welding', 'TIG Welding', 'Stick Welding', 'Safety Protocols'],
    },
    {
      icon: 'lightbulb.svg',
      number: '02',
      title: 'Solar Installation & Green Energy',
      category: 'Green Energy',
      description: 'Hands-on simulation training in photovoltaic installation, system troubleshooting, and maintenance. Supporting Uganda\'s renewable energy growth and regional green economy.',
      skills: ['PV Installation', 'System Troubleshooting', 'Grid Connections', 'Maintenance'],
    },
    {
      icon: 'mobile.svg',
      number: '03',
      title: 'EV & Mechatronics Engineering',
      category: 'Future Tech',
      description: 'Foundational skills for emerging electric mobility and industrial automation sectors. Preparing youth for future-facing industries arriving in East Africa now.',
      skills: ['Electric Mobility', 'Industrial Automation', 'Motor Systems', 'Control Technology'],
    },
    {
      icon: 'team.svg',
      number: '04',
      title: 'Customer Care & Workplace Readiness',
      category: 'Soft Skills',
      description: 'Structured soft-skill and service excellence training to improve employability in local and international markets. The skills that get you hired and keep you hired.',
      skills: ['Service Excellence', 'Communication', 'Interview Prep', 'Workplace Culture'],
    },
    {
      icon: 'book.svg',
      number: '05',
      title: 'VR Career Guidance for Secondary Schools',
      category: 'Education',
      description: 'Immersive career exposure for students lacking real-world insight into technical professions. Students explore trades virtually before making academic decisions.',
      skills: ['Career Exploration', 'Trade Exposure', 'Decision Making', 'STEM Pathways'],
    },
  ];

  const whyVr = [
    { icon: 'dollar.svg',  stat: '90%',  title: 'Lower Training Cost',  desc: 'VR reduces per-student training cost from $500 to $50 through simulation efficiency - viable even in low-resource settings.' },
    { icon: 'water.svg',   stat: '0',    title: 'Material Waste',       desc: 'No gas, electrodes, or metal waste. Practice unlimited times without consumables. Budget goes to students, not materials.' },
    { icon: 'shield.svg',  stat: '100%', title: 'Safety',               desc: 'Zero injury risk. Accessible for persons with disabilities. Portable to remote zones including refugee settlements.' },
  ];

  const whoWeServe = [
    { icon: 'location.svg', title: 'Refugees',            desc: 'In Nakivale Settlement and across Western Uganda — building skills that travel across borders.' },
    { icon: 'profile.svg',  title: 'Women',               desc: 'Entering technical trades and STEM fields. We actively remove barriers and provide safe training spaces.' },
    { icon: 'user.svg',     title: 'Out-of-School Youth', desc: 'Second-chance skills training - because a single failure point should not define your future.' },
    { icon: 'brand.svg',    title: 'TVET Institutions',   desc: 'Upgrading traditional vocational training with infrastructure-light, scalable VR delivery.' },
    { icon: 'book.svg',     title: 'Students',            desc: 'Technical training and career guidance for students at all educational levels.' },
  ];

  const enrollSteps = [
    { step: 1, icon: 'planner.svg',       title: 'Choose Your Program',    desc: 'Select the training track that matches your goals. Not sure? Tell us your situation - we will advise.' },
    { step: 2, icon: 'checkmark-circle.svg', title: 'Complete Your Application', desc: 'Fill out the enrollment form via this site, WhatsApp, or in-person at the campus.' },
    { step: 3, icon: 'web.svg',           title: 'Start VR Training',      desc: 'Begin simulations with expert guidance from local instructors. Equipment provided. No experience needed.' },
    { step: 4, icon: 'star.svg',          title: 'Graduate & Get Placed',  desc: 'Complete your program, receive a certified credential, and access job placement support.' },
  ];

  const faqs = [
    { q: 'Do I need VR experience to start?',       a: 'No. We provide complete orientation and training on VR equipment. Most students adapt within the first session.' },
    { q: 'Are the programs free?',                   a: 'We offer scholarship opportunities for refugees, women, and persons with disabilities. Contact us to discuss eligibility and funding options.' },
    { q: 'What happens after I complete the program?', a: 'We provide job placement assistance through our ethical workforce pathways - both local Ugandan opportunities and international placements through formal labour agreements.' },
    { q: 'Can persons with disabilities participate?', a: 'Yes. VR training is highly accessible. We work with each individual to ensure equipment and programs are adapted to their needs.' },
    { q: 'How long are the programs?',               a: 'Programs range from 8-20 weeks depending on the track. We offer flexible scheduling to accommodate different needs.' },
    { q: 'Do you offer mobile training units?',      a: 'Yes. We deploy mobile VR training labs directly to refugee settlements, rural schools, and underserved communities.' },
  ];

  return (
    <div className={`${bebasNeue.variable} ${libreBaskerville.variable} ${spaceMono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-libre { font-family: 'Libre Baskerville', serif; }
      `}} />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-white">

        {/* Full-width ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8 bg-white py-3">
          <div className="academy-ticker bg-white" aria-label="Foundation programs ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">VR WELDING</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">SOLAR INSTALLATION</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">EV AND MECHATRONICS</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">WORKPLACE READINESS</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">CAREER GUIDANCE</span>
                <span className="academy-ticker-sep"></span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">VR WELDING</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">SOLAR INSTALLATION</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">EV AND MECHATRONICS</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">WORKPLACE READINESS</span>
                <span className="academy-ticker-sep"></span>
                <span className="academy-ticker-item">CAREER GUIDANCE</span>
                <span className="academy-ticker-sep"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ ACADEMY</div>
              <h1 className="font-bebas text-[4.5rem] sm:text-[6rem] md:text-[8rem] mb-6 text-[#0044CC] uppercase leading-[1.1]">
                Immersive <span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>Technical Education</span> for All
              </h1>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 italic">
                Zero material waste. Zero injury risk. 90% lower cost. VR simulation makes world-class TVET training accessible for refugees, women, and youth across Western Uganda.
              </p>

              {/* Video */}
              <div className="mb-12 mt-8 flex justify-center">
                <div className="w-full max-w-2xl">
                  <video 
                    width="100%" 
                    height="auto" 
                    controls
                    autoPlay
                    muted
                    className="w-full h-auto rounded-lg shadow-xl"
                  >
                    <source src="/assets/videos/BlueOx_intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="https://www.blueoxjobs.eu/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0033AA] hover:border-[#0033AA]"
                >
                  ENROLL NOW
                </a>
                <a
                  href="#programs"
                  className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0044CC] hover:text-white"
                >
                  SEE THE 5 PROGRAMS
                </a>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-4">
              <div className="text-center">
                <div className="font-bebas text-5xl sm:text-6xl text-[#0044CC] mb-3 leading-none">90%</div>
                <div className="font-mono text-gray-600 text-xs font-black uppercase tracking-widest">Lower training cost</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-5xl sm:text-6xl text-[#0044CC] mb-3 leading-none">0</div>
                <div className="font-mono text-gray-600 text-xs font-black uppercase tracking-widest">Material waste</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-5xl sm:text-6xl text-[#0044CC] mb-3 leading-none">100%</div>
                <div className="font-mono text-gray-600 text-xs font-black uppercase tracking-widest">Safe simulation</div>
              </div>
              <div className="text-center">
                <div className="font-bebas text-5xl sm:text-6xl text-[#0044CC] mb-3 leading-none">5</div>
                <div className="font-mono text-gray-600 text-xs font-black uppercase tracking-widest">Foundation programs</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Curriculums</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Our 5 Programs
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                Each program combines VR simulation with structured curriculum and a professional certificate.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10">
            {programs.map((program, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="border-l-4 border-[#0044CC] pl-6">
                  <div className="mb-2">
                    <span className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider">
                      / {program.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bebas text-[#0044CC] mb-3 uppercase">
                    {program.number}. {program.title}
                  </h3>
                  <p className="font-libre text-gray-600 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {program.skills.map((skill, i) => (
                      <span key={i} className="font-mono px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-[10px] uppercase font-bold tracking-widest">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.8}>
            <div className="text-center mt-12">
              <a
                href="https://www.blueoxjobs.eu/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0044CC] hover:text-white"
              >
                APPLY FOR A PROGRAM
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why VR */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Implementation</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Why VR Training?
              </h2>
              <p className="font-libre text-xl text-gray-600 max-w-3xl mx-auto italic">
                VR makes technical training accessible, affordable, and safe for everyone.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {whyVr.map((item, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="glass p-8 rounded-xl hover:border-[#0044CC]/50 transition-all duration-300 h-full border border-gray-100">
                  <div className="w-12 h-12 mb-4 bg-blue-50 border border-[#0044CC] rounded-full flex items-center justify-center">
                    <img src={`/icons/${item.icon}`} alt={item.title} className="w-6 h-6" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                  </div>
                  <div className="font-bebas text-5xl text-[#0044CC] mb-4">{item.stat}</div>
                  <h3 className="text-2xl font-bebas text-[#0044CC] mb-3 uppercase">{item.title}</h3>
                  <p className="font-libre text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Audience</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Who We Serve
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                Built for the margins. Open to all. If the system has overlooked you, this is the door.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeServe.map((item, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="glass p-8 rounded-xl text-center hover:border-[#0044CC]/50 transition-all duration-300 border border-gray-100 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-transparent border border-[#0044CC] rounded-full flex items-center justify-center">
                    <img src={`/icons/${item.icon}`} alt={item.title} className="w-8 h-8" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                  </div>
                  <h4 className="text-2xl font-bebas text-[#0044CC] mb-2 uppercase">{item.title}</h4>
                  <p className="font-libre text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section id="enroll" className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Pipeline</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                How to Apply
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                4 steps. No red tape.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {enrollSteps.map((item, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white border border-[#0044CC]/20 rounded-xl p-6 text-center hover:border-[#0044CC] transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-transparent border border-[#0044CC] rounded-full flex items-center justify-center mx-auto mb-4">
                    <img src={`/icons/${item.icon}`} alt={item.title} className="w-8 h-8" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                  </div>
                  <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">/ Step {item.step}</div>
                  <h4 className="text-2xl font-bebas text-[#0044CC] mb-3 uppercase">{item.title}</h4>
                  <p className="font-libre text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.7}>
            <div className="text-center">
              <button
                onClick={() => openForm('academy')}
                className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0033AA] hover:border-[#0033AA]"
              >
                START YOUR APPLICATION
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSIDE THE KAMPUS */}
      <section className="relative py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-10">
              <p className="text-[#F58220] text-xs font-semibold uppercase tracking-widest mb-3">Mbarara, Uganda</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Inside the <span className="text-[#F58220]">Kampus</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-xl mx-auto">
                See where the training happens - a real look at the facilities, the equipment, and the energy at Blue OX Kampus.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-none border border-white/10" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/r59abfC8z1M?autoplay=1&mute=1&loop=1&playlist=r59abfC8z1M&controls=1&rel=0&modestbranding=1"
                title="Inside Blue OX Kampus"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Info</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={0.2 + i * 0.05}>
                <div className="bg-white border border-gray-200 rounded-none">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-6 flex justify-between items-center"
                  >
                    <span className="font-bebas text-xl text-[#0044CC] flex items-center gap-3 uppercase">
                      <img src="/icons/help.svg" alt="" className="w-5 h-5 shrink-0" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                      {faq.q}
                    </span>
                    <span className="text-[#F58220] text-xl font-bold shrink-0 ml-4">
                      {openFaq === i ? '-' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 font-libre text-gray-600 text-sm leading-relaxed ml-8">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <div className="bg-white border text-center border-[#0044CC]/20 rounded-none p-12 mb-8">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Next Step</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Ready to Master a New Skill?
              </h2>
              <p className="font-libre text-lg text-gray-700 mb-2 italic">
                Join us in building the workforce of the future.
              </p>
              <p className="font-libre text-gray-600 mb-8 italic">
                Training cohorts starting soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="https://www.blueoxjobs.eu/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0033AA] hover:border-[#0033AA]"
                >
                  APPLY NOW
                </a>
                <Link
                  href="/"
                  className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#0044CC] hover:text-white"
                >
                  BACK TO HOME
                </Link>
              </div>
            </div>

            <div className="font-libre text-gray-600 text-sm">
              <p>Or visit us: <span className="text-[#0044CC] font-bold">Blue Ox Kampus, Western Uganda</span></p>
              <p className="mt-2 text-sm">
                Want to support our mission?{' '}
                <button
                  onClick={() => openForm('partner')}
                  className="text-[#F58220] hover:underline"
                >
                  Become a Funding Partner
                </button>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {isFormOpen && (
        <ApplicationForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          formType={formType}
        />
      )}
    </div>
  );
}
