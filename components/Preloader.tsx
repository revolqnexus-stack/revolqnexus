'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Only run once per session to avoid annoying the user
    if (sessionStorage.getItem('revolq_loaded')) {
      setIsComplete(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('revolq_loaded', 'true');
          setIsComplete(true);
        }
      });

      // 1. Initial state: Lock scrolling
      document.body.style.overflow = 'hidden';

      // 2. Text fades in and moves slightly up
      tl.fromTo(textRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      )
      // 3. Hold for a moment, then fade text out
      .to(textRef.current, 
        { opacity: 0, y: -20, duration: 0.8, ease: 'power3.in', delay: 0.5 }
      )
      // 4. Slide the entire black curtain up to reveal the site
      .to(containerRef.current, 
        { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }
      )
      // 5. Unlock scrolling
      .call(() => {
        document.body.style.overflow = '';
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = ''; // Cleanup failsafe
    };
  }, []);

  if (isComplete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <h1 
        ref={textRef}
        className="font-serif text-4xl tracking-widest text-white uppercase opacity-0 md:text-6xl"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Revolq
      </h1>
    </div>
  );
}
