"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';
import InvestorForm from '../../components/InvestorForm';

export default function PodsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('pods');
  const [isInvestorFormOpen, setIsInvestorFormOpen] = useState(false);

  const openRequest = (type: FormType = 'pods') => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <>
      <Header />

      <section className="relative pt-24 md:pt-32 pb-20 bg-white">
        {/* Full-width ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8 bg-white py-3">
          <div className="academy-ticker bg-white" aria-label="Billy Pods ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">NEW SERVICE</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">QA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">REACT POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">PYTHON / DATA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SUPPORT ENG POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">INTERN PODS THAT SHIP</span>
                <span className="academy-ticker-sep">•</span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">NEW SERVICE</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">QA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">REACT POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">PYTHON / DATA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SUPPORT ENG POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">INTERN PODS THAT SHIP</span>
                <span className="academy-ticker-sep">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="text-left mb-16 max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-blue-100 rounded-full px-4 py-2 mb-10 shadow-sm">
                <span className="text-[#F58220] text-xs font-mono font-bold tracking-wider uppercase">/ PODS</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600 text-sm font-libre italic">For startups that need shipping capacity fast.</span>
              </div>
              <h1 className="font-bebas text-[5.5rem] sm:text-[7rem] md:text-[10rem] mb-12 text-[#0044CC] leading-[1.1] tracking-normal uppercase text-left">INTERN<br />PODS<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}>THAT</span><br />SHIP.</h1>
              <p className="font-libre text-2xl md:text-4xl text-gray-900 mb-4 italic">
                Add a Pod to your sprint without hiring.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-start mt-12">
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                  REQUEST A POD →
                </a>
                <a href="https://www.blueoxjobs.eu/profile" target="_blank" rel="noopener noreferrer" className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white">
                  APPLY TO POOL
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Reveal delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h2 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-4">Meet the Intern Pod</h2>
                <p className="text-gray-700 mb-4">
                  A Billy Pod includes coordination, cadence, and accountability — 1–3 vetted interns, a Pod Coordinator, and weekly reporting. Your team assigns tasks like a teammate; Billy runs the Pod.
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>Shortlist in 3–5 days · Kickoff in ~7 days</li>
                  <li>Weekly Pod Report · Replacement guarantee</li>
                </ul>

                <div className="space-y-4">
                  <h3 className="font-bebas text-3xl text-[#0044CC] uppercase leading-tight">Choose Your Track</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-white border border-gray-200 rounded-none">
                      <div className="text-sm text-[#F58220] font-semibold">QA Pod</div>
                      <div className="text-gray-700 text-sm">Test cases · regression · bug triage</div>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-none">
                      <div className="text-sm text-[#F58220] font-semibold">React Pod</div>
                      <div className="text-gray-700 text-sm">UI tickets · component cleanup · page builds</div>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-none">
                      <div className="text-sm text-[#F58220] font-semibold">Python/Data Pod</div>
                      <div className="text-gray-700 text-sm">Dashboards · ETL · reporting automation</div>
                    </div>
                    <div className="p-4 bg-white border border-gray-200 rounded-none">
                      <div className="text-sm text-[#F58220] font-semibold">Support Engineering Pod</div>
                      <div className="text-gray-700 text-sm">Docs · internal tools · ticket cleanup</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#F58220] hover:text-white">
                    REQUEST POD PROFILES
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-8">
                <h3 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-4">For Startups — Request Pod Profiles</h3>
                <p className="text-gray-700 mb-4">Tell us what you need and we’ll reply with 3–5 matched profiles and a simple start plan.</p>

                <h4 className="text-black font-semibold mb-2">Information Collected</h4>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Full name · Work email · Company name · Website</li>
                  <li>Which Pod lane (QA, React, Python-Data, Support Eng, or Not sure)</li>
                  <li>Your stack & tools · Top 3–5 tasks · Duration · Pod size</li>
                </ul>

                <h4 className="text-black font-semibold mb-2">For Builders — Apply to the Billy Talent Pool</h4>
                <p className="text-gray-700 mb-4">We verify skill, rank candidates, and form Pods from a vetted pool. Applying does not guarantee selection.</p>

                <div className="flex flex-wrap gap-3">
                  <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#F58220] hover:text-white">
                    REQUEST POD PROFILES
                  </a>
                  <a href="https://www.blueoxjobs.eu/profile" target="_blank" rel="noopener noreferrer" className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white">APPLY TO POOL</a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <div className="bg-white border border-gray-200 rounded-none p-8">
              <h4 className="text-black font-bold mb-2">Confirmation Messages</h4>
              <p className="text-gray-700 mb-4">Companies: Request received — we’ll send 3–5 matched profiles within a few business days. Interns: You’re now in the Billy Talent Pool; selected candidates receive assessment invites.</p>
              <p className="text-gray-600 text-sm">Privacy: We use this information only to match and coordinate your Pod.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Track Record */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">Track record</p>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-3">Builders who ship. Products that exist.</h2>
            <p className="blueox-body text-gray-600 text-sm mb-6">Builders from our network have shipped for:</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {[
                { name: 'Haiven', url: 'https://haiven.gg' },
                { name: 'DevShield', url: 'https://devshield.gg' },
                { name: 'By The Fruit', url: 'https://bythefruit.com' },
                { name: 'Dig In Vision', url: 'https://diginvision.com' },
              ].map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-300 text-gray-700 text-sm blueox-body hover:border-[#0044CC] hover:text-[#0044CC] transition-colors">{item.name}</a>
              ))}
            </div>
            <p className="blueox-body text-gray-500 text-sm">Startups backed by millions in pre-seed and seed funding across AI, fintech, and VR.</p>
          </Reveal>
        </div>
      </section>

      {/* Execution Problem + Pipeline */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Reveal delay={0.1}>
              <div>
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">For founders</p>
                <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-4">Capital is flowing into faith-driven startups. Execution is still broken.</h2>
                <blockquote className="border-l-4 border-[#F58220] pl-5 my-6">
                  <p className="blueox-body text-black text-lg font-semibold">Good intentions don't ship products.<br/>Execution does.</p>
                </blockquote>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="pt-8 md:pt-14">
                <p className="blueox-body text-gray-600 leading-relaxed mb-4">Hiring takes months. Misaligned builders dilute your vision mid-sprint. Your backlog keeps growing while momentum stalls.</p>
                <p className="blueox-body text-gray-600 leading-relaxed mb-4">The founders losing ground aren't short on conviction. They're short on execution infrastructure that actually matches what they're building.</p>
                <p className="blueox-body text-black font-semibold">Most teams don't ship weekly. Ours do.</p>
              </div>
            </Reveal>
          </div>

          {/* Pipeline */}
          <Reveal delay={0.3}>
            <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">The BlueOx difference</p>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-3">We didn&apos;t source a talent pool. We built the campus first.</h2>
            <p className="blueox-body text-gray-600 text-base mb-8 max-w-2xl">Every Saturday, builders compete. Top performers enter our system, commit to the Redemptive Technology code, and get deployed into your product. No CVs. No guesswork. Just proof.</p>
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-200 mb-6">
              <div className="p-6">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-3">Kampus</p>
                <h3 className="font-bebas text-3xl text-[#0044CC] uppercase mb-2">Train</h3>
                <p className="blueox-body text-gray-600 text-sm">VR-powered training. Weekly competitions. Top performers rise to the surface.</p>
              </div>
              <div className="p-6">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-3">Select</p>
                <h3 className="font-bebas text-3xl text-[#0044CC] uppercase mb-2">Rank</h3>
                <p className="blueox-body text-gray-600 text-sm">Every Saturday, builders compete. Only the top 10–20% are placed. No CVs. Just proof.</p>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-3">Your startup</p>
                <h3 className="font-bebas text-3xl text-[#0044CC] uppercase mb-2">Ship</h3>
                <p className="blueox-body text-gray-600 text-sm">Weekly deliverables. Pod Coordinator manages everything. Friday report every week.</p>
              </div>
            </div>
            <p className="blueox-body text-gray-500 text-sm">You're not outsourcing. You're plugging into a performance-tested execution system — built and proven before the first pod was ever deployed.</p>
          </Reveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">How it works</p>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-3">Your backlog isn&apos;t a strategy problem. It&apos;s an execution gap.</h2>
            <p className="blueox-body text-gray-600 text-base mb-8">Send us your stack. We match a pod. They ship from campus while you build product.</p>
          </Reveal>
          <div className="border border-gray-200 divide-y divide-gray-200 mb-8">
            {([
              { n: '1', title: 'Send your stack + top tasks', desc: 'Tech stack, 3–5 items from your backlog, timeline. We give you a template. Takes 60 seconds.', time: 'Day 1' },
              { n: '2', title: 'Pick from ranked profiles', desc: '3–5 competition-ranked builders with portfolios and performance data. You interview. You approve.', time: 'Days 3–5' },
              { n: '3', title: 'Kickoff & cadence set', desc: 'Pod Coordinator runs the kickoff call. Weekly sprint cadence agreed. Everything managed from campus.', time: 'Day 7' },
              { n: '4', title: 'Weekly shipping begins', desc: 'Deliverables every week. Pod Report every Friday. Coordinator handles blockers before they hit your Slack.', time: 'Ongoing' },
            ] as { n: string; title: string; desc: string; time: string }[]).map((step) => (
              <Reveal key={step.n} delay={0.1}>
                <div className="flex items-stretch">
                  <div className="w-16 flex-shrink-0 flex items-center justify-center blueox-subheading text-3xl text-gray-200 border-r border-gray-200 py-6">
                    {step.n}
                  </div>
                  <div className="flex-1 px-6 py-5">
                    <h3 className="font-bebas text-2xl text-[#0044CC] uppercase mb-1">{step.title}</h3>
                    <p className="blueox-body text-gray-600 text-sm">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex w-28 flex-shrink-0 items-center justify-end px-5 border-l border-gray-200">
                    <span className="blueox-body text-xs text-[#F58220] font-semibold text-right">{step.time}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4">Pricing</p>
            <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-8">A full week of shipping for what most developers charge for a single day.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-gray-200 p-8 sm:p-10 mb-6">
              <p className="blueox-body text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">This is not cheaper talent. This is faster execution.</p>
              <div className="font-bebas text-5xl text-[#F58220] mb-2">$199<span className="text-2xl text-gray-400"> / week</span></div>
              <p className="blueox-body text-gray-600 text-sm mb-8">Per week — full 3-builder pod. — campus-based, coordinator-managed, Pod Report every Friday</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 p-5">
                  <p className="font-bebas text-sm tracking-widest uppercase text-gray-500 mb-2">Freelancer</p>
                  <p className="font-bebas text-3xl text-black mb-2">$50–90/hr</p>
                  <p className="blueox-body text-gray-600 text-sm">No coordinator. No accountability. Often gone by week 3.</p>
                </div>
                <div className="border border-gray-200 p-5">
                  <p className="font-bebas text-sm tracking-widest uppercase text-gray-500 mb-2">Junior hire</p>
                  <p className="font-bebas text-3xl text-black mb-2">$4–6k/mo</p>
                  <p className="blueox-body text-gray-600 text-sm">3 months to onboard. You become the manager.</p>
                </div>
                <div className="border border-[#F58220] p-5">
                  <p className="font-bebas text-sm tracking-widest uppercase text-[#F58220] mb-2">BlueOx Pod</p>
                  <p className="font-bebas text-3xl text-[#F58220] mb-2">$199/wk</p>
                  <p className="blueox-body text-gray-600 text-sm">Coordinated. Shipping in 7 days. Friday report included.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            <Reveal delay={0.2}>
              <div className="border border-gray-200 p-8">
                <span className="blueox-body text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4 block">Solo</span>
                <h3 className="font-bebas text-4xl text-black mb-2">Solo Pod</h3>
                <p className="font-bebas text-4xl text-[#F58220] mb-1">$2,388</p>
                <p className="blueox-body text-gray-500 text-sm mb-5">1 builder · 12 weeks · $199/wk</p>
                <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                  {['Any role category', 'Pod Coordinator included', 'Weekly Pod Reports', 'Replacement guarantee'].map(f => (
                    <p key={f} className="blueox-body text-gray-600 text-sm"><span className="text-[#F58220] mr-2">—</span>{f}</p>
                  ))}
                </div>
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#F58220] hover:text-white">REQUEST SOLO POD</a>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="border border-[#F58220] p-8">
                <span className="blueox-body text-xs font-semibold tracking-widest uppercase text-[#F58220] mb-4 block">Best value</span>
                <h3 className="font-bebas text-4xl text-black mb-2">Team Pod</h3>
                <p className="font-bebas text-4xl text-[#F58220] mb-1">$5,970</p>
                <p className="blueox-body text-gray-500 text-sm mb-5">3 builders · 12 weeks · ~$166/wk each</p>
                <div className="border-t border-gray-200 pt-4 space-y-2 mb-6">
                  {['Multi-role or single focus', 'Dedicated coordinator', 'Coordinated Pod Reports', 'Dev · Design · Ops available', 'Save 17% vs solo rate'].map(f => (
                    <p key={f} className="blueox-body text-gray-600 text-sm"><span className="text-[#F58220] mr-2">—</span>{f}</p>
                  ))}
                </div>
                <a href="https://www.blueoxjobs.eu/hiring" target="_blank" rel="noopener noreferrer" className="inline-block border border-[#F58220] bg-[#F58220] text-white font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#c94e30]">REQUEST TEAM POD</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* For Builders */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal delay={0.1}>
              <div>
                <span className="blueox-body text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-gray-300 text-gray-600 mb-6 inline-block">For builders</span>
                <h2 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-4 mt-4">Get an international company on your CV. Ship real work. Build a career.</h2>
                <p className="blueox-body text-gray-600 leading-relaxed">BlueOx Kampus places you in an execution pod with a real startup for 8–16 weeks. Work from campus. Pay nothing. Compete every Saturday — top performers get placed first.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-0 mt-4">
                {[
                  'Ship real features — not classroom exercises',
                  'Work from campus: power, fibre, mentorship',
                  'Weekly competitions — top ranks placed first',
                  'Professional certificate + reference from startup',
                  'Pipeline: pod → contract → full employment',
                  'Markets: Poland · Netherlands · UAE · Gulf',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                    <span className="text-[#F58220] font-semibold text-sm mt-0.5">→</span>
                    <p className="blueox-body text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
                <div className="pt-5">
                  <a href="https://www.blueoxjobs.eu/profile" target="_blank" rel="noopener noreferrer" className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white">JOIN THE TALENT POOL</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal delay={0.1}>
              <div>
                <span className="blueox-body text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-[#F58220] text-[#F58220] mb-6 inline-block">For universities</span>
                <h2 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-4 mt-4">Placements that actually lead somewhere.</h2>
                <p className="blueox-body text-gray-600 leading-relaxed">Pre-vetted international startups. Students join live shipping pods — not coffee runs. BlueOx handles matching, coordination, supervision, and reporting. You get the outcomes dashboard.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-0 mt-4">
                {[
                  'Students placed in real shipping environments',
                  'Weekly Pod Report per student',
                  '8–16 week programs with defined deliverables',
                  'Certificates, references, portfolio pieces',
                  'Dashboard: placement, completion, employment rates',
                  'Zero admin burden on your department',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                    <span className="text-[#F58220] font-semibold text-sm mt-0.5">→</span>
                    <p className="blueox-body text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
                <div className="pt-5">
                  <button onClick={() => openRequest('partner')} className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white">PARTNER WITH US</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* For Investors / Faith Driven */}
      <section className="relative py-16 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal delay={0.1}>
              <div>
                <span className="blueox-body text-xs font-semibold tracking-widest uppercase px-3 py-1 border border-blue-500 text-blue-500 mb-6 inline-block">For investors & donors</span>
                <h2 className="font-bebas text-5xl md:text-6xl text-[#0044CC] leading-tight uppercase mb-4 mt-4">For Faith Driven Investors deploying Kingdom capital.</h2>
                <p className="blueox-body text-gray-600 leading-relaxed">If you operate from a one-pocket framework — where giving, investing, and spending all come from the same Kingdom conviction — BlueOx is a place to put capital to work. We're building a model where a Christian tech hub trains students, ships products, plants churches, and supports refugees. All from the same ecosystem.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-0 mt-4">
                {[
                  'Every pod placed funds church plants and refugee support',
                  'Builder training is free — revenue from founders covers it',
                  "Aligned with solving.org's Build, Invest, Give framework",
                  'Impact-measurable: placements, completions, employment tracked',
                  'ESG documentation for grant-funded and donor-advised tracks',
                  'IOM, UNHCR, EU-Africa fund aligned for impact capital',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                    <span className="text-[#F58220] font-semibold text-sm mt-0.5">→</span>
                    <p className="blueox-body text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
                <div className="pt-5 flex flex-wrap gap-3">
                  <a href="/fund" className="inline-block border border-[#F58220] bg-[#F58220] text-white font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#c94e30]">FUND TRAINING</a>
                  <button onClick={() => setIsInvestorFormOpen(true)} className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white">TALK ABOUT YOUR PORTFOLIO</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType={formType} />
      <InvestorForm isOpen={isInvestorFormOpen} onClose={() => setIsInvestorFormOpen(false)} />

      <Footer />
    </>
  );
}








