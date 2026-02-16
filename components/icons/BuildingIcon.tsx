export default function BuildingIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      {/* Main building */}
      <rect x="12" y="16" width="40" height="38" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Roof/Top */}
      <path d="M12 16L32 4L52 16" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Entrance */}
      <rect x="26" y="42" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Door handle */}
      <circle cx="36" cy="48" r="1.5" fill="currentColor"/>
      
      {/* Windows - left column */}
      <rect x="16" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="16" y="34" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      
      {/* Windows - right column */}
      <rect x="40" y="22" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="40" y="34" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      
      {/* Floor lines */}
      <line x1="12" y1="30" x2="52" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      
      {/* Flag/antenna */}
      <line x1="32" y1="4" x2="32" y2="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    </svg>
  );
}
