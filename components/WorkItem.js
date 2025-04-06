"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import WorkItemSlider from "@/components/WorkItemSlider";
import TextReveal from "./animation/TextReveal";

export default function WorkItem({ work }) {
  const { scrolling, name, technologies, link, image, github } = work;
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const techListRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    let container;
    if (scrolling) {
      const handleMouseEnter = () => {
        gsap.to(img, { y: "-50%", duration: 2, ease: "power2.out" }); // Moves image up
      };

      const handleMouseLeave = () => {
        gsap.to(img, { y: "0%", duration: 2, ease: "power2.out" }); // Moves back down
      };

      container = containerRef.current;
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    // Check if we're in the browser and the ref is available
    if (typeof window === "undefined" || !techListRef.current) return;

    // Select all tech tags within our container
    const techItems = techListRef.current.querySelectorAll("li");

    techItems.forEach((item) => {
      // Create a simple timeline for the hover animation
      const tl = gsap.timeline({ paused: true });

      // Add the minimal color transition animation
      tl.to(item, {
        duration: 0.3,
        opacity: 1,
        backgroundColor: "rgba(30, 41, 59, 0.9)", // Slate-800 with opacity - adjust to your color scheme
        color: "#ffffff", // White text on hover
        ease: "power4.inOut",
      });

      // Add event listeners
      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // Store event handlers for cleanup
      item._gsapHandlers = {
        mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave,
      };
    });

    // Cleanup function
    return () => {
      techItems.forEach((item) => {
        if (item._gsapHandlers) {
          item.removeEventListener("mouseenter", item._gsapHandlers.mouseenter);
          item.removeEventListener("mouseleave", item._gsapHandlers.mouseleave);
          delete item._gsapHandlers;
        }
      });
    };
  }, []);

  return (
    <div className="work-item">
      {typeof image === "string" ? (
        <div>
          <div
            ref={containerRef}
            className={`relative w-[500px] ${
              name === "E-coomerce Website" ? "h-[300px]" : "h-[800px]"
            } overflow-hidden`}
          >
            <div ref={imageRef} className="absolute top-0 left-0 w-full">
              <Image
                src={`/images/work/${image}`}
                alt="Scrolling Image"
                width={500}
                height={800} // Ensure correct height
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="text flex justify-between mt-4">
            <div>
              <h3 className="text-2xl font-bold">
                <TextReveal triggerOnScroll={true}>{name}</TextReveal>
              </h3>
              <div className="font-light opacity-70 mt-2 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {link && (
                  <Link
                    href={link}
                    className="transition-all duration-300 hover:bg-white hover:text-black p-1 ease-in-out"
                  >
                    Visit
                  </Link>
                )}
                {github && (
                  <Link
                    href={github}
                    className="transition-all duration-300 hover:bg-white hover:text-black p-1 ease-in-out"
                  >
                    Github
                  </Link>
                )}
              </div>
            </div>

            <ul
              ref={techListRef}
              className="flex items-end gap-1 cursor-default"
            >
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="py-1 px-3 border opacity-50 text-sm font-bold rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <WorkItemSlider images={image} />
          <div className="text flex justify-between mt-4">
            <div>
              <h3 className="text-2xl font-bold">
                <TextReveal triggerOnScroll={true}>{name}</TextReveal>
              </h3>

              <div className="font-light opacity-70 mt-2 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {link && (
                  <Link
                    href={link}
                    className="transition-all duration-300 hover:bg-white hover:text-black p-1 ease-in-out"
                  >
                    Visit
                  </Link>
                )}
                {github && (
                  <Link
                    href={github}
                    className="transition-all duration-300 hover:bg-white hover:text-black p-1 ease-in-out"
                  >
                    Github
                  </Link>
                )}
              </div>
            </div>

            <ul className="flex items-end gap-1 cursor-default">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="py-1 px-3 border opacity-50 text-sm font-bold rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
