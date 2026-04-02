'use client';

import { useState } from 'react';
import { Bebas_Neue, Libre_Baskerville, Space_Mono } from 'next/font/google';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';

const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });
const libreBaskerville = Libre_Baskerville({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-libre' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-mono' });

export default function PartnersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('partner');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const partners = [
    {
      name: 'DIG IN VISION',
      category: 'Industrial Training Partner',
      description: 'Poland-based portable VR welding simulator with Weld-Master AI for self-learning. Virtual Training Center provides complete VR welding experience for both beginners and professionals. Deployed globally including Cranfield University UK, with focus on MIG/MAG welding methods.',
      services: ['VR Welding', 'AI Self-Learning', 'Virtual Training Center', 'MIG/MAG Training'],
      logo: '/assets/images/diginvision/logo.png',
      skipLogoBg: true,
      website: 'https://www.diginvision.com'
    },
    {
      name: 'Kingdom Chaplain',
      category: 'Community Partnership',
      description: 'Kingdom Chaplain builds kingdom-focused networks and support systems for believers across industries and sectors. They champion faith-driven leadership development and create spaces for meaningful connection and growth in professional environments.',
      services: ['Chaplaincy Services', 'Leadership Development', 'Faith-Driven Community', 'Professional Mentorship'],
      logo: '/assets/images/kingdomchaplain/logo.png',
      skipLogoBg: true,
      website: 'https://kingdomchaplain.com'
    },
    {
      name: 'By the Fruit',
      category: 'Impact Partner',
      description: 'By the Fruit champions faith-driven ventures and impact-focused initiatives. They partner with builders and entrepreneurs to create lasting value aligned with kingdom principles, connecting purpose-driven work with community investment.',
      services: ['Impact Investing', 'Faith-Driven Ventures', 'Community Projects', 'Strategic Partnerships'],
      logo: '/assets/images/bythefruit/logo.png',
      skipLogoBg: true,
      website: 'https://bythe fruit.com'
    },
    {
      name: 'Haiven',
      category: 'Product Partner',
      description: 'Haiven builds community-first chat and interactive experiences for gamers and creators, focusing on honest, non-predatory monetisation and creative connection. They are actively seeking strategic partnerships and collaboration opportunities.',
      services: ['Chat Platform', 'Community Engagement', 'Subscription Products'],
      logo: '/assets/images/haiven/logo.svg',
      website: 'https://haiven.chat/'
    }
  ];

  const partnershipBenefits = [
    {
      icon: 'team.svg',
      title: 'Collaboration Opportunities',
      description: 'Work with talented students and graduates on real-world projects'
    },
    {
      icon: 'strategy.svg',
      title: 'Talent Pipeline',
      description: 'Access to skilled developers, designers, and VR specialists'
    },
    {
      icon: 'share.svg',
      title: 'Brand Visibility',
      description: 'Showcase your brand to Uganda\'s growing tech community'
    },
    {
      icon: 'rocket.svg',
      title: 'Innovation Access',
      description: 'Collaborate on cutting-edge projects and emerging technologies'
    },
    {
      icon: 'global.svg',
      title: 'Social Impact',
      description: 'Contribute to youth employment and technology education'
    },
    {
      icon: 'chart.svg',
      title: 'Market Insights',
      description: 'Gain insights into local tech trends and market needs'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Technology Partner',
      description: 'Provide hardware, software, or technical expertise to enhance our training programs.',
      examples: ['VR equipment providers', 'Software platforms', 'Cloud service providers', 'Tech companies']
    },
    {
      type: 'Education Partner',
      description: 'Collaborate on curriculum development, certification programs, and training standards.',
      examples: ['Universities', 'Training institutions', 'Certification bodies', 'Industry experts']
    },
    {
      type: 'Investment Partner',
      description: 'Support startups through funding, acceleration programs, and mentorship.',
      examples: ['VCs', 'Angel investors', 'Accelerators', 'Impact investors']
    },
    {
      type: 'Hiring Partner',
      description: 'Recruit talented graduates for internships, contract work, or full-time positions.',
      examples: ['Tech companies', 'Startups', 'Design agencies', 'Consulting firms']
    },
    {
      type: 'Community Partner',
      description: 'Support community initiatives, infrastructure, and social impact programs.',
      examples: ['NGOs', 'Government agencies', 'Community organizations', 'Foundations']
    }
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
          <div className="academy-ticker bg-white" aria-label="Partners ticker">
            <div className="academy-ticker-track">
              <div className="academy-ticker-group">
                <span className="academy-ticker-item">INDUSTRY PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">TECH INNOVATORS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIRING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY ORGS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">FUNDING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">BUILDING TOGETHER</span>
                <span className="academy-ticker-sep">•</span>
              </div>
              <div className="academy-ticker-group" aria-hidden="true">
                <span className="academy-ticker-item">INDUSTRY PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">TECH INNOVATORS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">HIRING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">COMMUNITY ORGS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">FUNDING PARTNERS</span>
                <span className="academy-ticker-sep">•</span>
                <span className="academy-ticker-item">BUILDING TOGETHER</span>
                <span className="academy-ticker-sep">•</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Partners</div>
              <h1 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Our <span className="gradient-text-3d">Partners</span>
              </h1>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-3xl mx-auto italic">
                Collaborating with industry leaders, innovators, and community organizations to create opportunities 
                and drive technological advancement in Uganda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative -pt-8 md:pt-16 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Ecosystem</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Meet Our <span className="text-[#F58220]">Partners</span>
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                Organizations that believe in our mission and support our students
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {partners.map((partner, index) => (
              <Reveal key={index} delay={0.3 + index * 0.1}>
                <div className="border-l-4 border-[#F58220] pl-6">
                  <div className="mb-2">
                    <span className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider">
                      {partner.category}
                    </span>
                  </div>
                  {partner.logo && partner.logo.startsWith('<svg') ? (
                    <div className="mb-3 w-40 h-14">
                      <div dangerouslySetInnerHTML={{ __html: partner.logo }} />
                    </div>
                  ) : partner.logo && !partner.logo.startsWith('[') ? (
                    <div className={`${(partner as any).skipLogoBg ? '' : 'bg-gray-900 rounded-lg p-3'} w-fit mb-3`}>
                      <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain max-w-[200px]" />
                    </div>
                  ) : (
                    <h3 className="text-2xl md:text-3xl font-bebas text-[#0044CC] mb-3 uppercase">
                      {partner.name}
                    </h3>
                  )}
                  <p className="font-libre text-gray-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#F58220] hover:text-[#f4a08e] transition-colors font-mono text-xs font-black uppercase tracking-wider"
                  >
                    Visit Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.4}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Benefits</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Why <span className="text-[#F58220]">Partner</span> With Us?
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                Benefits of joining the Blue OX Kampus ecosystem
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <Reveal key={index} delay={0.5 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#F58220]/50 transition-all duration-300">
                  <img src={`/icons/${benefit.icon}`} alt={benefit.title} className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-bebas text-[#0044CC] uppercase tracking-wide mb-3">{benefit.title}</h3>
                  <p className="font-libre text-gray-600">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.6}>
            <div className="text-center mb-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Opportunities</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-6 leading-tight uppercase">
                Partnership <span className="text-[#F58220]">Opportunities</span>
              </h2>
              <p className="font-libre text-base sm:text-lg text-gray-600 max-w-2xl mx-auto italic">
                Find the partnership type that aligns with your organization's goals
              </p>
            </div>
          </Reveal>

          <div className="space-y-6 mb-16">
            {partnershipTypes.map((partnership, index) => (
              <Reveal key={index} delay={0.7 + index * 0.1}>
                <div className="glass rounded-xl p-8 hover:border-[#F58220]/50 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bebas text-[#0044CC] mb-2 uppercase">{partnership.type}</h3>
                    <p className="font-libre text-gray-700 leading-relaxed">{partnership.description}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-black uppercase tracking-wider text-[#F58220] mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-libre">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section — hidden until real partner quotes are collected
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.8}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                What Our Partners <span className="text-[#F58220]">Say</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.9}>
              <div className="glass rounded-xl p-8">
                <div className="text-[#F58220] text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">
                  Partnering with Blue OX Kampus has given us direct access to some of the most talented young developers 
                  in East Africa. Their training programs produce job-ready graduates.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-black font-bold">[Partner Name]</div>
                    <div className="text-gray-600 text-sm">[Company, Position]</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.0}>
              <div className="glass rounded-xl p-8">
                <div className="text-[#F58220] text-4xl mb-4">"</div>
                <p className="text-gray-700 text-lg italic mb-6">
                  The social impact component is what drew us to Blue OX Kampus. Knowing that our partnership helps 
                  fund free training for youth makes this collaboration even more meaningful.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <img src="/icons/user.svg" alt="User" className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-black font-bold">[Partner Name]</div>
                    <div className="text-gray-600 text-sm">[Organization, Role]</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal delay={1.1}>
            <div className="glass rounded-2xl border-2 border-[#F58220]/50 p-12">
              <div className="text-[#F58220] text-xs font-mono font-black uppercase tracking-wider mb-4">/ Partnership</div>
              <h2 className="text-4xl md:text-5xl font-bebas text-[#0044CC] mb-4 leading-tight uppercase">
                Become a Partner
              </h2>
              <p className="font-libre text-gray-700 mb-8 text-base sm:text-lg italic">
                Join us in building Uganda's tech future. Submit your partnership inquiry and let's discuss how we can collaborate to create opportunities and drive innovation together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('partner')}
                  className="inline-block border border-[#F58220] bg-transparent text-[#F58220] font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-[#F58220] hover:text-white"
                >
                  PARTNER WITH US
                </button>
                <a 
                  href="mailto:blueoxrecruit@gmail.com"
                  className="inline-block border border-black bg-transparent text-black font-semibold text-sm px-6 py-2 rounded-none transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                >
                  EMAIL US
                </a>
              </div>
              <p className="font-libre text-gray-600 text-sm mt-6">
                Email: <a href="mailto:blueoxrecruit@gmail.com" className="text-[#F58220] hover:underline">blueoxrecruit@gmail.com</a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={formType}
      />

      <Footer />
    </div>
  );
}








