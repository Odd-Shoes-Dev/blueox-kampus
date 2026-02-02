import Reveal from './Reveal';

export default function Marquee(){
  return (
    <div className="py-6 bg-black/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
          <div className="flex gap-6 sm:gap-8 md:gap-10 justify-center sm:justify-center items-center min-w-max px-8 sm:px-6">
            <a 
              href="https://ratethatai.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              ratethatai.dev
            </a>
            <a 
              href="https://headshot.cam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              headshot.cam
            </a>
            <a 
              href="https://blueoxjobs.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              blueoxjobs.eu
            </a>
            <a 
              href="https://blueoxrides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              blueoxrides.com
            </a>
            <a 
              href="https://mylc1.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-black uppercase tracking-[0.35em] text-white/80 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
            >
              mylc1.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
