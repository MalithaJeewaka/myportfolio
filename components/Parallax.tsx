"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const Parallax = ({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode;
  speed?: number;
}) => {
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Parallax effect logic
    const updateParallax = () => {
      if (parallaxRef.current) {
        const scrollY = lenis.scroll; // Get current scroll position
        const translateY = scrollY * speed; // Apply speed for parallax effect
        parallaxRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    lenis.on("scroll", updateParallax);

    return () => {
      lenis.destroy();
      lenis.off("scroll", updateParallax);
    };
  }, [speed]);

  return (
    <div ref={parallaxRef} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
};

export default Parallax;
