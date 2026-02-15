import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import InsideTheKampus from '../components/InsideTheKampus';

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-start sm:items-center justify-center bg-black pt-12 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-12 md:py-0">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center justify-center">
              {/* Hero Content */}
              <div className="text-center flex-1">
                <h1 className="blueox-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white mb-2 sm:mb-3 md:mb-4">
                  THE BLUE OX: <span className="text-[#ff4040]">UGANDA'S</span> AI & VR <span className="text-blue-500">KAMPUS</span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  Blue Ox Kampus delivers immersive, industry-aligned technical education to refugees, women, persons with disabilities, underserved youth, and students, bridging the last mile between talent and opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="https://wa.me/3197010209759?text=Hi!%20I%20want%20to%20fund%20a%20training%20cohort."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ff4040] hover:bg-[#ff2020] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-2xl"
                  >
                    Fund a Training Cohort
                  </a>
                  <a
                    href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Blue%20Ox."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all hover:scale-105"
                  >
                    Partner With Us
                  </a>
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

      <InsideTheKampus />

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-8 uppercase italic">Ready to pull up?</h2>
          <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">Applications for Feb 2026 Intake are Open</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/3197010209759?text=Hi!%20I%20want%20to%20apply%20for%20the%20training%20program." target="_blank" rel="noopener noreferrer" className="bg-[#ff4040] hover:bg-[#ff2020] text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl transition">
              Join Academy
            </a>
            <a href="https://wa.me/3197010209759?text=Hi!%20I%20want%20to%20become%20a%20partner." target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition">
              Partner Portal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
