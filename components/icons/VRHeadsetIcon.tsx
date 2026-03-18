export default function VRHeadsetIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      {/* Headset visor */}
      <path d="M12 28C12 20 18.5 14 26 14H38C45.5 14 52 20 52 28" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Left lens */}
      <circle cx="22" cy="24" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="22" cy="24" r="5" fill="currentColor" opacity="0.15"/>
      
      {/* Right lens */}
      <circle cx="42" cy="24" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="42" cy="24" r="5" fill="currentColor" opacity="0.15"/>
      
      {/* Bridge */}
      <line x1="29" y1="18" x2="35" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Straps */}
      <path d="M14 28C10 32 8 40 12 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M50 28C54 32 56 40 52 48" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      
      {/* Front accent */}
      <line x1="20" y1="34" x2="44" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}







