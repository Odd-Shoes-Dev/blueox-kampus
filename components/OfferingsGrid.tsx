import { RobotIcon, WrenchIcon, HomeIcon, BriefcaseIcon } from './Icons';
import Reveal from './Reveal';

export default function OfferingsGrid(){
  return (
    <section id="academy" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0.03}>
            <div className="glass p-6 rounded-2xl text-center">
              <RobotIcon className="w-12 h-12 mx-auto mb-3 text-[#f38131]" />
              <div className="font-black uppercase mb-2">Academy</div>
              <div className="text-sm text-gray-400">AI & VR training and certification programs</div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass p-6 rounded-2xl text-center">
              <WrenchIcon className="w-12 h-12 mx-auto mb-3 text-purple-300" />
              <div className="font-black uppercase mb-2">Studio</div>
              <div className="text-sm text-gray-400">Product Lab: ship real apps with mentorship</div>
            </div>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="glass p-6 rounded-2xl text-center">
              <HomeIcon className="w-12 h-12 mx-auto mb-3 text-amber-400" />
              <div className="font-black uppercase mb-2">House</div>
              <div className="text-sm text-gray-400">Co-living, co-working, and community</div>
            </div>
          </Reveal>

          <Reveal delay={0.30}>
            <div className="glass p-6 rounded-2xl text-center">
              <BriefcaseIcon className="w-12 h-12 mx-auto mb-3 text-rose-400" />
              <div className="font-black uppercase mb-2">Jobs</div>
              <div className="text-sm text-gray-400">Skills-verified job placements abroad</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
