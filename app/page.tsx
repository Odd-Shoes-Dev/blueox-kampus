'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';

// Import Blue Ox Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ApplicationForm from '../components/ApplicationForm';
import InvestorForm from '../components/InvestorForm';
import BreakdownForm from '../components/BreakdownForm';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const libreBaskerville = Libre_Baskerville({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-libre' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });

export default function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isInvestorFormOpen, setIsInvestorFormOpen] = useState(false);
  const [isBreakdownFormOpen, setIsBreakdownFormOpen] = useState(false);
  return (
    <div className={`${bebasNeue.variable} ${libreBaskerville.variable} ${spaceMono.variable}`}>
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
              <h1 className="font-bebas text-[5.5rem] sm:text-[7rem] md:text-[10rem] mb-12 text-[#0044CC] leading-[1.1] tracking-normal uppercase text-left">TOO MUCH<br />TO BUILD.<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>NOT ENOUGH</span><br />HANDS.</h1>
              <p className="font-libre text-2xl md:text-4xl text-gray-900 mb-4 italic">
                We fix that.
              </p>
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
                { val: '$199',   lbl: 'Per week — full 3-builder pod. Coordinator included' },
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

      {/* EXECUTION INFRASTRUCTURE */}
      <section className="relative py-3 md:py-4 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-6">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ Execution Infrastructure</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                4 Campuses
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { country: 'Uganda', city: 'Mbarara', status: 'Live', flag: '🇺🇬', isLive: true },
                { country: 'Malawi', city: 'Lilongwe', status: 'Live', flag: '🇲🇼', isLive: true },
                { country: 'Burundi', city: 'Bujumbura', status: 'Live', flag: '🇧🇮', isLive: true },
                { country: 'South Africa', city: '', status: 'Coming Up', flag: '🇿🇦', isLive: false },
              ].map((campus) => (
                <div key={campus.country} className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#0044CC] transition-colors">
                  <div className="text-2xl mb-2">{campus.flag}</div>
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">{campus.country}</div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 font-libre leading-relaxed">
                      {campus.city && <span>{campus.city}</span>}
                    </p>
                    <span className={`text-xs font-mono font-black uppercase tracking-wide ${campus.isLive ? 'text-green-600' : 'text-gray-600'}`}>
                      {campus.isLive ? '● Live' : '○ Soon'}
                    </span>
                  </div>
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

      {/* HOW IT WORKS */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ How It Works</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                THREE<br />
                STEPS.<br />
                THAT&apos;S IT.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '01', t: 'Tell us what you need', d: 'Share your project, your gaps, and the roles you need filled. Developer, designer, marketer — you decide the mix.' },
                { n: '02', t: 'We send you profiles in 48hrs', d: 'You review real builder profiles from our campus. You pick the people you want on your team.' },
                { n: '03', t: 'You ship. We supervise.', d: 'Your pod starts within 7 days. Our campus supervisors keep them accountable. You stay focused on your vision.' },
              ].map(s => (
                <div key={s.n} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-mono text-[#F58220] text-xs font-black mb-3">{s.n}</div>
                  <div className="font-bebas text-2xl text-[#0044CC] mb-3 uppercase">{s.t}</div>
                  <p className="text-sm text-gray-600 font-libre leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN YOUR POD */}
      <section className="relative py-3 md:py-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-4">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ Design Your Pod</div>
              <h2 className="font-bebas text-6xl md:text-8xl text-[#0044CC] leading-tight uppercase font-light">
                YOUR TEAM.<br />
                YOUR RULES.
              </h2>
              <p className="font-libre text-lg md:text-xl text-gray-600 mt-8 max-w-2xl">
                You don&apos;t get handed a generic team. You design your own — one role at a time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {[
                { role: 'Developer', desc: 'Frontend, backend, or full stack' },
                { role: 'Designer', desc: 'UI/UX, graphics, brand' },
                { role: 'Marketer', desc: 'Social media, content, growth' },
                { role: 'Sales', desc: 'Outreach, leads, conversion' },
                { role: 'Creator', desc: 'Video, audio, visual content' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-3 uppercase">{item.role}</div>
                  <p className="text-sm text-gray-600 font-libre leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-start">
              <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                DESIGN MY POD →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY TRUST OUR BUILDERS */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ Why Trust Our Builders</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                TRAINED.<br />
                TESTED.<br />
                SUPERVISED.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'Campus-trained from day one', desc: 'Every builder goes through hands-on AI and product development training at our campuses before they touch client work.' },
                { title: 'Competition-tested', desc: 'Our builders pitch and ship real products in competitions. You get the ones who have already proven they can deliver under pressure.' },
                { title: 'Supervised daily', desc: 'You\'re not hiring and hoping. Our on-campus supervisors keep your pod accountable so you never have to chase anyone.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-lg p-6 hover:border-[#0044CC] transition-colors">
                  <div className="font-bebas text-xl text-[#0044CC] mb-3 uppercase">{item.title}</div>
                  <p className="text-sm text-gray-600 font-libre leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 bg-gray-50 border border-gray-100 rounded-lg p-8 md:p-10">
              <div className="font-mono text-[#F58220] text-xs font-black mb-2 uppercase tracking-wider">Proven Track Record</div>
              <div className="font-bebas text-3xl md:text-4xl text-[#0044CC] mb-3 uppercase">15+ Products Shipped Commercially</div>
              <p className="text-base md:text-lg text-gray-600 font-libre leading-relaxed">
                Our builders have already taken products to market. Your project isn&apos;t a learning exercise — it&apos;s their next win.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <div className="mb-8">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ Ready to ship</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-8">
                REQUEST<br />
                A POD
              </h2>
              <p className="font-libre text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto mb-12 leading-relaxed">
                Give us your tech stack and top tasks. Get a ranked pod in 7 days. Start shipping immediately.
              </p>
              <a 
                href="https://www.blueoxjobs.eu/hiring"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-base px-12 py-4 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA] inline-block"
              >
                REQUEST A POD →
              </a>
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
              <p className="font-libre text-gray-500 text-sm">full 3-builder pod. - campus-based, coordinator-managed, Pod Report every Friday</p>
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
