'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm from '../../components/ApplicationForm';
import VanIcon from '../../components/icons/VanIcon';
import SunIcon from '../../components/icons/SunIcon';
import VRHeadsetIcon from '../../components/icons/VRHeadsetIcon';
import PeopleIcon from '../../components/icons/PeopleIcon';

export default function ModelPage() {
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const learningPathway = [
    {
      stage: '01',
      title: 'VR Simulation',
      duration: '2-4 weeks',
      description: 'Learners master techniques in safe, repeatable virtual environment. Unlimited practice, zero material cost, no injury risk.',
      benefits: ['Muscle memory development', 'Error correction in real-time', 'Confidence building', 'Self-paced learning']
    },
    {
      stage: '02',
      title: 'Physical Practice',
      duration: '1-2 weeks',
      description: 'Transition to real equipment with established fundamentals. VR-first learners adapt faster with fewer mistakes.',
      benefits: ['Shorter physical training time', 'Less material waste', 'Reduced consumable costs', 'Higher success rates']
    },
    {
      stage: '03',
      title: 'Workplace Readiness',
      duration: '1 week',
      description: 'Communication, safety protocols, job search skills, interview prep, and professional conduct training.',
      benefits: ['Employer-ready soft skills', 'Safety certification', 'CV and interview skills', 'Industry expectations']
    },
    {
      stage: '04',
      title: 'Certification & Placement',
      duration: 'Ongoing',
      description: 'Skills assessment, certification support, job matching, and alumni network for continued support.',
      benefits: ['Recognized credentials', 'Job placement support', 'Alumni community', 'Career pathway guidance']
    }
  ];

  const costComparison = {
    traditional: {
      label: 'Traditional TVET',
      perLearner: 500,
      breakdown: [
        { item: 'Metal/materials', cost: 200 },
        { item: 'Gas/electricity', cost: 100 },
        { item: 'Tool wear', cost: 80 },
        { item: 'Safety equipment', cost: 70 },
        { item: 'Facility costs', cost: 50 }
      ]
    },
    vrFirst: {
      label: 'VR-First Model',
      perLearner: 50,
      breakdown: [
        { item: 'VR software access', cost: 20 },
        { item: 'Facilitator time', cost: 15 },
        { item: 'Physical practice materials', cost: 10 },
        { item: 'Device maintenance', cost: 5 }
      ]
    }
  };

  const mobileDeployment = [
    {
      icon: <VanIcon />,
      title: 'Mobile First',
      description: 'Bring training to settlements, towns, and schools—not the other way around'
    },
    {
      icon: <SunIcon />,
      title: 'Solar Powered',
      description: 'Generator + solar panels enable training anywhere, regardless of grid access'
    },
    {
      icon: <VRHeadsetIcon />,
      title: 'Compact Setup',
      description: 'VR headsets, laptops, and equipment fit in portable cases for rapid deployment'
    },
    {
      icon: <PeopleIcon />,
      title: 'Local Trainers',
      description: 'Community members certified as facilitators for sustainable operations'
    }
  ];

  const evidencePoints = [
    {
      source: 'Toolkit Foundation + GIZ',
      finding: 'VR welding successfully deployed in Kakuma Refugee Camp',
      location: 'Kenya'
    },
    {
      source: 'Toolkit iSkills + DIT',
      finding: '32 trainers-of-trainers certified on VR welding in Kampala',
      location: 'Uganda'
    },
    {
      source: 'Toolkit Reports',
      finding: 'VR-first learners transition more easily into physical welding practice',
      location: 'Multi-country'
    },
    {
      source: 'Kenya Program',
      finding: '500+ internationally certified welders trained',
      location: 'Kenya'
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                The <span className="text-[#F58220]">VR-First</span><br/>
                Training <span className="text-blue-500">Model</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                How we deliver safer, cheaper, more accessible technical training—proven in refugee camps, rural schools, and underserved communities.
              </p>
            </div>
          </Reveal>

          {/* Learning Pathway */}
          <Reveal delay={0.2}>
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12 uppercase tracking-tighter">
                4-Stage <span className="text-blue-500">Learning Pathway</span>
              </h2>
              <div className="space-y-6">
                {learningPathway.map((stage, index) => (
                  <div key={index} className="bg-white/5 border border-gray-300 rounded-2xl p-8 hover:bg-black/10 transition">
                    <div className="grid md:grid-cols-[100px_1fr] gap-6">
                      <div>
                        <div className="text-6xl font-black text-[#F58220]/30">{stage.stage}</div>
                        <div className="text-blue-500 font-bold text-sm mt-2">{stage.duration}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">{stage.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed text-lg">{stage.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {stage.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Cost Comparison */}
          <Reveal delay={0.4}>
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12 uppercase tracking-tighter">
                90% <span className="text-[#F58220]">Lower Cost</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="bg-white/5 border border-[#F58220]/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">{costComparison.traditional.label}</h3>
                  <div className="text-5xl font-black text-red-500 mb-6">
                    ${costComparison.traditional.perLearner}
                    <span className="text-lg text-gray-600 font-normal">/learner</span>
                  </div>
                  <div className="space-y-3">
                    {costComparison.traditional.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="text-gray-600 font-bold">${item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VR-First */}
                <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-8 relative">
                  <div className="absolute -top-4 right-8">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      90% Savings
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{costComparison.vrFirst.label}</h3>
                  <div className="text-5xl font-black text-[#F58220] mb-6">
                    ${costComparison.vrFirst.perLearner}
                    <span className="text-lg text-gray-600 font-normal">/learner</span>
                  </div>
                  <div className="space-y-3">
                    {costComparison.vrFirst.breakdown.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span className="text-gray-700">{item.item}</span>
                        <span className="text-gray-600 font-bold">${item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mobile Deployment */}
          <Reveal delay={0.6}>
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12 uppercase tracking-tighter">
                Mobile <span className="text-blue-500">Deployment</span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mobileDeployment.map((item, i) => (
                  <div key={i} className="bg-white/5 border border-gray-300 rounded-xl p-6 hover:bg-black/10 transition text-center">
                    <div className="text-blue-500 mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Evidence */}
          <Reveal delay={0.8}>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-12 uppercase tracking-tighter">
                Field-Tested <span className="text-[#F58220]">Evidence</span>
              </h2>
              <div className="bg-white/60 border border-gray-300 rounded-2xl p-8 sm:p-12">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center">
                  Not experimental. This model has been deployed and validated in real refugee camps and training centers:
                </p>
                <div className="space-y-4">
                  {evidencePoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 bg-white/5 border border-gray-300 rounded-xl p-6">
                      <div className="text-3xl">✓</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-blue-500 font-bold">{point.source}</span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-600 text-sm">{point.location}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{point.finding}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={1.0}>
            <div className="mt-20 bg-gradient-to-r from-[#F58220]/10 to-blue-500/10 border border-gray-300 rounded-2xl p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-black text-black mb-4">
                Want to deploy this model in your community?
              </h3>
              <p className="text-gray-700 mb-8 text-lg">
                We co-design programs with partners to fit local context, learner needs, and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsPartnerFormOpen(true)}
                  className="bg-[#F58220] hover:bg-[#c94e30] text-white px-12 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl"
                >
                  Partner With Us
                </button>
                <a
                  href="/fund"
                  className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 text-blue-500 px-12 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 inline-block"
                >
                  Fund Training
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ApplicationForm
        isOpen={isPartnerFormOpen}
        onClose={() => setIsPartnerFormOpen(false)}
        formType="partner"
      />
      <Footer />
    </>
  );
}








