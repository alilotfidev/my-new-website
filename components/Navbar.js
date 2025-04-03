import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 sm:p-6 md:p-8 lg:p-10 w-screen">
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
