export default function VanIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      {/* Main body */}
      <path d="M8 32H56V44C56 46.2 54.2 48 52 48H12C9.8 48 8 46.2 8 44V32Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Cabin top */}
      <path d="M40 32V20C40 18 42 16 44 16H54C56 16 58 18 58 20V32" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Roof line */}
      <line x1="8" y1="32" x2="40" y2="20" stroke="currentColor" strokeWidth="2"/>
      
      {/* Windows */}
      <rect x="12" y="26" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="22" y="26" width="8" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <rect x="44" y="18" width="12" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      
      {/* Wheels */}
      <circle cx="16" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="48" r="1.5" fill="currentColor"/>
      <circle cx="48" cy="48" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="48" cy="48" r="1.5" fill="currentColor"/>
      
      {/* Door line */}
      <line x1="40" y1="32" x2="40" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}







