"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ duration = 0.5 }) => {
  const counterRef = useRef(null);
  const loaderRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading with a fixed duration
    let loadingTl = gsap.timeline({
      onComplete: () => {
        // Hide loader after completion
        gsap.to(loaderRef.current, {
          duration: 0.8,
          opacity: 0,
          pointerEvents: "none",
          ease: "power4.inOut",
          onComplete: () => {
            setIsLoaded(true);
          },
        });
      },
    });

    // Animate counter from 0 to 100
    loadingTl.to(
      counterRef.current,
      {
        duration: duration,
        innerText: 100,
        snap: { innerText: 1 }, // Snap to integer values
        ease: "power4.inOut",
      },
      0
    );

    return () => {
      loadingTl.kill();
    };
  }, [duration]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-black text-white p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="w-full max-w-md px-6 text-6xl">
        <span ref={counterRef}>0</span>
        <span> / 100</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
