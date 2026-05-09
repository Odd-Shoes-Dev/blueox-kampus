"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header(){
  const [open, setOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
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

  useEffect(() => {
    const scroller = document.body;
    let lastScrollY = scroller.scrollTop;
    const handleScroll = () => {
      const currentScrollY = scroller.scrollTop;
      const delta = currentScrollY - lastScrollY;
      if (currentScrollY <= 20) setIsHeaderVisible(true);
      else if (delta > 6) { setIsHeaderVisible(false); setOpen(false); }
      else if (delta < -2) setIsHeaderVisible(true);
      lastScrollY = currentScrollY;
    };
    scroller.addEventListener('scroll', handleScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (active: boolean) =>
    `text-xs font-bold tracking-widest uppercase transition-colors ${active ? 'text-[#0044CC]' : 'text-gray-600 hover:text-[#0044CC]'}`;

  const mobileLinkCls = (active: boolean) =>
    `py-2 text-sm font-bold uppercase tracking-wider border-b border-gray-100 transition-colors ${active ? 'text-[#F58220]' : 'text-gray-600 hover:text-[#F58220]'}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-out backdrop-blur-[14px] h-[var(--nav-height)] bg-white border-b border-gray-200 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 flex items-center justify-between h-full relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 py-3 pr-2">
          <img src="/assets/images/logo_name.png" alt="Blue OX" className="w-10 sm:w-11 md:w-12 h-auto" />
          <span className="text-base sm:text-lg md:text-xl font-black tracking-tighter uppercase leading-none text-[#F58220]">
            Blue <span className="text-[#F58220]">OX</span> <span className="text-[#0044CC]">Kampus</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 text-xs uppercase font-bold tracking-widest">
          <Link href="/"         className={navLink(pathname === '/')}>Home</Link>
          <Link href="/pods"     className={navLink(pathname === '/pods')}>Pods</Link>
          <Link href="/cohort"   className={navLink(pathname === '/cohort')}>Cohort</Link>
          <Link href="/partners" className={navLink(pathname === '/partners')}>Partners</Link>
          <Link href="/about"    className={navLink(pathname === '/about')}>About</Link>
        </nav>

        {/* Right CTAs + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.blueoxjobs.eu/hiring"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block border border-[#F58220] text-[#F58220] px-4 py-2 rounded-md text-sm font-black uppercase hover:bg-[#F58220] hover:text-white transition-colors"
          >
            Request a Pod
          </a>
          <Link
            href="/fund"
            className="hidden md:inline-block bg-[#0044CC] text-white px-4 py-2 rounded-md text-sm font-black uppercase hover:bg-[#0033AA] transition-colors"
          >
            Fund Training
          </Link>
          <button
            ref={btnRef}
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-black/10"
            aria-label="menu"
            onClick={() => setOpen(v => !v)}
          >
            <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full backdrop-blur-md py-4 px-6 flex flex-col gap-1 bg-white/95 border-t border-gray-200"
        >
          <Link href="/"         onClick={() => setOpen(false)} className={mobileLinkCls(pathname === '/')}>Home</Link>
          <Link href="/pods"     onClick={() => setOpen(false)} className={mobileLinkCls(pathname === '/pods')}>Pods</Link>
          <Link href="/cohort"   onClick={() => setOpen(false)} className={mobileLinkCls(pathname === '/cohort')}>Cohort</Link>
          <Link href="/partners" onClick={() => setOpen(false)} className={mobileLinkCls(pathname === '/partners')}>Partners</Link>
          <Link href="/about"    onClick={() => setOpen(false)} className={mobileLinkCls(pathname === '/about')}>About</Link>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.blueoxjobs.eu/hiring"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex-1 border border-[#F58220] text-[#F58220] px-4 py-3 text-sm font-black uppercase text-center block hover:bg-[#F58220] hover:text-white transition-colors rounded-md"
            >
              Request a Pod
            </a>
            <Link
              href="/fund"
              onClick={() => setOpen(false)}
              className="flex-1 bg-[#0044CC] text-white px-4 py-3 text-sm font-black uppercase text-center block hover:bg-[#0033AA] transition-colors rounded-md"
            >
              Fund Training
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
