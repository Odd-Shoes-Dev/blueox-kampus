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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once && obs && el) obs.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      });
    }, { threshold, rootMargin });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  const style = delay ? { ['--reveal-delay' as any]: `${delay}s` } : undefined;

  return (
    <div ref={ref} data-delay={delay ? 'true' : undefined} style={style} className={`reveal ${visible ? 'show' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
