import Reveal from './Reveal';
import MascotAnimation from './MascotAnimation';

export default function Hero(){
  return (
    <Reveal delay={0.03}>
      <section className="relative">
        {/* Hero Content Section - Above Video */}
        <div className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Flex Container for Mascot and Content */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* 3D Mascot Animation - Left Side */}
              <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md">
                <MascotAnimation />
              </div>
              
              {/* Content - Right Side */}
              <div className="space-y-6 hero-content flex-1 text-center lg:text-left">
                <h1 className="blueox-heading text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight text-white">
                  Uganda's <span className="text-blue-500">#1 AI and VR</span> innovation Kampus
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center flex-wrap">
                  <a href="https://wa.me/3197010209759?text=Hi!%20I%20would%20like%20to%20apply%20to%20Blue%20OX%20Kampus%20Academy." target="_blank" rel="noopener noreferrer" className="blueox-btn blueox-btn-primary">
                    <i className="fas fa-graduation-cap"></i>
                    Apply to Academy
                  </a>
                  <a href="#house" className="blueox-btn blueox-btn-secondary">
                    <i className="fas fa-home"></i>
                    Book a Room
                  </a>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center stats-grid">
                  <div className="text-center lg:text-left stats-item">
                    <div className="blueox-stat">250+</div>
                    <div className="blueox-mono text-xs text-gray-400">Students Trained</div>
                  </div>
                  <div className="text-center lg:text-left stats-item">
                    <div className="blueox-stat">6+</div>
                    <div className="blueox-mono text-xs text-gray-400">Live Products</div>
                  </div>
                  <div className="text-center lg:text-left stats-item">
                    <div className="blueox-stat">70%</div>
                    <div className="blueox-mono text-xs text-gray-400">Employment Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Background Section - Visible on Scroll */}
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

        {/* What We Do Best Section */}
        <div className="relative py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                We Do <span className="text-[#ff4040]">Two Things</span> Really, Really Well
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Accelerator Program */}
              <a href="/accelerator" className="glass rounded-2xl p-8 hover:border-[#ff4040]/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <i className="fas fa-rocket text-4xl text-[#ff4040] group-hover:scale-110 transition-transform"></i>
                  <h3 className="text-2xl font-black text-white">Accelerator Program</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Turning your <span className="text-[#ff4040] font-bold">"what if"</span> into <span className="text-[#ff4040] font-bold">"wow, it actually works."</span>
                </p>
                <div className="mt-6 text-[#ff4040] font-semibold flex items-center gap-2">
                  Learn More <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </div>
              </a>

              {/* VR Training */}
              <a href="/academy" className="glass rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <i className="fas fa-vr-cardboard text-4xl text-blue-500 group-hover:scale-110 transition-transform"></i>
                  <h3 className="text-2xl font-black text-white">VR Training</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Immersive learning experiences that prepare you for real-world challenges through cutting-edge virtual reality.
                </p>
                <div className="mt-6 text-blue-500 font-semibold flex items-center gap-2">
                  Explore Academy <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
