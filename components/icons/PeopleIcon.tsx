export default function PeopleIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      {/* Left person */}
      <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M10 28C10 23 13.6 19 18 19C22.4 19 26 23 26 28V44C26 45.1 25.1 46 24 46H12C10.9 46 10 45.1 10 44V28Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Center person (taller) */}
      <circle cx="32" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M22 30C22 23 26.5 18 32 18C37.5 18 42 23 42 30V48C42 49.1 41.1 50 40 50H24C22.9 50 22 49.1 22 48V30Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      
      {/* Right person */}
      <circle cx="46" cy="14" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M38 28C38 23 41.6 19 46 19C50.4 19 54 23 54 28V44C54 45.1 53.1 46 52 46H40C38.9 46 38 45.1 38 44V28Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}







