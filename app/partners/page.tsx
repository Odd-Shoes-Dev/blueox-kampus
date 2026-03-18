'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';

export default function PartnersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('partner');

  const openForm = (type: FormType) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const partners = [
    {
      name: 'SIMX',
      category: 'Medical Training Partner',
      description: 'First and most advanced medical VR training platform globally, developed by clinicians. Features the largest library of virtual patient encounters with 150+ simulations across 97 immersive environments, patented multiplayer technology for team training in nursing, EMS, and military medical education.',
      services: ['Medical VR Simulations', 'Patient Encounters', 'Nursing Training', 'EMS & Military Medical'],
      logo: '[Add logo: SIMX]',
      website: 'https://www.simxvr.com'
    },
    {
      name: 'VRpatients',
      category: 'Medical Training Partner',
      description: 'No-code clinical simulation platform powered by PhysioLogicAI for multilingual AI patient conversations. Supports VR, Mixed Reality, and web-based simulations with 35+ ready-to-run scenarios. Customizable authoring tool enables educators to create patient cases with asynchronous 24/7 access.',
      services: ['Clinical Simulations', 'AI Patient Conversations', 'VR & Mixed Reality', 'Nursing Education'],
      logo: '[Add logo: VRpatients]',
      website: 'https://www.vrpatients.com'
    },
    {
      name: 'UbiSim',
      category: 'Medical Training Partner',
      description: 'Nursing VR simulation platform offering high-fidelity clinical scenarios for exam readiness and professional development with advanced patient simulation technology.',
      services: ['Nursing VR Simulations', 'Clinical Scenarios', 'Exam Preparation', 'Patient Simulation'],
      logo: '[Add logo: UbiSim]',
      website: 'https://www.ubisim.ca'
    },
    {
      name: 'WeldVR',
      category: 'Industrial Training Partner',
      description: 'Advanced welding simulation system designed by experts at Cythero. Supports MIG, TIG, and Stick welding with real welding torches included. Features performance tracking for travel speed, work angle, arc length, and work distance. Trusted by 120+ organizations including Toyota and LKQ.',
      services: ['Welding Simulation', 'MIG/TIG/Stick Training', 'Performance Tracking', 'Industrial Safety'],
      logo: '[Add logo: WeldVR]',
      website: 'https://www.weldvr.com'
    },
    {
      name: 'SIMBOTT',
      category: 'Industrial Training Partner',
      description: 'India-based AR, VR, and MR training simulations company specializing in welding (VR/AR/MR), spray painting, military training, fire safety, air force simulation, excavator/dozer operation, and comprehensive safety training programs for industrial sectors.',
      services: ['Welding Simulators', 'Spray Painting VR', 'Military Training', 'Safety Training'],
      logo: '[Add logo: SIMBOTT]',
      website: 'https://www.simbott.com'
    },
    {
      name: 'DIG IN VISION',
      category: 'Industrial Training Partner',
      description: 'Poland-based portable VR welding simulator with Weld-Master AI for self-learning. Virtual Training Center provides complete VR welding experience for both beginners and professionals. Deployed globally including Cranfield University UK, with focus on MIG/MAG welding methods.',
      services: ['VR Welding', 'AI Self-Learning', 'Virtual Training Center', 'MIG/MAG Training'],
      logo: '[Add logo: DIG IN VISION]',
      website: 'https://www.diginvision.com'
    },
    {
      name: 'Simulanis',
      category: 'Industrial Training Partner',
      description: 'India\'s most awarded XR company, ranked #1 in India and Top-15 globally. Enterprise AR/VR solutions for oil & gas, automotive, pharmaceutical, defense, construction, and energy sectors. Trained 40,000+ workforce across 200+ enterprise clients with the Simulanis Uno unified platform.',
      services: ['Enterprise XR', 'Oil & Gas Training', 'Automotive VR', 'Industrial Training'],
      logo: '[Add logo: Simulanis]',
      website: 'https://www.simulanis.com'
    },
    {
      name: 'Transfr',
      category: 'Workforce Development Partner',
      description: 'Immersive career exploration and training platform connecting classrooms to careers. Transfr Trek enables learners to explore 150+ careers across 16 career clusters, while Transfr Train provides VR skills training. Serves 275,000+ learners across 48 states with 1M+ simulations experienced.',
      services: ['Career Exploration', 'VR Skills Training', 'Workforce Development', 'K-12 & Community Colleges'],
      logo: '[Add logo: Transfr]',
      website: 'https://transfrinc.com'
    },
    {
      name: 'Luminous XR',
      category: 'Digital Twin Partner',
      description: 'ScanOps platform bridging reality capture to operations. High-accuracy 3D laser scanning, real-time digital twins, and mixed reality for frontline execution. Immersive technical and safety training with AR guidance. Trusted by Saudi Aramco, PepsiCo, Saint Gobain, and Diageo across oil/gas, manufacturing, aviation, defense, automotive, and pharma sectors.',
      services: ['3D Laser Scanning', 'Digital Twins', 'Mixed Reality Training', 'Reality Capture'],
      logo: '[Add logo: Luminous XR]',
      website: 'https://www.luminousxr.com'
    },
    {
      name: 'SimLab Soft',
      category: 'Technology Partner',
      description: 'Professional VR creation and 3D visualization software platform. SimLab Composer provides complete 3D visualization tools, while SimLab VR Studio enables code-free VR experience creation for product visualization and vocational training. Trusted by NASA, Tesla, Boeing, Mercedes-Benz, Disney, and Samsung.',
      services: ['VR Creation Platform', '3D Visualization', 'VR Studio', 'CAD Integration'],
      logo: '[Add logo: SimLab Soft]',
      website: 'https://www.simlab-soft.com'
    },
    {
      name: 'Cognisco',
      category: 'Technology Partner',
      description: 'MyKnow 365 competency management platform for workforce assessment and risk management. Features powerful assessments to identify knowledge gaps, comprehensive competency frameworks, skills passports, and robust reporting dashboards. Trusted by NHS, KPMG, BT, Barclays, and HSBC with 20+ years enterprise experience.',
      services: ['Competency Management', 'Skills Assessment', 'Workforce Analytics', 'Reporting Tools'],
      logo: '[Add logo: Cognisco]',
      website: 'https://www.cognisco.com'
    }
  ,
    {
      name: 'GiGi Foundation',
      category: 'Education Partner',
      description: 'GiGi Foundation builds digital skills and creates pathways into IT for socially excluded youth. They run training, internships and international projects (e.g., Jet for Africa, Digital Jumpstart) to support students across Poland, Uganda, Tanzania and Eastern Europe.',
      services: ['Digital Skills Training', 'Internships & Mentoring', 'EduTech Tools & Platforms'],
      logo: 'https://www.fundacjagigi.pl/img/about-bg.jpg',
      website: 'https://www.fundacjagigi.pl/'
    },
    {
      name: 'GIGI Global',
      category: 'Investment & Strategy Partner',
      description: 'GIGI Global is a business growth and software strategy firm delivering end-to-end IT solutions, stakeholder strategy and digital process optimisation. They partner with organisations to scale platforms and launch new digital products.',
      services: ['Software Strategy', 'Digital Transformation', 'Project Delivery'],
      logo: 'https://gigiglobal.com/img/logo-big.png',
      website: 'https://gigiglobal.com/'
    },
    {
      name: 'Haiven',
      category: 'Product Partner',
      description: 'Haiven builds community-first chat and interactive experiences for gamers and creators, focusing on honest, non-predatory monetisation and creative connection. They are actively seeking strategic partnerships and collaboration opportunities.',
      services: ['Chat Platform', 'Community Engagement', 'Subscription Products'],
      logo: 'https://haiven.chat/assets/logo-BujTDjL7.svg',
      website: 'https://haiven.chat/'
    },
    {
      name: 'Gravity Jack',
      category: 'AR/VR Partner',
      description: 'Gravity Jack are AR/VR pioneers (since 2009) delivering immersive experiences and WebAR activations for clients including Meta, T‑Mobile and branded AR campaigns. Their work spans WebAR, mobile AR, VR games and Web3 experiments.',
      services: ['Augmented Reality', 'Virtual Reality', 'WebAR', 'Game Development'],
      logo: '[Add logo: Gravity Jack]',
      website: 'https://www.gravityjack.com/'
    },
    {
      name: 'GLP Software',
      category: 'Technology Partner',
      description: 'GLP Software specialises in rapid product development, PoC and MVP delivery for startups and enterprises. They offer full-stack development, low-code/no-code options and support for EU grant-funded projects.',
      services: ['MVP & PoC Development', 'Web & Mobile Apps', 'Product Design', 'EU Fund Support'],
      logo: 'https://glpsoftware.pl/img/glp_0001_2.webp',
      website: 'https://glpsoftware.pl/'
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
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-[#e05a3a]/30 backdrop-blur-sm text-[#f4a08e] text-sm font-bold mb-6 border border-[#e05a3a]/30">
                • Building Together
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-black">
                Our <span className="gradient-text-3d">Partners</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Collaborating with industry leaders, innovators, and community organizations to create opportunities 
                and drive technological advancement in Uganda.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Meet Our <span className="text-[#e05a3a]">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Organizations that believe in our mission and support our students
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {partners.map((partner, index) => (
              <Reveal key={index} delay={0.3 + index * 0.1}>
                <div className="border-l-4 border-[#e05a3a] pl-6">
                  <div className="mb-2">
                    <span className="text-[#e05a3a] text-sm font-semibold uppercase tracking-wide">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e05a3a] hover:text-[#f4a08e] transition-colors font-semibold text-sm"
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Why <span className="text-[#e05a3a]">Partner</span> With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Benefits of joining the Blue OX Kampus ecosystem
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnershipBenefits.map((benefit, index) => (
              <Reveal key={index} delay={0.5 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#e05a3a]/50 transition-all duration-300">
                  <img src={`/icons/${benefit.icon}`} alt={benefit.title} className="w-14 h-14 mb-4" />
                  <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                Partnership <span className="text-[#e05a3a]">Opportunities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find the partnership type that aligns with your organization's goals
              </p>
            </div>
          </Reveal>

          <div className="space-y-6 mb-16">
            {partnershipTypes.map((partnership, index) => (
              <Reveal key={index} delay={0.7 + index * 0.1}>
                <div className="glass rounded-xl p-8 hover:border-[#e05a3a]/50 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-black mb-2">{partnership.type}</h3>
                    <p className="text-gray-700 leading-relaxed">{partnership.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#e05a3a] mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-700 rounded-full text-sm">
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

      {/* Testimonials Section (Placeholder) */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.8}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
                What Our Partners <span className="text-[#e05a3a]">Say</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.9}>
              <div className="glass rounded-xl p-8">
                <div className="text-[#e05a3a] text-4xl mb-4">"</div>
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
                <div className="text-[#e05a3a] text-4xl mb-4">"</div>
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

      {/* CTA Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal delay={1.1}>
            <div className="glass rounded-2xl border-2 border-[#e05a3a]/50 p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Become a Partner
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Join us in building Uganda's tech future. Submit your partnership inquiry and let's discuss how we can collaborate to create opportunities and drive innovation together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openForm('partner')}
                  className="bg-[#e05a3a] hover:bg-[#c94e30] text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl inline-block"
                >
                  Partner With Us
                </button>
                <a 
                  href="mailto:blueoxrecruit@gmail.com"
                  className="border-2 border-black/20 px-10 py-5 rounded-full backdrop-blur-sm hover:bg-black/10 transition-all duration-300 text-lg text-black inline-block"
                >
                  Email Us
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Email: <a href="mailto:blueoxrecruit@gmail.com" className="text-[#e05a3a] hover:underline">blueoxrecruit@gmail.com</a>
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
    </>
  );
}








