import Reveal from './Reveal';

export default function VisualGallery(){
  return (
    <Reveal delay={0.15}>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">Inside <span className="text-blue-500">The Kampus</span></h2>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-2">Where simulation meets reality</p>
          </div>
          <div className="flex space-x-2">
            <span className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Mbarara, UG</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="sim-visual h-80 group">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80" alt="VR Academy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
            <div className="sim-overlay absolute inset-0 flex flex-col justify-end p-6">
              <h4 className="font-black uppercase text-white">BlueOx Academy</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">VR Skilled Trades Training</p>
            </div>
          </div>

          <div className="sim-visual h-80 group">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" alt="BlueOx House" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
            <div className="sim-overlay absolute inset-0 flex flex-col justify-end p-6">
              <h4 className="font-black uppercase text-white">BlueOx House</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Living & Co-working Space</p>
            </div>
          </div>

          <div className="sim-visual h-80 group">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="Global Jobs" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
            <div className="sim-overlay absolute inset-0 flex flex-col justify-end p-6">
              <h4 className="font-black uppercase text-white">BlueOx Jobs</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Poland • Netherlands • UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Reveal>
  );
}
