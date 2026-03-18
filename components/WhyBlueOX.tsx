import Reveal from './Reveal';

export default function WhyBlueOX() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              WHY <span className="text-[#e05a3a]">BLUE OX</span>?
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Fast */}
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-8 hover:border-[#e05a3a]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#e05a3a]/20 flex items-center justify-center">
                  <img src="/icons/target.svg" alt="Fast" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-black">WE'RE FAST.</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>5-day MVPs. Instant design turnarounds.</p>
                <p className="text-[#e05a3a] font-semibold italic">No waiting.</p>
              </div>
            </div>
          </Reveal>

          {/* Lean */}
          <Reveal delay={0.3}>
            <div className="glass rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <img src="/icons/dollar.svg" alt="Lean" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-black">WE'RE LEAN.</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>Pay only for what you need.</p>
                <p className="text-[#e05a3a] font-semibold italic">No hidden fees. No jargon.</p>
              </div>
            </div>
          </Reveal>

          {/* Movement */}
          <Reveal delay={0.4}>
            <div className="glass rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <img src="/icons/heart.svg" alt="Movement" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-black">WE'RE A MOVEMENT.</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>Every project you launch funds <span className="text-black font-semibold italic">free coding workshops</span> for young creators (ages 15-22).</p>
                <div className="pt-3 space-y-2 border-t border-gray-700">
                  <p className="flex items-center gap-2">
                    <img src="/icons/check.svg" alt="Check" className="w-4 h-4" />
                    <span className="text-black">You build your dream.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <img src="/icons/check.svg" alt="Check" className="w-4 h-4" />
                    <span className="text-black">We build the future.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-[#e05a3a]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}








