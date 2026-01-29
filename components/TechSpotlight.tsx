import { MaskIcon, HeartbeatIcon, RobotIcon } from './Icons';
import Reveal from './Reveal';

export default function TechSpotlight(){
  return (
    <Reveal delay={0.18}>
      <section id="academy" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-[0.9]">Real Tools. <br/><span className="text-[#f38131]">Real Proof.</span></h2>
            <p className="text-gray-400 text-lg mb-10">We don't use demos. We deploy industry-grade simulation platforms used by top technical institutes globally.</p>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-2xl flex items-center space-x-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400">
                  <MaskIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest">Dig In Vision & WeldVR</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1">International welding certification pipelines (MIG/TIG/Stick).</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center space-x-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <HeartbeatIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest">UbiSim & Oxford Medical</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1">High-fidelity clinical scenarios for nursing exam readiness.</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl flex items-center space-x-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">
                  <RobotIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-xs tracking-widest">Simulanis & Transfr</h4>
                  <p className="text-xs text-gray-500 font-bold mt-1">Automotive, mechatronics, and safety-first industrial training.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-4 rounded-[2rem] border border-white/10 rotate-2">
              <div className="bg-black rounded-[1.5rem] p-8 border border-white/5">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Biometric Skills Passport</span>
                  <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">Verified</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-gray-400">Weld Consistency</span>
                    <span className="text-xl font-black text-white">94.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f38131]" style={{width: '94%'}} />
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-xs font-bold text-gray-400">Safety Protocol Score</span>
                    <span className="text-xl font-black text-white">100%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400" style={{width: '100%'}} />
                  </div>
                </div>
                <div className="mt-12 p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">AI-Generated Verification QR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Reveal>
  );
}
