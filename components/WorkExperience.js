import Link from "next/link";
import TextReveal from "./animation/TextReveal";

export default function WorkExperience() {
  return (
    <div className="work-experience bg-white p-4 sm:p-6 md:p-8 lg:p-10 mt-20 relative ">
      <h2 className="sm:text-6xl text-8xl font-bold">
        <TextReveal triggerOnScroll={true}>Where have I worked?</TextReveal>
      </h2>
      <div className="mt-12 flex flex-col gap-12">
        <div className="experience">
          <h4 className="text-4xl">
            <TextReveal triggerOnScroll={true} delay={0.3}>
              Wallaxy Studio
            </TextReveal>
          </h4>
          <div className="grid grid-cols-9 mt-5 gap-8 lg:gap-0">
            <div className="col-span-9 md:col-span-5 lg:col-span-2 flex flex-col gap-2">
              <p>
                <TextReveal triggerOnScroll={true} delay={0.6}>
                  Creative Agency
                </TextReveal>
              </p>
              <p>
                <TextReveal triggerOnScroll={true} delay={0.6}>
                  Mar 2025 - Present
                </TextReveal>
              </p>
            </div>
            <ul className="flex flex-col justify-between opacity-60 col-span-6 md:col-span-2">
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Position
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Location
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Skills
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Website
                </TextReveal>
              </li>
            </ul>
            <ul className="col-span-3 md:col-span-2 flex flex-col justify-between">
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Front-end Developer
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Dallas, Texas (Remote)
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Next.js, React, TailwindCss, GSAP
                </TextReveal>
              </li>
              <li>
                <Link href="https://wallaxy.com" className="underline">
                  <TextReveal
                    triggerOnScroll={true}
                    delay={0.9}
                    initalOpacity={0}
                  >
                    wallaxy.com
                  </TextReveal>
                </Link>
              </li>
            </ul>
            <div className="col-span-full row-start-2 md:row-start-auto md:col-span-8 lg:col-span-4 flex flex-col gap-4 opacity-60">
              <p>
                <TextReveal triggerOnScroll={true} delay={1.2}>
                  As a member of the Wallaxy team, I develop frontend features
                  that bring our clients' ideas to life. By integrating design
                  systems and focusing on seamless user experiences, I ensure
                  each project is engaging and easy to use.
                </TextReveal>
              </p>
              <p>
                <TextReveal triggerOnScroll={true} delay={1.2}>
                  At Wallaxy, we push the limits of creativity to deliver
                  tailored digital solutions that meet our clients' unique
                  needs. Our goal is always to create standout, innovative
                  experiences in the digital world.
                </TextReveal>
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h4 className="text-4xl">
            <TextReveal triggerOnScroll={true} delay={0.3}>
              Astroshot Media Agency
            </TextReveal>
          </h4>
          <div className="grid grid-cols-9 mt-5 gap-8 lg:gap-0">
            <div className="col-span-9 md:col-span-5 lg:col-span-2 flex flex-col gap-2">
              <p>
                <TextReveal triggerOnScroll={true} delay={0.6}>
                  Creative Agency
                </TextReveal>
              </p>
              <p>
                <TextReveal triggerOnScroll={true} delay={0.6}>
                  May 2024 - Jan 2025
                </TextReveal>
              </p>
            </div>
            <ul className="flex flex-col justify-between opacity-60 col-span-6 md:col-span-1">
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Position
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Location
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Skills
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.6}
                  initalOpacity={0}
                >
                  Website
                </TextReveal>
              </li>
            </ul>
            <ul className="col-span-3 md:col-span-2 flex flex-col justify-between">
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Front-end Developer
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Kuwait City, Kuwait (Remote)
                </TextReveal>
              </li>
              <li>
                <TextReveal
                  triggerOnScroll={true}
                  delay={0.9}
                  initalOpacity={0}
                >
                  Next.js, React, TailwindCss, GSAP
                </TextReveal>
              </li>
              <li>
                <Link href="https://astroshotmedia.com" className="underline">
                  <TextReveal
                    triggerOnScroll={true}
                    delay={0.9}
                    initalOpacity={0}
                  >
                    astroshotmedia.com
                  </TextReveal>
                </Link>
              </li>
            </ul>
            <div className="col-span-full row-start-2 md:row-start-auto md:col-span-8 lg:col-span-4 flex flex-col gap-4 opacity-60">
              <p>
                <TextReveal triggerOnScroll={true} delay={1.2}>
                  I had the chance to work with Astroshot, helping re-create
                  parts of their website to improve both functionality and user
                  experience. My focus was on making the site more intuitive
                  while maintaining its visual appeal.
                </TextReveal>
              </p>
              <p>
                <TextReveal triggerOnScroll={true} delay={1.2}>
                  I also contributed to several redesigns, refreshing the site's
                  look to better align with Astroshot's innovative brand and
                  enhance the overall user experience.
                </TextReveal>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
