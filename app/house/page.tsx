import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';

export default function HousePage() {
  const rooms = [
    {
      id: 1,
      name: 'Single Studio',
      type: 'Private Room',
      capacity: '1 Person',
      amenities: ['Private bathroom', 'High-speed WiFi', 'Desk & Chair', 'Air conditioning', 'Access to common areas'],
      price: '$25/night',
      available: true,
      image: '[Add image: Modern single studio room]'
    },
    {
      id: 2,
      name: 'Double Studio',
      type: 'Shared Room',
      capacity: '2 People',
      amenities: ['Shared bathroom', 'High-speed WiFi', '2 Desks', 'Air conditioning', 'Kitchen access'],
      price: '$40/night',
      available: true,
      image: '[Add image: Double studio with two beds]'
    },
    {
      id: 3,
      name: 'Deluxe Suite',
      type: 'Premium Room',
      capacity: '2 People',
      amenities: ['Private bathroom', 'Mini kitchen', 'Workspace', 'Balcony', 'Premium WiFi', 'Smart TV'],
      price: '$60/night',
      available: true,
      image: '[Add image: Luxury suite with modern amenities]'
    },
    {
      id: 4,
      name: 'Team Room',
      type: 'Group Accommodation',
      capacity: '4 People',
      amenities: ['2 Bathrooms', 'Common workspace', 'Mini kitchen', 'Multiple desks', 'Conference area'],
      price: '$80/night',
      available: true,
      image: '[Add image: Large room with multiple beds and workspace]'
    }
  ];

  const facilities = [
    { icon: 'fas fa-utensils', name: 'Shared Kitchen', desc: 'Fully equipped kitchen with modern appliances' },
    { icon: 'fas fa-briefcase', name: 'Coworking Space', desc: '24/7 access to workspace with high-speed internet' },
    { icon: 'fas fa-dumbbell', name: 'Fitness Area', desc: 'Basic gym equipment for your wellness' },
    { icon: 'fas fa-tree', name: 'Garden', desc: 'Outdoor relaxation area with seating' },
    { icon: 'fas fa-lock', name: 'Security', desc: '24/7 security and CCTV surveillance' },
    { icon: 'fas fa-broom', name: 'Housekeeping', desc: 'Daily cleaning services included' }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-red-600/30 backdrop-blur-sm text-[#ff8080] text-sm font-bold mb-6 border border-[#ff4040]/30">
                • Student & Professional Accommodation
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
                The <span className="gradient-text-3d">House</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your home away from home at Blue OX Kampus. Comfortable, affordable accommodation designed for students, 
                developers, and innovators.
              </p>
            </div>
          </Reveal>

          {/* House Video */}
          <Reveal delay={0.2}>
            <div className="relative mb-16">
              <div className="aspect-video rounded-2xl border-2 border-[#ff4040]/30 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/videos/room_vid.MP4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.3}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Facilities & <span className="text-[#ff4040]">Amenities</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Everything you need for a comfortable and productive stay
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {facilities.map((facility, index) => (
              <Reveal key={index} delay={0.4 + index * 0.1}>
                <div className="glass p-6 rounded-xl hover:border-[#ff4040]/50 transition-all duration-300">
                  <i className={`${facility.icon} text-5xl mb-4 text-[#ff4040]`}></i>
                  <h3 className="text-xl font-bold text-white mb-2">{facility.name}</h3>
                  <p className="text-gray-400">{facility.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.5}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Available <span className="text-[#ff4040]">Rooms</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the perfect space for your stay at Blue OX Kampus
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {rooms.map((room, index) => (
              <Reveal key={room.id} delay={0.6 + index * 0.1}>
                <div className="glass rounded-2xl overflow-hidden hover:border-[#ff4040]/50 transition-all duration-300">
                  {/* Room Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-6">
                      <i className="fas fa-bed text-5xl mb-3 text-gray-600"></i>
                      <p className="text-gray-500 text-sm">{room.image}</p>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{room.name}</h3>
                        <p className="text-gray-400 text-sm">{room.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#ff4040]">{room.price}</div>
                        {room.available && (
                          <div className="text-green-400 text-xs font-semibold mt-1">Available</div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-300">
                      <i className="fas fa-users text-[#ff4040]"></i>
                      <span>{room.capacity}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Amenities:</h4>
                      <ul className="space-y-1">
                        {room.amenities.map((amenity, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <i className="fas fa-check text-[#ff4040]"></i>
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a 
                      href={`https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(room.name)}%20at%20Blue%20OX%20Kampus`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-[#ff2020] text-center py-3 rounded-lg text-white font-bold transition-all duration-300 hover:scale-105"
                    >
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Policies */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <Reveal delay={0.7}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  <i className="fas fa-map-marker-alt text-[#ff4040] mr-3"></i>Location
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-start gap-3">
                    <span className="text-[#ff4040] mt-1">•</span>
                    <span>Located in Mbarara, Uganda</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#ff4040] mt-1">•</span>
                    <span>Walking distance to Blue OX Kampus training facilities</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#ff4040] mt-1">•</span>
                    <span>Close to restaurants, shops, and transportation</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#ff4040] mt-1">•</span>
                    <span>Quiet, safe neighborhood perfect for students</span>
                  </p>
                </div>

                <div className="mt-8 p-4 bg-[#ff4040]/10 border border-[#ff4040]/30 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <span className="text-[#ff4040] font-semibold">Need directions?</span> Contact us on WhatsApp for detailed location information.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Policies */}
            <Reveal delay={0.8}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  <i className="fas fa-clipboard text-[#ff4040] mr-3"></i>House Policies
                </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Check-in / Check-out</h4>
                    <p className="text-sm">Check-in: 2:00 PM | Check-out: 11:00 AM</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Minimum Stay</h4>
                    <p className="text-sm">3 nights minimum (weekly & monthly discounts available)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Payment</h4>
                    <p className="text-sm">Mobile money, bank transfer, or cash accepted</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cancellation</h4>
                    <p className="text-sm">Free cancellation up to 48 hours before check-in</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">House Rules</h4>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>• No smoking inside rooms</li>
                      <li>• Respect quiet hours (10 PM - 7 AM)</li>
                      <li>• Keep common areas clean</li>
                      <li>• Visitors allowed in common areas only</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal delay={0.9}>
            <div className="glass rounded-2xl border-2 border-[#ff4040]/50 p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Book Your Stay?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Contact us on WhatsApp for immediate booking assistance and special offers for Academy students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I'm%20interested%20in%20booking%20a%20room%20at%20Blue%20OX%20Kampus%20House"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-[#ff2020] px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl inline-block"
                >
                  Book on WhatsApp
                </a>
                <a 
                  href="tel:+3197010209759"
                  className="border-2 border-white/30 px-10 py-5 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg text-white inline-block"
                >
                  Call Us
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                <i className="fas fa-lightbulb text-[#ff4040] mr-2"></i>
                <span className="text-[#ff4040]">Special discount:</span> Academy students get 20% off their stay!
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
