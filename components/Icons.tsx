import React from 'react';

export function MaskIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 7c0-1.657 2.686-3 6-3s6 1.343 6 3v5c0 1.657-2.686 3-6 3s-6-1.343-6-3V7z" opacity="0.9"/>
      <path d="M2 12c0 3.866 4.03 7 10 7s10-3.134 10-7v5c0 1.657-4.03 3-10 3S2 18.657 2 17v-5z" opacity="0.6"/>
    </svg>
  );
}

export function HeartbeatIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 12s2-4 6-4 4 4 6 4 4-4 6-4v8H3z" />
      <path d="M6 12l1.5-3L10 15l2-6 1.5 3L18 6" />
    </svg>
  );
}

export function RobotIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" ry="2" opacity="0.95"/>
      <circle cx="8" cy="11" r="1.2" fill="#000" />
      <circle cx="16" cy="11" r="1.2" fill="#000" />
      <rect x="10" y="14" width="4" height="1.5" rx="0.5" ry="0.5" fill="#000" />
      <rect x="7" y="3" width="10" height="2" rx="1" ry="1" />
    </svg>
  );
}

export function WrenchIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M14.7 6.3a5 5 0 0 0-7.07 7.07L3 18v3h3l4.63-4.63a5 5 0 0 0 4.07-10.07z" />
      <path d="M14 4l2 2" />
    </svg>
  );
}

export function HomeIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3l9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10l9-7z" />
    </svg>
  );
}

export function BriefcaseIcon({ className = '' }: { className?: string }){
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 7a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path d="M8 10h8v4H8z" fill="#000" opacity="0.06" />
    </svg>
  );
}
