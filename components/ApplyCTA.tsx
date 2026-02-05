import Reveal from './Reveal';

export default function ApplyCTA(){
  return (
    <Reveal delay={0.30}>
      <section id="apply" className="py-12 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-b from-black/50 to-black">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-black mb-8 uppercase italic">Ready to pull up?</h2>
        <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">Applications for Feb 2026 Intake are Open</p>
        <div className="flex justify-center">
          <a href="https://wa.me/3197010209759" target="_blank" rel="noopener noreferrer" className="bg-[#ff4040] px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-red-600 transition inline-block text-center">Join Academy</a>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
