"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const ImageSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef([]);

  // Reset the slidesRef array
  slidesRef.current = [];
  const addToSlideRefs = (el) => {
    if (el && !slidesRef.current.includes(el)) {
      slidesRef.current.push(el);
    }
  };

  // Initialize slider
  useEffect(() => {
    if (images.length === 0 || slidesRef.current.length === 0) return;

    // Set initial positions for all slides
    slidesRef.current.forEach((slide, index) => {
      if (index === 0) {
        gsap.set(slide, { xPercent: 0, autoAlpha: 1 });
      } else {
        gsap.set(slide, { xPercent: 100, autoAlpha: 0 });
      }
    });
  }, [images.length]);

  const goToSlide = (index) => {
    if (index === activeIndex || index < 0 || index >= images.length) return;

    // Determine direction
    const direction = index > activeIndex ? 1 : -1;
    const currentSlide = slidesRef.current[activeIndex];
    const nextSlide = slidesRef.current[index];

    // Prepare next slide
    gsap.set(nextSlide, {
      xPercent: direction * 100,
      autoAlpha: 1,
    });

    // Create animation timeline
    const tl = gsap.timeline();

    // Animate current slide out
    tl.to(
      currentSlide,
      {
        xPercent: -direction * 100,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    // Animate next slide in
    tl.to(
      nextSlide,
      {
        xPercent: 0,
        duration: 0.8,
        ease: "power2.inOut",
      },
      0
    );

    setActiveIndex(index);
  };

  const goToNext = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    goToSlide(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (activeIndex - 1 + images.length) % images.length;
    goToSlide(prevIndex);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* Slider */}
      <div className="relative w-full h-[400px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            ref={addToSlideRefs}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              className="object-cover"
              src={image.src}
              alt="codepen/alilotfidev"
              fill={true}
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors text-white"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors text-white"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageSlider;
