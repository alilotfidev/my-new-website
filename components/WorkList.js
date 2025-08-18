import WorkItem from "./WorkItem";

const worksData = [
  {
    id: "1",
    name: "Personal Website Template",
    link: "https://www.behance.net/gallery/230709501/Personal-Website-Template",
    image: "1.webp",
  },
  {
    id: "2",
    name: "Mohammad Orai — Personal Portfolio",
    link: "https://www.behance.net/gallery/230637785/Mohammad-Orai-Personal-Portfolio-Website",
    image: "3.webp",
  },
  {
    id: "3",
    name: "Glance & Glow – Optical Shop Website",
    link: "https://www.behance.net/gallery/230711991/Glance-Glow-Optical-Shop-Website",
    image: "2.webp",
  },
  {
    id: "4",
    name: "Wallaxy Studio – Creative Agency Website",
    link: "https://wallaxy-studio.vercel.app",
    image: "4.jpg",
  },
];

export default function WorkList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16 md:mt-28">
      {worksData.map((work, index) => (
        <WorkItem key={index} work={work} />
      ))}
    </div>
  );
}
