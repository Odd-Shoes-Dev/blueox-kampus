import Reveal from './Reveal';

export default function SkillsSection(){
  return (
    <Reveal delay={0.12}>
      <section className="py-12 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center"> <div className="text-xl sm:text-2xl font-black text-[#f38131] mb-1">MIG/TIG Sim</div><div className="text-sm text-gray-300">Welding scenarios</div></div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center"> <div className="text-xl sm:text-2xl font-black text-green-400 mb-1">UbiSim</div><div className="text-sm text-gray-300">Clinical training</div></div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center"> <div className="text-xl sm:text-2xl font-black text-sky-400 mb-1">Mechatronics</div><div className="text-sm text-gray-300">Automotive labs</div></div>
          <div className="p-6 rounded-2xl bg-black/40 border border-white/5 text-center"> <div className="text-xl sm:text-2xl font-black text-purple-400 mb-1">AI Verification</div><div className="text-sm text-gray-300">Biometric passport</div></div>
        </div>
        <div>
          <h3 className="text-3xl font-black mb-3">SKILLS ARE <span className="text-[#f38131]">MEASURED</span>, NOT ASSUMED</h3>
          <p className="text-gray-400 mb-4">Our AI-powered Biometric Skills Passport tracks accuracy, safety, and consistency across verified simulations. Employers receive verification backed by real performance data.</p>
          <a href="#" className="bg-white text-black px-4 py-2 rounded-full font-bold">View Curriculum</a>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
