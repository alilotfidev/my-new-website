import Image from "next/image";
import Link from "next/link";

export default function WorkItem({ work }) {
  const { name, link, image } = work;

  return (
    <div className="work-item">
      <Image
        src={`/images/work/${image}`}
        alt="Work Image"
        width={600}
        height={600}
      />
      <div className="description mt-4">
        <h3 className="max-w-2/3 text-2xl font-semibold">{name}</h3>
        <Link href={link} className="text-sm underline">
          View Project
        </Link>
      </div>
    </div>
  );
}
