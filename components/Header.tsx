"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

export default function Header(){
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleDocClick(e: MouseEvent | TouchEvent){
      const target = e.target as Node;
      if (!open) return;
      if (menuRef.current && !menuRef.current.contains(target) && btnRef.current && !btnRef.current.contains(target)){
        setOpen(false);
      }
    }

    function handleEsc(e: KeyboardEvent){ if (e.key === 'Escape') setOpen(false); }

    document.addEventListener('mousedown', handleDocClick);
    document.addEventListener('touchstart', handleDocClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleDocClick);
      document.removeEventListener('touchstart', handleDocClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [open]);
  return (
    <header className="fixed top-0 left-0 w-full h-[var(--nav-height)] z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-1 lg:-mt-5 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/assets/images/logo_name.png" alt="Blue OX" className="w-20 sm:w-24 md:w-28 h-auto" />
            </Link>
            <div className="hidden sm:block">
              <span className="text-sm font-black tracking-tighter uppercase leading-none block text-white">Blue <span className="text-[#f38131]">OX</span> Kampus</span>
              <span className="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase">Mbarara • Uganda</span>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6 text-xs uppercase font-bold tracking-widest">
            <Link href="#">Kampus</Link>
            <Link href="#academy">Academy</Link>
            <Link href="#house">The House</Link>
            <Link href="#partners">Partners</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link className="hidden sm:inline-block bg-[#f38131] text-black px-3 py-1 rounded-md text-[10px] font-black uppercase" href="#apply">Join Kampus</Link>
            {/* mobile toggle placed inside the centered container so it aligns with content */}
            <button ref={btnRef} className="lg:hidden absolute right-6 p-2 rounded-md bg-white/5" aria-label="menu" onClick={() => setOpen(v => !v)}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - render only when open */}
        {open && (
          <div ref={menuRef} className="lg:hidden mobile-menu">
            <Link href="#" onClick={() => setOpen(false)}>Kampus</Link>
            <Link href="#academy" onClick={() => setOpen(false)}>Academy</Link>
            <Link href="#house" onClick={() => setOpen(false)}>The House</Link>
            <Link href="#partners" onClick={() => setOpen(false)}>Partners</Link>
            <Link href="#apply" onClick={() => setOpen(false)}>Apply</Link>
          </div>
        )}
      </header>
  );
}
