import Reveal from './Reveal';

export default function Hero(){
  return (
    <Reveal delay={0.03}>
      <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 h-screen flex items-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
          <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-orange-400/20 rounded-full" />
          <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-orange-400/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center mt-4 sm:mt-0">
        <div className="space-y-6 hero-content">
          <div className="inline-flex items-center gap-3 py-1 px-3 rounded-full bg-orange-600/20 backdrop-blur-sm text-orange-400 text-xs font-bold mb-4 border border-orange-400/20">
            • Live Simulation & Job Pipelines
          </div>
          <h1 className="brand-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            UGANDA'S <span className="gradient-text-3d">AI & VR</span> KAMPUS
          </h1>
          <p className="text-gray-300 max-w-2xl mb-6 text-lg leading-relaxed">
            Training, creation, and opportunity in one place. We use industry-grade simulators to verify skills and connect African talent to the global workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
            <a href="#academy" className="cta-button bg-[#f38131] px-6 py-3 rounded-full text-black font-bold hover:scale-105 transition-transform duration-300 text-center">
              Apply to Academy
            </a>
            <a href="#house" className="cta-button-outline border border-white/20 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
              Book a Room
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 stats-grid">
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl font-black text-[#f38131] counter" data-target="250">250+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Students Trained</div>
            </div>
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl font-black text-[#f38131] counter" data-target="6">6+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Live Products</div>
            </div>
            <div className="text-center stats-item">
              <div className="text-2xl sm:text-3xl font-black text-[#f38131] counter" data-target="70">70%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Employment Rate</div>
            </div>
          </div>
        </div>

        <div className="relative hero-visual">
          <div className="vr-showcase rounded-2xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm bg-white/5 transform hover:scale-[1.02] transition-all duration-500">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=1000&q=80" 
                alt="VR Welding Simulation" 
                className="w-full h-64 object-cover transition-all duration-700 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="p-6 bg-gradient-to-t from-black/60 to-transparent text-white relative">
              <div className="flex items-center gap-2 text-xs mb-2 pulse-indicator">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/> 
                LIVE SESSION: VR WELDING
              </div>
              <div className="text-sm text-gray-300 font-bold">Dig In Vision Platform • JIS Standards</div>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  12 Active Users
                </span>
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Real-time Assessment
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
