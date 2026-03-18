import Reveal from './Reveal';
import MascotAnimation from './MascotAnimation';

export default function Hero(){
  return (
    <Reveal delay={0.03}>
      <section className="relative">
        {/* Hero Section - Mascot + Heading */}
        <div className="relative pt-24 sm:pt-32 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* 3D Mascot Animation - Left Side */}
              <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md">
                <MascotAnimation />
              </div>

              {/* Heading - Right Side */}
              <div className="text-center lg:text-left flex-1">
                <h1 className="blueox-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-black">
                  THE BLUE OX : UGANDA'S <span className="text-blue-500">#1 AI & VR</span> INNOVATION KAMPUS
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do Section - Centered */}
        <div className="relative py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4">
                  We Do <span className="text-[#e05a3a]">Two Things</span> Really, Really Well
              </h2>
            </div>
            
            {/* Two Cards - Full Width */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
              {/* Accelerator Program Card */}
              <a href="/accelerator" className="backdrop-blur-xl bg-white/30 shadow-2xl rounded-2xl p-8 lg:p-12 border-2 border-[#e05a3a]/50 hover:border-[#e05a3a] hover:bg-[#e05a3a]/10 hover:shadow-[0_0_50px_rgba(224,90,58,0.6)] hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/icons/rocket.svg" alt="Accelerator" className="w-14 h-14 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 leading-tight">
                  We Build Your Entire Startup In 120 Hours. Or We Work For Free.
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  Most agencies guess what you want. We visualize it first. We combine Rapid MVP...
                </p>
                <div className="text-[#e05a3a] font-bold flex items-center gap-3 text-lg">
                  Learn More <img src="/icons/arrow-right.svg" alt="Arrow" className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>

              {/* VR Training Card */}
              <a href="/academy" className="backdrop-blur-xl bg-white/30 shadow-2xl rounded-2xl p-8 lg:p-12 border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/icons/web.svg" alt="Academy" className="w-14 h-14 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-black mb-6 leading-tight">
                  Train In VR Today. Land A Job In Europe In 90 Days.
                </h3>
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                  We don't just "teach skills." We fill contracts...
                </p>
                <div className="text-blue-500 font-bold flex items-center gap-3 text-lg">
                  Explore Academy <img src="/icons/arrow-right.svg" alt="Arrow" className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </div>

            {/* Tagline */}
            <div className="text-center mb-16">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
                We Turn Prayers Into Prototypes And 'What Ifs' Into Bankable Products In 5 Days.<br />
                <span className="text-[#e05a3a] font-semibold">(Yes, really.)</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
              <div className="text-center">
                <div className="blueox-stat">250+</div>
                <div className="blueox-mono text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="blueox-stat">6+</div>
                <div className="blueox-mono text-sm text-gray-600">Live Products</div>
              </div>
              <div className="text-center">
                <div className="blueox-stat">70%</div>
                <div className="blueox-mono text-sm text-gray-600">Employment Rate</div>
              </div>
            </div>
          </div>
        </div>

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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
          
          {/* Floating 3D Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="floating-cube absolute top-20 left-10 w-16 h-16 border border-blue-400/30 transform rotate-45" />
            <div className="floating-sphere absolute top-40 right-20 w-12 h-12 bg-[#e05a3a]/20 rounded-full" />
            <div className="floating-pyramid absolute bottom-32 left-1/4 w-20 h-20 border-l border-r border-[#e05a3a]/30" />
          </div>
        </div>
      </section>
    </Reveal>
  );
}








