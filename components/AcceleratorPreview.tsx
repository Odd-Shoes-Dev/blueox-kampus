import Reveal from './Reveal';
import Link from 'next/link';

export default function AcceleratorPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              <span className="text-[#e05a3a]">Accelerator</span> Program
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Unlimited creative services for funded startups. Scale fast with design, MVP builds, and priority support.
            </p>
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0.15}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-[#e05a3a]/20 rounded-2xl flex items-center justify-center mb-4">
                <img src="/icons/refresh.svg" alt="Unlimited" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3">Unlimited Requests</h3>
              <p className="text-gray-600 text-sm">
                Pitch decks, branding, UI/UX, social graphics - submit as many requests as you need
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                <img src="/icons/target.svg" alt="Fast" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">
                Designs in 1-3 days, MVP prototypes in 5 days, with rapid iterations
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="glass p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                <img src="/icons/rocket.svg" alt="MVP" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3">MVP Add-Ons</h3>
              <p className="text-gray-600 text-sm">
                Mobile/web apps, backend setup, API integrations, low-code solutions
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Reveal delay={0.4}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center hover:border-[#e05a3a]/30 transition-all">
              <div className="text-sm text-[#e05a3a] font-bold mb-2">TRIAL</div>
              <div className="text-3xl font-black text-black mb-2">$2,000</div>
              <div className="text-gray-600 text-sm">1 Month</div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center hover:border-blue-400/30 transition-all">
              <div className="text-sm text-blue-400 font-bold mb-2">STARTER</div>
              <div className="text-3xl font-black text-black mb-2">$4,500</div>
              <div className="text-gray-600 text-sm">3 Months</div>
              <div className="text-green-400 text-xs font-semibold mt-1">+1 Month Free</div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="p-6 rounded-xl bg-[#e05a3a]/10 border-2 border-[#e05a3a]/50 text-center hover:border-[#e05a3a] transition-all relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e05a3a] text-white text-xs font-bold py-1 px-3 rounded-full whitespace-nowrap">
                POPULAR
              </div>
              <div className="text-sm text-[#e05a3a] font-bold mb-2">SCALE-UP</div>
              <div className="text-3xl font-black text-black mb-2">$8,000</div>
              <div className="text-gray-600 text-sm">6 Months</div>
              <div className="text-green-400 text-xs font-semibold mt-1">+2 Months Free</div>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center hover:border-purple-400/30 transition-all">
              <div className="text-sm text-purple-400 font-bold mb-2">PREMIUM</div>
              <div className="text-3xl font-black text-black mb-2">$12,000</div>
              <div className="text-gray-600 text-sm">6 Months</div>
              <div className="text-purple-400 text-xs font-semibold mt-1">Design + MVP</div>
            </div>
          </Reveal>
        </div>

        {/* Early Bird Callout */}
        <Reveal delay={0.75}>
          <div className="glass p-8 rounded-2xl text-center mb-12 border-[#e05a3a]/30">
            <div className="flex items-center justify-center gap-2 text-[#e05a3a] text-xl font-black mb-3">
              <img src="/icons/gift.svg" alt="Offer" className="w-6 h-6" />
              <span>EARLY-BIRD OFFER</span>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              First <span className="text-[#e05a3a] font-bold">10 startups</span> get 
              <span className="text-[#e05a3a] font-bold"> 15% off</span> all plans + priority onboarding
            </p>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.8}>
          <div className="text-center">
            <Link 
              href="/accelerator" 
              className="inline-block bg-[#e05a3a] hover:bg-[#c94e30] text-white font-bold uppercase transition-all duration-300 hover:scale-105 mb-3"
            >
              View Full Program
            </Link>
            <p className="text-gray-600 text-sm">
              Minimum funding: <span className="text-[#e05a3a]">$150k</span>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}








