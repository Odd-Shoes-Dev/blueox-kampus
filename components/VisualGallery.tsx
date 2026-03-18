import Reveal from './Reveal';

export default function VisualGallery(){
  return (
    <Reveal delay={0.15}>
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 overflow-hidden">
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="parallax-bg opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rotate-45 floating-slow" />
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#e05a3a]/30 rounded-full floating-medium" />
            <div className="absolute top-1/2 left-1/3 w-40 h-40 border border-purple-400/20 transform rotate-12 floating-fast" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="parallax-text">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Inside <span className="text-blue-500">The Kampus</span>
            </h2>
            <p className="text-gray-600 text-sm font-bold uppercase tracking-widest mt-4 opacity-80">
              Where simulation meets reality
            </p>
          </div>
          <div className="flex space-x-2">
            <span className="glass-pill bg-gray-200 border border-white/20 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md">
              Mbarara, UG
            </span>
          </div>
        </div>

        <div className="gallery-grid grid md:grid-cols-3 gap-8 overflow-hidden">
          <div className="gallery-item sim-visual-3d h-96 group transform hover:scale-105 transition-all duration-700">
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              {/* YouTube Embed for Academy */}
              <iframe
                src="https://www.youtube.com/embed/5lNZjtubMS4?autoplay=1&mute=1&loop=1&playlist=5lNZjtubMS4&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              
              <div className="sim-overlay-3d absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex items-center gap-2 text-xs text-blue-400">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    ACTIVE SESSION
                  </div>
                  <h4 className="font-black text-xl uppercase text-black mb-2 tracking-tight">
                    BlueOx Academy
                  </h4>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-widest opacity-90">
                    VR Skilled Trades Training
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      24 Students
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Real Certification
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gallery-item sim-visual-3d h-96 group transform hover:scale-105 transition-all duration-700">
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" 
                alt="BlueOx House" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
              />
              <div className="sim-overlay-3d absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex items-center gap-2 text-xs text-[#e05a3a]">
                    <span className="w-2 h-2 bg-[#e05a3a] rounded-full animate-pulse" />
                    AVAILABLE NOW
                  </div>
                  <h4 className="font-black text-xl uppercase text-black mb-2 tracking-tight">
                    BlueOx House
                  </h4>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-widest opacity-90">
                    Living & Co-working Space
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      12 Rooms
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      24/7 Workspace
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://www.blueoxjobs.eu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gallery-item sim-visual-3d h-96 group transform hover:scale-105 transition-all duration-700 block cursor-pointer"
          >
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                alt="Global Jobs" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
              />
              <div className="sim-overlay-3d absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-3 flex items-center gap-2 text-xs text-green-400">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    HIRING NOW
                  </div>
                  <h4 className="font-black text-xl uppercase text-black mb-2 tracking-tight">
                    BlueOx Jobs
                  </h4>
                  <p className="text-xs text-gray-700 font-bold uppercase tracking-widest opacity-90">
                    Poland • Netherlands • UAE
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      150+ Positions
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 21 4s-2 0-3.5 1.5L14 9H4l-3 3 9 3 3 9 3-3v-10l-0.2-1.8z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                      </svg>
                      Visa Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </Reveal>
  );
}








