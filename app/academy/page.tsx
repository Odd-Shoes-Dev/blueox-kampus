import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import Link from 'next/link';

export default function AcademyPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-red-600/30 backdrop-blur-sm text-[#ff8080] text-sm font-bold mb-6 border border-[#ff4040]/30">
                • VR Training & AI Development
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                Blue OX <span className="gradient-text-3d">Academy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Where innovation meets education. Learn VR creation, master AI development, and build investor-ready MVPs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VR Training Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                VR <span className="text-[#ff4040]">Training</span> Programs
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Industry-grade simulators and hands-on experience. Train in immersive environments that prepare you for real-world challenges.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* VR Image Placeholder */}
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border-2 border-blue-400/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <i className="fas fa-vr-cardboard text-6xl mb-4 text-blue-400"></i>
                    <p className="text-gray-400 text-sm">
                      [Add image: Students using VR headsets / VR training lab]
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* VR Programs */}
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <i className="fas fa-gamepad text-[#ff4040] mr-3"></i>VR Development
                  </h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Unity & Unreal Engine mastery</li>
                    <li>• 3D modeling and environment design</li>
                    <li>• Interactive experience creation</li>
                    <li>• VR optimization techniques</li>
                  </ul>
                </div>

                <div className="glass p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <i className="fas fa-building text-[#ff4040] mr-3"></i>Industry Simulations
                  </h3>
                  <ul className="text-gray-300 space-y-3">
                    <li>• Healthcare & medical training</li>
                    <li>• Engineering & construction</li>
                    <li>• Safety & emergency response</li>
                    <li>• Customer service scenarios</li>
                  </ul>
                </div>

                <div className="p-6 bg-[#ff4040]/10 border border-[#ff4040]/30 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    <i className="fas fa-chart-line text-[#ff4040] mr-3"></i>Success Rate
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-black text-[#ff4040]">70%</div>
                    <div className="text-gray-300 text-sm">
                      of our VR graduates secure jobs within 6 months
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI Development Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                AI Development & <span className="text-[#ff4040]">MVP Services</span>
              </h2>
              <p className="text-2xl text-gray-300 italic font-light mb-4">
                "Innovation doesn't wait, and neither should you."
              </p>
            </div>
          </Reveal>

          {/* The Blue OX Story */}
          <div className="mb-16">
            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-8 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Founded in <span className="text-[#ff4040] font-semibold">2020</span>, as a garage-based web design & app development agency in Kampala, Uganda, 
                    we've developed a reputation for building websites and apps that look great and are easy to use over the last few years.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    Through our hard experience, we understood what it takes to go from zero to market-ready MVP.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    In <span className="text-[#ff4040] font-semibold">2024</span>, we merged and rebranded as a creative social enterprise with a mission to do just 2 things:
                  </p>
                  <ul className="text-gray-300 text-lg space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff4040] font-bold">1.</span>
                      <span>To help as many visionary founders validate concepts and attract investors through Rapid Application Development quickly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#ff4040] font-bold">2.</span>
                      <span>To teach young creators aged 15-22 how to code, design, and innovate.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* What We Do */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Reveal delay={0.4}>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <i className="fas fa-lightbulb text-[#ff4040] mr-3"></i>What We Do
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're The Blue OX, and we do one thing really, really well: Turning your "what if" into "wow, it actually works." 
                  We specialize in <span className="text-[#ff4040] font-semibold">rapid prototyping and MVP development</span> of 
                  functional, investor-ready products built in just <span className="text-[#ff4040] font-semibold">1-5 days</span>.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="p-8 bg-[#ff4040]/10 border border-[#ff4040]/30 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <i className="fas fa-heart text-[#ff4040] mr-3"></i>More than Code
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every project <span className="text-[#ff4040] font-semibold">YOU</span> launch helps us fund free coding and design workshops 
                  for kids aged 15-22. These aren't basic classes—they're hands-on, real-world projects that prepare them to thrive, 
                  <span className="text-[#ff4040] font-semibold"> JUST like we did in 2020 (COVID)</span>.
                </p>
              </div>
            </Reveal>
          </div>

          {/* What Fuels Us */}
          <Reveal delay={0.6}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">What Fuels Us?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-bolt text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Efficiency</h4>
                  <p className="text-gray-400">
                    Low-code tools like Strapi, Directus, and a credit-based system that ensures you only pay for what you need.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-rocket text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Speed</h4>
                  <p className="text-gray-400">
                    We are lightning-fast, blending full-stack expertise with go-to-market strategies.
                  </p>
                </div>

                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-lock text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Security</h4>
                  <p className="text-gray-400">
                    To protect your vision, we sign NDAs to ensure complete confidentiality every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* How It Works */}
          <Reveal delay={0.7}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">How It Works</h3>
              <p className="text-center text-gray-400 mb-8">Our magic formula</p>
              <div className="space-y-4">
                {[
                  { day: 1, title: 'Kickoff & Planning', desc: 'You tell us your idea; we wireframe it and map user flows to find the essentials.' },
                  { day: 2, title: 'The Backyard', desc: 'We whip up a functional, API-ready back-end using platforms like Strapi or Directus or custom code.' },
                  { day: 3, title: 'The Front-End', desc: 'We plug that back-end into a sleek front-end using tools like Webflow or React.' },
                  { day: 4, title: 'Testing & Tweaks', desc: 'We break things so your users don\'t have to, then add polished flourishes.' },
                  { day: 5, title: 'Launch Day', desc: 'Your MVP goes live for investors and users to see.' }
                ].map((step) => (
                  <div key={step.day} className="flex gap-4 p-6 glass rounded-xl hover:border-[#ff4040]/50 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.day}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Day {step.day}: {step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Credit System */}
          <Reveal delay={0.8}>
            <div className="glass rounded-2xl border-2 border-[#ff4040]/50 p-8 md:p-12 mb-16">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Our Credit System</h3>
              <p className="text-center text-xl text-gray-300 mb-8">Flexible. Scalable. Impactful.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                  <div className="text-sm text-[#ff4040] mb-2">MVP DEVELOPMENT</div>
                  <div className="text-4xl font-bold text-white mb-2">15</div>
                  <div className="text-gray-400">credits</div>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                  <div className="text-sm text-blue-400 mb-2">BRANDING PACKAGE</div>
                  <div className="text-4xl font-bold text-white mb-2">10</div>
                  <div className="text-gray-400">credits</div>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-xl text-center">
                  <div className="text-sm text-purple-400 mb-2">MOTION GRAPHICS</div>
                  <div className="text-4xl font-bold text-white mb-2">5</div>
                  <div className="text-gray-400">credits</div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-gray-300 mb-4">Each credit costs <span className="text-[#ff4040] font-bold text-2xl">$50</span></p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">1 Credit</div>
                  <div className="text-[#ff4040] font-bold">$50</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl text-center border-2 border-[#ff4040]/50">
                  <div className="text-2xl font-bold text-white mb-1">10 Credits</div>
                  <div className="text-[#ff4040] font-bold">$475</div>
                  <div className="text-green-400 text-sm">(save $25!)</div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white mb-1">50 Credits</div>
                  <div className="text-[#ff4040] font-bold">$2,250</div>
                  <div className="text-green-400 text-sm">(save $250!)</div>
                </div>
              </div>

              <p className="text-center text-gray-400 mt-6">
                Credits don't expire, and every credit spent helps fund coding education for kids.
              </p>
            </div>
          </Reveal>

          {/* Creative Services */}
          <Reveal delay={0.9}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Creative Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-film text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Motion Graphics</h4>
                  <p className="text-gray-400">Demos, ads, or dramatic pitch deck slides.</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-palette text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Still Graphics</h4>
                  <p className="text-gray-400">Designs for social media, websites, or presentations.</p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <i className="fas fa-bullseye text-4xl mb-4 text-[#ff4040]"></i>
                  <h4 className="text-xl font-bold text-white mb-3">Branding</h4>
                  <p className="text-gray-400">Your logo, colors, and vibe wrapped in a "legit" package.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* FAQs */}
          <Reveal delay={1.0}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">FAQs</h3>
              <div className="space-y-4">
                {[
                  { q: 'What platforms do you use?', a: 'Low-code/no-code tools like Strapi, Directus, and Webflow.' },
                  { q: 'Can I use credits for creative services?', a: 'Absolutely! Motion graphics, UI/UX, and more.' },
                  { q: 'What happens to unused credits?', a: 'They roll over with no expiration.' },
                  { q: 'Can I sponsor a student?', a: 'Yes! You can fund training or donate hardware like laptops.' }
                ].map((faq, i) => (
                  <div key={i} className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={1.1}>
            <div className="text-center">
              <div className="glass rounded-2xl border border-[#ff4040]/30 p-8 mb-8">
                <p className="text-2xl text-gray-300 italic mb-6">
                  "Your project builds more than an MVP. It builds futures. Let's make an impact together."
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20Blue%20OX%20Academy" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                  Contact Us on WhatsApp
                </a>
                <Link href="/accelerator" className="border-2 border-white/30 px-10 py-5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg text-white">
                  View Accelerator Program
                </Link>
              </div>
              
              <div className="mt-8 text-gray-400">
                <p>Email: <a href="mailto:hello@theblueox.com" className="text-[#ff4040] hover:underline">hello@theblueox.com</a></p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
