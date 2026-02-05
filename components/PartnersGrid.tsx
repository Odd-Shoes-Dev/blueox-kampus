import Reveal from './Reveal';

export default function PartnersGrid(){
  const partners = [
    {
      name: 'SIMX',
      category: 'Medical Training Partner',
      description: 'First and most advanced medical VR training platform globally, developed by clinicians. Features the largest library of virtual patient encounters with 150+ simulations across 97 immersive environments.',
      website: 'https://www.simxvr.com'
    },
    {
      name: 'VRpatients',
      category: 'Medical Training Partner',
      description: 'No-code clinical simulation platform powered by PhysioLogicAI for multilingual AI patient conversations. Supports VR, Mixed Reality, and web-based simulations with 35+ ready-to-run scenarios.',
      website: 'https://www.vrpatients.com'
    },
    {
      name: 'UbiSim',
      category: 'Medical Training Partner',
      description: 'Nursing VR simulation platform offering high-fidelity clinical scenarios for exam readiness and professional development with advanced patient simulation technology.',
      website: 'https://www.ubisim.ca'
    },
    {
      name: 'WeldVR',
      category: 'Industrial Training Partner',
      description: 'Advanced welding simulation system designed by experts at Cythero. Supports MIG, TIG, and Stick welding with real welding torches included. Trusted by 120+ organizations including Toyota and LKQ.',
      website: 'https://www.weldvr.com'
    },
    {
      name: 'SIMBOTT',
      category: 'Industrial Training Partner',
      description: 'India-based AR, VR, and MR training simulations company specializing in welding (VR/AR/MR), spray painting, military training, fire safety, and comprehensive safety training programs.',
      website: 'https://www.simbott.com'
    },
    {
      name: 'DIG IN VISION',
      category: 'Industrial Training Partner',
      description: 'Poland-based portable VR welding simulator with Weld-Master AI for self-learning. Virtual Training Center provides complete VR welding experience for both beginners and professionals.',
      website: 'https://www.diginvision.com'
    },
    {
      name: 'Simulanis',
      category: 'Industrial Training Partner',
      description: 'India\'s most awarded XR company, ranked #1 in India and Top-15 globally. Enterprise AR/VR solutions for oil & gas, automotive, pharmaceutical, defense, construction, and energy sectors.',
      website: 'https://www.simulanis.com'
    },
    {
      name: 'Transfr',
      category: 'Workforce Development Partner',
      description: 'Immersive career exploration and training platform connecting classrooms to careers. Transfr Trek enables learners to explore 150+ careers across 16 career clusters.',
      website: 'https://transfrinc.com'
    },
    {
      name: 'Luminous XR',
      category: 'Digital Twin Partner',
      description: 'ScanOps platform bridging reality capture to operations. High-accuracy 3D laser scanning, real-time digital twins, and mixed reality for frontline execution. Trusted by Saudi Aramco, PepsiCo, and Saint Gobain.',
      website: 'https://www.luminousxr.com'
    },
    {
      name: 'SimLab Soft',
      category: 'Technology Partner',
      description: 'Professional VR creation and 3D visualization software platform. SimLab Composer provides complete 3D visualization tools. Trusted by NASA, Tesla, Boeing, Mercedes-Benz, Disney, and Samsung.',
      website: 'https://www.simlab-soft.com'
    },
    {
      name: 'Cognisco',
      category: 'Technology Partner',
      description: 'MyKnow 365 competency management platform for workforce assessment and risk management. Trusted by NHS, KPMG, BT, Barclays, and HSBC with 20+ years enterprise experience.',
      website: 'https://www.cognisco.com'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#ff4040]">Partners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver world-class VR training experiences
            </p>
          </div>
        </Reveal>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Reveal key={index} delay={0.2 + index * 0.05}>
              <div className="glass rounded-xl p-6 hover:border-[#ff4040]/50 transition-all duration-300 h-full flex flex-col">
                <div className="mb-3">
                  <span className="text-[#ff4040] text-xs font-semibold uppercase tracking-wider">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  {partner.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                  {partner.description}
                </p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#ff4040] hover:text-[#ff8080] transition-colors font-semibold text-sm"
                >
                  Visit Website
                  <i className="fas fa-external-link-alt text-xs"></i>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Section */}
        <Reveal delay={0.8}>
          <div className="text-center bg-gray-900 rounded-2xl p-8 md:p-12 border border-[#ff4040]/20">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Become a Partner
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Join our ecosystem and help shape the future of vocational training in Africa. Let's build together.
            </p>
            <a 
              href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Blue%20OX%20Kampus." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#ff4040] hover:bg-[#ff2020] text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
            >
              Partner With Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
