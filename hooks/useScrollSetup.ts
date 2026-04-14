import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollSetup = (modelRef: React.MutableRefObject<any>) => {
  useEffect(() => {
    if (!modelRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-container', // Your main wrapper
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrubbing
        },
      });
    });

    return () => ctx.revert();
  }, [modelRef]);
};