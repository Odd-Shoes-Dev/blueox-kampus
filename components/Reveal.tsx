"use client";
import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number; // seconds
  once?: boolean;
};

export default function Reveal({ children, className = '', threshold = 0.12, rootMargin = '0px', delay = 0, once = true }: RevealProps){
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // On mobile, show content immediately to prevent hiding
    if (isMobile) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once && obs && el) obs.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      });
    }, { 
      threshold: isMobile ? 0.05 : threshold, // Lower threshold for mobile
      rootMargin: isMobile ? '50px' : rootMargin // Earlier trigger on mobile
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once, isMobile]);

  const style = delay ? { ['--reveal-delay' as any]: `${delay}s` } : undefined;

  return (
    <div ref={ref} data-delay={delay ? 'true' : undefined} style={style} className={`reveal ${visible ? 'show' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}








