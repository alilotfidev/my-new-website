"use client";
import Link from "next/link";
import TextReveal from "./animation/TextReveal";

export default function Footer() {
  return (
    <div
      className="bg-black text-white mt-20 p-4 sm:p-6 md:p-8 lg:p-10 min-h-96 flex flex-col justify-between z-20 relative"
      id="contact"
    >
      <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-6 lg:gap-0">
        <h4 className="text-6xl lg:text-8xl cursor-default">
          <TextReveal triggerOnScroll={true}>Let's Collaborate</TextReveal>
        </h4>
        <Link
          className="text-2xl lg:text-4xl underline underline-offset-4 transition-all duration-300 hover:bg-white hover:text-black p-1 hover:no-underline ease-in-out"
          href="mailto:lotfi26.ali@gmail.com"
        >
          <TextReveal triggerOnScroll={true} delay={0.3}>
            drop me an email
          </TextReveal>
        </Link>
      </div>
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-0 justify-between">
        <p className="opacity-60 cursor-default">© Ali Lotfi 2025</p>
        <ul className="flex gap-4">
          <li className="underline underline-offset-4 transition-all duration-300 hover:bg-white hover:text-black p-1 hover:no-underline ease-in-out">
            <Link href="https://github.com/alilotfidev">Github</Link>
          </li>
          <li className="underline underline-offset-4 transition-all duration-300 hover:bg-white hover:text-black p-1 hover:no-underline ease-in-out">
            <Link href="https://www.linkedin.com/in/alilotfidev/">
              Linkedin
            </Link>
          </li>
          <li className="underline underline-offset-4 transition-all duration-300 hover:bg-white hover:text-black p-1 hover:no-underline ease-in-out">
            <Link href="https://codepen.io/alilotfidev">CodePen</Link>
          </li>
          <li className="underline underline-offset-4 transition-all duration-300 hover:bg-white hover:text-black p-1 hover:no-underline ease-in-out">
            <Link href="https://instagram.com/alilotfi.dev">Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
