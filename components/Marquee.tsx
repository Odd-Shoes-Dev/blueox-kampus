import Reveal from './Reveal';

export default function Marquee(){
  return (
    <div className="py-6 bg-black/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-center gap-10 items-center">
        <span className="text-xs font-black uppercase tracking-[0.35em] text-white/80">ratethatai.dev</span>
        <span className="text-xs font-black uppercase tracking-[0.35em] text-white/80">headshot.cam</span>
        <span className="text-xs font-black uppercase tracking-[0.35em] text-white/80">blueoxjobs.eu</span>
        <span className="text-xs font-black uppercase tracking-[0.35em] text-white/80">blueoxrides.com</span>
        <span className="text-xs font-black uppercase tracking-[0.35em] text-white/80">mylc1.online</span>
      </div>
    </div>
  );
}
