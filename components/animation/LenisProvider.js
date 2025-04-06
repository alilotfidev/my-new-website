// components/LenisProvider.jsx
"use client"; // Important for Next.js App Router

import { createContext, useContext, useEffect, useState } from "react";
const LenisContext = createContext(null);

export default function LenisProvider({ children }) {
  const [lenis, setLenis] = useState();

  useEffect(() => {
    const init = async () => {
      // Dynamic import to avoid SSR issues
      const { default: Lenis } = await import("lenis");

      const lenis = new Lenis({
        duration: 1.4, // Slightly longer for elegant feel
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease-out
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.8, // Slightly slower wheel for precision
        smoothTouch: false, // Usually better to disable on mobile
        infinite: false,
      });

      // Create animation frame loop
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      // Start the loop
      requestAnimationFrame(raf);

      setLenis(lenis);
    };

    init();

    // Cleanup function
    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
