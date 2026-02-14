import React from 'react';

// Foundation Icons
export function FireIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-1.5 3-3.5 5-6 7 0 3.31 2.69 6 6 6s6-2.69 6-6c-2.5-2-4.5-4-6-7z" opacity="0.9"/>
      <path d="M12 22c-3.87 0-7-3.13-7-7 0-2 1-3.5 2-5 1 1.5 2.5 2.5 4 3-1-2 0-4 1-5 1 3 3.5 5 5 7-0.5-2.5 0-5 2-7 1 3 2 6 2 9 0 3.87-3.13 7-7 7z" opacity="0.7"/>
    </svg>
  );
}

export function SolarPanelIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z" opacity="0.3"/>
      <path d="M3 6h18v10H3z" opacity="0.8"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <line x1="9" y1="6" x2="9" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <line x1="15" y1="6" x2="15" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
      <rect x="11" y="16" width="2" height="4" opacity="0.8"/>
      <rect x="8" y="20" width="8" height="2" opacity="0.8"/>
    </svg>
  );
}

export function ChargingStationIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="3" width="8" height="16" rx="1" opacity="0.9"/>
      <path d="M9 7l3 4h-2l-1 3" fill="#000" opacity="0.3"/>
      <rect x="6" y="19" width="8" height="2" opacity="0.8"/>
      <path d="M14 8h2v3h2v3h-2v2l-2-2v-6z" opacity="0.8"/>
    </svg>
  );
}

export function HeadsetIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C7 2 3 6 3 11v6h3v-6c0-3.31 2.69-6 6-6s6 2.69 6 6v6h3v-6c0-5-4-9-9-9z" opacity="0.9"/>
      <rect x="2" y="14" width="4" height="6" rx="1" opacity="0.85"/>
      <rect x="18" y="14" width="4" height="6" rx="1" opacity="0.85"/>
    </svg>
  );
}

export function GraduationCapIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" opacity="0.9"/>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" opacity="0.7"/>
    </svg>
  );
}

export function HomeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10l9-7z" opacity="0.9"/>
    </svg>
  );
}

export function WheelchairIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="4" r="2" opacity="0.9"/>
      <path d="M12 6v4h3l-1 3h-2v-3H8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4h2c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6h4z" opacity="0.85"/>
      <path d="M18 14h-2v-2h2c1.1 0 2 0.9 2 2v4h-2v-4z" opacity="0.9"/>
    </svg>
  );
}

export function FemaleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" opacity="0.9"/>
      <path d="M12 12c-3 0-5 2-5 4v2h2v4h6v-4h2v-2c0-2-2-4-5-4z" opacity="0.85"/>
    </svg>
  );
}

export function SchoolIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3z" opacity="0.9"/>
      <path d="M12 12.5L5 9l7-3.85L19 9l-7 3.5z" opacity="0.7"/>
    </svg>
  );
}

export function UserGraduateIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="3" opacity="0.9"/>
      <path d="M12 13c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" opacity="0.85"/>
      <path d="M12 2L6 5v2l6 3 6-3V5l-6-3z" opacity="0.9"/>
    </svg>
  );
}

export function VRCardboardIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="6" width="20" height="12" rx="2" opacity="0.9"/>
      <circle cx="8" cy="12" r="2.5" fill="#000" opacity="0.3"/>
      <circle cx="16" cy="12" r="2.5" fill="#000" opacity="0.3"/>
      <line x1="12" y1="6" x2="12" y2="18" stroke="#000" strokeWidth="0.5" opacity="0.2"/>
    </svg>
  );
}

export function CertificateIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="13" rx="1" opacity="0.9"/>
      <circle cx="12" cy="10" r="3" fill="#000" opacity="0.2"/>
      <path d="M10 17l2 4 2-4h-1v-3h-2v3h-1z" opacity="0.85"/>
    </svg>
  );
}

export function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export function HandshakeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9h4l2-2h6l2 2h4v8H3V9z" opacity="0.3"/>
      <path d="M7 9l3-3h4l3 3M9 12l3 3 3-3" opacity="0.9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function ChalkboardTeacherIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="12" rx="1" opacity="0.8"/>
      <rect x="5" y="7" width="10" height="6" fill="#000" opacity="0.2"/>
      <circle cx="18" cy="18" r="2.5" opacity="0.9"/>
      <path d="M18 20.5c-2 0-3 1-3 2h6c0-1-1-2-3-2z" opacity="0.85"/>
    </svg>
  );
}

export function TruckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="8" width="12" height="8" rx="1" opacity="0.9"/>
      <path d="M14 8h4l3 3v5h-7V8z" opacity="0.85"/>
      <circle cx="7" cy="18" r="2" opacity="0.9"/>
      <circle cx="17" cy="18" r="2" opacity="0.9"/>
    </svg>
  );
}

