import Reveal from './Reveal';

export default function PartnersGrid(){
  return (
    <Reveal delay={0.24}>
      <section id="partners" className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-black text-gray-600 uppercase tracking-[0.5em] mb-10">Industry-Grade Simulation Partners</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center">
          <span className="partner-logo">DIG IN VISION</span>
          <span className="partner-logo">WELDVR</span>
          <span className="partner-logo">SIMBOTT</span>
          <span className="partner-logo">SIMULANIS</span>
          <span className="partner-logo">TRANSFR</span>
          <span className="partner-logo">UBISIM</span>
          <span className="partner-logo">SIMX</span>
          <span className="partner-logo">OXFORD MEDICAL</span>
          <span className="partner-logo">VRPATIENTS</span>
          <span className="partner-logo">SIMLAB SOFT</span>
          <span className="partner-logo">LUMINOUS XR</span>
          <span className="partner-logo">COGNISCO</span>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
