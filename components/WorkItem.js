"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function WorkItem({ work }) {
  const { name, type, link, image, year } = work;

  const itemRef = useRef(null);
  const bgRef = useRef(null);
  const textRefs = useRef([]);
  const hoverImgRef = useRef(null);
  const iconRef = useRef(null);

  const [currentImage, setCurrentImage] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP timeline for hover animations
  useGSAP(() => {
    const item = itemRef.current;
    const bg = bgRef.current;
    const texts = textRefs.current;
    const hoverImg = hoverImgRef.current;

    if (!item || !bg || !hoverImg) return;

    const tl = gsap.timeline({ paused: true });

    tl.to(bg, { height: "100%", duration: 0.6, ease: "circ.out" })
      .to(texts, { color: "#000", duration: 0.6, ease: "circ.out" }, "<0.1")
      .to(
        iconRef.current,
        { opacity: 1, rotate: -12, duration: 0.6, ease: "circ.out" },
        "<0.1"
      );

    // Only animate floating image on desktop
    if (isDesktop) {
      tl.to(hoverImg, { opacity: 1, duration: 0.6, ease: "circ.out" }, "<0.1");
    }

    item.addEventListener("mouseenter", () => {
      setCurrentImage(`/images/work/${image}`);
      tl.play();
    });
    item.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      item.removeEventListener("mouseenter", () => tl.play());
      item.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, [isDesktop]);

  // --------- Lagging floating image effect (desktop only) ---------
  useEffect(() => {
    if (!isDesktop) return;

    const hoverImg = hoverImgRef.current;
    if (!hoverImg) return;

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const qx = gsap.quickSetter(hoverImg, "x", "px");
    const qy = gsap.quickSetter(hoverImg, "y", "px");

    const handleMouseMove = (e) => {
      mouse.x = e.clientX + 20;
      mouse.y = e.clientY + 20;
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      qx(pos.x);
      qy(pos.y);
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  return (
    <>
      {/* Floating project image only on desktop */}
      {isDesktop && (
        <div
          ref={hoverImgRef}
          className="pointer-events-none fixed top-0 left-0 w-64 h-40 overflow-hidden z-50 opacity-0 rounded-xs"
        >
          {currentImage && (
            <Image
              src={currentImage}
              alt={name}
              width={256}
              height={160}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}

      <div
        ref={itemRef}
        className="work-item w-full relative overflow-hidden cursor-pointer group"
      >
        <Link href={link}>
          <div className="w-full grid grid-cols-12 items-end gap-4 py-12">
            {/* Sliding white background */}
            <div
              ref={bgRef}
              className="absolute bottom-0 left-0 w-full h-0 bg-white z-0"
            ></div>

            {/* Content */}
            <span
              ref={(el) => (textRefs.current[0] = el)}
              className="z-10 text-white pl-10"
            >
              {type}
            </span>
            <span
              ref={(el) => (textRefs.current[1] = el)}
              className="col-start-3 z-10 text-white"
            >
              Website
            </span>

            <div className="title col-span-6 text-center z-10">
              <h3
                ref={(el) => (textRefs.current[2] = el)}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              >
                {name}
              </h3>
            </div>

            {/* "Year" label */}
            <span
              ref={(el) => (textRefs.current[3] = el)}
              className="z-10 text-white"
            >
              Year
            </span>

            {/* Year value and arrow */}
            <span
              ref={(el) => (textRefs.current[4] = el)}
              className="col-start-12 z-10 text-white flex items-center gap-2"
            >
              <span className="group-hover:hidden">{year}</span>
              <Image
                ref={iconRef}
                src="/images/icons/arrow_blue.svg"
                alt="Arrow Icon"
                width={32}
                height={32}
                className="rotate-12 group-hover:inline-block hidden"
              />
            </span>

            <div className="line w-full h-[1px] bg-white absolute bottom-0 left-0 z-10"></div>
          </div>
        </Link>
      </div>
    </>
  );
}
