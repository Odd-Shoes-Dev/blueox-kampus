import Reveal from './Reveal';
import Link from 'next/link';

export default function AISection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
              AI & <span className="text-[#e05a3a]">MVP</span> Development
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From "what if?" to "wow!" in just 5 days. We turn your ideas into real working products.
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0.15}>
            <div className="glass p-8 rounded-2xl text-center hover:border-[#e05a3a]/50 transition-all">
              <div className="w-16 h-16 bg-[#e05a3a]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/icons/lightbulb.svg" alt="MVP Development" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-[#e05a3a]">MVP Development</h3>
              <p className="text-gray-600 text-sm mb-4">Launch your startup with a working product in 5 days</p>
              <div className="text-2xl font-black text-black">15 Credits</div>
              <div className="text-sm text-gray-600">$750</div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass p-8 rounded-2xl text-center hover:border-blue-400/50 transition-all">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/icons/design.svg" alt="Branding" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-blue-400">Branding</h3>
              <p className="text-gray-600 text-sm mb-4">Complete brand identity that stands out</p>
              <div className="text-2xl font-black text-black">10 Credits</div>
              <div className="text-sm text-gray-600">$500</div>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="glass p-8 rounded-2xl text-center hover:border-purple-400/50 transition-all">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <img src="/icons/image.svg" alt="Motion Graphics" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase mb-3 text-purple-400">Motion Graphics</h3>
              <p className="text-gray-600 text-sm mb-4">Eye-catching animations and video content</p>
              <div className="text-2xl font-black text-black">5 Credits</div>
              <div className="text-sm text-gray-600">$250</div>
            </div>
          </Reveal>
        </div>

        {/* The Blue OX Story - Two Column */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Reveal delay={0.4}>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/clock.svg" alt="Our Story" className="w-6 h-6" />
                <h3 className="text-2xl font-black uppercase">Our Story</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Born in 2020 as Cybernor in Kampala, we helped students build portfolios. In 2024, we rebranded to 
                <span className="text-[#e05a3a] font-bold"> Blue OX</span> - moving from helping people find 
                opportunities to <span className="font-bold text-black">creating them</span>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <img src="/icons/target.svg" alt="How We Work" className="w-6 h-6" />
                <h3 className="text-2xl font-black uppercase">How We Work</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-bold text-black">5-Day Sprint:</span> Monday kickoff, Wednesday check-in, Friday delivery. 
                No endless meetings, no scope creep - just <span className="text-blue-400 font-bold">results</span>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Reveal delay={0.55}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center">
              <div className="text-3xl font-black text-[#e05a3a] mb-1">50+</div>
              <div className="text-sm text-gray-600">MVPs Launched</div>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center">
              <div className="text-3xl font-black text-blue-400 mb-1">5 Days</div>
              <div className="text-sm text-gray-600">Average Delivery</div>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center">
              <div className="text-3xl font-black text-green-400 mb-1">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="p-6 rounded-xl bg-white/40 border border-gray-300/30 text-center">
              <div className="text-3xl font-black text-purple-400 mb-1">$50</div>
              <div className="text-sm text-gray-600">Per Credit</div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.75}>
          <div className="text-center">
            <Link 
              href="/academy" 
              className="inline-block bg-[#e05a3a] hover:bg-[#c94e30] text-white font-bold uppercase transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}









