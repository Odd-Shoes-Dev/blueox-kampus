'use client';

import Image from 'next/image';
import Reveal from './Reveal';

export default function InsideTheKampus() {
  const cards = [
    {
      title: 'BlueOx Academy',
      subtitle: 'VR Skilled Trades Training',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80',
      alt: 'VR Academy'
    },
    {
      title: 'BlueOx House',
      subtitle: 'Living & Co-working Space',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      alt: 'BlueOx House'
    },
    {
      title: 'BlueOx Jobs',
      subtitle: 'Poland • Netherlands • UAE',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      alt: 'Global Jobs'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                Inside <span className="text-blue-500">The Kampus</span>
              </h2>
              <p className="text-gray-600 text-sm font-bold uppercase tracking-widest mt-2">
                Where simulation meets reality
              </p>
            </div>
            <div className="flex space-x-2">
              <span className="bg-white/5 border border-gray-300 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                Mbarara, UG
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="relative overflow-hidden rounded-3xl border border-gray-300 h-80 group cursor-pointer">
                {/* Image with grayscale hover effect */}
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-90 transition duration-300" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h4 className="font-black uppercase text-black text-lg group-hover:text-[#e05a3a] transition">
                    {card.title}
                  </h4>
                  <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}








