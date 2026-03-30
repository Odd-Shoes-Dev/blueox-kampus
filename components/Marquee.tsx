import Reveal from './Reveal';

export default function Marquee(){
  return (
    <div className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal delay={0.1}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-2">
              <span className="text-[#F58220]">Portfolio</span>
            </h2>
            <p className="text-gray-600 text-sm">Projects we've built</p>
          </div>
        </Reveal>
        
        <div className="overflow-x-auto scrollbar-hide pb-2 sm:pb-0">
          <div className="flex gap-6 sm:gap-8 md:gap-10 justify-center sm:justify-center items-center min-w-max px-8 sm:px-6">
            <a 
              href="https://ratethatai.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black/80 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer"
            >
              ratethatai.dev
            </a>
            <a 
              href="https://headshot.cam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black/80 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer"
            >
              headshot.cam
            </a>
            <a 
              href="https://blueoxjobs.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black/80 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer"
            >
              blueoxjobs.eu
            </a>
            <a 
              href="https://blueoxrides.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black/80 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer"
            >
              blueoxrides.com
            </a>
            <a 
              href="https://mylc1.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black/80 hover:text-[#F58220] transition-colors whitespace-nowrap cursor-pointer"
            >
              mylc1.online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}








