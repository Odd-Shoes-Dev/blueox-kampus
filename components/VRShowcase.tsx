"use client";
import { useState, createElement } from 'react';

export default function VRShowcase() {
  const [currentModel, setCurrentModel] = useState<'headset' | 'controller'>('headset');

  return (
    <>
      {/* Load model-viewer script */}
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js"
      />
      
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 3D Model Viewer */}
            <div className="relative">
              <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
                <div className="h-96 w-full relative">
                  {createElement('model-viewer', {
                    src: currentModel === 'headset' ? '/assets/models/vr-headset-full.glb' : '/assets/models/vr-controller.glb',
                    alt: currentModel === 'headset' ? 'VR Headset 3D Model' : 'VR Controller 3D Model',
                    'auto-rotate': true,
                    'camera-controls': true,
                    loading: 'lazy',
                    style: {
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'transparent',
                      borderRadius: '12px'
                    },
                    'environment-image': 'neutral',
                    exposure: '1',
                    'shadow-intensity': '1',
                    'camera-orbit': '0deg 75deg 8m',
                    suppressHydrationWarning: true
                  })}
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-white text-xs">
                        Drag to rotate • Scroll to zoom • Tap to focus
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Model Switch Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 justify-center">
                  <button
                    onClick={() => setCurrentModel('headset')}
                    className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                      currentModel === 'headset'
                        ? 'bg-[#ff4040] text-white shadow-lg shadow-[#ff4040]/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M2 10V14C2 15.1046 2.89543 16 4 16V8C2.89543 8 2 8.89543 2 10Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M22 10V14C22 15.1046 21.1046 16 20 16V8C21.1046 8 22 8.89543 22 10Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="15" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    VR Headset
                  </button>
                  <button
                    onClick={() => setCurrentModel('controller')}
                    className={`px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${
                      currentModel === 'controller'
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8C8 6.89543 8.89543 6 10 6H14C15.1046 6 16 6.89543 16 8V10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H16V16C16 17.1046 15.1046 18 14 18H10C8.89543 18 8 17.1046 8 16V14H4C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10H8V8Z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="10" cy="10" r="1" fill="currentColor"/>
                      <circle cx="14" cy="10" r="1" fill="currentColor"/>
                      <circle cx="10" cy="14" r="1" fill="currentColor"/>
                      <circle cx="14" cy="14" r="1" fill="currentColor"/>
                    </svg>
                    Controller
                  </button>
                </div>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Traditional vocational training is expensive, dangerous, and inaccessible. We fixed it with <span className="text-[#ff4040] font-semibold italic">VR simulations</span> that make technical education available to everyone:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <img src="/icons/fire.svg" alt="Fire" className="w-8 h-8" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg">
                    <span className="text-white font-semibold">Master welding (MIG, TIG, Stick)</span> without consuming materials or risk of injury.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <img src="/icons/solar-panel.svg" alt="Solar Panel" className="w-8 h-8" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg">
                    <span className="text-white font-semibold">Install solar systems</span> through simulated hands-on practice.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <img src="/icons/wheelchair.svg" alt="Wheelchair" className="w-8 h-8" />
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg">
                    <span className="text-white font-semibold">Accessible for all</span> — including persons with disabilities in remote areas.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <p className="text-xl text-white">
                  <span className="text-[#ff4040] font-bold">Result?</span> Certified skills at 90% lower cost. <span className="text-blue-500 font-semibold">Zero waste. Zero injuries. Maximum access.</span>
                </p>
              </div>

              <div className="pt-4 sm:pt-6">
                <a 
                  href="https://wa.me/3197010209759?text=Hi!%20I%20would%20like%20to%20learn%20more%20about%20VR%20training." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto bg-[#ff4040] hover:bg-[#ff2020] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff4040]/25 transition-all duration-300 text-center"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff4040]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
        </div>
      </section>
    </>
  );
}