"use client";
import React, { useEffect, useRef, useState } from 'react';

type ScrollParallaxProps = {
  children: React.ReactNode;
  speed?: number; // multiplier for parallax effect (0.1 = slow, 1 = normal, 2 = fast)
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  rotate?: boolean;
  scale?: boolean;
};

export default function ScrollParallax({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '',
  rotate = false,
  scale = false
}: ScrollParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransform = () => {
    let transform = '';
    
    switch (direction) {
      case 'up':
        transform += `translateY(${offset}px) `;
        break;
      case 'down':
        transform += `translateY(${-offset}px) `;
        break;
      case 'left':
        transform += `translateX(${offset}px) `;
        break;
      case 'right':
        transform += `translateX(${-offset}px) `;
        break;
    }
    
    if (rotate) {
      transform += `rotate(${offset * 0.1}deg) `;
    }
    
    if (scale) {
      const scaleValue = 1 + (offset * 0.0001);
      transform += `scale(${Math.max(0.95, Math.min(1.05, scaleValue))}) `;
    }
    
    return transform;
  };

  return (
    <div 
      ref={elementRef}
      className={`parallax-element ${className}`}
      style={{
        transform: getTransform(),
        willChange: 'transform',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
}