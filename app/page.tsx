'use client';

import Link from 'next/link';
import { useState } from 'react';

// Import Blue Ox Fonts
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const libreBaskerville = Libre_Baskerville({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-libre' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ApplicationForm from '../components/ApplicationForm';
import InvestorForm from '../components/InvestorForm';
import BreakdownForm from '../components/BreakdownForm';

export default function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInvestorFormOpen, setIsInvestorFormOpen] = useState(false);
  const [isBreakdownFormOpen, setIsBreakdownFormOpen] = useState(false);
  return (
    <div className={`${bebasNeue.variable} ${libreBaskerville.variable} ${spaceMono.variable}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-libre { font-family: 'Libre Baskerville', serif; }
      `}} />
      <Header />

      {/* HERO */}
      <section className="relative bg-white pt-28 md:pt-36 pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="text-left mb-20 max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-blue-100 rounded-full px-4 py-2 mb-10 shadow-sm">
                <span className="text-[#F58220] text-xs font-mono font-bold tracking-wider uppercase">/ START</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600 text-sm font-libre italic">If we don&apos;t shape culture, culture will disciple the next generation.</span>
              </div>
              <h1 className="font-bebas text-[5.5rem] sm:text-[7rem] md:text-[10rem] mb-12 text-[#0044CC] leading-[1.1] tracking-normal uppercase text-left">
                RAISING<br />
                <span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>BUILDERS</span> TO SHAPE CULTURE.
              </h1>
              <div className="flex flex-col sm:flex-row gap-5 justify-start mt-12">
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                  REQUEST A POD →
                </a>
                <a href="#how-it-works" className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white">
                  SEE HOW A POD WORKS
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { val: '$199',   lbl: 'Per builder / week' },
                { val: '7 days', lbl: 'Request to kickoff' },
                { val: '300+',   lbl: 'Builders trained' },
                { val: '15+',    lbl: 'Products shipped' },
              ].map(({ val, lbl }) => (
                <div key={val} className="text-center">
                  <div className="font-bebas text-4xl sm:text-5xl text-[#0044CC] mb-3 leading-none">{val}</div>
                  <div className="font-mono text-gray-600 text-xs font-black uppercase tracking-widest">{lbl}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white py-3 border-t border-b border-gray-200">
        <div className="academy-ticker bg-white" aria-label="Partners and products ticker">
          <div className="academy-ticker-track">
            <div className="academy-ticker-group">
              {['Haiven', 'DevShield', 'By The Fruit', 'Dig In Vision', 'Competition-Ranked Builders', 'No Hiring · Just Output', 'Mbarara Uganda', 'Shipping Globally', 'Redemptive Technology'].map(item => (
                <span key={item}>
                  <span className="academy-ticker-item">{item}</span>
                  <span className="academy-ticker-sep"></span>
                </span>
              ))}
            </div>
            <div className="academy-ticker-group" aria-hidden="true">
              {['Haiven', 'DevShield', 'By The Fruit', 'Dig In Vision', 'Competition-Ranked Builders', 'No Hiring · Just Output', 'Mbarara Uganda', 'Shipping Globally', 'Redemptive Technology'].map(item => (
                <span key={item}>
                  <span className="academy-ticker-item">{item}</span>
                  <span className="academy-ticker-sep"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* THE MOVEMENT */}
      <section id="movement" className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
              <div className="lg:sticky lg:top-36">
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ The Movement</div>
                <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-10">
                  BILLIONS ARE<br />
                  <span className="text-gray-200">BUILDING THE</span><br />
                  WRONG<br />THING.
                </h2>
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-libre italic">
                  <p>Billions are being poured into systems that capture attention, shape desire, and profit from human weakness. The stories, platforms, and technologies forming this generation are too often built without truth, without conviction, and without responsibility.</p>
                  <p className="text-[#0044CC] font-bold border-l-4 border-[#F58220] pl-6 py-2 not-italic">
                    Blue Ox Kampus exists to answer that directly. We are raising a generation of African builders, creatives, and storytellers who are discipled in faith, sharpened in craft, and committed to shaping culture through media, technology, and storytelling.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 md:p-10">
                  <p className="font-libre text-lg text-gray-600 leading-relaxed mb-6">
                    We build Christian creative hubs and partner with churches to transform underused spaces into creative environments for Gen Z and Gen Alpha — places where they can <strong>belong, build, become, and encounter God in the process.</strong>
                  </p>
                  <p className="font-libre text-lg text-gray-600 leading-relaxed">
                    We train them. We disciple them. We run weekly competitions. And we deploy the best of them into real work with founders, ministries, and startups around the world.
                  </p>
                </div>
                <div className="relative p-10 md:p-12 bg-[#0044CC] rounded-lg overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl md:text-3xl font-libre italic text-white leading-snug relative z-10">
                    "This is not a youth program. This is not a side ministry. This is a movement raising builders who will spend their lives shaping culture with what is true, beautiful, and redemptive."
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { n: '01', t: 'Build the hub', d: 'We activate church spaces with power, internet, and workspace for young people to create.' },
                    { n: '02', t: 'Form and train', d: 'Builders are discipled in faith and trained in real-world creative and technical skills.' },
                    { n: '03', t: 'Deploy the best', d: 'Top performers placed into intern pods serving founders and ministries globally.' },
                    { n: '04', t: 'Fund the mission', d: 'Pod revenue helps sustain hub operations and expand the model to new nations.' },
                  ].map(s => (
                    <div key={s.n} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                      <div className="font-mono text-[#F58220] text-xs font-black mb-3">{s.n}</div>
                      <div className="font-bebas text-2xl text-[#0044CC] mb-2 uppercase">{s.t}</div>
                      <p className="text-xs text-gray-400 font-libre leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KINGDOM CHAPLAIN PARTNER */}
      <section id="partner" className="bg-gray-50 border-y border-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Strategic Partner</div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start max-w-5xl">
              <div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-xl flex items-center justify-center shadow-lg relative flex-shrink-0 p-3">
                <img src="/assets/images/kingdomchaplain/logo.png" alt="Kingdom Chaplain" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bebas text-5xl md:text-6xl text-[#0044CC] uppercase mb-2">Kingdom Chaplain</h3>
                <p className="font-mono text-[#F58220] text-xs font-black tracking-widest uppercase mb-8 italic">Hub Network Expansion Partner</p>
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-libre italic max-w-3xl">
                  <p>Through our partnership with Kingdom Chaplain, we are expanding the Blue Ox model across Uganda, Malawi, and South Africa. Kingdom Chaplain brings trusted church relationships, local access, and on-the-ground infrastructure. Blue Ox brings the creative hub model, discipleship rhythm, training framework, and deployment pipeline.</p>
                  <p className="font-bold text-gray-900 not-italic border-l-4 border-[#F58220] pl-6 py-2">
                    "Together, we are not just opening spaces. We are building the infrastructure that will shape how Africa's next generation creates, builds, and leads."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER STORY */}
      <section id="founder" className="bg-[#0044CC] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="relative group">
                <div className="aspect-[4/5] bg-blue-900 rounded-lg overflow-hidden relative border border-white/10">
                  <img 
                    src="/assets/images/obed.jpg" 
                    alt="Obed - Founder and CEO"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[#F58220] p-8 md:p-10 rounded-lg shadow-2xl border border-[#EE5500]">
                  <p className="font-bebas text-4xl md:text-5xl leading-none text-[#0044CC] mb-2">OBED</p>
                  <p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#0044CC]">Founder and CEO</p>
                </div>
              </div>
              <div className="space-y-8 text-lg md:text-xl font-libre italic leading-relaxed text-blue-50/90">
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider">/ The Founder</div>
                <p>I spent years recruiting developers for European & US companies in the Polish market. I was finding talent everywhere — except back home in Africa.</p>
                <div className="p-8 border-l-4 border-orange-400 bg-white/5 not-italic">
                  <p className="text-3xl md:text-4xl font-bebas uppercase leading-tight mb-4 text-white">
                    "The talent was there. The trust wasn't. Companies wouldn't hire African builders remotely. I came back to Uganda to solve that."
                  </p>
                </div>
                <p>Church leaders everywhere were saying the next generation was drifting from church. I looked at those buildings — beautiful structures sitting empty most of the week — and saw the beginning of an answer.</p>
                <p className="text-white font-bold not-italic">$2,500. Power. Wi-Fi. Space. Permission to build. Hundreds of young people showed up within weeks. Not for a service. To build.</p>
                <p className="text-white font-bold not-italic">"We are not just training developers. We are raising builders, creatives, and storytellers who will spend their lives shaping culture with what is true, beautiful, and redemptive."</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 not-italic">
                  <a href="https://calendly.com/builtbyhouse88/30min" target="_blank" rel="noopener noreferrer" className="border border-white bg-white text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#F58220] hover:border-[#F58220]">
                    TALK TO OBED
                  </a>
                  <a href="mailto:shift@blueoxkampus.com" className="border border-white/30 bg-transparent text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:border-white hover:bg-white/10">
                    EMAIL DIRECTLY
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THREE WAYS - REPOSITION WITH ENHANCED LAYOUT */}
      <section id="involved" className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="mb-20 text-center">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ How to get involved</div>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#0044CC] uppercase leading-tight">THREE WAYS TO<br/>JOIN THE MOVEMENT</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  s: '01', tag: 'For founders and companies', title: 'Hire an Intern Pod',
                  price: 'From €200/week per person',
                  body: "Competition-ranked builders deployed into your sprint with a dedicated Pod Coordinator. Pod Report every Friday. Every hire directly funds a builder's free place at the hub.",
                  get: "Vetted talent, fast. Direct mission funding.",
                  tags: ['Back-end', 'Front-end', 'UI/UX', 'Motion', 'Marketing', 'Ops'],
                  cta: 'REQUEST A POD', href: 'https://www.blueoxjobs.eu/hiring', v: 'primary'
                },
                {
                  s: '02', tag: 'For seniors and studios', title: 'Build with oddshoes.dev',
                  price: 'Senior Christian product studio',
                  body: "Our senior studio builds production-ready software. For churches: 50% below standard rates. For everyone else: 50% of every project helps fund hub activation across Africa.",
                  get: "Senior studio execution. High-impact budget.",
                  tags: ['Full-stack', 'Product builds', 'Church tools', 'Faith-driven'],
                  cta: 'VISIT ODDSHOES.DEV', href: 'https://oddshoes.dev', v: 'orange'
                },
                {
                  s: '03', tag: 'For investors and partners', title: 'Activate a Creative Space',
                  price: '$2,500 per activation',
                  body: "$2,500 equips one church-based creative space with power, internet, and infrastructure for 50 builders. It creates a real environment for formation all year round.",
                  get: "Measurable impact. Proven repeatable model.",
                  tags: ['Mbarara', 'Gayaza', 'Kampala', 'Malawi', 'South Africa'],
                  cta: 'TALK TO US', href: 'https://calendly.com/builtbyhouse88/30min', v: 'outline'
                }
              ].map((w, i) => (
                <div key={i} className="relative border border-gray-100 bg-white p-8 md:p-10 rounded-lg group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col h-full">
                  <span className="absolute top-4 right-6 font-bebas text-5xl text-gray-100 group-hover:text-blue-100 transition-colors leading-none">{w.s}</span>
                  <p className="font-mono text-[9px] text-gray-400 uppercase tracking-widest mb-2 font-bold italic">{w.tag}</p>
                  <h3 className="text-3xl font-bebas text-[#0044CC] uppercase mb-1">{w.title}</h3>
                  <p className="font-bebas text-xl text-[#F58220] mb-6">{w.price}</p>
                  <p className="font-libre italic text-sm text-gray-500 leading-relaxed mb-6 flex-grow">{w.body}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-6">
                    <span className="font-mono text-[9px] font-black text-[#0044CC] uppercase tracking-widest block mb-1">You get:</span>
                    <span className="font-libre italic text-sm text-gray-600">{w.get}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {w.tags.map(t => (
                      <span key={t} className="px-2 py-1 bg-gray-50 text-gray-400 text-[10px] font-bebas uppercase tracking-widest rounded">{t}</span>
                    ))}
                  </div>
                  <a href={w.href} target={w.href.startsWith('http') && !w.href.includes('calendly') ? '_blank' : undefined} rel={w.href.startsWith('http') && !w.href.includes('calendly') ? 'noopener noreferrer' : undefined}
                    className={`w-full text-center font-bebas text-sm uppercase tracking-wider py-3 px-6 rounded-none transition-all duration-300 ${
                      w.v === 'primary' ? 'bg-[#0044CC] text-white border border-[#0044CC] hover:bg-[#0033AA]' :
                      w.v === 'orange' ? 'bg-[#F58220] text-white border border-[#F58220] hover:bg-[#EE5500]' :
                      'border-2 border-[#0044CC] text-[#0044CC] hover:bg-[#0044CC] hover:text-white'
                    }`}>
                    {w.cta}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF SECTION - MBARARA CASE STUDY */}
      <section id="proof" className="bg-[#0044CC] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Mbarara, Uganda · 2024</div>
                <h2 className="text-8xl md:text-9xl font-bebas mb-6 leading-[0.8] tracking-tight text-white">$2,500</h2>
                <h3 className="text-4xl md:text-6xl font-bebas mb-10 uppercase tracking-tight">ONE ACTIVATION.<br />ONE SPACE.<br />EVERYTHING CHANGED.</h3>
                <div className="space-y-6 text-lg md:text-xl text-blue-50/80 font-libre italic leading-relaxed mb-12">
                  <p>Worship Harvest Mbarara — a church building sitting empty most of the week — became a creative environment for the next generation. With $2,500, we installed power, internet, and simple workspace. Within weeks, 300 students from three schools were showing up regularly — not just to attend, but to build.</p>
                  <p className="font-bold text-white not-italic">Two church spaces. $5,000 total. 300+ builders weekly. This is the documented baseline. It is repeatable.</p>
                </div>
                <div className="p-10 bg-white/10 rounded-lg border border-white/10 relative">
                  <p className="text-2xl md:text-3xl font-libre italic mb-10 tracking-tight leading-tight">"We built this church for $50,000. It sat empty five days a week. $2,500 later, it became a place for students to build, create, and grow."</p>
                  <div className="flex flex-col">
                    <span className="font-bebas text-xl text-white uppercase tracking-widest">Ps. Flo and Stephen Ssenyonjo</span>
                    <span className="font-mono text-[9px] text-blue-200 uppercase mt-1">Worship Harvest Mbarara</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { l: 'Cost per activation', v: '$2,500' },
                  { l: 'Young builders weekly', v: '300+' },
                  { l: 'Hubs Activated', v: '2' },
                  { l: 'Per builder / year', v: '$42' },
                  { l: 'Attendance increase', v: '50%+' },
                  { l: 'Schools involved', v: '3' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 p-8 md:p-10 rounded-lg border border-white/5 text-center group hover:border-orange-400/50 transition-colors">
                    <p className="text-5xl md:text-7xl font-bebas text-orange-400 mb-2 uppercase group-hover:scale-110 transition-transform">{s.v}</p>
                    <p className="text-[10px] font-mono font-bold text-blue-200 uppercase tracking-widest leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section id="clients" className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="mb-20 text-center max-w-4xl mx-auto">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Track record</div>
              <h2 className="text-5xl md:text-7xl font-bebas text-[#0044CC] uppercase leading-tight mb-8">BUILDERS WHO SHIP.<br/>PRODUCTS THAT EXIST.</h2>
              <p className="font-libre italic text-base md:text-lg text-gray-600">Some of our strongest client relationships sit in child safety, counter-trafficking, family protection, education, and culture-shaping technology. This is what happens when conviction meets craft.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: 'haiven', logo: '/assets/images/haiven/logo.svg', name: 'Haiven', badge: 'Eagle Venture Fund · Counter-trafficking',
                  body: "AI platform backed by Eagle Venture Fund — the world's first dedicated counter-trafficking investment fund. Blue Ox builders contributed software development.",
                  proof: '50,000+ children protected · 149 victims helped to escape',
                  website: 'https://haiven.gg'
                },
                {
                  icon: '👁️', logo: '/assets/images/devshield/logo.png', skipLogoBg: true, name: 'DevShield', badge: 'Child safety · Roblox',
                  body: "Real-time protection plugin blocking known predators from Roblox communities before harm reaches children. Blue Ox builders contributed to development.",
                  proof: 'Protecting children from online predators at scale',
                  website: 'https://devshield.gg'
                },
                {
                  icon: 'bythefruit', logo: '/assets/images/bythefruit/logo.png', skipLogoBg: true, name: 'By the Fruit', badge: 'Impact Partner · Faith-driven ventures',
                  body: "Champions faith-driven ventures and impact-focused initiatives. By the Fruit partners with builders and entrepreneurs to create lasting value aligned with kingdom principles, connecting purpose-driven work with community investment.",
                  proof: '$100M+ in funding across portfolio companies',
                  website: 'https://bythefruit.com'
                },
                {
                  icon: 'diginvision', logo: '/assets/images/diginvision/logo.png', skipLogoBg: true, name: 'Dig in Vision', badge: 'Industrial XR · Europe',
                  body: "Europe's leading industrial VR simulator. Blue Ox builders contributed VR and software work to products shaping real-world training through immersive technology.",
                  proof: 'Real-world skills training through VR technology',
                  website: 'https://www.diginvision.com'
                }
              ].map((c, i) => (
                <div key={i} className="border border-gray-100 bg-white p-8 md:p-10 rounded-lg group hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    {c.logo && c.logo.startsWith('<svg') ? (
                      <div className="w-40 h-14">
                        <div dangerouslySetInnerHTML={{ __html: c.logo }} />
                      </div>
                    ) : c.logo && !c.logo.startsWith('[') ? (
                      <div className={`${(c as any).skipLogoBg ? '' : 'bg-gray-900 rounded-lg p-3'} w-fit`}>
                        <img src={c.logo} alt={c.name} className="h-12 w-auto object-contain max-w-[200px]" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                        <span>{c.icon}</span>
                      </div>
                    )}
                    <h4 className="text-3xl font-bebas text-[#0044CC] uppercase">{c.name}</h4>
                  </div>
                  <p className="font-mono text-[9px] text-[#F58220] font-black uppercase tracking-widest mb-4 italic">{c.badge}</p>
                  <p className="font-libre italic text-gray-600 leading-relaxed mb-8 flex-grow">{c.body}</p>
                  <div className="space-y-4">
                    <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                      <span className="text-[#F58220] font-bold">✓</span>
                      <p className="font-bebas text-[#0044CC] text-sm uppercase tracking-widest">{c.proof}</p>
                    </div>
                    {(c as any).website && (
                      <a href={(c as any).website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0044CC] font-bebas text-xs uppercase tracking-widest hover:text-[#F58220] transition-colors">
                        SEE WEBSITE →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              {['By the Fruit · $100M+ raised', 'GLP Software House · 100+ MVPs', 'Wilberforce Academy Collective UK', 'International Startups · EU · US'].map((p, i) => (
                <span key={i} className="font-mono text-[10px] font-bold text-gray-300 uppercase tracking-widest border border-gray-100 px-4 py-2 rounded-lg">{p}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>



      {/* FOR FOUNDERS */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="founders">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ For founders</div>
                <p className="text-xs font-mono font-black uppercase tracking-widest text-gray-500 mb-4">Execution is the bottleneck. Not vision.</p>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                  Capital is flowing into faith-driven startups. Execution is still broken.
                </h2>
                <blockquote className="border-l-4 border-[#F58220] pl-6 italic text-xl text-gray-700 my-6 font-libre">
                  Good intentions don&apos;t ship products. Execution does.
                </blockquote>
              </div>
              <div className="pt-2">
                <p className="font-libre text-gray-600 leading-relaxed mb-4">
                  Hiring takes months. Misaligned builders dilute your vision mid-sprint. Your backlog keeps growing while momentum stalls. Every week you don&apos;t ship is a week your mission is delayed.
                </p>
                <p className="font-libre text-gray-600 leading-relaxed mb-4">
                  The founders losing ground aren&apos;t short on conviction. They&apos;re short on execution infrastructure that actually matches what they&apos;re building.
                </p>
                <p className="font-bebas font-bold text-[#0044CC] uppercase">Most teams don&apos;t ship weekly. Ours do.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="how-it-works">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ The BlueOx difference</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                We didn&apos;t source a talent pool. We built the campus first.
              </h2>
              <p className="font-libre text-gray-600 max-w-2xl mx-auto italic">
                Every Saturday, builders compete. Top performers enter our system, commit to the Redemptive Technology code, and get deployed into your product. No CVs. No guesswork. Just proof.
              </p>

              {/* Vibe Coding Competition Video */}
              <div className="mt-10 max-w-xs mx-auto">
                <div className="relative overflow-hidden" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/5N2mMOmKhRQ?autoplay=1&mute=1&loop=1&playlist=5N2mMOmKhRQ&controls=1&rel=0"
                    title="First Vibe Coding Competition at Blue OX Kampus"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-xs text-gray-500 mt-3 uppercase tracking-widest font-semibold">First Vibe Coding Competition · Blue OX Kampus</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Kampus',       title: 'Train', body: 'VR-powered training. Weekly competitions. Top performers rise to the surface.' },
              { label: 'Select',       title: 'Rank',  body: 'Every Saturday, builders compete. Only the top 10-20% are placed. No CVs. Just proof.' },
              { label: 'Your startup', title: 'Ship',  body: 'Weekly deliverables. Pod Coordinator manages everything. Friday report every week.' },
            ].map(({ label, title, body }, index) => (
              <Reveal key={title} delay={0.1 + index * 0.1}>
                <div className={`glass p-8 rounded-xl transition-all duration-300 hover:border-[#0044CC]/50 ${index === 2 ? 'border-[#0044CC]/30' : ''}`}>
                  <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">/{label}</div>
                  <h3 className="text-2xl font-bebas text-[#0044CC] mb-3 uppercase">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="bg-white border border-[#0044CC]/20 rounded-none p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bebas text-lg text-[#0044CC] mb-1 uppercase">Not sure what a pod would look like for your product?</p>
                <p className="font-libre text-gray-600 text-sm">Book a free 15-min breakdown. We&apos;ll map out exactly how a pod would clear your backlog.</p>
              </div>
              <button
                onClick={() => setIsBreakdownFormOpen(true)}
                className="shrink-0 border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 hover:bg-[#F58220] hover:text-white"
              >
                GET A FREE POD BREAKDOWN
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Pricing</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                A full week of shipping for what most developers charge for a single day.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <p className="text-xs font-mono font-black uppercase tracking-widest text-gray-500 mb-4">This is not cheaper talent. This is faster execution.</p>
              <div className="font-bebas text-7xl text-[#0044CC] leading-none mb-2 uppercase">
                <sup className="text-3xl align-super">$</sup>199<span className="text-3xl font-normal text-gray-400"> / week</span>
              </div>
              <p className="font-libre text-gray-500 text-sm">Per builder - campus-based, coordinator-managed, Pod Report every Friday</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Freelancer',  val: '$50-90/hr', txt: 'No coordinator. No accountability. Often gone by week 3.', hi: false },
                { label: 'Junior hire', val: '$4-6k/mo',  txt: '3 months to onboard. You become the manager.', hi: false },
                { label: 'BlueOx Pod', val: '$199/wk',    txt: 'Coordinated. Shipping in 7 days. Friday report included.', hi: true },
              ].map(({ label, val, txt, hi }) => (
                <div key={label} className={`bg-white border rounded-none p-6 ${hi ? 'border-[#0044CC]' : 'border-gray-200'}`}>
                  <div className="text-xs font-mono font-black uppercase tracking-widest text-gray-500 mb-2">{label}</div>
                  <div className={`font-bebas text-3xl mb-3 uppercase ${hi ? 'text-[#0044CC]' : 'text-black'}`}>{val}</div>
                  <p className="font-libre text-gray-600 text-sm">{txt}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                badge: 'Solo', title: 'Solo Pod', price: '$2,388',
                sub: '1 builder · 12 weeks · $199/wk',
                features: ['Any role category', 'Pod Coordinator included', 'Weekly Pod Reports', 'Replacement guarantee'],
                featured: false, cta: 'Request Solo Pod',
              },
              {
                badge: 'Best value', title: 'Team Pod', price: '$5,970',
                sub: '3 builders · 12 weeks · ~$166/wk each',
                features: ['Multi-role or single focus', 'Dedicated coordinator', 'Coordinated Pod Reports', 'Dev · Design · Ops available', 'Save 17% vs solo rate'],
                featured: true, cta: 'Request Team Pod →',
              },
            ].map(({ badge, title, price, sub, features, featured, cta }, i) => (
              <Reveal key={title} delay={0.4 + i * 0.1}>
                <div className={`relative bg-white border rounded-none p-8 transition-all duration-200 ${featured ? 'border-[#0044CC] shadow-lg shadow-blue-500/10' : 'border-gray-200 hover:border-[#0044CC]'}`}>
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#0044CC] text-white px-4 py-1 text-sm font-semibold uppercase tracking-wider">Best Value</span>
                    </div>
                  )}
                  <div className={`inline-block text-xs font-mono font-black px-3 py-1 uppercase tracking-wider mb-4 border ${featured ? 'bg-[#0044CC]/10 text-[#0044CC] border-[#0044CC]/20' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{badge}</div>
                  <h3 className="text-2xl font-bebas text-[#0044CC] mb-1 uppercase">{title}</h3>
                  <div className={`font-bebas text-4xl mb-1 uppercase ${featured ? 'text-[#F58220]' : 'text-[#0044CC]'}`}>{price}</div>
                  <p className="font-libre text-gray-500 text-sm mb-6">{sub}</p>
                  <div className="border-t border-gray-100 my-4" />
                  <ul className="space-y-2 mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className={`w-full inline-block text-center font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 ${
                    featured
                      ? 'border border-[#0044CC] bg-[#0044CC] text-white hover:bg-[#0033AA] hover:border-[#0033AA]'
                      : 'border border-[#F58220] bg-transparent text-[#F58220] hover:bg-[#F58220] hover:text-white'
                  }`}>{cta}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS STEPS */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ How it works</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                Your backlog isn&apos;t a strategy problem. It&apos;s an execution gap.
              </h2>
              <p className="font-libre text-gray-600 max-w-2xl mx-auto italic">
                Send us your stack. We match a pod. They ship from campus while you build product.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { step: 1, icon: 'planner.svg', title: 'Send your stack + top tasks',    body: 'Tech stack, 3-5 items from your backlog, timeline. We give you a template. Takes 60 seconds.', time: 'Day 1' },
              { step: 2, icon: 'team.svg',    title: 'Pick from ranked profiles',      body: '3-5 competition-ranked builders with portfolios and performance data. You interview. You approve.', time: 'Days 3-5' },
              { step: 3, icon: 'rocket.svg',  title: 'Kickoff & cadence set',          body: 'Pod Coordinator runs the kickoff call. Weekly sprint cadence agreed. Everything managed from campus.', time: 'Day 7' },
              { step: 4, icon: 'chart.svg',   title: 'Weekly shipping begins',         body: 'Deliverables every week. Pod Report every Friday. Coordinator handles blockers before they hit your Slack.', time: 'Ongoing' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.1 + i * 0.1}>
                <div className="border-l-4 border-[#0044CC] pl-6 flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-transparent border border-[#0044CC] rounded-full flex items-center justify-center">
                      <img src={`/icons/${item.icon}`} alt={`Step ${item.step}`} className="w-6 h-6" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-1">/ Step {item.step} · {item.time}</div>
                    <h3 className="text-xl font-bebas text-[#0044CC] mb-2 uppercase">{item.title}</h3>
                    <p className="font-libre text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE ROUTER */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Not a founder?</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">BlueOx serves more than one side of this mission.</h2>
              <p className="font-libre text-gray-600">Jump to what is relevant to you.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'crown.svg',   tag: 'Builders',           title: 'Join a Pod',       body: 'Compete. Get placed. Ship real work internationally.',     href: '/builders' },
              { icon: 'book.svg',    tag: 'Universities',        title: 'Partner with us',  body: 'Structured placements. Tracked outcomes. Zero admin.',     href: '#universities' },
              { icon: 'diamond.svg', tag: 'Investors & Donors',  title: 'Back the mission', body: 'Fund training. Deploy capital with measurable impact.',    href: '#investors' },
              { icon: 'rocket.svg',  tag: 'Founders',            title: 'Request a Pod',    body: 'Ready to ship? Start here. 7 days to kickoff.',           href: 'https://www.blueoxjobs.eu/hiring' },
            ].map(({ icon, tag, title, body, href }, index) => (
              <Reveal key={tag} delay={0.1 + index * 0.1}>
                <a href={href} className="glass p-6 rounded-xl block hover:border-[#0044CC]/50 transition-all duration-300 group border border-gray-100 hover:border-[#0044CC]">
                  <img src={`/icons/${icon}`} alt={tag} className="w-10 h-10 mb-4" />
                  <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">/ {tag}</div>
                  <h3 className="text-lg font-bebas text-[#0044CC] mb-2 group-hover:text-[#F58220] transition-colors uppercase">{title}</h3>
                  <p className="font-libre text-gray-600 text-sm leading-relaxed mb-3">{body}</p>
                  <span className="text-[#F58220] text-lg group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BUILDERS */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="talent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                  Get an international company on your CV. Ship real work. Build a career.
                </h2>
                <p className="font-libre text-gray-600 leading-relaxed italic">
                  BlueOx Kampus places you in an execution pod with a real startup for 8-16 weeks. Work from campus. Pay nothing. Compete every Saturday - top performers get placed first.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Ship real features - not classroom exercises', 'Work from campus: power, fibre, mentorship', 'Weekly competitions - top ranks placed first', 'Professional certificate + reference from startup', 'Pipeline: pod → contract → full employment', 'Markets: Poland · Netherlands · UAE · Gulf'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600 font-libre">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/builders" className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                  JOIN THE TALENT POOL
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR UNIVERSITIES */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="universities">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                  Placements that actually lead somewhere.
                </h2>
                <p className="font-libre text-gray-600 leading-relaxed italic">
                  Pre-vetted international startups. Students join live shipping pods — not coffee runs. BlueOx handles matching, coordination, supervision, and reporting. You get the outcomes dashboard.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Students placed in real shipping environments', 'Weekly Pod Report per student', '8-16 week programs with defined deliverables', 'Certificates, references, portfolio pieces', 'Dashboard: placement, completion, employment rates', 'Zero admin burden on your department'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600 font-libre">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setIsFormOpen(true)} className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                  PARTNER WITH US
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOR INVESTORS */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="investors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                  For Faith Driven Investors deploying Kingdom capital.
                </h2>
                <p className="font-libre text-gray-600 leading-relaxed italic">
                  If you operate from a one-pocket framework — where giving, investing, and spending all come from the same Kingdom conviction — BlueOx is a place to put capital to work. We are building a model where a Christian tech hub trains students, ships products, plants churches, and supports refugees.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Every pod placed funds church plants and refugee support', 'Builder training is free — revenue from founders covers it', "Aligned with solving.org's Build, Invest, Give framework", 'Impact-measurable: placements, completions, employment tracked', 'ESG documentation for grant-funded and donor-advised tracks', 'IOM, UNHCR, EU-Africa fund aligned for impact capital'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600 font-libre">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/fund" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA] inline-block">
                    FUND TRAINING
                  </Link>
                  <button onClick={() => setIsInvestorFormOpen(true)} className="border border-black bg-transparent text-black font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                    TALK ABOUT YOUR PORTFOLIO
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VR TRAINING TEASER */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="vr-training">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ VR Training Academy</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                The same campus that trains our builders also trains the workforce of Western Uganda.
              </h2>
              <p className="font-libre text-gray-600 max-w-3xl mx-auto italic">
                Blue Ox Kampus delivers VR-powered TVET to refugees, women, persons with disabilities, and underserved youth — at 90% lower cost than traditional vocational training.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: 'rocket.svg',    title: 'VR Welding',          body: 'MIG, TIG, and Stick welding simulation aligned to EU standards.' },
              { icon: 'lightbulb.svg', title: 'Solar Installation',  body: "Photovoltaic systems, green energy for Uganda's off-grid future." },
              { icon: 'mobile.svg',    title: 'EV & Mechatronics',   body: 'Electric mobility and industrial automation skills.' },
              { icon: 'team.svg',      title: 'Workplace Readiness', body: 'Soft skills, interview prep, and career guidance.' },
            ].map(({ icon, title, body }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-gray-200 rounded-none p-6 hover:border-[#0044CC] transition-all duration-200">
                  <img src={`/icons/${icon}`} alt={title} className="w-10 h-10 mb-4" />
                  <h3 className="font-bebas text-[#0044CC] mb-2 uppercase">{title}</h3>
                  <p className="font-libre text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="text-center">
              <Link href="/academy" className="border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#F58220] hover:text-white inline-block">
                EXPLORE THE ACADEMY
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-10">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Who we are</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 max-w-3xl mx-auto leading-tight uppercase">
                A Christian-first technology hub. Not Christian-adjacent. Not faith-friendly.{' '}
                <span className="text-[#F58220]">Christian first.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <p className="font-libre text-gray-600 leading-relaxed italic">
                Every builder at BlueOx Kampus is a Christian. They are selected through weekly Saturday coding competitions from software engineering students across Uganda — the top performers enter our system, commit to our code of Redemptive Technology, and ship for founders who are building products that push back darkness in the world.
              </p>
              <p className="font-libre text-gray-600 leading-relaxed italic">
                We plant churches with our finances. We practice radical generosity through supporting refugees. We are inspired by the framework of solving the world&apos;s 32 greatest problems — the conviction that the Church is called to minister in Word and Deed, and that technology is one of the most powerful tools available to do both.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xs font-mono font-black uppercase tracking-widest text-[#F58220] mb-6">/ The code of redemptive technology</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Build for people',     body: 'Technology that serves, not exploits. Products that create value for the people who use them.' },
                  { title: 'Excellence as worship', body: 'Doing excellent work is an act of worship. Shipping matters. Quality matters. Integrity matters.' },
                  { title: 'Radical generosity',    body: 'Revenue funds church plants, supports refugees, and keeps training free for builders who have nothing.' },
                  { title: 'Jesus as framework',    body: 'Not a values statement on a wall. The actual model for how we work, lead, build, and relate to one another.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-white border border-gray-200 rounded-none p-5 hover:border-[#0044CC] hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200">
                    <h4 className="font-bebas text-[#0044CC] mb-2 text-sm uppercase">{title}</h4>
                    <p className="font-libre text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-libre text-gray-500 text-sm mt-6 italic">
              Aligned with the Faith Driven Entrepreneur movement and inspired by{' '}
              <a href="https://solving.org" target="_blank" rel="noreferrer" className="text-[#0044CC] font-bebas hover:text-[#F58220] transition-colors uppercase">solving.org</a>
              {' '}— the conviction that Christians are called to Build, Invest, and Give toward the world&apos;s 32 greatest problems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-white border-t border-gray-200 text-center" id="request">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-gradient-to-br from-[#0044CC] to-[#0033AA] border-2 border-[#F58220]/30 rounded-none p-12 text-white shadow-2xl shadow-blue-500/20">
              <p className="font-mono text-blue-100 mb-4 text-sm font-black uppercase tracking-widest">
                / Most founders wait too long to fix execution. The ones who don&apos;t — win.
              </p>
              <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 leading-tight uppercase">
                If you&apos;re building something that matters — it needs to ship.
              </h2>
              <p className="font-libre text-blue-50 text-lg mb-8 max-w-xl mx-auto italic">
                You have a calling. You have a backlog. 7 days to kickoff. $199/week. Send us your stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#F58220] bg-[#F58220] text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-white hover:border-white hover:text-[#0044CC] shadow-lg shadow-orange-500/20">
                  REQUEST A POD →
                </a>
                <button onClick={() => setIsBreakdownFormOpen(true)} className="border border-white/50 bg-transparent text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-white hover:text-[#0044CC]">
                  GET A 15-MIN BREAKDOWN
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType="partner" />
      <InvestorForm isOpen={isInvestorFormOpen} onClose={() => setIsInvestorFormOpen(false)} />
      <BreakdownForm isOpen={isBreakdownFormOpen} onClose={() => setIsBreakdownFormOpen(false)} />
      <Footer />
    </div>
  );
}
