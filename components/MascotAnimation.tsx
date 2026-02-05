"use client";

export default function MascotAnimation() {
  return (
    <div className="mascot-container">
      <div className="mascot-scene">
        <div className="mascot-video-wrapper">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="mascot-video"
          >
            <source src="/assets/videos/mascot-animation.mp4" type="video/mp4" />
            <source src="/assets/videos/mascot-animation.webm" type="video/webm" />
            {/* Fallback to image if video doesn't load */}
            <img 
              src="/assets/images/mascot.png" 
              alt="Blue OX Mascot"
              className="mascot-image"
            />
          </video>
        </div>
      </div>

      <style jsx>{`
        .mascot-container {
          position: relative;
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        .mascot-scene {
          position: relative;
          width: 100%;
          max-width: 600px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mascot-video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .mascot-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mascot-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .mascot-container {
            height: 300px;
          }

          .mascot-scene {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .mascot-container {
            height: 250px;
          }

          .mascot-scene {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
}
