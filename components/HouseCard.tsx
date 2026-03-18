import Reveal from './Reveal';

export default function HouseCard(){
  return (
    <Reveal delay={0.21}>
      <section id="house" className="py-8 sm:py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl p-8 bg-[#e05a3a] text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-extrabold mb-2">BLUEOX HOUSE: LIVE & CREATE</h3>
              <p className="mb-4">Airbnb-style living for students, researchers, and creators — focused environments built for rapid learning and building.</p>
              <div className="flex gap-3 items-center">
                <div className="text-sm font-black bg-white/20 rounded-full px-3 py-1">$20 / night</div>
                <a href="#" className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">Book a Room</a>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden border border-black/10 bg-black/5 p-4">
                <video 
                  className="w-full h-40 bg-black/20 rounded-xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/assets/videos/room_vid.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
      </div>
    </div>
      </section>
    </Reveal>
  );
}








