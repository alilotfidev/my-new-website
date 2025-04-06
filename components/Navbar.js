"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@/components/animation/LenisProvider";

import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const lenis = useLenis();

  const scrollTo = (id) => {
    lenis?.scrollTo(`#${id}`, {
      offset: -40,
    });
  };

  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from("div", {
        x: -5,
        opacity: 0,
        duration: 0.3,
        delay: 4.4,
        ease: "power4.inOut",
      });
      gsap.from("ul li", {
        opacity: 0,
        x: -5, // Moves items up slightly while fading in
        duration: 0.6,
        delay: 4.7,
        ease: "power4.inOut",
        stagger: 0.2, // Adds delay between each item
      });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      className="flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 w-screen"
    >
      <div>
        <h4>Say Hello</h4>
        <Link
          href="mailto:lotfi26.ali@gmail.com"
          className="text-sm opacity-60 hover:opacity-100 transition-opacity ease-in-out"
        >
          Drop me an email
        </Link>
      </div>
      <ul className="flex">
        <li
          className="p-4 cursor-pointer"
          onClick={() => {
            scrollTo("about", { offset: -100 });
          }}
        >
          About
        </li>
        <li
          className="p-4 cursor-pointer"
          onClick={() => {
            scrollTo("work", { offset: -100 });
          }}
        >
          Work
        </li>
        <li
          className="p-4 cursor-pointer"
          onClick={() => {
            scrollTo("contact", { offset: -100 });
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
