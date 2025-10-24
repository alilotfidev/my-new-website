"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function WorkItem({ work }) {
  const { name, type, link, image, year } = work;

  return (
    <div className="relative p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6 lg:gap-10 overflow-hidden group">
      <div className="heading flex justify-between items-center">
        <h3 className="text-4xl">{name}</h3>
        <Link href={link}>View Project</Link>
      </div>
      <div className="relative w-full min-h-[400px]">
        <Image
          src={`/images/work/${image}`}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="line w-full h-[1px] bg-white absolute bottom-0 left-0 z-10 group-last:hidden"></div>
    </div>
  );
}
