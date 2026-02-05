import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';

export default function AcceleratorPage() {
  return (
    <>
      <Header />
      
      {/* 1. Hero Section - The "Hook" */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-[#ff4040]/20 backdrop-blur-sm text-[#ff4040] text-sm font-bold mb-6 border border-[#ff4040]/30">
                • For Startups That Have Raised $150k+
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
                We Build Your <span className="text-[#ff4040]">Entire Startup In 120 Hours</span>. Or We Work For Free.
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Most agencies guess what you want. We visualize it first. We combine <span className="text-[#ff4040] font-semibold">Rapid MVP Development</span> with <span className="text-blue-500 font-semibold">Unlimited Creative Designs</span> to ensure 100% clarity and speed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20ready%20to%20launch%20my%20MVP%20in%205%20days.%20I'd%20like%20to%20apply%20for%20the%20Accelerator." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ff4040] hover:bg-[#ff2020] text-white px-10 py-4 rounded-full font-black uppercase tracking-wide transition-all hover:scale-105 shadow-2xl"
                >
                  Apply for the Accelerator
                </a>
              </div>
              <p className="text-green-400 font-semibold text-sm">
                <i className="fas fa-shield-alt mr-2"></i>5-Day Functional Guarantee or a Full Refund
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. The Problem / Agitator */}
      <section className="relative py-20 bg-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
                  The <span className="text-red-500">Struggle</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Most founders waste <span className="text-red-400 font-bold">$50k and 6 months</span> on "v1" only to find out the market doesn't want it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
                  The <span className="text-[#ff4040]">Blue OX</span> Way
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-4">
                  We use a proprietary <span className="text-[#ff4040] font-bold">"Magic Formula"</span> of low-code tools like Strapi and Directus to launch your MVP before your coffee gets cold.
                </p>
                <p className="text-cyan-400 font-semibold">
                  <i className="fas fa-bullseye mr-2"></i>Exclusively for startups that have raised $150k+ and need to move now.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. The Offer: The Startup Foundation Kit */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.4}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
                THE <span className="text-[#ff4040]">FRICTIONLESS</span> STACK
              </h2>
              <p className="text-2xl text-gray-400 font-bold">WE SPEAK 'VISUAL', NOT JUST 'CODE'.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Reveal delay={0.5}>
              <div className="glass rounded-2xl p-8 border-2 border-blue-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-blue-500">1</span>
                  </div>
                  <h3 className="text-xl font-black text-white">VISUAL TRANSLATION</h3>
                </div>
                <h4 className="text-lg font-bold text-blue-400 mb-3">(Unlimited Designs)</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We turn your idea into a <span className="text-white font-semibold">High-Fidelity Design Prototype</span> immediately. You get unlimited revisions until the vision in your head matches the vision on the screen.
                </p>
                <p className="text-blue-400 font-semibold italic">
                  We don't code until you say "Perfect."
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="glass rounded-2xl p-8 border-2 border-[#ff4040]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#ff4040]/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-[#ff4040]">2</span>
                  </div>
                  <h3 className="text-xl font-black text-white">BLITZSCALE BUILD</h3>
                </div>
                <h4 className="text-lg font-bold text-[#ff4040] mb-3">(MVP)</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Once the design is locked, we use our <span className="text-[#ff4040] font-semibold">"Magic Formula"</span> (Strapi + Directus) to build the functional, API-ready product in 1 to 5 days.
                </p>
                <p className="text-[#ff4040] font-semibold italic">
                  From pixels to production, lightning fast.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="glass rounded-2xl p-8 border-2 border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-green-500">3</span>
                  </div>
                  <h3 className="text-xl font-black text-white">THE GUARANTEE</h3>
                </div>
                <h4 className="text-lg font-bold text-green-400 mb-3">(Zero Risk)</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If the final code doesn't match the approved design pixels, we refund your deposit.
                </p>
                <p className="text-green-400 font-semibold italic">
                  We take all the risk. You get all the results.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Why This Works Section */}
          <Reveal delay={0.8}>
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border-2 border-[#ff4040]/20 mb-16">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">
                WHY THIS WORKS
              </h3>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  <span className="text-[#ff4040] font-bold text-xl">"WE SPEAK 'VISUAL', NOT JUST 'CODE'."</span>
                </p>
                <p>
                  Working with overseas teams can be hard if you have to manage them. At Blue OX, you don't manage the code. <span className="text-white font-semibold">You manage the Design</span>.
                </p>
                <p>
                  Since we offer <span className="text-blue-500 font-semibold">Unlimited Designs</span>, we can iterate on the visuals 100 times until it's right. It is frictionless, effortless, and impossible to misunderstand.
                </p>
                <div className="text-center pt-6">
                  <a 
                    href="https://wa.me/3197010209759?text=Hi!%20I'm%20ready%20to%20start%20my%20Visual-First%20Accelerator%20build." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#ff4040] hover:bg-[#ff2020] text-white px-10 py-4 rounded-full font-black uppercase tracking-wide transition-all hover:scale-105 shadow-2xl"
                  >
                    START MY BUILD
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. How It Works (The 5-Day Clock) */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.9}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
                The <span className="text-[#ff4040]">5-Day Clock</span>
              </h2>
              <p className="text-xl text-gray-400">How we turn your vision into reality</p>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={1.0}>
              <div className="glass rounded-xl p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#ff4040] rounded-full flex items-center justify-center text-white font-black text-2xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Day 1: Kickoff & Planning</h3>
                  <p className="text-gray-300">We map user flows and strip away the "fluff" to find your core value.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.1}>
              <div className="glass rounded-xl p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-black text-2xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Day 2: The Architecture</h3>
                  <p className="text-gray-300">We build the "Backyard"—functional, fast, and API-ready.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.2}>
              <div className="glass rounded-xl p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-black text-2xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Day 3: The Interface</h3>
                  <p className="text-gray-300">Your app comes to life with a sleek front-end using Webflow or React.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.3}>
              <div className="glass rounded-xl p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-black text-2xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Day 4: The Stress Test</h3>
                  <p className="text-gray-300">We break it so your users don't have to, then add the final polish.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1.4}>
              <div className="glass rounded-xl p-8 flex items-start gap-6 border-2 border-[#ff4040]/50">
                <div className="flex-shrink-0 w-16 h-16 bg-[#ff4040] rounded-full flex items-center justify-center text-white font-black text-2xl">
                  5
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Day 5: Launch Day 🚀</h3>
                  <p className="text-gray-300">Your MVP goes live for investors and customers to see.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. The Value Stack (The "No Brainer") */}
      <section className="relative py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={1.5}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
                The <span className="text-[#ff4040]">Value Stack</span>
              </h2>
              <p className="text-2xl text-gray-400 font-bold">The "No Brainer"</p>
            </div>
          </Reveal>

          <Reveal delay={1.6}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-[#ff4040]/30">
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-code text-2xl text-[#ff4040]"></i>
                    <span className="text-lg text-gray-300">Full MVP Build & Technical Moat</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$25,000</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-palette text-2xl text-purple-400"></i>
                    <span className="text-lg text-gray-300">Series-A Level Visual Branding</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$10,000</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-infinity text-2xl text-blue-400"></i>
                    <span className="text-lg text-gray-300">6 Months of Unlimited Design Support</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$60,000</span>
                </div>

                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <i className="fas fa-user-tie text-2xl text-green-400"></i>
                    <span className="text-lg text-gray-300">Direct Fractional CTO & Creative Director Access</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$20,000</span>
                </div>
              </div>

              <div className="bg-[#ff4040]/10 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-white">Total Real-World Value:</span>
                  <span className="text-4xl font-black text-white">$115,000</span>
                </div>
              </div>

              <div className="bg-[#ff4040] rounded-2xl p-8 text-center">
                <p className="text-white text-lg mb-2">Your Investment:</p>
                <p className="text-6xl font-black text-white mb-2">$12,000</p>
                <p className="text-white/80 text-sm">Save $103,000 + Get to Market 10x Faster</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={1.65}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-white">
                Choose Your <span className="text-[#ff4040]">Accelerator Package</span>
              </h2>
              <p className="text-xl text-gray-400">All packages include the 5-day MVP build</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trial Plan */}
            <Reveal delay={1.7}>
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col">
                <div className="text-sm text-[#ff4040] font-bold mb-2">TRIAL</div>
                <div className="text-4xl font-bold text-white mb-2">$2,000</div>
                <div className="text-gray-400 text-sm mb-6">1 Month Accelerator</div>
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="text-[#ff4040] text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-rocket mt-1"></i>
                    <span>MVP in 5 Days (included)</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Unlimited design requests</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>1-3 day turnaround</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Perfect for testing</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20the%20Trial%20Accelerator%20package%20(%242,000)." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg text-sm font-semibold transition-all"
                >
                  Get Started
                </a>
              </div>
            </Reveal>

            {/* Starter Plan */}
            <Reveal delay={1.8}>
              <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col">
                <div className="text-sm text-blue-400 font-bold mb-2">STARTER</div>
                <div className="text-4xl font-bold text-white mb-2">$4,500</div>
                <div className="text-gray-400 text-sm mb-1">3 Months Accelerator</div>
                <div className="text-gray-500 text-xs mb-6">$1,500/month</div>
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="text-[#ff4040] text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-rocket mt-1"></i>
                    <span>MVP in 5 Days (included)</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>All unlimited designs</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Priority support</span>
                  </div>
                  <div className="text-green-400 text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-gift"></i>
                    <span>1 Month FREE!</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20the%20Starter%20Accelerator%20package%20(%244,500)." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg text-sm font-semibold transition-all"
                >
                  Get Started
                </a>
              </div>
            </Reveal>

            {/* Scale-Up Plan - Popular */}
            <Reveal delay={1.9}>
              <div className="p-6 bg-[#ff4040]/10 border-2 border-[#ff4040]/50 rounded-2xl hover:scale-105 transition-all duration-300 relative flex flex-col">
                <div className="absolute -top-3 right-4 bg-[#ff4040] text-white text-xs font-bold py-1 px-3 rounded-full">
                  POPULAR
                </div>
                <div className="text-sm text-[#ff4040] font-bold mb-2">SCALE-UP</div>
                <div className="text-4xl font-bold text-white mb-2">$8,000</div>
                <div className="text-gray-300 text-sm mb-1">6 Months Accelerator</div>
                <div className="text-gray-400 text-xs mb-6">$1,333/month</div>
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="text-[#ff4040] text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-rocket mt-1"></i>
                    <span>MVP in 5 Days (included)</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Everything in Starter</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Long-term growth focus</span>
                  </div>
                  <div className="text-green-400 text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-gift"></i>
                    <span>2 Months FREE!</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20the%20Scale-Up%20Accelerator%20package%20(%248,000)." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#ff4040] hover:bg-[#ff2020] text-white py-3 rounded-lg text-sm font-bold transition-all"
                >
                  Get Started Now
                </a>
              </div>
            </Reveal>

            {/* Premium Plan */}
            <Reveal delay={2.0}>
              <div className="glass rounded-2xl border border-purple-500/50 p-6 hover:scale-105 transition-all duration-300 flex flex-col">
                <div className="text-sm text-purple-400 font-bold mb-2">PREMIUM</div>
                <div className="text-4xl font-bold text-white mb-2">$12,000</div>
                <div className="text-gray-400 text-sm mb-6">6 Months Accelerator</div>
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="text-[#ff4040] text-sm font-semibold flex items-start gap-2">
                    <i className="fas fa-rocket mt-1"></i>
                    <span>MVP in 5 Days (included)</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Unlimited designs</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>White-glove service</span>
                  </div>
                  <div className="text-gray-300 text-sm flex items-start gap-2">
                    <i className="fas fa-check text-green-400 mt-1"></i>
                    <span>Dedicated success manager</span>
                  </div>
                </div>
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20the%20Premium%20Accelerator%20package%20(%2412,000)." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg text-sm font-semibold transition-all"
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. The Social Mission (The Heart) */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={1.7}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-cyan-400/30">
              <div className="text-center mb-8">
                <i className="fas fa-heart text-5xl text-[#ff4040] mb-4"></i>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                  Your Scale Creates <span className="text-[#ff4040]">Their Opportunity</span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Every project at The Blue OX fuels a future. A portion of your investment directly funds free hands-on coding and design workshops for young creators aged <span className="text-cyan-400 font-bold">15-22</span>. Your scale creates their opportunity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. Final CTA & Urgency */}
      <section className="relative py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <Reveal delay={1.8}>
            <div className="glass rounded-3xl p-8 md:p-12 border-2 border-[#ff4040]/50 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                We Only Accept <span className="text-[#ff4040]">2 Startups Per Month</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                To maintain our 5-day delivery speeds and white-glove quality
              </p>
              
              <div className="bg-[#ff4040]/10 rounded-2xl p-6 mb-8">
                <p className="text-2xl font-bold text-white mb-2">
                  <i className="fas fa-gift text-[#ff4040] mr-2"></i>Early Bird Special
                </p>
                <p className="text-lg text-gray-300">
                  The first <span className="text-[#ff4040] font-black">10 startups</span> to join the program receive <span className="text-green-400 font-black">15% off</span> and priority onboarding
                </p>
              </div>

              <a 
                href="https://wa.me/3197010209759?text=Hi!%20I'm%20ready%20to%20launch%20my%20MVP%20in%205%20days.%20I'd%20like%20to%20apply%20for%20the%20Accelerator." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#ff4040] hover:bg-[#ff2020] text-white px-12 py-5 rounded-full font-black text-xl uppercase tracking-wide transition-all hover:scale-105 shadow-2xl"
              >
                Apply to The Blue OX Accelerator
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Reveal delay={1.9}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Frequently Asked <span className="text-[#ff4040]">Questions</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={2.0}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <i className="fas fa-question-circle text-[#ff4040]"></i>
                  What tools do you use?
                </h3>
                <p className="text-gray-300 text-lg">
                  We are pros at <span className="text-[#ff4040] font-semibold">Strapi, Directus, Webflow, and React</span>. These powerful low-code and pro-code tools allow us to build fast without sacrificing quality.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2.1}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <i className="fas fa-shield-alt text-green-400"></i>
                  Do you sign NDAs?
                </h3>
                <p className="text-gray-300 text-lg">
                  <span className="text-green-400 font-bold">Absolutely.</span> Your vision is protected from day one. We treat your intellectual property with the highest level of confidentiality.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2.2}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <i className="fas fa-rocket text-purple-400"></i>
                  What if I need something custom later?
                </h3>
                <p className="text-gray-300 text-lg">
                  Our <span className="text-[#ff4040] font-semibold">Startup Foundation Kit</span> includes 6 months of ongoing scaling and feature additions. We're with you for the long haul as you grow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2.3}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <i className="fas fa-money-bill-wave text-cyan-400"></i>
                  What about the $150k funding requirement?
                </h3>
                <p className="text-gray-300 text-lg">
                  We work exclusively with startups that have raised at least $150k because they're serious about moving fast and have the resources to scale properly. This ensures we're the right fit for each other.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
