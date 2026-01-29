import Reveal from './Reveal';

export default function Hero(){
  return (
    <Reveal delay={0.03}>
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-3 py-1 px-3 rounded-full bg-orange-600/10 text-orange-400 text-xs font-bold mb-4">• Live Simulation & Job Pipelines</div>
          <h1 className="brand-heading text-4xl md:text-6xl font-extrabold mb-4">UGANDA'S <span className="gradient-text">AI & VR</span> KAMPUS</h1>
          <p className="text-gray-300 max-w-2xl mb-6">Training, creation, and opportunity in one place. We use industry-grade simulators to verify skills and connect African talent to the global workforce.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="#academy" className="bg-[#f38131] px-5 py-2 rounded-full text-black font-bold">Apply to Academy</a>
            <a href="#house" className="border border-white/10 px-5 py-2 rounded-full">Book a Room</a>
          </div>

          <div className="mt-8 flex gap-8">
            <div className="text-center">
              <div className="text-2xl font-black text-[#f38131]">250+</div>
              <div className="text-xs text-gray-400 uppercase">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#f38131]">6+</div>
              <div className="text-xs text-gray-400 uppercase">Live Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-[#f38131]">70%</div>
              <div className="text-xs text-gray-400 uppercase">Employment Rate</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&w=1000&q=80" alt="VR Welding Simulation" className="w-full h-64 object-cover grayscale" />
            <div className="p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
              <div className="inline-flex items-center gap-2 text-xs mb-2"><span className="w-2 h-2 bg-red-500 rounded-full"/> LIVE SESSION: VR WELDING</div>
              <div className="text-xs text-gray-300 font-bold">Dig In Vision Platform • JIS Standards</div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
