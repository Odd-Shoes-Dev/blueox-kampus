'use client';

import Link from 'next/link';
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const libreBaskerville = Libre_Baskerville({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-libre' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });

export default function AboutPage() {
  return (
    <div className={`${bebasNeue.variable} ${libreBaskerville.variable} ${spaceMono.variable}`}>
      <Header />

      {/* HERO */}
      <section className="relative bg-white pt-28 md:pt-36 pb-20 md:pb-28 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ The Ministry Story</div>
            <h1 className="font-bebas text-[4rem] sm:text-[6rem] md:text-[8rem] text-[#0044CC] leading-[1.05] uppercase mb-8">
              BILLIONS ARE<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>BUILDING THE</span><br />
              WRONG<br />
              THING.
            </h1>
            <p className="font-libre text-xl md:text-2xl text-gray-600 italic max-w-3xl leading-relaxed">
              Blue Ox Kampus exists to answer that directly. This is the full story.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE MOVEMENT — FULL VERSION */}
      <section className="relative py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
              <div className="lg:sticky lg:top-36">
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ The Problem</div>
                <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-10">
                  THE WRONG<br />BUILDERS ARE<br />WINNING.
                </h2>
                <div className="space-y-6 text-base md:text-lg text-gray-600 leading-relaxed font-libre italic">
                  <p>Billions are being poured into systems that capture attention, shape desire, and profit from human weakness. The stories, platforms, and technologies forming this generation are too often built without truth, without conviction, and without responsibility.</p>
                  <p>The builders with the most resources are building the most destructive products. And the people with the strongest convictions have the fewest tools, the smallest teams, and the least infrastructure to compete.</p>
                  <p className="text-[#0044CC] font-bold border-l-4 border-[#F58220] pl-6 py-2 not-italic">
                    Blue Ox Kampus exists to answer that directly. We are raising a generation of African builders, creatives, and storytellers who are discipled in faith, sharpened in craft, and committed to shaping culture through media, technology, and storytelling.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-8 md:p-10">
                  <p className="font-libre text-lg text-[#0044CC] font-semibold leading-relaxed mb-6">
                    We build Christian creative hubs and partner with churches to transform underused spaces into creative environments for Gen Z and Gen Alpha — places where they can <strong>belong, build, become, and encounter God in the process.</strong>
                  </p>
                  <p className="font-libre text-lg text-[#0044CC] font-semibold leading-relaxed">
                    We train them. We disciple them. We run weekly competitions. And we deploy the best of them into real work with founders, ministries, and startups around the world.
                  </p>
                </div>
                <div className="relative p-10 md:p-12 bg-[#0044CC] rounded-lg overflow-hidden group shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl md:text-3xl font-libre italic text-white leading-snug relative z-10">
                    &ldquo;This is not a youth program. This is not a side ministry. This is a movement raising builders who will spend their lives shaping culture with what is true, beautiful, and redemptive.&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { n: '01', t: 'Build the hub', d: 'Activate church spaces with power, internet, and workspace. Create real environments where young builders can dream, create, and collaborate.' },
                    { n: '02', t: 'Form and train', d: 'Disciple builders in faith and teach them real-world creative and technical skills. Weekly competitions. Mentorship. Community formation.' },
                    { n: '03', t: 'Deploy the best', d: 'The top 10–20% get placed into paid intern pods serving founders and ministries globally. Real work. Real impact. Real income.' },
                    { n: '04', t: 'Fund the mission', d: 'Pod revenue sustains hub operations and funds expansion to new nations. One hire. One builder funded. One movement multiplied.' },
                  ].map(s => (
                    <div key={s.n} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                      <div className="font-mono text-[#F58220] text-xs font-black mb-3">{s.n}</div>
                      <div className="font-bebas text-2xl text-[#0044CC] mb-3 uppercase">{s.t}</div>
                      <p className="text-sm text-gray-600 font-libre leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR MISSION — CHURCH & COMMUNITY */}
      <section className="relative py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Our Mission</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                WE PLANT.<br />WE BUILD.<br />WE DISCIPLE.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-lg p-8 hover:border-[#0044CC] transition-colors h-full">
                <div className="text-3xl mb-4">🇲🇼</div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">Malawi · Cape Maclear</div>
                <div className="font-bebas text-2xl text-[#0044CC] mb-4 uppercase">Church Construction</div>
                <p className="text-sm text-gray-600 font-libre leading-relaxed">
                  Blue Ox Kampus partners with local churches to build permanent worship and community spaces in Cape Maclear. These buildings serve as both church sanctuaries and weekday creative hubs — the same model pioneered in Mbarara, applied to Malawi&apos;s lakeshore communities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-white border border-gray-100 rounded-lg p-8 hover:border-[#0044CC] transition-colors h-full">
                <div className="text-3xl mb-4">📖</div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">Malawi · Language Access</div>
                <div className="font-bebas text-2xl text-[#0044CC] mb-4 uppercase">Chichewa Bibles &amp; Radio</div>
                <p className="text-sm text-gray-600 font-libre leading-relaxed">
                  We fund the production and distribution of Chichewa-language Bibles and support local online radio stations broadcasting Christian teaching, discipleship content, and community programming in the heart language of millions of Malawians.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white border border-gray-100 rounded-lg p-8 hover:border-[#0044CC] transition-colors h-full">
                <div className="text-3xl mb-4">🇧🇮</div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">Burundi · Bujumbura</div>
                <div className="font-bebas text-2xl text-[#0044CC] mb-4 uppercase">Tech Hub &amp; Expansion</div>
                <p className="text-sm text-gray-600 font-libre leading-relaxed">
                  Our Bujumbura campus is live and growing. The Burundi hub extends the Blue Ox model to one of East Africa&apos;s most underserved tech ecosystems — training builders in French and Kirundi, competing weekly, and deploying the best into global pods. Regional expansion into DRC and Rwanda is in planning.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UNIVERSITY PARTNERSHIPS */}
      <section className="relative py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ University Partnerships</div>
                <h2 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-8">
                  INSIDE THE<br />INSTITUTIONS.
                </h2>
                <div className="space-y-5 font-libre text-base text-gray-600 italic leading-relaxed">
                  <p>Blue Ox Kampus works directly with university software engineering departments across Uganda, Malawi, and Burundi to identify and recruit top-performing students into our weekly competition programme.</p>
                  <p>Students who rank consistently in the top tier are invited into the hub model — structured training, discipleship, and a pathway to real paid work. We are not an internship agency. We are a formation pipeline that happens to also produce extraordinary builders.</p>
                  <p className="text-[#0044CC] font-semibold not-italic border-l-4 border-[#F58220] pl-5 py-2">
                    Every hire from a Blue Ox pod directly funds a builder&apos;s university fees, housing, and living costs. The work is the scholarship.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { country: '🇺🇬 Uganda', unis: 'Mbarara University · Kampala International University · Makerere' },
                  { country: '🇲🇼 Malawi', unis: 'Mzuzu University · Lilongwe University of Agriculture' },
                  { country: '🇧🇮 Burundi', unis: 'University of Burundi · Université Lumière de Bujumbura' },
                  { country: '🇿🇦 South Africa', unis: 'Coming 2026 — Partner universities in Cape Town region' },
                ].map(({ country, unis }) => (
                  <div key={country} className="bg-gray-50 border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                    <div className="font-bebas text-lg text-[#0044CC] mb-2 uppercase">{country}</div>
                    <p className="text-xs text-gray-500 font-mono leading-relaxed">{unis}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INSIDE THE KAMPUS */}
      <section className="relative py-20 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-10">
              <p className="text-[#F58220] text-xs font-semibold uppercase tracking-widest mb-3">Mbarara, Uganda</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0044CC] mb-4">
                Inside the <span className="text-[#F58220]">Kampus</span>
              </h2>
              <p className="text-gray-600 text-sm max-w-xl mx-auto">
                See where the training happens - a real look at the facilities, the equipment, and the energy at Blue OX Kampus.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative w-full overflow-hidden rounded-none border border-gray-200" style={{ paddingBottom: '56.25%' }}>
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

      {/* OUR WORK — VR & DIG IN VISION */}
      <section className="relative py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Our Work</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                TECHNOLOGY<br />THAT TRAINS.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white border border-gray-100 rounded-lg p-8 md:p-10 hover:border-[#0044CC] transition-colors h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-fit">
                    <img src="/assets/images/diginvision/logo.png" alt="Dig In Vision" className="h-12 w-auto object-contain max-w-[180px]" />
                  </div>
                </div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">Industrial XR · Europe</div>
                <div className="font-bebas text-3xl text-[#0044CC] mb-4 uppercase">Dig In Vision Partnership</div>
                <p className="text-sm text-gray-600 font-libre leading-relaxed mb-4 flex-grow">
                  Blue Ox builders contribute VR and software development work to Dig In Vision — Europe&apos;s leading industrial VR simulator. Products include VR welding simulators aligned to EU standards, deployed globally at institutions including Cranfield University UK. This partnership bridges our African campus with cutting-edge immersive technology production.
                </p>
                <p className="text-sm text-gray-600 font-libre leading-relaxed">
                  The same VR tools developed through this partnership are also deployed on-campus at Blue Ox Kampus for TVET training — vocational skills for refugees, women, persons with disabilities, and underserved youth at 90% lower cost than traditional training.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">VR Welding</div>
                  <p className="text-sm text-gray-500 font-libre leading-relaxed">MIG, TIG, and Stick welding simulation aligned to EU standards. Deployed globally.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">Solar Installation</div>
                  <p className="text-sm text-gray-500 font-libre leading-relaxed">Photovoltaic systems and green energy training for Uganda&apos;s off-grid future.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">EV &amp; Mechatronics</div>
                  <p className="text-sm text-gray-500 font-libre leading-relaxed">Electric mobility and industrial automation skills for the next wave of African technicians.</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">Workplace Readiness</div>
                  <p className="text-sm text-gray-500 font-libre leading-relaxed">Soft skills, interview preparation, and career guidance for global deployment.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER STORY - OBED */}
      <section id="founder" className="bg-[#0044CC] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Image col — no Reveal wrapper so it never blocks layout */}
              <div className="relative group">
                <div className="aspect-[4/5] bg-blue-900 rounded-lg overflow-hidden relative border border-white/10">
                  <img 
                    src="/assets/images/obed.jpg" 
                    alt="Obed - Founder and CEO"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-8 -right-4 md:-right-10 bg-[#F58220] p-8 md:p-10 rounded-lg shadow-2xl border border-[#EE5500]">
                  <p className="font-bebas text-4xl md:text-5xl leading-none text-[#0044CC] mb-2">OBED</p>
                  <p className="font-mono text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#0044CC]">Founder and CEO</p>
                </div>
              </div>
              {/* Text col — Reveal only here */}
              <Reveal>
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
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KINGDOM CHAPLAIN PARTNER */}
      <section className="relative py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
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
                    &ldquo;Together, we are not just opening spaces. We are building the infrastructure that will shape how Africa&apos;s next generation creates, builds, and leads.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MBARARA PROOF */}
      <section className="relative py-20 bg-[#0044CC] text-white border-b border-[#0033AA]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Mbarara, Uganda · 2024</div>
                <h2 className="text-7xl md:text-9xl font-bebas mb-4 leading-[0.85] tracking-tight text-white">$2,500</h2>
                <h3 className="text-4xl md:text-5xl font-bebas mb-8 uppercase tracking-tight">ONE ACTIVATION.<br />EVERYTHING CHANGED.</h3>
                <div className="space-y-5 text-base md:text-lg text-blue-50/80 font-libre italic leading-relaxed">
                  <p>Worship Harvest Mbarara — a church building sitting empty most of the week — became a creative environment for the next generation. With $2,500 we installed power, internet, and simple workspace. Within weeks, 300 students from three schools were showing up regularly — not just to attend, but to build.</p>
                  <p className="font-bold text-white not-italic">Two church spaces. $5,000 total. 300+ builders weekly. This is the documented baseline. It is repeatable.</p>
                </div>
                <div className="mt-8 p-8 bg-white/10 rounded-lg border border-white/10">
                  <p className="text-xl md:text-2xl font-libre italic mb-6 leading-tight">&ldquo;We built this church for $50,000. It sat empty five days a week. $2,500 later, it became a place for students to build, create, and grow.&rdquo;</p>
                  <div>
                    <span className="font-bebas text-lg text-white uppercase tracking-widest block">Ps. Flo and Stephen Ssenyonjo</span>
                    <span className="font-mono text-[9px] text-blue-200 uppercase">Worship Harvest Mbarara</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { l: 'Cost per activation', v: '$2,500' },
                  { l: 'Young builders weekly', v: '300+' },
                  { l: 'Hubs Activated', v: '2' },
                  { l: 'Per builder / year', v: '$42' },
                  { l: 'Attendance increase', v: '50%+' },
                  { l: 'Schools involved', v: '3' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 p-6 md:p-8 rounded-lg border border-white/5 text-center group hover:border-orange-400/50 transition-colors">
                    <p className="text-4xl md:text-6xl font-bebas text-orange-400 mb-2 uppercase">{s.v}</p>
                    <p className="text-[10px] font-mono font-bold text-blue-200 uppercase tracking-widest leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUND TRAINING CTA */}
      <section className="relative py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ Support the Mission</div>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-6">
              FUND A BUILDER.<br />SHAPE A GENERATION.
            </h2>
            <p className="font-libre text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto leading-relaxed mb-12">
              Every dollar in Fund Training goes directly to keeping hubs open, keeping training free, and keeping builders in the pipeline. No overhead. No middle layer. Direct impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fund"
                className="border border-[#F58220] bg-[#F58220] text-white font-semibold text-sm px-10 py-4 rounded-none transition-all duration-300 hover:bg-[#EE5500] hover:border-[#EE5500]"
              >
                FUND TRAINING →
              </Link>
              <a
                href="https://calendly.com/builtbyhouse88/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-10 py-4 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white"
              >
                TALK TO OBED
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
