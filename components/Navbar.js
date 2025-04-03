import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white flex justify-between items-center p-10">
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
        <li className="p-4">About</li>
        <li className="p-4">Work</li>
        <li className="p-4">Contact</li>
      </ul>
    </nav>
  );
}
