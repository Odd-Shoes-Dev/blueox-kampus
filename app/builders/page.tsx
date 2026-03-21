'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';
import Link from 'next/link';

export default function BuildersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('academy');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const podTypes = [
    {
      icon: 'code.svg',
      title: 'React Pod',
      stack: 'React, Next.js, TypeScript',
      desc: 'Frontend development for web products — dashboards, landing pages, full-stack apps.',
    },
    {
      icon: 'brain.svg',
      title: 'Python / Data Pod',
      stack: 'Python, FastAPI, SQL, pandas',
      desc: 'Backend APIs, data pipelines, and AI-adjacent tooling.',
    },
    {
      icon: 'shield.svg',
      title: 'QA Pod',
      stack: 'Cypress, Playwright, Jest',
      desc: 'Test automation, QA frameworks, regression testing, and quality ownership.',
    },
    {
      icon: 'message.svg',
      title: 'Support Eng Pod',
      stack: 'Customer APIs, integrations, tooling',
      desc: 'Technical support engineering and product integrations.',
    },
    {
      icon: 'design.svg',
      title: 'Design Pod',
      stack: 'Figma, Framer, UI systems',
      desc: 'Product design, component libraries, and user experience work.',
    },
    {
      icon: 'layers.svg',
      title: 'DevOps / Infra Pod',
      stack: 'Docker, CI/CD, AWS/GCP',
      desc: 'Infrastructure, deployment pipelines, and developer experience.',
    },
  ];

  const features = [
    { icon: 'rocket.svg',   title: 'Ship real features',              desc: 'Work on live international products with real users. Your code ships. Your name goes on it.' },
    { icon: 'global.svg',   title: 'Work from campus',                desc: 'Power, fibre WiFi, and mentorship — all provided. No cost to join or participate.' },
    { icon: 'crown.svg',    title: 'Weekly competitions',             desc: 'Every Saturday, builders compete. Top 10–20% ranked by performance get placed first.' },
    { icon: 'document.svg', title: 'Professional certificate',        desc: 'Receive a certificate and a direct reference from your startup upon completing the pod.' },
    { icon: 'chart.svg',    title: 'Career pipeline',                 desc: 'Pod placement leads to contract work, then full employment in Poland, Netherlands, UAE, and Gulf.' },
    { icon: 'team.svg',     title: 'No bias in selection',           desc: 'Placement is 100% performance-ranked. No CVs. No favourites. Just proof of work.' },
  ];

  const howItWorks = [
    { step: 1, icon: 'book.svg',     title: 'Join BlueOx Kampus',          desc: 'Enroll in campus training — fundamentals, modern frameworks, real-world problem-solving.' },
    { step: 2, icon: 'star.svg',     title: 'Compete every Saturday',       desc: 'Weekly ranked competitions. Top 10–20% move to placement. Pure performance — no CVs.' },
    { step: 3, icon: 'target.svg',   title: 'Get matched to a pod',         desc: 'Based on your rank and skill profile, you are matched to a startup pod that fits your stack.' },
    { step: 4, icon: 'rocket.svg',   title: 'Ship weekly. Earn your rep.',  desc: 'Work from campus in your pod. Coordinator manages the client. You build. You ship. You grow.' },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 bg-white">

        {/* Ticker */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8 bg-white py-3">
          <div className="academy-ticker bg-white" aria-label="Pod types ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">REACT POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">PYTHON / DATA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">QA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SUPPORT ENG POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">WEEKLY COMPETITIONS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SHIP REAL WORK</span>
                <span className="academy-ticker-sep">•</span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">REACT POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">PYTHON / DATA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">QA POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SUPPORT ENG POD</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">WEEKLY COMPETITIONS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">SHIP REAL WORK</span>
                <span className="academy-ticker-sep">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Get an International Company<br />
                on Your <span className="text-[#e05a3a]">CV.</span>
              </h1>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                BlueOx Kampus places you in an execution pod with a real startup for 8–16 weeks. Work from campus. Pay nothing. Compete every Saturday — top performers get placed first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('academy')}
                  className="border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#c94e30] hover:border-[#c94e30]"
                >
                  APPLY TO THE TALENT POOL
                </button>
                <a
                  href="#how-it-works"
                  className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  HOW IT WORKS
                </a>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-4">
              <div className="text-center">
                <div className="blueox-subheading text-4xl sm:text-5xl text-[#e05a3a] mb-2">Free</div>
                <div className="blueox-body text-gray-600 text-sm">No cost to join</div>
              </div>
              <div className="text-center">
                <div className="blueox-subheading text-4xl sm:text-5xl text-black mb-2">8–16wk</div>
                <div className="blueox-body text-gray-600 text-sm">Pod duration</div>
              </div>
              <div className="text-center">
                <div className="blueox-subheading text-4xl sm:text-5xl text-[#e05a3a] mb-2">Top 20%</div>
                <div className="blueox-body text-gray-600 text-sm">Placed by competition rank</div>
              </div>
              <div className="text-center">
                <div className="blueox-subheading text-4xl sm:text-5xl text-black mb-2">4+</div>
                <div className="blueox-body text-gray-600 text-sm">Active markets</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                What You <span className="text-[#e05a3a]">Get</span>
              </h2>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Every builder in a pod works on a live product with real users. Your work ships. Your name goes on it.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#e05a3a]/50 transition-all duration-300">
                  <img src={`/icons/${f.icon}`} alt={f.title} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Compete. Rank. Place. <span className="text-[#e05a3a]">Ship.</span>
              </h2>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                The path from student to international shipping pod is a 4-step process. No CVs. No guesswork. Just proof.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {howItWorks.map((item, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="border-l-4 border-[#e05a3a] pl-6 flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                      <img src={`/icons/${item.icon}`} alt={`Step ${item.step}`} className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wider mb-1">Step {item.step}</div>
                    <h3 className="text-xl font-black text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pod Types */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Pick Your <span className="text-[#e05a3a]">Specialisation</span>
              </h2>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Tell us your stack. We match you to the right pod.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podTypes.map((pod, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className="bg-white border border-gray-200 rounded-none p-6 hover:border-[#e05a3a] transition-all duration-300">
                  <img src={`/icons/${pod.icon}`} alt={pod.title} className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-black text-black mb-1">{pod.title}</h3>
                  <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wide mb-3">{pod.stack}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pod.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathway */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                The Pipeline Doesn't Stop <span className="text-[#e05a3a]">at the Pod.</span>
              </h2>
              <p className="blueox-body text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Builders who ship well get promoted. The pathway is clear and intentional.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: 'target.svg',  stage: 'Stage 1', title: 'Pod Builder',       price: '8–16 weeks', desc: 'Ship for a real startup. Earn your rep. Get certified.' },
              { icon: 'dollar.svg',  stage: 'Stage 2', title: 'Contract Work',      price: 'Paid',       desc: 'Proven builders move to paid contracts, managed by campus.' },
              { icon: 'global.svg',  stage: 'Stage 3', title: 'Full Employment',    price: 'Placed',     desc: 'Top performers placed in Poland, Netherlands, UAE, or Gulf.' },
            ].map((stage, index) => (
              <Reveal key={index} delay={0.2 + index * 0.1}>
                <div className={`relative bg-white border rounded-none p-8 transition-all duration-200 ${index === 2 ? 'border-[#e05a3a]' : 'border-gray-200 hover:border-[#e05a3a]'}`}>
                  {index === 2 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#e05a3a] text-white px-4 py-1 rounded-none text-sm font-semibold uppercase tracking-wider">Goal</span>
                    </div>
                  )}
                  <img src={`/icons/${stage.icon}`} alt={stage.title} className="w-12 h-12 mb-4 text-blue-500" style={{ display: 'block' }} />
                  <div className="text-[#e05a3a] text-xs font-semibold uppercase tracking-wide mb-1">{stage.stage}</div>
                  <h3 className="text-2xl font-black text-black mb-1">{stage.title}</h3>
                  <div className="blueox-subheading text-3xl text-[#e05a3a] mb-4">{stage.price}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
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
            <div className="bg-white border border-gray-200 rounded-none p-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Ready to Compete?<br />
                Ready to <span className="text-[#e05a3a]">Ship?</span>
              </h2>
              <p className="blueox-body text-gray-700 text-lg mb-8 max-w-xl mx-auto">
                Submit your application. We will reach out with the next competition date and onboarding details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('academy')}
                  className="border border-[#e05a3a] bg-[#e05a3a] text-white font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-[#c94e30] hover:border-[#c94e30]"
                >
                  APPLY NOW
                </button>
                <a
                  href="mailto:blueoxrecruit@gmail.com?subject=Builders Enquiry"
                  className="border border-black bg-transparent text-black font-semibold text-sm px-8 py-3 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  ASK A QUESTION
                </a>
              </div>
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
    </>
  );
}
