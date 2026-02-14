import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import MascotAnimation from '../components/MascotAnimation';

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black -pt-4 sm:pt-16 md:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-0">
          <Reveal delay={0.1}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-0 sm:gap-4 md:gap-8 lg:gap-16">
              {/* 3D Mascot Animation */}
              <div className="flex-shrink-0 w-full lg:w-auto lg:max-w-md">
                <MascotAnimation />
              </div>

              {/* Hero Content */}
              <div className="text-center lg:text-left flex-1 -mt-6 sm:-mt-4 md:mt-0">
                <h1 className="blueox-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-white mb-2 sm:mb-3 md:mb-4">
                  FROM <span className="text-[#ff4040]">ISOLATION</span> TO <span className="text-blue-500">INDUSTRY</span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                  Blue Ox Kampus delivers immersive, industry-aligned technical education to students, refugees, women, persons with disabilities, and underserved youth, bridging the last mile between talent and opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
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

      <Footer />
    </>
  );
}
