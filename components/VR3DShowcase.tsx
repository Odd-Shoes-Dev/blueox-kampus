"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';

// 3D Model Components
function VRHeadsetModel() {
  const { scene } = useGLTF('/assets/models/vr-headset-full.glb');
  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
}

function VRControllerModel() {
  const { scene } = useGLTF('/assets/models/vr-controller.glb');
  return <primitive object={scene} scale={2} position={[0, 0, 0]} />;
}

// Loading fallback
function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>
  );
}

export default function VR3DShowcase() {
  const [currentModel, setCurrentModel] = useState<'headset' | 'controller'>('headset');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render 3D content until we're on the client
  if (!isClient) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Interactive VR Experience
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Explore our cutting-edge VR technology in 3D. Loading interactive models...
            </p>
          </div>
          <div className="flex justify-center">
            <Loader />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent mb-6">
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
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 50 }}
                  style={{ background: 'transparent' }}
                >
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <spotLight position={[0, 10, 0]} intensity={0.3} />
                  
                  <Suspense fallback={null}>
                    <Environment preset="studio" />
                    {currentModel === 'headset' ? (
                      <VRHeadsetModel />
                    ) : (
                      <VRControllerModel />
                    )}
                  </Suspense>
                  
                  <OrbitControls 
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                    minDistance={3}
                    maxDistance={10}
                  />
                </Canvas>
                
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white text-xs">
                      Drag to rotate • Scroll to zoom
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Model Switch Buttons */}
              <div className="flex gap-4 mt-6 justify-center">
                <button
                  onClick={() => setCurrentModel('headset')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentModel === 'headset'
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  VR Headset
                </button>
                <button
                  onClick={() => setCurrentModel('controller')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentModel === 'controller'
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Controller
                </button>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Professional VR Equipment
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Experience the same industry-grade VR technology used by professionals worldwide. 
                Our training programs utilize cutting-edge headsets and controllers to provide 
                immersive learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <h4 className="text-white font-semibold">High Resolution</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Crystal clear 4K displays for immersive visual experiences
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="text-white font-semibold">Precise Tracking</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Sub-millimeter accuracy for professional training scenarios
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="text-white font-semibold">Wireless Freedom</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Untethered movement for natural interaction and training
                </p>
              </div>

              <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h4 className="text-white font-semibold">Haptic Feedback</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Realistic touch sensations enhance learning experiences
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                Experience VR Training
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}