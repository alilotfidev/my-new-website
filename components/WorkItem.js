"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import WorkItemSlider from "@/components/WorkItemSlider";

export default function WorkItem({ work }) {
  const { scrolling, name, technologies, link, image, github } = work;
  const containerRef = useRef(null);
  const imageRef = useRef(null);

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
              <div className="font-light opacity-70">
                {link && <Link href={link}>Visit</Link>}
                {github && <Link href={github}>Github</Link>}
              </div>
              <h3 className="text-2xl font-bold">{name}</h3>
            </div>

            <ul className="flex items-end gap-1">
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
              <div className="font-light opacity-70">
                {link && <Link href={link}>Visit</Link>}
                {github && <Link href={github}>Github</Link>}
              </div>
              <h3 className="text-2xl font-bold">{name}</h3>
            </div>

            <ul className="flex items-end gap-1">
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
