import Image from "next/image";

export default function WorkItem({ id }) {
  return (
    <div className="work-item">
      <Image src={`/images/${id}.jpg`} alt="work" width={500} height={800} />
      <div className="text flex justify-between mt-4">
        <div>
          <p className="font-light opacity-70">Project Category</p>
          <h3 className="text-2xl font-bold">Project Title</h3>
        </div>

        <ul className="flex items-end gap-1">
          <li className="py-1 px-3 border opacity-50 text-sm font-bold rounded-full">
            Design
          </li>
          <li className="py-1 px-3 border opacity-50 text-sm font-bold rounded-full">
            Developement
          </li>
          <li className="py-1 px-3 border opacity-50 text-sm font-bold rounded-full">
            2024
          </li>
        </ul>
      </div>
    </div>
  );
}
