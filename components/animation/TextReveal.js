// components/AnimatedText.jsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({
  children,
  className = "inline-block",
  initalOpacity = 0.3,
  delay = 0,
  triggerOnScroll = false,
  scrollThreshold = "90%",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    const animConfig = {
      opacity: initalOpacity,
      duration: 0.3,
      ease: "expo.inOut",
      stagger: 0.2,
      delay: delay,
    };
    // Add ScrollTrigger if needed
    if (triggerOnScroll) {
      animConfig.scrollTrigger = {
        trigger: textRef.current,
        start: `top ${scrollThreshold}`,
      };
    }
    // Initialize SplitType on the element
    const typeSplit = new SplitType(textRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    // Create the animation with GSAP
    gsap.from(textRef.current.querySelectorAll(".line"), animConfig);
    console.log(animConfig);

    // Cleanup function
    return () => {
      typeSplit.revert();
    };
  }, []);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
}
