import Reveal from './Reveal';

export default function ApplyCTA(){
  return (
    <Reveal delay={0.30}>
      <section id="apply" className="py-12 sm:py-20 px-4 sm:px-6 text-center bg-gradient-to-b from-black/50 to-black">
        <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-black mb-8 uppercase italic">Ready to pull up?</h2>
        <p className="text-gray-500 mb-12 font-bold uppercase tracking-widest text-sm">Applications for Feb 2026 Intake are Open</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-[#f38131] px-12 py-6 rounded-2xl font-black uppercase tracking-widest shadow-2xl hover:bg-orange-600 transition">Join Academy</button>
          <button className="bg-white/5 border border-white/10 px-12 py-6 rounded-2xl font-black uppercase tracking-widest">Partner Portal</button>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
