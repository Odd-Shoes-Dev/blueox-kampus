'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import LaptopIcon from '../../components/icons/LaptopIcon';
import PersonIcon from '../../components/icons/PersonIcon';
import PeopleIcon from '../../components/icons/PeopleIcon';
import VRHeadsetIcon from '../../components/icons/VRHeadsetIcon';
import VanIcon from '../../components/icons/VanIcon';
import BuildingIcon from '../../components/icons/BuildingIcon';

export default function FundPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const fundingOptions = [
    {
      id: 'laptop',
      title: 'Buy a Laptop',
      price: 500,
      description: 'Provide a training laptop for VR equipment',
      impact: 'Enables 1 trainer to deliver mobile VR training'
    },
    {
      id: 'one-person',
      title: 'Train 1 Person',
      price: 50,
      description: 'Full cohort cycle for one learner',
      impact: 'One refugee, woman, or youth becomes job-ready',
      featured: true
    },
    {
      id: 'cohort',
      title: 'Fund a Cohort',
      price: 500,
      description: '10 learners, 6-week training cycle',
      impact: '10 people trained in VR welding or solar'
    },
    {
      id: 'vr-headset',
      title: 'VR Headset',
      price: 1200,
      description: 'Quest 3 with welding software',
      impact: 'Enables unlimited practice sessions'
    },
    {
      id: 'mobile-lab',
      title: 'Mobile VR Lab',
      price: 5000,
      description: '5 VR stations + laptop + generator',
      impact: 'Deploy training to 1 settlement or school'
    },
    {
      id: 'full-deployment',
      title: 'Full Deployment',
      price: 15000,
      description: 'Complete VR lab + 3 months operation',
      impact: 'Train 100+ people with certified outcomes'
    }
  ];

  const getIcon = (id: string) => {
    switch(id) {
      case 'laptop':
        return <LaptopIcon />;
      case 'one-person':
        return <PersonIcon />;
      case 'cohort':
        return <PeopleIcon />;
      case 'vr-headset':
        return <VRHeadsetIcon />;
      case 'mobile-lab':
        return <VanIcon />;
      case 'full-deployment':
        return <BuildingIcon />;
      default:
        return null;
    }
  };

  const handleFund = (optionId: string, price: number) => {
    setSelectedAmount(price);
    
    // Map option IDs to Whop product IDs from environment variables
    const productMap: Record<string, string | undefined> = {
      'laptop': process.env.NEXT_PUBLIC_WHOP_LAPTOP_ID,
      'one-person': process.env.NEXT_PUBLIC_WHOP_ONE_PERSON_ID,
      'cohort': process.env.NEXT_PUBLIC_WHOP_COHORT_ID,
      'vr-headset': process.env.NEXT_PUBLIC_WHOP_HEADSET_ID,
      'custom': process.env.NEXT_PUBLIC_WHOP_CUSTOM_ID,
    };

    const productId = productMap[optionId];

    if (!productId) {
      console.error('Invalid product ID for:', optionId);
      alert('This payment option is not yet configured. Please contact us directly.');
      return;
    }

    // Build Whop checkout URL
    const checkoutUrl = new URL('https://whop.com/checkout');
    checkoutUrl.searchParams.append('product', productId);
    checkoutUrl.searchParams.append('success_url', `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you`);
    checkoutUrl.searchParams.append('cancel_url', `${process.env.NEXT_PUBLIC_SITE_URL}/fund`);
    
    // Redirect to Whop checkout
    window.location.href = checkoutUrl.toString();
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0a0f1a] to-black pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Fund <span className="text-[#ff4040]">Training.</span><br/>
                Change <span className="text-blue-500">Lives.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose how you want to impact displaced youth, refugees, women, and underserved communities in Western Uganda.
              </p>
            </div>
          </Reveal>

          {/* Custom Amount Section */}
          <Reveal delay={0.2}>
            <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-12 text-center">
              <h3 className="text-3xl font-black text-white mb-4">
                Want to contribute a custom amount?
              </h3>
              <p className="text-gray-400 mb-8 text-lg">
                Every dollar goes directly to training equipment, facilitator salaries, and learner support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <input
                  type="number"
                  placeholder="Enter amount ($)"
                  className="bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white text-lg w-full sm:w-64 focus:outline-none focus:border-[#ff4040]"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
                <button
                  onClick={() => selectedAmount && handleFund('custom', selectedAmount)}
                  disabled={!selectedAmount || selectedAmount < 1}
                  className="bg-[#ff4040] hover:bg-[#ff2020] disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 w-full sm:w-auto"
                >
                  Contribute
                </button>
              </div>
            </div>
          </Reveal>

          {/* Funding Options Grid */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative bg-white/5 border-2 rounded-2xl p-8 hover:bg-white/10 transition-all hover:scale-105 ${
                    option.featured
                      ? 'border-[#ff4040] shadow-2xl shadow-[#ff4040]/20'
                      : 'border-white/10'
                  }`}
                >
                  {option.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#ff4040] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-5xl mb-4 text-blue-500" style={{display: 'flex', width: 'fit-content'}}>
                    {getIcon(option.id)}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-2">
                    {option.title}
                  </h3>
                  
                  <div className="text-4xl font-black text-[#ff4040] mb-4">
                    ${option.price}
                  </div>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-6">
                    <p className="text-blue-500 text-sm font-bold">
                      💡 {option.impact}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleFund(option.id, option.price)}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      option.featured
                        ? 'bg-[#ff4040] hover:bg-[#ff2020] text-white shadow-xl'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    Fund Now
                  </button>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Impact Stats */}
          <Reveal delay={0.6}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#ff4040] mb-2">$50</div>
                <div className="text-gray-400 text-sm">Per trained person</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-2">90%</div>
                <div className="text-gray-400 text-sm">Lower than traditional TVET</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#ff4040] mb-2">0</div>
                <div className="text-gray-400 text-sm">Material waste</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-2">100%</div>
                <div className="text-gray-400 text-sm">Transparent tracking</div>
              </div>
            </div>
          </Reveal>

          {/* Trust Section */}
          <Reveal delay={0.8}>
            <div className="mt-16 bg-black/50 border border-white/10 rounded-2xl p-8 text-center">
              <p className="text-gray-300 leading-relaxed">
                Built with <span className="text-blue-500 font-bold">Dig in Vision</span> and informed by deployments with <span className="text-blue-500 font-bold">Toolkit Foundation</span> and <span className="text-blue-500 font-bold">GIZ</span>. Your funds support real, field-tested training that works.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
