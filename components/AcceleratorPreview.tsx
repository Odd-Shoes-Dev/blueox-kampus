import Reveal from './Reveal';
import Link from 'next/link';

export default function AcceleratorPreview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              <span className="text-[#ff4040]">Accelerator</span> Program
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Unlimited creative services for funded startups. Scale fast with design, MVP builds, and priority support.
            </p>
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0.15}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#ff4040]/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="fas fa-infinity text-[#ff4040] text-2xl"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-3">Unlimited Requests</h3>
              <p className="text-gray-400 text-sm">
                Pitch decks, branding, UI/UX, social graphics - submit as many requests as you need
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-3">Fast Turnaround</h3>
              <p className="text-gray-400 text-sm">
                Designs in 1-3 days, MVP prototypes in 5 days, with rapid iterations
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                <i className="fas fa-rocket text-green-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-black uppercase mb-3">MVP Add-Ons</h3>
              <p className="text-gray-400 text-sm">
                Mobile/web apps, backend setup, API integrations, low-code solutions
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Reveal delay={0.4}>
            <div className="p-6 rounded-xl bg-black/40 border border-white/5 text-center hover:border-[#ff4040]/30 transition-all">
              <div className="text-sm text-[#ff4040] font-bold mb-2">TRIAL</div>
              <div className="text-3xl font-black text-white mb-2">$2,000</div>
              <div className="text-gray-500 text-sm">1 Month</div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="p-6 rounded-xl bg-black/40 border border-white/5 text-center hover:border-blue-400/30 transition-all">
              <div className="text-sm text-blue-400 font-bold mb-2">STARTER</div>
              <div className="text-3xl font-black text-white mb-2">$4,500</div>
              <div className="text-gray-500 text-sm">3 Months</div>
              <div className="text-green-400 text-xs font-semibold mt-1">+1 Month Free</div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="p-6 rounded-xl bg-[#ff4040]/10 border-2 border-[#ff4040]/50 text-center hover:border-[#ff4040] transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4040] text-white text-xs font-bold py-1 px-3 rounded-full whitespace-nowrap">
                POPULAR
              </div>
              <div className="text-sm text-[#ff4040] font-bold mb-2">SCALE-UP</div>
              <div className="text-3xl font-black text-white mb-2">$8,000</div>
              <div className="text-gray-500 text-sm">6 Months</div>
              <div className="text-green-400 text-xs font-semibold mt-1">+2 Months Free</div>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="p-6 rounded-xl bg-black/40 border border-white/5 text-center hover:border-purple-400/30 transition-all">
              <div className="text-sm text-purple-400 font-bold mb-2">PREMIUM</div>
              <div className="text-3xl font-black text-white mb-2">$12,000</div>
              <div className="text-gray-500 text-sm">6 Months</div>
              <div className="text-purple-400 text-xs font-semibold mt-1">Design + MVP</div>
            </div>
          </Reveal>
        </div>

        {/* Early Bird Callout */}
        <Reveal delay={0.75}>
          <div className="glass p-8 rounded-2xl text-center mb-12 border-[#ff4040]/30">
            <div className="flex items-center justify-center gap-2 text-[#ff4040] text-xl font-black mb-3">
              <i className="fas fa-gift"></i>
              <span>EARLY-BIRD OFFER</span>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              First <span className="text-[#ff4040] font-bold">10 startups</span> get 
              <span className="text-[#ff4040] font-bold"> 15% off</span> all plans + priority onboarding
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.8}>
          <div className="text-center">
            <Link 
              href="/accelerator" 
              className="inline-block bg-[#ff4040] hover:bg-red-600 px-8 py-4 rounded-full text-white font-bold uppercase transition-all duration-300 hover:scale-105 mb-3"
            >
              View Full Program
            </Link>
            <p className="text-gray-500 text-sm">
              Minimum funding: <span className="text-[#ff4040]">$150k</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
