import Reveal from './Reveal';

export default function Hero(){
  return (
    <Reveal delay={0.03}>
      <section className="relative">
        {/* Hero Content Section - Above Video */}
        <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-6 hero-content max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 py-1 px-3 rounded-full bg-orange-600/30 backdrop-blur-sm text-orange-300 text-xs font-bold mb-4 border border-orange-400/30">
                • Live Simulation & Job Pipelines
              </div>
              <h1 className="brand-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white">
                UGANDA'S <span className="gradient-text-3d">AI & VR</span> KAMPUS
              </h1>
              <p className="text-gray-200 max-w-2xl mb-8 text-xl leading-relaxed mx-auto">
                Uganda's first AI and VR innovation kampus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <a href="#academy" className="cta-button bg-[#f38131] px-8 py-4 rounded-full text-black font-bold hover:scale-105 transition-transform duration-300 text-center text-lg shadow-2xl">
                  Apply to Academy
                </a>
                <a href="#house" className="cta-button-outline border-2 border-white/30 px-8 py-4 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center text-lg text-white shadow-2xl">
                  Book a Room
                </a>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center stats-grid">
                <div className="text-center stats-item">
                  <div className="text-3xl sm:text-4xl font-black text-[#f38131] counter" data-target="250">250+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Students Trained</div>
                </div>
                <div className="text-center stats-item">
                  <div className="text-3xl sm:text-4xl font-black text-[#f38131] counter" data-target="6">6+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Live Products</div>
                </div>
                <div className="text-center stats-item">
                  <div className="text-3xl sm:text-4xl font-black text-[#f38131] counter" data-target="70">70%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Employment Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Background Section - Visible on Scroll */}
        <div className="relative h-screen overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          
          {/* Floating 3D Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
            <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-orange-400/20 rounded-full" />
            <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-orange-400/30" />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
