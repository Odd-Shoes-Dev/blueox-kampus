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
    
    // Map option IDs to Whop checkout URLs
    const checkoutMap: Record<string, string> = {
      'laptop': 'https://whop.com/blueox/buy-a-laptop/',
      'one-person': 'https://whop.com/blueox/train-1-person/',
      'cohort': 'https://whop.com/blueox/fund-a-cohort/',
      'vr-headset': 'https://whop.com/blueox/vr-headset-d8/',
      'custom-10': 'https://whop.com/blueox/contribute-10',
      'custom-20': 'https://whop.com/blueox/contribute-20',
      'custom-50': 'https://whop.com/blueox/contribute-50',
      'custom-100': 'https://whop.com/blueox/contribute-100',
      'custom-200': 'https://whop.com/blueox/contribute-200/',
      'custom-500': 'https://whop.com/blueox/contribute-500',
      'custom-1000': 'https://whop.com/blueox/contribute-1000',
      'custom-2500': 'https://whop.com/blueox/contribute-2500',
    };

    const checkoutUrl = checkoutMap[optionId];

    if (!checkoutUrl) {
      console.error('Invalid option ID:', optionId);
      alert('This payment option is not yet configured. Please contact us directly.');
      return;
    }

    // Redirect to Whop checkout
    window.location.href = checkoutUrl;
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                Fund <span className="text-[#e05a3a]">Training.</span><br/>
                Change <span className="text-blue-500">Lives.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Choose how you want to impact displaced youth, refugees, women, and underserved communities in Western Uganda.
              </p>
            </div>
          </Reveal>

          {/* Custom Amount Section */}
          <Reveal delay={0.2}>
            <div className="mb-16 bg-white/5 border border-gray-300 rounded-2xl p-8 sm:p-12">
              <h3 className="text-3xl font-black text-black mb-4 text-center">
                Choose Your Contribution Amount
              </h3>
              <p className="text-gray-600 mb-8 text-lg text-center">
                Every dollar goes directly to training equipment, facilitator salaries, and learner support.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { amount: 10, id: 'custom-10' },
                  { amount: 20, id: 'custom-20' },
                  { amount: 50, id: 'custom-50' },
                  { amount: 100, id: 'custom-100' },
                  { amount: 200, id: 'custom-200' },
                  { amount: 500, id: 'custom-500' },
                  { amount: 1000, id: 'custom-1000' },
                  { amount: 2500, id: 'custom-2500' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleFund(item.id, item.amount)}
                    className="bg-blue-500/10 border-2 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-500 text-black px-6 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105"
                  >
                    ${item.amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <p className="text-gray-600 text-sm text-center mt-6">
                Need a custom amount over $2,500? <a href="mailto:blueoxrecruit@gmail.com" className="text-blue-500 hover:text-blue-400 underline">Contact us directly</a>
              </p>
            </div>
          </Reveal>

          {/* Funding Options Grid */}
          <Reveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundingOptions.map((option) => (
                <div
                  key={option.id}
                  className={`relative bg-white/5 border-2 rounded-2xl p-8 hover:bg-black/10 transition-all hover:scale-105 ${
                    option.featured
                      ? 'border-[#e05a3a] shadow-2xl shadow-[#e05a3a]/20'
                      : 'border-gray-300'
                  }`}
                >
                  {option.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#e05a3a] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-5xl mb-4 text-blue-500" style={{display: 'flex', width: 'fit-content'}}>
                    {getIcon(option.id)}
                  </div>
                  
                  <h3 className="text-2xl font-black text-black mb-2">
                    {option.title}
                  </h3>
                  
                  <div className="text-4xl font-black text-[#e05a3a] mb-4">
                    ${option.price}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
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
                        ? 'bg-[#e05a3a] hover:bg-[#c94e30] text-white shadow-xl'
                        : 'bg-blue-500 hover:bg-blue-600 text-black'
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
                <div className="text-4xl sm:text-5xl font-black text-[#e05a3a] mb-2">$50</div>
                <div className="text-gray-600 text-sm">Per trained person</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-2">90%</div>
                <div className="text-gray-600 text-sm">Lower than traditional TVET</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-[#e05a3a] mb-2">0</div>
                <div className="text-gray-600 text-sm">Material waste</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-blue-500 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Transparent tracking</div>
              </div>
            </div>
          </Reveal>

          {/* Trust Section */}
          <Reveal delay={0.8}>
            <div className="mt-16 bg-white/60 border border-gray-300 rounded-2xl p-8 text-center">
              <p className="text-gray-700 leading-relaxed">
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








