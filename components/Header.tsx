"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
    <header className="fixed top-0 left-0 w-full h-[var(--nav-height)] z-50 bg-black/70 backdrop-blur-md border-b border-white/5 right-50">
        <div className="max-w-7xl mx-auto px-6 py-0 lg:mt-0 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/assets/images/logo_name.png" alt="Blue OX" className="w-20 sm:w-24 md:w-28 h-auto mt-2 lg:mt-0" />
            </Link>
            <div className="block">
              <span className="text-xs sm:text-sm font-black tracking-tighter uppercase leading-none block text-white">Blue <span className="text-[#ff4040]">OX</span> <span className="text-blue-500">Kampus</span></span>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6 text-xs uppercase font-bold tracking-widest">
            <Link href="/" className={pathname === '/' ? 'text-[#ff4040]' : 'hover:text-[#ff4040] transition-colors'}>Home</Link>
            <Link href="/academy" className={pathname === '/academy' ? 'text-[#ff4040]' : 'hover:text-[#ff4040] transition-colors'}>Programs</Link>
            <Link href="/house" className={pathname === '/house' ? 'text-[#ff4040]' : 'hover:text-[#ff4040] transition-colors'}>The House</Link>
            <Link href="/partners" className={pathname === '/partners' ? 'text-[#ff4040]' : 'hover:text-[#ff4040] transition-colors'}>Partners</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link 
              href="/fund"
              className="hidden md:inline-block bg-[#ff4040] text-white px-4 py-2 rounded-md text-sm font-black uppercase hover:bg-[#ff2020] transition-colors"
            >
              Fund Training
            </Link>
            {/* mobile toggle - now flows naturally in flex container */}
            <button ref={btnRef} className="lg:hidden p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors" aria-label="menu" onClick={() => setOpen(v => !v)}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - render only when open */}
        {open && (
          <div ref={menuRef} className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-white/10 py-4 px-6">
            <div className="flex flex-col gap-4 max-w-7xl mx-auto">
              <Link 
                href="/" 
                onClick={() => setOpen(false)}
                className={pathname === '/' ? 'text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider' : 'text-white hover:text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider transition-colors'}
              >
                Home
              </Link>
              <Link 
                href="/academy" 
                onClick={() => setOpen(false)}
                className={pathname === '/academy' ? 'text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider' : 'text-white hover:text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider transition-colors'}
              >
                Programs
              </Link>
              <Link 
                href="/house" 
                onClick={() => setOpen(false)}
                className={pathname === '/house' ? 'text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider' : 'text-white hover:text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider transition-colors'}
              >
                The House
              </Link>
              <Link 
                href="/partners" 
                onClick={() => setOpen(false)}
                className={pathname === '/partners' ? 'text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider' : 'text-white hover:text-[#ff4040] py-2 text-sm font-bold uppercase tracking-wider transition-colors'}
              >
                Partners
              </Link>
              <Link
                href="/fund"
                onClick={() => setOpen(false)}
                className="bg-[#ff4040] text-white px-4 py-2 rounded-md text-sm font-black uppercase hover:bg-[#ff4040]/90 transition-colors inline-block text-center w-full"
              >
                Fund Training
              </Link>
            </div>
          </div>
        )}
      </header>
  );
}
