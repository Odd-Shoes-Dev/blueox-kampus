'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';

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

      {/* 01 — HERO / THE GRAVITY */}
      <section className="relative bg-white pt-28 md:pt-36 pb-24 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="text-left mb-20 max-w-4xl">
              <div className="inline-flex items-center gap-2 border border-blue-100 rounded-full px-4 py-2 mb-10 shadow-sm">
                <span className="text-[#F58220] text-xs font-mono font-bold tracking-wider uppercase">/ BLUE OX KAMPUS</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-600 text-sm font-libre italic">If we don&apos;t shape culture, culture will disciple the next generation.</span>
              </div>
              <h1 className="font-bebas text-[5.5rem] sm:text-[7rem] md:text-[10rem] mb-12 text-[#0044CC] leading-[1.1] tracking-normal uppercase text-left">5.5 BILLION PEOPLE<br /><span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CC' }}> DON&apos;T</span><br />KNOW JESUS.</h1>
              <p className="font-libre text-2xl md:text-4xl text-gray-900 mb-4 italic">
                We have the message. Now we need people who can carry it.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                Blue Ox Kampus exists to raise, equip and send faith-driven creatives from Africa to places where the gospel is least accessible. <span className="text-[#0044CC] font-semibold">Filmmakers. Musicians. Photographers. Writers. Designers. Developers. Producers. Storytellers.</span> People who already know how to make things. People who already know how to communicate. People who already have something to carry. We&apos;re building a pathway for them to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-start mt-12">
                <a href="/fund" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                  FUND THE SENDING →
                </a>
                <a href="/#the-pathway" className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white">
                  EXPLORE THE MISSION →
                </a>
              </div>
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
                  <span className="academy-ticker-sep"></span>
                </span>
              ))}
            </div>
            <div className="academy-ticker-group" aria-hidden="true">
              {['Haiven', 'DevShield', 'By The Fruit', 'Dig In Vision', 'Competition-Ranked Builders', 'No Hiring · Just Output', 'Mbarara Uganda', 'Shipping Globally', 'Redemptive Technology'].map(item => (
                <span key={item}>
                  <span className="academy-ticker-item">{item}</span>
                  <span className="academy-ticker-sep"></span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 02 — THE QUESTION THAT CHANGED THE MODEL */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="the-question">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ THE QUESTION THAT CHANGED THE MODEL</div>
                <p className="text-xs font-mono font-black uppercase tracking-widest text-gray-500 mb-4">5.5 BILLION PEOPLE DON&apos;T KNOW JESUS.</p>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                  Solving the World&apos;s Greatest Problems asks a simple but enormous question.
                </h2>
                <blockquote className="border-l-4 border-[#F58220] pl-6 italic text-xl text-gray-700 my-6 font-libre">
                  &ldquo;We have the message. How do we build the path to everyone, everywhere?&rdquo;
                </blockquote>
              </div>
              <div className="pt-2">
                <p className="font-libre text-gray-600 leading-relaxed mb-4">
                  We couldn&apos;t ignore it. So we asked: WHAT DO WE ALREADY HAVE IN OUR HANDS?
                </p>
                <p className="font-libre text-gray-600 leading-relaxed mb-4">
                  We&apos;ve spent years working with faith-driven creatives. We&apos;ve trained developers. We&apos;ve worked with filmmakers, designers, musicians and storytellers. We&apos;ve built communities. We&apos;ve worked with churches. We&apos;ve worked across borders.
                </p>
                <div className="font-bebas text-2xl text-[#0044CC] mb-3 uppercase">Maybe the point isn&apos;t simply to build better creatives. Maybe it&apos;s to help send them.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — THE RESEARCH: THE WORLD HAS CHANGED */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="the-research">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ THE RESEARCH: THE WORLD HAS CHANGED</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                Africa is now the largest regional home of Christians in the world.
              </h2>
              <p className="font-libre text-gray-600 max-w-2xl mx-auto italic">
                For generations, the story of Christian mission was largely told from the West outward. But the geography of Christianity has changed dramatically.
              </p>

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
                <p className="text-center text-xs text-gray-500 mt-3 uppercase tracking-widest font-semibold">Blue OX Kampus · Uganda</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Pew Research Center, 2025', title: '30.7%', body: 'In 2020, sub-Saharan Africa was home to 30.7% of the world\'s Christians — the largest share of any region on Earth, compared with 22.3% in Europe.' },
              { label: 'Pew Research Center, 2025', title: '697 Million', body: '697 million Christians now live in sub-Saharan Africa. Africa became the continent with the most Christians in 2018, passing Latin America.' },
              { label: '1910 → 2020', title: '1% to 31%', body: 'In 1910, roughly 1% of the world\'s Christians lived in sub-Saharan Africa. By 2020, that share had grown to 31% — a shift researchers describe as historic.' },
            ].map(({ label, title, body }, index) => (
              <Reveal key={title} delay={0.1 + index * 0.1}>
                <div className={`glass p-8 rounded-xl transition-all duration-300 hover:border-[#0044CC]/50 ${index === 2 ? 'border-[#0044CC]/30' : ''}`}>
                  <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-2">{label}</div>
                  <h3 className="text-2xl font-bebas text-[#0044CC] mb-3 uppercase">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="font-libre text-gray-500 text-sm mb-8 italic">
              Source: Pew Research Center, 2025. 1910 estimate via the Center for the Study of Global Christianity. Two distinct analyses do not present as one continuous data series.
            </p>
            <div className="bg-white border border-[#0044CC]/20 rounded-none p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-bebas text-lg text-[#0044CC] mb-1 uppercase">Africa has received. The gospel came. The Church grew.</p>
                <p className="font-libre text-gray-600 text-sm">NOW AFRICA CAN SEND. NOT SOMEDAY. NOW.</p>
              </div>
              <a
                href="/fund"
                className="shrink-0 border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 hover:bg-[#F58220] hover:text-white"
              >
                FUND THE SENDING →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — THE INVERSION (VISUAL CENTERPIECE) */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ THE INVERSION</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                WE&apos;RE NOT<br />
                ABANDONING<br />
                WHAT WE BUILT.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '01', t: 'The Old Pipeline', d: 'GATHER → TRAIN → WORK. The model that built the campus and trained hundreds of builders. It worked.' },
                { n: '02', t: 'The Blue Ox Inversion', d: 'GATHER → FORM → EQUIP → SEND → MULTIPLY. The same pipeline. A new destination.' },
                { n: '03', t: "We're giving it a destination.", d: "The training still matters. The creative work still matters. The Kampus still matters. But now they all point somewhere: TOWARD SENDING." },
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

      {/* 05 — THE PATHWAY: FROM GIFTED TO SENT */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="the-pathway">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ THE PATHWAY: FROM GIFTED TO SENT</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                One creative can become a sending movement.
              </h2>
              <p className="font-libre text-gray-600 max-w-2xl mx-auto italic">
                Going isn&apos;t the end. The people we send can return, create, teach, mentor and raise others who will go next.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { step: 1, icon: 'planner.svg', title: 'Gather',   body: 'We find faith-driven creatives across Uganda and through our growing network of churches, creative communities and partner organizations across Africa.', time: '01' },
              { step: 2, icon: 'team.svg',    title: 'Form',     body: "We help them develop their craft, character, faith and cross-cultural readiness. Being gifted isn't enough. They need to be ready to go.", time: '02' },
              { step: 3, icon: 'rocket.svg',  title: 'Equip',    body: 'We put the tools in their hands. Cameras. Computers. Software. Instruments. Microphones. Production equipment. Whatever their craft requires to serve well.', time: '03' },
              { step: 4, icon: 'chart.svg',   title: 'Send',     body: 'We help create pathways for these creatives to take their skills beyond their borders and into places where the gospel is least accessible.', time: '04' },
              { step: 5, icon: 'rocket.svg',  title: 'Multiply', body: "Going isn't the end. The people we send can return, create, teach, mentor and raise others who will go next. One creative can become a sending movement.", time: '05' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.1 + i * 0.1}>
                <div className="border-l-4 border-[#0044CC] pl-6 flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-transparent border border-[#0044CC] rounded-full flex items-center justify-center">
                      <img src={`/icons/${item.icon}`} alt={`Step ${item.step}`} className="w-6 h-6" style={{ filter: 'invert(10%) sepia(100%) saturate(800%) hue-rotate(200deg)' }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-1">/ {item.time}</div>
                    <h3 className="text-xl font-bebas text-[#0044CC] mb-2 uppercase">{item.title}</h3>
                    <p className="font-libre text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — THE PEOPLE WE SEND */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-4">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ THE PEOPLE WE SEND</div>
              <h2 className="font-bebas text-6xl md:text-8xl text-[#0044CC] leading-tight uppercase font-light">
                YOUR CRAFT CAN<br />
                BECOME PART OF<br />
                THE MISSION.
              </h2>
              <p className="font-libre text-lg md:text-xl text-gray-600 mt-8 max-w-2xl">
                Writers. Producers &amp; Engineers. Storytellers. The gospel has always moved through stories and the work needs people who know how to make it happen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
              {[
                { role: 'Filmmakers',   desc: 'Stories can cross borders.' },
                { role: 'Musicians',    desc: 'Music can open doors language cannot.' },
                { role: 'Photographers', desc: 'Images can help people see.' },
                { role: 'Designers',    desc: 'Communication can make complex ideas understandable.' },
                { role: 'Developers',   desc: 'Technology can serve people and movements that need it.' },
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
              <a href="/#the-pathway" className="border border-[#0044CC] bg-transparent text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0044CC] hover:text-white">
                YOU DON&apos;T HAVE TO STOP BEING A CREATIVE TO BECOME A MISSIONARY →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 & 08 — KAMPUS NETWORK, PARTNER HUBS & EXPANSION */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-6">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ KAMPUS NETWORK</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                ONE KAMPUS.<br />MANY CONNECTIONS.<br />A GROWING SENDING NETWORK.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { country: 'Uganda', city: 'Mbarara — Physical Kampus. Where we gather, create, train and form creatives in person.', flag: '🇺🇬', isLive: true },
                { country: 'Online Market 01', city: 'Location identified. Local leaders in place. Active creative community already gathering online.', flag: '🌍', isLive: false },
                { country: 'Online Market 02', city: 'Location identified. Local leaders in place. Active creative community already gathering online.', flag: '🌍', isLive: false },
                { country: 'Online Market 03', city: 'Location identified. Local leaders in place. Active creative community already gathering online.', flag: '🌍', isLive: false },
              ].map((campus) => (
                <div key={campus.country} className="bg-white border border-gray-100 rounded-lg p-4 hover:border-[#0044CC] transition-colors">
                  <div className="text-2xl mb-2">{campus.flag}</div>
                  <div className="font-bebas text-xl text-[#0044CC] mb-2 uppercase">{campus.country}</div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 font-libre leading-relaxed">
                      {campus.city && <span>{campus.city}</span>}
                    </p>
                    <span className={`text-xs font-mono font-black uppercase tracking-wide ${campus.isLive ? 'text-green-600' : 'text-gray-600'}`}>
                      {campus.isLive ? '● Live' : '○ Online'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex justify-start mt-8">
              <a href="/fund" className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA]">
                HELP BUILD THE NEXT KAMPUS →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 09 — WHY WE START WITH CREATIVES */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-6">
          <Reveal>
            <div className="mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ WHY WE START WITH CREATIVES</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase">
                BECAUSE WE<br />
                KNOW THEM.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: 'We are creatives ourselves', desc: 'We know what it means to have a gift but not have the equipment. We know what it means to have talent but not have opportunity.' },
                { title: 'We know what it means',      desc: 'We know what it means to want to use your craft for something bigger. We have spent years building environments where creatives can learn, collaborate and work.' },
                { title: 'Now we want to help them go', desc: "We aren't trying to become experts in every kind of missionary. We're starting with the people we understand. That's our lane. And we're going to stay in it." },
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
              <div className="font-mono text-[#F58220] text-xs font-black mb-2 uppercase tracking-wider">Our Lane</div>
              <div className="font-bebas text-3xl md:text-4xl text-[#0044CC] mb-3 uppercase">We aren&apos;t trying to do everything. We&apos;re doing this.</div>
              <p className="text-base md:text-lg text-gray-600 font-libre leading-relaxed">
                Raise faith-driven creatives from Africa. Equip them for the work. Send them where the gospel is least accessible. Help them multiply. That&apos;s the work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 — WHERE WE STAND */}
      <section className="relative py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Reveal>
            <div className="mb-8">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-6">/ WHERE WE STAND</div>
              <h2 className="font-bebas text-5xl md:text-7xl text-[#0044CC] leading-tight uppercase mb-8">
                FIRST DEPLOYMENT<br />
                TARGET:<br />
                SEPTEMBER 2026
              </h2>
              <p className="font-libre text-lg md:text-xl text-gray-600 italic max-w-2xl mx-auto mb-12 leading-relaxed">
                The Kampus exists. A $2,500 experiment became a physical creative hub in Uganda. More than 300 builders have trained through the work. But the sending pipeline is new. We haven&apos;t sent our first missionary yet. We&apos;re building the pathway now.
              </p>
              <p className="font-libre text-base text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
                That means the people who give today aren&apos;t funding a mature machine. They&apos;re helping build the first version of it.
              </p>
              <a
                href="/fund"
                className="border border-[#0044CC] bg-[#0044CC] text-white font-semibold text-base px-12 py-4 rounded-none transition-all duration-300 hover:bg-[#0033AA] hover:border-[#0033AA] inline-block"
              >
                HELP SEND THE FIRST CREATIVE →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 — FUND THE SENDING */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="give">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ FUND THE SENDING</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                Don&apos;t just fund content. Fund the sending.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <p className="text-xs font-mono font-black uppercase tracking-widest text-gray-500 mb-4">Every gift goes toward one thing: getting a creative from here to there.</p>
              <div className="font-bebas text-7xl text-[#0044CC] leading-none mb-2 uppercase">
                RAISE.<br />EQUIP.<br />SEND.
              </div>
              <p className="font-libre text-gray-500 text-sm">Five ways to be part of what we&apos;re building.</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Send a Creative', val: 'SEND',  txt: 'Help make the journey possible. Cover the cost of getting a faith-driven creative from their campus to their field.', hi: false },
                { label: 'Equip a Creative', val: 'EQUIP', txt: 'Put the right tools into the hands of someone preparing to go. Cameras. Computers. Instruments. Whatever their craft requires.', hi: false },
                { label: 'Form a Creative', val: 'FORM',  txt: 'Support training, spiritual formation and cross-cultural preparation before deployment. Being gifted is not enough. They need to be ready to go.', hi: true },
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
                badge: 'Build', title: 'Build a Kampus', price: 'BUILD',
                sub: 'Help turn an existing relationship and community into a physical place where creatives can be raised and equipped.',
                features: ['Three online markets already active', 'Local leaders already in place', 'Locations already identified', 'What is missing is infrastructure'],
                featured: false, cta: 'Help Build the Next Kampus →',
              },
              {
                badge: 'Full Journey', title: 'Fund a Creative Mission', price: 'FUND',
                sub: 'Support an entire journey from formation to deployment. Formation. Equipment. Training. Support. Funding. A place to serve.',
                features: ['Formation and spiritual readiness', 'Craft development and equipping', 'Deployment pathway and support', 'Ongoing relationship and reporting', 'Your giving tracked with real outcomes'],
                featured: true, cta: 'Fund a Creative Mission →',
              },
            ].map(({ badge, title, price, sub, features, featured, cta }, i) => (
              <Reveal key={title} delay={0.4 + i * 0.1}>
                <div className={`relative bg-white border rounded-none p-8 transition-all duration-200 ${featured ? 'border-[#0044CC] shadow-lg shadow-blue-500/10' : 'border-gray-200 hover:border-[#0044CC]'}`}>
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-[#0044CC] text-white px-4 py-1 text-sm font-semibold uppercase tracking-wider">Full Journey</span>
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
                  <a href="/fund" className={`w-full inline-block text-center font-semibold text-sm px-6 py-3 rounded-none transition-all duration-300 ${
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

      {/* 12 — THE MONEY STORY / ODD SHOES SEPARATION */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ THE MONEY STORY</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">Blue Ox Kampus is mission-funded.</h2>
              <p className="font-libre text-gray-600">Your gift here supports: Gather. Form. Equip. Send. Multiply.</p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'crown.svg',   tag: 'Mission-Funded', title: 'Not a storefront',           body: 'Blue Ox Kampus is not a storefront. There are no commercial services being sold here.',                                                              href: '/fund' },
              { icon: 'book.svg',    tag: 'Different Door',  title: 'Want to hire?',              body: "If you want to hire a software team, that's a different door.",                                                                                       href: 'https://oddshoesgroup.com' },
              { icon: 'diamond.svg', tag: 'Odd Shoes',       title: 'Our commercial work',        body: 'Odd Shoes works with clients through normal commercial relationships to build software. Blue Ox Kampus exists to fund the sending.',                   href: 'https://oddshoesgroup.com' },
              { icon: 'rocket.svg',  tag: 'Clear Purpose',   title: 'Different work. Different money.', body: 'Different work. Different money. Clear purpose.',                                                                                              href: '/fund' },
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

      {/* 13 — THE FIRST CREATIVE */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="the-first-creative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                  Someone is going to be first.
                </h2>
                <p className="font-libre text-gray-600 leading-relaxed italic">
                  We don&apos;t know their name yet. But somewhere in our network is a filmmaker, musician, developer, designer, photographer or storyteller who will eventually say: &ldquo;I&apos;m ready to go.&rdquo;
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['They will need formation', 'They will need equipment', 'They will need training', 'They will need support', 'They will need funding', 'They will need a place to serve'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600 font-libre">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-libre text-gray-600 text-sm mb-6">And someone will need to say: <strong>&ldquo;We&apos;ll help you get there.&rdquo;</strong> Your gift could be that yes.</p>
                <Link href="/fund" className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                  HELP SEND THE FIRST →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 14 — THE BIGGER VISION */}
      <section className="relative py-20 bg-white border-t border-gray-100" id="the-vision">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                  We&apos;re starting small on purpose.
                </h2>
                <p className="font-libre text-gray-600 leading-relaxed italic">
                  One physical Kampus. One network. One creative at a time. One mission at a time. We don&apos;t need to build everything at once. We need to prove that the pathway works.
                </p>
              </div>
              <div>
                <ul className="space-y-3 mb-6">
                  {['Raise one', 'Equip one', 'Send one', 'Then help them raise the next', "That's how movements grow", '5.5 billion is too big for one organization — but not too big for a movement'].map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600 font-libre">
                      <img src="/icons/check.svg" alt="" className="w-4 h-4 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/fund" className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-black hover:text-white inline-block">
                  FUND THE SENDING →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 15 — THE FINAL CLOSE */}
      <section className="relative py-24 bg-white border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="bg-gradient-to-br from-[#0044CC] to-[#0033AA] border-2 border-[#F58220]/30 rounded-none p-12 text-white shadow-2xl shadow-blue-500/20">
              <p className="font-mono text-blue-100 mb-4 text-sm font-black uppercase tracking-widest">
                / 5.5 billion is too big for one organization. But it isn&apos;t too big for a movement.
              </p>
              <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 leading-tight uppercase">
                RAISE. EQUIP. SEND.
              </h2>
              <p className="font-libre text-blue-50 text-lg mb-8 max-w-xl mx-auto italic">
                There are gifted creatives. There are places that need the gospel. There is a Church in Africa capable of sending. What&apos;s needed is a pathway. Blue Ox Kampus is building it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/fund" className="border border-[#F58220] bg-[#F58220] text-[#0044CC] font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-white hover:border-white hover:text-[#0044CC] shadow-lg shadow-orange-500/20">
                  FUND THE SENDING →
                </a>
                <a href="/#the-pathway" className="border border-white/50 bg-transparent text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 hover:bg-white hover:text-[#0044CC]">
                  EXPLORE THE MISSION →
                </a>
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
