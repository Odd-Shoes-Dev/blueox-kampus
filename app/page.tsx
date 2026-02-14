import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import MascotAnimation from '../components/MascotAnimation';

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-black pt-2 sm:pt-16 md:pt-24 lg:pt-32">
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

      {/* WHO WE SERVE SECTION */}
      <section className="relative bg-black py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 text-center">Who We <span className="text-[#ff4040]">Serve</span></h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/school.svg" alt="Students" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Students</h4>
                  <p className="text-gray-400">Secondary school career guidance and technical training</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/home.svg" alt="Refugees" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Refugees</h4>
                  <p className="text-gray-400">In Nakivale Settlement and across Western Uganda</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/female.svg" alt="Women" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Women</h4>
                  <p className="text-gray-400">Entering technical trades and technical fields</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/wheelchair.svg" alt="Persons with Disabilities" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Persons with Disabilities</h4>
                  <p className="text-gray-400">Accessible VR training environments</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/user-graduate.svg" alt="Out-of-School Youth" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Out-of-School Youth</h4>
                  <p className="text-gray-400">Second-chance skills training opportunities</p>
                </div>
                <div className="blueox-card p-8 text-center">
                  <img src="/icons/building.svg" alt="TVET Institutions" className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">TVET Institutions</h4>
                  <p className="text-gray-400">Upgrading traditional vocational training</p>
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
