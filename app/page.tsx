'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ApplicationForm from '../components/ApplicationForm';

export default function Page() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative bg-white pt-24 md:pt-32 pb-20 md:pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">
                Mbarara, Uganda · EU · US · Gulf
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-black leading-tight">
                Execution pods for founders<br />
                building <span className="text-[#e05a3a]">redemptive</span><br />
                technology.
              </h1>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-4">
                Competition-selected builders deployed into managed teams that ship your product weekly — without hiring, delays, or loss of control.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold text-[#e05a3a] mb-8">
                {['7 days to kickoff', 'Weekly output', 'No hiring', 'From $199/week'].map(txt => (
                  <span key={txt}>{txt}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#c94e30] hover:border-[#c94e30]">
                  REQUEST A POD →
                </a>
                <a href="#how-it-works" className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white">
                  SEE HOW A POD WORKS
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: '$199',   lbl: 'Per builder / week' },
                { val: '7 days', lbl: 'Request to kickoff' },
                { val: '300+',   lbl: 'Builders trained' },
                { val: '15+',    lbl: 'Products shipped' },
              ].map(({ val, lbl }) => (
                <div key={val} className="text-center">
                  <div className="blueox-subheading text-4xl sm:text-5xl text-[#e05a3a] mb-2">{val}</div>
                  <div className="blueox-body text-gray-600 text-sm">{lbl}</div>
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
                  <span className="academy-ticker-sep">•</span>
                </span>
              ))}
            </div>
            <div className="academy-ticker-group" aria-hidden="true">
              {['Haiven', 'DevShield', 'By The Fruit', 'Dig In Vision', 'Competition-Ranked Builders', 'No Hiring · Just Output', 'Mbarara Uganda', 'Shipping Globally', 'Redemptive Technology'].map(item => (
                <span key={item}>
                  <span className="academy-ticker-item">{item}</span>
                  <span className="academy-ticker-sep">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TRACK RECORD */}
      <section className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">Track record</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Builders who ship. Products that exist.</h2>
              <p className="blueox-body text-gray-600 text-sm mb-6">Builders from our network have shipped for:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {['Haiven', 'DevShield', 'By The Fruit', 'Dig In Vision'].map(c => (
                  <span key={c} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-semibold">
                    {c}
                  </span>
                ))}
              </div>
              <p className="blueox-body text-gray-500 text-sm">Startups backed by millions in pre-seed and seed funding across AI, fintech, and VR.</p>
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
                <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">For founders</div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Execution is the bottleneck. Not vision.</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
                  Capital is flowing into faith-driven startups. Execution is still broken.
                </h2>
                <blockquote className="border-l-4 border-[#e05a3a] pl-6 italic text-xl text-gray-700 my-6">
                  Good intentions don&apos;t ship products. Execution does.
                </blockquote>
              </div>
              <div className="pt-2">
                <p className="blueox-body text-gray-600 leading-relaxed mb-4">
                  Hiring takes months. Misaligned builders dilute your vision mid-sprint. Your backlog keeps growing while momentum stalls. Every week you don&apos;t ship is a week your mission is delayed.
                </p>
                <p className="blueox-body text-gray-600 leading-relaxed mb-4">
                  The founders losing ground aren&apos;t short on conviction. They&apos;re short on execution infrastructure that actually matches what they&apos;re building.
                </p>
                <p className="font-bold text-black">Most teams don&apos;t ship weekly. Ours do.</p>
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
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">The BlueOx difference</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                We didn&apos;t source a talent pool. We built the campus first.
              </h2>
              <p className="blueox-body text-gray-600 max-w-2xl mx-auto">
                Every Saturday, builders compete. Top performers enter our system, commit to the Redemptive Technology code, and get deployed into your product. No CVs. No guesswork. Just proof.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Kampus',       title: 'Train', body: 'VR-powered training. Weekly competitions. Top performers rise to the surface.' },
              { label: 'Select',       title: 'Rank',  body: 'Every Saturday, builders compete. Only the top 10–20% are placed. No CVs. Just proof.' },
              { label: 'Your startup', title: 'Ship',  body: 'Weekly deliverables. Pod Coordinator manages everything. Friday report every week.' },
            ].map(({ label, title, body }, index) => (
              <Reveal key={title} delay={0.1 + index * 0.1}>
                <div className={`glass p-8 rounded-xl transition-all duration-300 hover:border-[#e05a3a]/50 ${index === 2 ? 'border-[#e05a3a]/30' : ''}`}>
                  <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-2">{label}</div>
                  <h3 className="text-2xl font-black text-black mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="bg-white border border-gray-200 rounded-none p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-black mb-1">Not sure what a pod would look like for your product?</p>
                <p className="text-gray-600 text-sm">Book a free 15-min breakdown. We&apos;ll map out exactly how a pod would clear your backlog.</p>
              </div>
              <a
                href="mailto:blueoxrecruit@gmail.com?subject=Pod Breakdown Request"
                className="shrink-0 border border-[#e05a3a] bg-transparent text-[#e05a3a] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 hover:bg-[#e05a3a] hover:text-white"
              >
                GET A FREE POD BREAKDOWN
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">Pricing</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                A full week of shipping for what most developers charge for a single day.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">This is not cheaper talent. This is faster execution.</p>
              <div className="blueox-subheading text-7xl text-[#e05a3a] leading-none mb-2">
                <sup className="text-3xl align-super">$</sup>199<span className="text-3xl font-normal text-gray-400"> / week</span>
              </div>
              <p className="blueox-body text-gray-500 text-sm">Per builder — campus-based, coordinator-managed, Pod Report every Friday</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Freelancer',  val: '$50–90/hr', txt: 'No coordinator. No accountability. Often gone by week 3.', hi: false },
                { label: 'Junior hire', val: '$4–6k/mo',  txt: '3 months to onboard. You become the manager.', hi: false },
                { label: 'BlueOx Pod', val: '$199/wk',    txt: 'Coordinated. Shipping in 7 days. Friday report included.', hi: true },
              ].map(({ label, val, txt, hi }) => (
                <div key={label} className={`bg-white border rounded-none p-6 ${hi ? 'border-[#e05a3a]' : 'border-gray-200'}`}>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">{label}</div>
                  <div className={`blueox-subheading text-3xl mb-3 ${hi ? 'text-[#e05a3a]' : 'text-black'}`}>{val}</div>
                  <p className="text-gray-600 text-sm">{txt}</p>
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
                <div className={`relative bg-white border rounded-none p-8 transition-all duration-200 ${featured ? 'border-[#e05a3a]' : 'border-gray-200 hover:border-[#e05a3a]'}`}>
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#e05a3a] text-white px-4 py-1 text-sm font-semibold uppercase tracking-wider">Best Value</span>
                    </div>
                  )}
                  <div className={`inline-block text-xs px-3 py-1 font-semibold uppercase tracking-wider mb-4 border ${featured ? 'bg-[#e05a3a]/10 text-[#e05a3a] border-[#e05a3a]/20' : 'bg-gray-50 text-gray-600 border-gray-200'}`}>{badge}</div>
                  <h3 className="text-2xl font-black text-black mb-1">{title}</h3>
                  <div className={`blueox-subheading text-4xl mb-1 ${featured ? 'text-[#e05a3a]' : 'text-black'}`}>{price}</div>
                  <p className="text-gray-500 text-sm mb-6">{sub}</p>
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
                      ? 'border border-[#e05a3a] bg-[#e05a3a] text-white hover:bg-[#c94e30] hover:border-[#c94e30]'
                      : 'border border-[#e05a3a] bg-transparent text-[#e05a3a] hover:bg-[#e05a3a] hover:text-white'
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
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">How it works</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                Your backlog isn&apos;t a strategy problem. It&apos;s an execution gap.
              </h2>
              <p className="blueox-body text-gray-600 max-w-2xl mx-auto">
                Send us your stack. We match a pod. They ship from campus while you build product.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { step: 1, icon: 'planner.svg', title: 'Send your stack + top tasks',    body: 'Tech stack, 3–5 items from your backlog, timeline. We give you a template. Takes 60 seconds.', time: 'Day 1' },
              { step: 2, icon: 'team.svg',    title: 'Pick from ranked profiles',      body: '3–5 competition-ranked builders with portfolios and performance data. You interview. You approve.', time: 'Days 3–5' },
              { step: 3, icon: 'rocket.svg',  title: 'Kickoff & cadence set',          body: 'Pod Coordinator runs the kickoff call. Weekly sprint cadence agreed. Everything managed from campus.', time: 'Day 7' },
              { step: 4, icon: 'chart.svg',   title: 'Weekly shipping begins',         body: 'Deliverables every week. Pod Report every Friday. Coordinator handles blockers before they hit your Slack.', time: 'Ongoing' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.1 + i * 0.1}>
                <div className="border-l-4 border-[#e05a3a] pl-6 flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      <img src={`/icons/${item.icon}`} alt={`Step ${item.step}`} className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-1">Step {item.step} · {item.time}</div>
                    <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
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
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">Not a founder?</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">BlueOx serves more than one side of this mission.</h2>
              <p className="blueox-body text-gray-600">Jump to what is relevant to you.</p>
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
                <a href={href} className="glass p-6 rounded-xl block hover:border-[#e05a3a]/50 transition-all duration-300 group">
                  <img src={`/icons/${icon}`} alt={tag} className="w-10 h-10 mb-4" />
                  <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-2">{tag}</div>
                  <h3 className="text-lg font-black text-black mb-2 group-hover:text-[#e05a3a] transition-colors">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{body}</p>
                  <span className="text-[#e05a3a] text-lg">→</span>
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
                <span className="inline-block text-xs px-4 py-1.5 font-semibold uppercase tracking-wider mb-4 bg-green-50 text-green-700 border border-green-200 rounded-full">For builders</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                  Get an international company on your CV. Ship real work. Build a career.
                </h2>
                <p className="blueox-body text-gray-600 leading-relaxed">
                  BlueOx Kampus places you in an execution pod with a real startup for 8–16 weeks. Work from campus. Pay nothing. Compete every Saturday — top performers get placed first.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Ship real features — not classroom exercises', 'Work from campus: power, fibre, mentorship', 'Weekly competitions — top ranks placed first', 'Professional certificate + reference from startup', 'Pipeline: pod → contract → full employment', 'Markets: Poland · Netherlands · UAE · Gulf'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
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
                <span className="inline-block text-xs px-4 py-1.5 font-semibold uppercase tracking-wider mb-4 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-full">For universities</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                  Placements that actually lead somewhere.
                </h2>
                <p className="blueox-body text-gray-600 leading-relaxed">
                  Pre-vetted international startups. Students join live shipping pods — not coffee runs. BlueOx handles matching, coordination, supervision, and reporting. You get the outcomes dashboard.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Students placed in real shipping environments', 'Weekly Pod Report per student', '8–16 week programs with defined deliverables', 'Certificates, references, portfolio pieces', 'Dashboard: placement, completion, employment rates', 'Zero admin burden on your department'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
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
                <span className="inline-block text-xs px-4 py-1.5 font-semibold uppercase tracking-wider mb-4 bg-blue-50 text-blue-700 border border-blue-200 rounded-full">For investors &amp; donors</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                  For Faith Driven Investors deploying Kingdom capital.
                </h2>
                <p className="blueox-body text-gray-600 leading-relaxed">
                  If you operate from a one-pocket framework — where giving, investing, and spending all come from the same Kingdom conviction — BlueOx is a place to put capital to work. We are building a model where a Christian tech hub trains students, ships products, plants churches, and supports refugees.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Every pod placed funds church plants and refugee support', 'Builder training is free — revenue from founders covers it', "Aligned with solving.org's Build, Invest, Give framework", 'Impact-measurable: placements, completions, employment tracked', 'ESG documentation for grant-funded and donor-advised tracks', 'IOM, UNHCR, EU-Africa fund aligned for impact capital'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/fund" className="border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 hover:bg-[#c94e30] hover:border-[#c94e30] inline-block">
                    FUND TRAINING
                  </Link>
                  <a href="mailto:blueoxrecruit@gmail.com?subject=Investor Inquiry" className="border border-black bg-transparent text-black font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                    TALK ABOUT YOUR PORTFOLIO
                  </a>
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
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">VR Training Academy</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
                The same campus that trains our builders also trains the workforce of Western Uganda.
              </h2>
              <p className="blueox-body text-gray-600 max-w-3xl mx-auto">
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
                <div className="bg-white border border-gray-200 rounded-none p-6 hover:border-[#e05a3a] transition-all duration-200">
                  <img src={`/icons/${icon}`} alt={title} className="w-10 h-10 mb-4" />
                  <h3 className="font-black text-black mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="text-center">
              <Link href="/academy" className="border border-[#e05a3a] bg-transparent text-[#e05a3a] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#e05a3a] hover:text-white inline-block">
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
              <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-4">Who we are</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 max-w-3xl mx-auto">
                A Christian-first technology hub. Not Christian-adjacent. Not faith-friendly.{' '}
                <span className="text-[#e05a3a]">Christian first.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <p className="blueox-body text-gray-600 leading-relaxed">
                Every builder at BlueOx Kampus is a Christian. They are selected through weekly Saturday coding competitions from software engineering students across Uganda — the top performers enter our system, commit to our code of Redemptive Technology, and ship for founders who are building products that push back darkness in the world.
              </p>
              <p className="blueox-body text-gray-600 leading-relaxed">
                We plant churches with our finances. We practice radical generosity through supporting refugees. We are inspired by the framework of solving the world&apos;s 32 greatest problems — the conviction that the Church is called to minister in Word and Deed, and that technology is one of the most powerful tools available to do both.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-[#e05a3a] mb-6">The code of redemptive technology</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'Build for people',     body: 'Technology that serves, not exploits. Products that create value for the people who use them.' },
                  { title: 'Excellence as worship', body: 'Doing excellent work is an act of worship. Shipping matters. Quality matters. Integrity matters.' },
                  { title: 'Radical generosity',    body: 'Revenue funds church plants, supports refugees, and keeps training free for builders who have nothing.' },
                  { title: 'Jesus as framework',    body: 'Not a values statement on a wall. The actual model for how we work, lead, build, and relate to one another.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-white border border-gray-200 rounded-none p-5 hover:border-[#e05a3a] transition-all duration-200">
                    <h4 className="font-black text-black mb-2 text-sm">{title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="blueox-body text-gray-500 text-sm mt-6">
              Aligned with the Faith Driven Entrepreneur movement and inspired by{' '}
              <a href="https://solving.org" target="_blank" rel="noreferrer" className="text-[#e05a3a] hover:underline">solving.org</a>
              {' '}— the conviction that Christians are called to Build, Invest, and Give toward the world&apos;s 32 greatest problems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-white border-t border-gray-200 text-center" id="request">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-white border-2 border-[#e05a3a]/50 rounded-none p-12">
              <p className="blueox-body text-gray-600 mb-4 text-sm font-semibold uppercase tracking-widest">
                Most founders wait too long to fix execution. The ones who don&apos;t — win.
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                If you&apos;re building something that matters — it needs to ship.
              </h2>
              <p className="blueox-body text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                You have a calling. You have a backlog. 7 days to kickoff. $199/week. Send us your stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#c94e30] hover:border-[#c94e30]">
                  REQUEST A POD →
                </a>
                <a href="mailto:blueoxrecruit@gmail.com?subject=15-min Breakdown Request" className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white">
                  GET A 15-MIN BREAKDOWN
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType="partner" />
      <Footer />
    </>
  );
}
