import Reveal from './Reveal';
import { UsersIcon } from './Icons';

export default function OfferingsGrid(){
  return (
    <section id="accelerator" className="py-16 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <Reveal delay={0.03}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              The <span className="text-[#e05a3a]">"Visual-First"</span> Accelerator
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-4 font-semibold">
              "We Build Your Entire Startup In 120 Hours. Or We Work For Free."
            </p>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Most agencies guess what you want. We <span className="text-black font-semibold">visualize it first</span>. Unlimited designs + rapid MVP development = 100% clarity and speed.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trial Plan */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="text-sm text-[#e05a3a] font-bold mb-2">TRIAL</div>
              <div className="text-4xl font-bold text-black mb-2">$2,000</div>
              <div className="text-gray-600 text-sm mb-6">1 Month Accelerator</div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-[#e05a3a] text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/rocket.svg" alt="MVP" className="w-4 h-4 mt-1" />
                  <span>MVP in 5 Days (included)</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Unlimited design requests</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>1-3 day turnaround</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Perfect for testing</span>
                </div>
              </div>
              <a 
                href="/accelerator" 
                className="block text-center bg-white/5 hover:bg-black/10 text-black py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Learn More
              </a>
            </div>
          </Reveal>

          {/* Starter Plan */}
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="text-sm text-blue-400 font-bold mb-2">STARTER</div>
              <div className="text-4xl font-bold text-black mb-2">$4,500</div>
              <div className="text-gray-600 text-sm mb-1">3 Months Accelerator</div>
              <div className="text-gray-600 text-xs mb-6">$1,500/month</div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-[#e05a3a] text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/rocket.svg" alt="MVP" className="w-4 h-4 mt-1" />
                  <span>MVP in 5 Days (included)</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>All unlimited designs</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Priority support</span>
                </div>
                <div className="text-green-400 text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/gift.svg" alt="Free Month" className="w-4 h-4" />
                  <span>1 Month FREE!</span>
                </div>
              </div>
              <a 
                href="/accelerator" 
                className="block text-center bg-white/5 hover:bg-black/10 text-black py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Learn More
              </a>
            </div>
          </Reveal>

          {/* Scale-Up Plan - Popular */}
          <Reveal delay={0.3}>
            <div className="p-6 bg-[#e05a3a]/10 border-2 border-[#e05a3a]/50 rounded-2xl hover:scale-105 transition-all duration-300 relative flex flex-col">
              <div className="absolute -top-3 right-4 bg-[#e05a3a] text-white text-xs font-bold py-1 px-3 rounded-full">
                POPULAR
              </div>
              <div className="text-sm text-[#e05a3a] font-bold mb-2">SCALE-UP</div>
              <div className="text-4xl font-bold text-black mb-2">$8,000</div>
              <div className="text-gray-700 text-sm mb-1">6 Months Accelerator</div>
              <div className="text-gray-600 text-xs mb-6">$1,333/month</div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-[#e05a3a] text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/rocket.svg" alt="MVP" className="w-4 h-4 mt-1" />
                  <span>MVP in 5 Days (included)</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Everything in Starter</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Long-term growth focus</span>
                </div>
                <div className="text-green-400 text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/gift.svg" alt="Free Months" className="w-4 h-4" />
                  <span>2 Months FREE!</span>
                </div>
              </div>
              <a 
                href="/accelerator" 
                className="block text-center bg-[#e05a3a] hover:bg-[#c94e30] text-white py-2 rounded-lg text-sm font-bold transition-all"
              >
                Get Started
              </a>
            </div>
          </Reveal>

          {/* Premium Plan */}
          <Reveal delay={0.4}>
            <div className="glass rounded-2xl border border-purple-500/50 p-6 hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="text-sm text-purple-400 font-bold mb-2">PREMIUM</div>
              <div className="text-4xl font-bold text-black mb-2">$12,000</div>
              <div className="text-gray-600 text-sm mb-6">6 Months Accelerator</div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-[#e05a3a] text-sm font-semibold flex items-start gap-2">
                  <img src="/icons/rocket.svg" alt="MVP" className="w-4 h-4 mt-1" />
                  <span>MVP in 5 Days (included)</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Unlimited designs</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>White-glove service</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <img src="/icons/check.svg" alt="Check" className="w-4 h-4 mt-1" />
                  <span>Dedicated success manager</span>
                </div>
              </div>
              <a 
                href="/accelerator" 
                className="block text-center bg-white/5 hover:bg-black/10 text-black py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Learn More
              </a>
            </div>
          </Reveal>

          {/* Billy Pods - Intern Pods */}
          <Reveal delay={0.45}>
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 flex flex-col">
              <div className="text-sm text-[#e05a3a] font-bold mb-2">BILLY PODS</div>
              <div className="text-3xl font-bold text-black mb-2">Intern Pods</div>
              <div className="text-gray-600 text-sm mb-6">1–3 interns + Pod Coordinator · Weekly reporting</div>
              <div className="space-y-3 mb-6 flex-grow">
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <UsersIcon className="w-7 h-7 text-[#e05a3a] mr-2" />
                  <span>Shortlist in 3–5 days · Kickoff in ~7 days</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="ml-9">Replacement guarantee · Weekly Pod Report</span>
                </div>
                <div className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="ml-9">Tracks: QA · React · Python-Data · Support Eng</span>
                </div>
              </div>
              <a 
                href="/pods" 
                className="block text-center bg-[#e05a3a] hover:bg-[#c94e30] text-white py-2 rounded-lg text-sm font-semibold transition-all"
              >
                Request Pod Profiles
              </a>
            </div>
          </Reveal>
        </div>

        {/* CTA Section */}
        <Reveal delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              First <span className="text-[#e05a3a] font-bold">10 startups</span> get 15% off + priority support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/accelerator"
                className="inline-block border-2 border-[#e05a3a] hover:bg-[#e05a3a]/10 text-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
              >
                <img src="/icons/help.svg" alt="Info" className="inline w-5 h-5 mr-2" />Learn More About the Program
              </a>
              <a 
                href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20the%20Blue%20OX%20Accelerator%20Program" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#e05a3a] hover:bg-[#c94e30] text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
              >
                <img src="/icons/send.svg" alt="Apply" className="inline w-5 h-5 mr-2" />Apply Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}








