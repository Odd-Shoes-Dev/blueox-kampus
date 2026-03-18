export default function VRHeadset() {
  return (
    <div className="vr-image-container flex justify-center items-center py-8">
      <div className="vr-image-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          alt="VR Headset"
          className="vr-glasses-image"
        />
        
        {/* Floating Data Points */}
        <div className="vr-data-points">
          <div className="data-point data-point-1">AI</div>
          <div className="data-point data-point-2">VR</div>
          <div className="data-point data-point-3">94%</div>
          <div className="data-point data-point-4">LIVE</div>
        </div>
      </div>
    </div>
  );
}







