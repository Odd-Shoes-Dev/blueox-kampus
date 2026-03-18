export default function SunIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64" 
      fill="currentColor"
      className="w-12 h-12"
    >
      {/* Center circle */}
      <circle cx="32" cy="32" r="12" />
      
      {/* Sun rays */}
      <rect x="30" y="4" width="4" height="10" rx="2" />
      <rect x="30" y="50" width="4" height="10" rx="2" />
      <rect x="4" y="30" width="10" height="4" ry="2" />
      <rect x="50" y="30" width="10" height="4" ry="2" />
      
      {/* Diagonal rays */}
      <rect x="13" y="13" width="4" height="10" rx="2" transform="rotate(-45 15 18)" />
      <rect x="47" y="13" width="4" height="10" rx="2" transform="rotate(45 49 18)" />
      <rect x="13" y="47" width="4" height="10" rx="2" transform="rotate(-135 15 52)" />
      <rect x="47" y="47" width="4" height="10" rx="2" transform="rotate(135 49 52)" />
    </svg>
  );
}







