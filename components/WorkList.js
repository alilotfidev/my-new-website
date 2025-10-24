"use client";

import { useState, useEffect } from "react";
import WorkItem from "./WorkItem";
import WorkItemMobile from "./WorkItemMobile";

const worksData = [
  {
    id: "1",
    name: "Portfolio",
    type: "Template",
    link: "https://www.behance.net/gallery/230709501/Personal-Website-Template",
    image: "1.webp",
    year: "2023",
  },
  {
    id: "2",
    name: "Mohammad",
    type: "Freelancer",
    link: "https://www.behance.net/gallery/230637785/Mohammad-Orai-Personal-Portfolio-Website",
    image: "3.webp",
    year: "2025",
  },
  {
    id: "3",
    name: "Glance & Glow",
    type: "Brand",
    link: "https://www.behance.net/gallery/230711991/Glance-Glow-Optical-Shop-Website",
    image: "2.webp",
    year: "2025",
  },
  {
    id: "4",
    name: "Wallaxy",
    type: "Agency",
    link: "https://wallaxy-studio.vercel.app",
    image: "4.jpg",
    year: "2024",
  },
];

export default function WorkList() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col mt-16 md:mt-28">
      {worksData.map((work, index) =>
        isDesktop ? (
          <WorkItem key={index} work={work} />
        ) : (
          <WorkItemMobile key={index} work={work} />
        )
      )}
    </div>
  );
}
