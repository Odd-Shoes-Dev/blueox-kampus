import Reveal from './Reveal';

export default function WhyBlueOX() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              WHY <span className="text-[#ff4040]">BLUE OX</span>?
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Fast */}
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-8 hover:border-[#ff4040]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ff4040]/20 flex items-center justify-center">
                  <i className="fas fa-bolt text-[#ff4040] text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">WE'RE FAST.</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>5-day MVPs. Instant design turnarounds.</p>
                <p className="text-[#ff4040] font-semibold italic">No waiting.</p>
              </div>
            </div>
          </Reveal>

          {/* Lean */}
          <Reveal delay={0.3}>
            <div className="glass rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <i className="fas fa-coins text-blue-500 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">WE'RE LEAN.</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>Pay only for what you need.</p>
                <p className="text-[#ff4040] font-semibold italic">No hidden fees. No jargon.</p>
              </div>
            </div>
          </Reveal>

          {/* Movement */}
          <Reveal delay={0.4}>
            <div className="glass rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <i className="fas fa-heart text-green-500 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-white">WE'RE A MOVEMENT.</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>Every project you launch funds <span className="text-white font-semibold italic">free coding workshops</span> for young creators (ages 15-22).</p>
                <div className="pt-3 space-y-2 border-t border-gray-700">
                  <p className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-white">You build your dream.</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-white">We build the future.</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-[#ff4040]/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
