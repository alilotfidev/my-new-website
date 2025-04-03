"use client";
import WorkItem from "./WorkItem";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const worksData = [
  {
    id: "1",
    name: "Illustrator Portfolio",
    technologies: ["Next.js", "TailwindCSS", "Netlify"],
    link: "https://fatememohiti-qoolche.netlify.app/",
    image: "qoolche.png",
    scrolling: true,
  },
  {
    id: "2",
    name: "Portfolio Website",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "https://personal-website-template-nu.vercel.app/",
    image: "portfolio.png",
    scrolling: true,
  },
  {
    id: "3",
    name: "E-coomerce Website",
    technologies: ["Next.js", "Stripe", "Contentful"],
    link: "https://online-shop-two-murex.vercel.app/",
    github: "https://github.com/alilotfidev/online-shop",
    image: "kanken.png",
    scrolling: false,
  },
  {
    id: "4",
    name: "CSS Drawings",
    technologies: ["HTML", "CSS"],
    link: "https://codepen.io/alilotfidev",
    image: [
      {
        src: "/images/work/codepen-5.png", // Replace with your actual image paths
      },
      {
        src: "/images/work/codepen-2.png",
      },
      {
        src: "/images/work/codepen-3.png",
      },
      {
        src: "/images/work/codepen-4.png",
      },
      {
        src: "/images/work/codepen-1.png",
      },
    ],
  },
];

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
      <div className="flex flex-col gap-32 md:max-w-1/2">
        {worksData.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </div>
  );
}
