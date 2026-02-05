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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ff4040] mb-6">
              Interactive VR Experience
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our cutting-edge VR technology in 3D. Rotate, zoom, and interact with real VR equipment used in our training programs.
            </p>
          </div>

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
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Professional VR Equipment
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Experience the same industry-grade VR technology used by professionals worldwide. 
                  Our training programs utilize cutting-edge headsets and controllers to provide 
                  immersive learning experiences in AI, simulation, and digital innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 bg-[#ff4040] rounded-full flex-shrink-0"></div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">4K Resolution</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Crystal clear displays for immersive visual experiences and detailed training scenarios
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Precision Tracking</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Sub-millimeter accuracy for professional training and simulation requirements
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Wireless Freedom</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Untethered movement for natural interaction and comprehensive training experiences
                  </p>
                </div>

                <div className="bg-gray-800/30 rounded-lg p-4 sm:p-6 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">Haptic Feedback</h4>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Realistic touch sensations enhance learning and skill development in VR training
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <button className="w-full sm:w-auto bg-[#ff4040] hover:bg-[#ff2020] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff4040]/25 transition-all duration-300">
                  Experience VR Training
                </button>
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