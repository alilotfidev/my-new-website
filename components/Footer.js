import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black text-white mt-20 p-4 sm:p-6 md:p-8 lg:p-10 min-h-96 flex flex-col justify-between">
      <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-6 lg:gap-0">
        <h4 className="text-6xl lg:text-8xl">Let’s Collaborate</h4>
        <Link
          className="text-2xl lg:text-4xl underline underline-offset-4"
          href="mailto:lotfi26.ali@gmail.com"
        >
          drop me an email
        </Link>
      </div>
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-0 justify-between">
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
