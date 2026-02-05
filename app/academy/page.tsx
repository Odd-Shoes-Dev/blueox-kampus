import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import VRShowcase from '../../components/VRShowcase';
import Link from 'next/link';

export default function AcademyPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-red-600/30 backdrop-blur-sm text-[#ff8080] text-sm font-bold mb-6 border border-[#ff4040]/30">
                • VR Skilling Academy
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                Train In VR Today. <span className="text-[#ff4040]">Land A Job In Europe In 90 Days.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                We don't just "teach skills." We fill contracts.
              </p>
              <p className="text-gray-400 text-lg mb-12">(No waste. No injuries. Just results.)</p>

              {/* 90-Day Pipeline Section */}
              <div className="max-w-4xl mx-auto">
                <div className="glass rounded-2xl p-8 md:p-12">
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Europe is facing a massive shortage of skilled tradespeople. We have the direct contracts to fill those spots. We use VR Simulation to train you to European standards in record time, then we help you land the job.
                  </p>

                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    THE <span className="text-[#ff4040]">"90-DAY"</span> PIPELINE:
                  </h4>

                  <div className="space-y-6 mb-8">
                    <div className="bg-black/30 rounded-xl p-6">
                      <h5 className="text-xl font-bold text-[#ff4040] mb-3">
                        1. ZERO-RISK MASTERY (DAYS 1-60):
                      </h5>
                      <p className="text-gray-300 leading-relaxed">
                        Master Welding, Automotive Repair, or Nursing in our hyper-realistic VR simulators. You get 100% certified confidence without wasting materials or risking safety.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <h5 className="text-xl font-bold text-blue-400 mb-3">
                        2. THE STANDARD CHECK:
                      </h5>
                      <p className="text-gray-300 leading-relaxed">
                        Our VR metrics prove you are ready. No guessing. If you pass the sim, you know the job.
                      </p>
                    </div>

                    <div className="bg-black/30 rounded-xl p-6">
                      <h5 className="text-xl font-bold text-purple-400 mb-3">
                        3. THE EUROPEAN PLACEMENT (DAYS 61-90):
                      </h5>
                      <p className="text-gray-300 leading-relaxed">
                        We don't just wave goodbye. We actually help you. Because we hold direct recruitment contracts, we connect our top graduates directly to European employers who are desperate for certified talent.
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <a href="https://wa.me/3197010209759?text=Hi!%20I%20want%20to%20start%20VR%20training%20and%20land%20a%20job%20in%20Europe." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#ff4040] hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                      <i className="fas fa-play-circle mr-2"></i>
                      START MY TRAINING
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Video Background Section */}
      <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
        <iframe
          src="https://www.youtube.com/embed/JUApsTgSYtQ?autoplay=1&mute=1&loop=1&playlist=JUApsTgSYtQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=0"
          className="w-full h-full object-cover opacity-60 pointer-events-none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
          <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-[#ff4040]/20 rounded-full" />
          <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-[#ff4040]/30" />
        </div>
      </div>

      {/* VR Showcase Section */}
      <VRShowcase />

      {/* Why VR Training? */}
      <section className="relative py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.5}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Why VR Training <span className="text-[#ff4040]">Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Traditional vocational training is broken—expensive, dangerous, and slow. Our VR simulations fix all of that.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Reveal delay={0.6}>
              <div className="glass p-8 rounded-xl">
                <div className="text-5xl font-black text-[#ff4040] mb-4">70%</div>
                <h3 className="text-2xl font-bold text-white mb-3">Job Placement Rate</h3>
                <p className="text-gray-400">
                  Our VR graduates secure employment within 6 months of completing their training
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="glass p-8 rounded-xl">
                <div className="text-5xl font-black text-blue-400 mb-4">90%</div>
                <h3 className="text-2xl font-bold text-white mb-3">Cost Savings</h3>
                <p className="text-gray-400">
                  No material waste, no injuries, no expensive equipment damage during learning
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <div className="glass p-8 rounded-xl">
                <div className="text-5xl font-black text-purple-400 mb-4">5x</div>
                <h3 className="text-2xl font-bold text-white mb-3">Faster Learning</h3>
                <p className="text-gray-400">
                  Master skills in weeks instead of years with unlimited practice in safe VR environments
                </p>
              </div>
            </Reveal>
          </div>

          {/* Training Programs Details */}
          <Reveal delay={0.9}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Available <span className="text-[#ff4040]">Training Programs</span></h3>
              
              {/* Welding */}
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-fire text-5xl text-[#ff4040] mr-4"></i>
                  <h4 className="text-3xl font-bold text-white">Welding Mastery</h4>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Master industrial welding techniques through immersive VR simulations. Practice unlimited times without burning a single welding rod.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">What You'll Learn:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong className="text-[#ff4040]">MIG Welding</strong> - Metal Inert Gas welding techniques</li>
                      <li>• <strong className="text-[#ff4040]">TIG Welding</strong> - Tungsten Inert Gas precision welding</li>
                      <li>• <strong className="text-[#ff4040]">Stick Welding</strong> - Shielded Metal Arc Welding (SMAW)</li>
                      <li>• Safety protocols and equipment handling</li>
                      <li>• Quality inspection and troubleshooting</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">Program Details:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>Duration:</strong> 8-12 weeks</li>
                      <li>• <strong>Format:</strong> VR simulations + real-world practice</li>
                      <li>• <strong>Certification:</strong> Industry-recognized certificate</li>
                      <li>• <strong>Job Support:</strong> Career placement assistance</li>
                      <li>• <strong>Zero Risk:</strong> No injuries, no waste</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Automotive */}
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-car text-5xl text-blue-400 mr-4"></i>
                  <h4 className="text-3xl font-bold text-white">Automotive Repair</h4>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Learn to diagnose and repair vehicles in a fully-equipped virtual garage. Practice on different makes and models without expensive equipment.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">What You'll Learn:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong className="text-blue-400">Engine Diagnostics</strong> - Identify and fix engine problems</li>
                      <li>• <strong className="text-blue-400">Transmission Repair</strong> - Manual and automatic systems</li>
                      <li>• <strong className="text-blue-400">Electrical Systems</strong> - Modern vehicle electronics</li>
                      <li>• Brake systems and suspension</li>
                      <li>• Routine maintenance procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">Program Details:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>Duration:</strong> 10-16 weeks</li>
                      <li>• <strong>Format:</strong> VR garage simulations</li>
                      <li>• <strong>Certification:</strong> Automotive technician certificate</li>
                      <li>• <strong>Tools:</strong> Virtual diagnostic equipment</li>
                      <li>• <strong>Vehicles:</strong> Multiple makes and models</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medical */}
              <div className="glass rounded-2xl p-8 md:p-12 mb-8">
                <div className="flex items-center mb-6">
                  <i className="fas fa-heartbeat text-5xl text-purple-400 mr-4"></i>
                  <h4 className="text-3xl font-bold text-white">Medical Procedures Training</h4>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Practice critical medical procedures in zero-risk VR environments. Perfect your technique before working with real patients.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">What You'll Learn:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong className="text-purple-400">Emergency Response</strong> - Critical care procedures</li>
                      <li>• <strong className="text-purple-400">Patient Assessment</strong> - Vital signs and diagnostics</li>
                      <li>• <strong className="text-purple-400">Basic Procedures</strong> - IV insertion, wound care</li>
                      <li>• Sterilization and safety protocols</li>
                      <li>• Patient communication skills</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white mb-3">Program Details:</h5>
                    <ul className="text-gray-300 space-y-2">
                      <li>• <strong>Duration:</strong> 12-20 weeks</li>
                      <li>• <strong>Format:</strong> VR patient simulations</li>
                      <li>• <strong>Certification:</strong> Medical assistant certificate</li>
                      <li>• <strong>Safety:</strong> Zero patient risk during training</li>
                      <li>• <strong>Scenarios:</strong> Real-world emergency situations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enrollment Process */}
          <Reveal delay={1.0}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">How to <span className="text-[#ff4040]">Enroll</span></h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Choose Program', desc: 'Select your training track: Welding, Automotive, or Medical', icon: 'fa-clipboard-list' },
                  { step: 2, title: 'Assessment', desc: 'Quick skills assessment to customize your learning path', icon: 'fa-user-check' },
                  { step: 3, title: 'Start Training', desc: 'Begin VR simulations with expert instructor guidance', icon: 'fa-vr-cardboard' },
                  { step: 4, title: 'Get Certified', desc: 'Complete program and receive industry certification', icon: 'fa-certificate' }
                ].map((step) => (
                  <div key={step.step} className="glass p-6 rounded-xl text-center">
                    <div className="w-16 h-16 bg-[#ff4040] rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`fas ${step.icon} text-2xl text-white`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Step {step.step}</h4>
                    <h5 className="text-lg font-semibold text-[#ff4040] mb-2">{step.title}</h5>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FAQs */}
          <Reveal delay={1.1}>
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked <span className="text-[#ff4040]">Questions</span></h3>
              <div className="space-y-4">
                {[
                  { q: 'Do I need VR experience to start?', a: 'No! We provide complete orientation and training on VR equipment. Most students adapt within the first session.' },
                  { q: 'Are the certifications recognized by employers?', a: 'Yes! Our programs are industry-aligned and employers value the hands-on VR training experience.' },
                  { q: 'What happens after I complete the program?', a: 'We provide job placement assistance and connect you with our network of hiring partners. 70% of graduates find employment within 6 months.' },
                  { q: 'Can I practice outside of class hours?', a: 'Depending on your program package, you may have access to VR equipment for additional practice sessions.' },
                  { q: 'What if I need to take a break from training?', a: 'We offer flexible scheduling. You can pause and resume your training as needed.' },
                  { q: 'Do you provide financial assistance?', a: 'Yes! We offer payment plans and scholarship opportunities. Contact us to discuss options.' }
                ].map((faq, i) => (
                  <div key={i} className="glass p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">
                      <i className="fas fa-question-circle text-[#ff4040] mr-2"></i>
                      {faq.q}
                    </h4>
                    <p className="text-gray-400 ml-7">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={1.2}>
            <div className="text-center">
              <div className="glass rounded-2xl border-2 border-[#ff4040]/50 p-8 mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Master a New Skill?
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  Join the next generation of certified professionals
                </p>
                <p className="text-gray-400">
                  Admissions for Feb 2026 intake are now open
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20VR%20Training%20at%20Blue%20OX%20Academy" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3">
                  <i className="fab fa-whatsapp text-2xl"></i>
                  START MY VR TRAINING
                </a>
                <Link href="/" className="border-2 border-white/30 px-10 py-5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg text-white">
                  Back to Home
                </Link>
              </div>
              
              <div className="mt-8 text-gray-400">
                <p>Email: <a href="mailto:hello@theblueox.com" className="text-[#ff4040] hover:underline">hello@theblueox.com</a></p>
                <p className="mt-2 text-sm">Looking for startup accelerator? <Link href="/accelerator" className="text-[#ff4040] hover:underline">View Accelerator Program</Link></p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
