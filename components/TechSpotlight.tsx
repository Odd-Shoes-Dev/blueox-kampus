// Icons removed - component not currently in use
import Reveal from './Reveal';
import ScrollParallax from './ScrollParallax';
import VRHeadset from './VRHeadset';

export default function TechSpotlight(){
  return (
    <Reveal delay={0.18}>
      <section id="academy" className="relative py-20 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <ScrollParallax speed={0.3} direction="up" rotate className="absolute top-20 left-20">
            <div className="w-64 h-64 border border-blue-400/20 rounded-full opacity-30" />
          </ScrollParallax>
          <ScrollParallax speed={0.5} direction="down" className="absolute bottom-20 right-20">
            <div className="w-48 h-48 border border-[#e05a3a]/20 transform rotate-45 opacity-20" />
          </ScrollParallax>
          <ScrollParallax speed={0.4} direction="left" scale className="absolute top-1/2 left-1/4">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg transform rotate-12" />
          </ScrollParallax>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <ScrollParallax speed={0.2} className="space-y-8 order-2 lg:order-1">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-[0.9] tracking-tight">
                  Real Tools. <br/>
                  <span className="text-[#e05a3a] gradient-text-3d">Real Proof.</span>
                </h2>
                <p className="text-gray-700 text-xl mb-10 leading-relaxed max-w-2xl">
                  We don't use demos. We deploy industry-grade simulation platforms used by top technical institutes globally.
                </p>
              </div>

              <div className="space-y-8">
                <div className="tech-card glass-card p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 group hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#e05a3a]/30">
                  <div className="tech-icon w-16 h-16 bg-gradient-to-br from-[#e05a3a]/20 to-[#c94e30]/30 rounded-2xl flex items-center justify-center text-[#e05a3a] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-8-4V8l8 4v8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase text-sm tracking-widest mb-3 text-[#e05a3a]">
                      DigIn Vision & WeldVR
                    </h4>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      International welding certification pipelines (MIG/TIG/Stick) with real-time assessment and industry validation.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="2"/>
                          <path d="m18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2"/>
                          <path d="M6 9a6 6 0 0 0 12 0" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 15v6" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 21h8" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>ISO Certified</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>Job Ready</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tech-card glass-card p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 group hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-blue-400/30">
                  <div className="tech-icon w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2c-5.33 4.55-8 8.48-8 13.16C4 19.23 7.58 22 12 22s8-2.77 8-6.84C20 10.48 17.33 6.55 12 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase text-sm tracking-widest mb-3 text-blue-400">
                      UbiSim & VRpatients
                    </h4>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      High-fidelity clinical scenarios and AI-powered patient simulations for nursing exam readiness with advanced simulation technology.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>Hospital Grade</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path d="M11 2a2 2 0 0 0-2 2v6.5a6.5 6.5 0 1 0 13 0V4a2 2 0 0 0-2-2H11z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M11 15.5a6.5 6.5 0 1 1 13 0" stroke="currentColor" strokeWidth="2"/>
                          <path d="M15.5 17.5h.01" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>NCLEX Prep</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="tech-card glass-card p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 group hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-green-400/30">
                  <div className="tech-icon w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-2xl flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v-3a1 1 0 0 0-1-1h-1a7 7 0 0 1-7 7v3.5c0 .83-.67 1.5-1.5 1.5h-2c-.83 0-1.5-.67-1.5-1.5V19a7 7 0 0 1-7-7H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black uppercase text-sm tracking-widest mb-3 text-green-400">
                      Simulanis & Transfr
                    </h4>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                      Automotive, mechatronics, and safety-first industrial training with immersive VR experiences.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="8" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M2 15h20M8 9h8" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>Industry 4.0</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
                        </svg> <span>Safety First</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollParallax>

            <ScrollParallax speed={0.3} direction="down" className="relative order-1 lg:order-2">
              <div className="perspective-container">
                {/* 3D VR Headset - Always visible on mobile */}
                <div className="block">
                  <VRHeadset />
                </div>
                
                <div className="glass-card p-4 sm:p-6 rounded-[2rem] sm:rounded-[3rem] border-2 border-white/20 rotate-1 lg:rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl">
                  <div className="bg-gradient-to-br from-black/80 to-gray-900/80 rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-8 border border-gray-300 backdrop-blur-xl">
                    <div className="flex justify-between items-center mb-6 sm:mb-8">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse" />
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full" />
                      </div>
                      <span className="text-xs text-gray-600 font-mono">LIVE SIMULATION</span>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="simulation-window bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-400/30">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <h5 className="text-black font-black text-xs sm:text-sm">VR WELDING ASSESSMENT</h5>
                          <span className="text-xs text-green-400 font-mono">• ACTIVE</span>
                        </div>
                        <div className="progress-bars space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-xs text-gray-700 mb-1">
                            <span>Accuracy</span><span>94%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{width: '94%'}} />
                          </div>
                          
                          <div className="flex justify-between text-xs text-gray-700 mb-1">
                            <span>Speed</span><span>87%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-[#e05a3a] to-[#e05a3a] h-2 rounded-full" style={{width: '87%'}} />
                          </div>
                          
                          <div className="flex justify-between text-xs text-gray-700 mb-1">
                            <span>Safety Protocol</span><span>100%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" style={{width: '100%'}} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="stats-grid grid grid-cols-3 gap-2 sm:gap-4 text-center">
                        <div className="stat-item">
                          <div className="text-lg sm:text-2xl font-black text-blue-400">24</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">Active Users</div>
                        </div>
                        <div className="stat-item">
                          <div className="text-lg sm:text-2xl font-black text-[#e05a3a]">156</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">Certifications</div>
                        </div>
                        <div className="stat-item">
                          <div className="text-lg sm:text-2xl font-black text-green-400">98%</div>
                          <div className="text-xs text-gray-600 uppercase tracking-wider">Pass Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollParallax>
          </div>
        </div>
      </section>
    </Reveal>
  );
}








