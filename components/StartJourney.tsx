import Reveal from './Reveal';

export default function StartJourney(){
  return (
    <Reveal delay={0.27}>
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-4 text-white">START YOUR JOURNEY</h3>
        <p className="text-gray-400 mb-6">Whether you are a student, an employer, or a partner, this is where skills meet opportunity.</p>
        <div className="inline-flex gap-4">
          <a href="https://wa.me/3197010209759" target="_blank" rel="noopener noreferrer" className="bg-[#f38131] text-black px-6 py-3 rounded-full font-bold">JOIN THE ACADEMY</a>
          <a href="#partners" className="bg-white/5 text-white px-6 py-3 rounded-full font-bold">PARTNER WITH US</a>
        </div>
        <div className="text-sm text-gray-500 mt-4">Mbarara University of Science &amp; Technology (MUST) Lab</div>
        </div>
      </section>
    </Reveal>
  );
}
