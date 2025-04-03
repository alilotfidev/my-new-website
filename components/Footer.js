import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white mt-20 p-10 min-h-96 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-8xl">Let’s Collaborate</h4>
        <Link
          className="text-4xl underline underline-offset-4"
          href="mailto:lotfi26.ali@gmail.com"
        >
          drop me an email
        </Link>
      </div>
      <div className=" flex justify-between">
        <p className="opacity-60">© Ali Lotfi 2025</p>
        <ul className="flex gap-4">
          <li className="underline underline-offset-4">
            <Link href="https://github.com/alilotfidev">Github</Link>
          </li>
          <li className="underline underline-offset-4">
            <Link href="https://www.linkedin.com/in/alilotfidev/">
              Linkedin
            </Link>
          </li>
          <li className="underline underline-offset-4">
            <Link href="https://codepen.io/alilotfidev">CodePen</Link>
          </li>
          <li className="underline underline-offset-4">
            <Link href="https://instagram.com/alilotfi.dev">Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
