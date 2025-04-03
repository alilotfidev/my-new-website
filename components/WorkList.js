"use client";
import WorkItem from "./WorkItem";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function WorkList() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const projectElements = document.querySelectorAll(".work-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(projectElements).indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animate the counter when activeIndex changes
  useEffect(() => {
    const numberElement = document.querySelector("#work-number");
    if (numberElement) {
      gsap.fromTo(
        numberElement,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power4.in" }
      );
    }
  }, [activeIndex]);

  return (
    <div className="md:flex justify-between mt-6 sm:mt-8 md:mt-12 lg:mt-16">
      <div className="md:text-9xl lg:text-[16rem] leading-[0.8] sticky top-8 h-fit hidden md:block">
        <span>0</span>
        <span id="work-number">{activeIndex + 1}</span>
        <span>.</span>
      </div>
      <div className="flex flex-col gap-6 md:max-w-1/2">
        <WorkItem id={1} />
        <WorkItem id={2} />
        <WorkItem id={3} />
        <WorkItem id={4} />
        <WorkItem id={5} />
      </div>
    </div>
  );
}