export function UsersIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3" opacity="0.9"/>
      <circle cx="17" cy="7" r="3" opacity="0.7"/>
      <path d="M9 10c-3 0-5 1.5-5 3.5V16h10v-2.5c0-2-2-3.5-5-3.5z" opacity="0.9"/>
      <path d="M17 10c-2 0-3.5 1-4.5 2.5H20v-2.5c0-1.5-1-3-3-3z" opacity="0.7"/>
    </svg>
  );
}

export function ChartLineIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20l6-6 4 4 8-8"/>
      <path d="M21 4v8h-8"/>
    </svg>
  );
}

export function CheckCircleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" opacity="0.9"/>
      <path d="M8 12l3 3 5-6" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
    </svg>
  );
}

export function QuestionCircleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" opacity="0.9"/>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

export function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" opacity="0.9"/>
      <path d="M3 9h18" fill="none" stroke="#000" strokeWidth="2" opacity="0.2"/>
      <rect x="7" y="2" width="2" height="4" opacity="0.85"/>
      <rect x="15" y="2" width="2" height="4" opacity="0.85"/>
    </svg>
  );
}

export function FileDownloadIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" opacity="0.9"/>
      <path d="M14 2v6h6" opacity="0.7"/>
      <path d="M12 11v7m-3-3l3 3 3-3" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

export function HandHoldingUSDIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17h4l2-2h6l2 2h4v3H3v-3z" opacity="0.9"/>
      <circle cx="12" cy="9" r="6" opacity="0.85"/>
      <path d="M12 6v1m0 4v1m-2-3h4m-4 2h4" fill="none" stroke="#000" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export function ToolsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}

export function SyncIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
    </svg>
  );
}

export function CogIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l2 4h4l2 2v4l4 2-4 2v4l-2 2h-4l-2 4-2-4H6l-2-2v-4L0 12l4-2V6l2-2h4l2-4z" opacity="0.3"/>
      <circle cx="12" cy="12" r="4" opacity="0.9"/>
    </svg>
  );
}

export function LaptopIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="12" rx="1" opacity="0.9"/>
      <path d="M1 16h22v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2z" opacity="0.85"/>
    </svg>
  );
}

export function PiggyBankIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="13" rx="8" ry="5" opacity="0.9"/>
      <circle cx="12" cy="8" r="4" opacity="0.85"/>
      <rect x="11" y="4" width="2" height="3" opacity="0.8"/>
      <circle cx="14" cy="8" r="1" fill="#000" opacity="0.4"/>
      <path d="M4 13v4M20 13v4" opacity="0.85"/>
    </svg>
  );
}

export function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" opacity="0.9"/>
      <path d="M9 12l2 2 4-4" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

export function RocketIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c3 0 8 8 8 12-2 0-4-1-6-2-2 1-4 2-6 2 0-4 5-12 8-12z" opacity="0.9"/>
      <circle cx="12" cy="11" r="2" fill="#000" opacity="0.3"/>
      <path d="M5 14l-3 6 6-3M19 14l3 6-6-3" opacity="0.7"/>
    </svg>
  );
}

export function BuildingIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="20" rx="1" opacity="0.9"/>
      <rect x="7" y="5" width="3" height="3" fill="#000" opacity="0.2"/>
      <rect x="14" y="5" width="3" height="3" fill="#000" opacity="0.2"/>
      <rect x="7" y="10" width="3" height="3" fill="#000" opacity="0.2"/>
      <rect x="14" y="10" width="3" height="3" fill="#000" opacity="0.2"/>
      <rect x="10" y="17" width="4" height="5" fill="#000" opacity="0.3"/>
    </svg>
  );
}

export function ClipboardListIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="3" width="14" height="18" rx="2" opacity="0.9"/>
      <rect x="9" y="1" width="6" height="3" rx="1" opacity="0.85"/>
      <line x1="9" y1="9" x2="15" y2="9" stroke="#000" strokeWidth="1.5" opacity="0.3"/>
      <line x1="9" y1="13" x2="15" y2="13" stroke="#000" strokeWidth="1.5" opacity="0.3"/>
      <line x1="9" y1="17" x2="15" y2="17" stroke="#000" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export function UserCheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="4" opacity="0.9"/>
      <path d="M9 11c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" opacity="0.85"/>
      <path d="M17 8l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
    </svg>
  );
}

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" opacity="0.9"/>
      <path d="M16.5 14.5c-.3 0-1.5-.7-1.7-.8-.2-.1-.4-.2-.5.2-.1.3-.5.8-.6.9-.1.2-.3.2-.5.1-.8-.4-1.7-1-2.3-1.8-.2-.2 0-.3.1-.5.1-.1.3-.3.4-.5.1-.1.1-.3 0-.4-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.7.7-.9 1.4-.9 2.2 0 1.2.9 2.4 1 2.5 1.6 2.4 4.1 3.4 5.3 3.4.5 0 1-.1 1.4-.4.5-.3.9-.8 1-1.4.1-.3 0-.5-.1-.6-.2-.1-1.1-.5-1.4-.7z" fill="#000" opacity="0.3"/>
    </svg>
  );
}
