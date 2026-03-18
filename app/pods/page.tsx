"use client";

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';
import ApplicationForm, { FormType } from '../../components/ApplicationForm';

export default function PodsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('pods');

  const openRequest = (type: FormType = 'pods') => {
    setFormType(type);
    setIsFormOpen(true);
  };

  return (
    <>
      <Header />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal delay={0.1}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-[#e05a3a]/30 backdrop-blur-sm text-[#f4a08e] text-sm font-bold mb-6 border border-[#e05a3a]/30">
                • New Service
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-black">
                Billy Pods — Intern Pods that ship
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                For startups that need shipping capacity fast — add a Pod to your sprint without hiring.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Reveal delay={0.2}>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-black mb-4">Meet the Intern Pod</h2>
                <p className="text-gray-700 mb-4">
                  A Billy Pod includes coordination, cadence, and accountability — 1–3 vetted interns, a Pod Coordinator, and weekly reporting. Your team assigns tasks like a teammate; Billy runs the Pod.
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>Shortlist in 3–5 days · Kickoff in ~7 days</li>
                  <li>Weekly Pod Report · Replacement guarantee</li>
                </ul>

                <div className="space-y-4">
                  <h3 className="text-black font-bold">Choose Your Track</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-black/50 rounded-lg">
                      <div className="text-sm text-[#e05a3a] font-semibold">QA Pod</div>
                      <div className="text-gray-700 text-sm">Test cases · regression · bug triage</div>
                    </div>
                    <div className="p-4 bg-black/50 rounded-lg">
                      <div className="text-sm text-[#e05a3a] font-semibold">React Pod</div>
                      <div className="text-gray-700 text-sm">UI tickets · component cleanup · page builds</div>
                    </div>
                    <div className="p-4 bg-black/50 rounded-lg">
                      <div className="text-sm text-[#e05a3a] font-semibold">Python/Data Pod</div>
                      <div className="text-gray-700 text-sm">Dashboards · ETL · reporting automation</div>
                    </div>
                    <div className="p-4 bg-black/50 rounded-lg">
                      <div className="text-sm text-[#e05a3a] font-semibold">Support Engineering Pod</div>
                      <div className="text-gray-700 text-sm">Docs · internal tools · ticket cleanup</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => openRequest('pods')} className="bg-[#e05a3a] hover:bg-[#c94e30] text-white px-8 py-3 rounded-full font-bold">
                    Request Pod Profiles
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-black mb-4">For Startups — Request Pod Profiles</h3>
                <p className="text-gray-700 mb-4">Tell us what you need and we’ll reply with 3–5 matched profiles and a simple start plan.</p>

                <h4 className="text-black font-semibold mb-2">Information Collected</h4>
                <ul className="text-gray-700 space-y-2 mb-6">
                  <li>Full name · Work email · Company name · Website</li>
                  <li>Which Pod lane (QA, React, Python-Data, Support Eng, or Not sure)</li>
                  <li>Your stack & tools · Top 3–5 tasks · Duration · Pod size</li>
                </ul>

                <h4 className="text-black font-semibold mb-2">For Builders — Apply to the Billy Talent Pool</h4>
                <p className="text-gray-700 mb-4">We verify skill, rank candidates, and form Pods from a vetted pool. Applying does not guarantee selection.</p>

                <div className="flex gap-3">
                  <button onClick={() => openRequest('pods')} className="bg-white/5 hover:bg-black/10 text-black px-6 py-3 rounded-full font-semibold">
                    Request Pod Profiles
                  </button>
                  <button onClick={() => openRequest('academy')} className="border border-gray-300 px-6 py-3 rounded-full text-black">Apply to Pool</button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 max-w-4xl mx-auto text-center">
            <div className="bg-white/60 border border-gray-300 rounded-2xl p-8">
              <h4 className="text-black font-bold mb-2">Confirmation Messages</h4>
              <p className="text-gray-700 mb-4">Companies: Request received — we’ll send 3–5 matched profiles within a few business days. Interns: You’re now in the Billy Talent Pool; selected candidates receive assessment invites.</p>
              <p className="text-gray-600 text-sm">Privacy: We use this information only to match and coordinate your Pod.</p>
            </div>
          </div>
        </div>
      </section>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} formType={formType} />

      <Footer />
    </>
  );
}








