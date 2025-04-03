import Link from "next/link";

export default function WorkExperience() {
  return (
    <div className="work-experience bg-white p-4 sm:p-6 md:p-8 lg:p-10 mt-20">
      <h2 className="text-8xl font-bold">Where have I worked?</h2>
      <div className="mt-12 flex flex-col gap-12">
        <div className="experience">
          <h4 className="text-4xl">Wallaxy Studio</h4>
          <div className="grid grid-cols-9 mt-5 gap-8 lg:gap-0">
            <div className="col-span-9 md:col-span-5 lg:col-span-2 flex flex-col gap-2">
              <p>Creative Agency</p>
              <p>Mar 2025 - Present</p>
            </div>
            <ul className="flex flex-col justify-between opacity-60 col-span-6 md:col-span-1">
              <li>Position</li>
              <li>Location</li>
              <li>Skills</li>
              <li>Website</li>
            </ul>
            <ul className="col-span-3 md:col-span-2 flex flex-col justify-between">
              <li>Front-end Developer</li>
              <li>Dallas, Texas (Remote)</li>
              <li>Next.js, React, TailwindCss, GSAP</li>
              <li>
                <Link href="https://wallaxy.com" className="underline">
                  wallaxy.com
                </Link>
              </li>
            </ul>
            <div className="col-span-full row-start-2 md:row-start-auto md:col-span-8 lg:col-span-4 flex flex-col gap-4 opacity-60">
              <p>
                As a member of the Wallaxy team, I develop frontend features
                that bring our clients' ideas to life. By integrating design
                systems and focusing on seamless user experiences, I ensure each
                project is engaging and easy to use.
              </p>
              <p>
                At Wallaxy, we push the limits of creativity to deliver tailored
                digital solutions that meet our clients' unique needs. Our goal
                is always to create standout, innovative experiences in the
                digital world.
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h4 className="text-4xl">Astroshot Media Agency</h4>
          <div className="grid grid-cols-9 mt-5 gap-8 lg:gap-0">
            <div className="col-span-9 md:col-span-5 lg:col-span-2 flex flex-col gap-2">
              <p>Creative Agency</p>
              <p>May 2024 - Jan 2025</p>
            </div>
            <ul className="flex flex-col justify-between opacity-60 col-span-6 md:col-span-1">
              <li>Position</li>
              <li>Location</li>
              <li>Skills</li>
              <li>Website</li>
            </ul>
            <ul className="col-span-3 md:col-span-2 flex flex-col justify-between">
              <li>Front-end Developer</li>
              <li>Kuwait City, Kuwait (Remote)</li>
              <li>Next.js, React, TailwindCss, GSAP</li>
              <li>
                <Link href="https://astroshotmedia.com" className="underline">
                  astroshotmedia.com
                </Link>
              </li>
            </ul>
            <div className="col-span-full row-start-2 md:row-start-auto md:col-span-8 lg:col-span-4 flex flex-col gap-4 opacity-60">
              <p>
                I had the chance to work with Astroshot, helping re-create parts
                of their website to improve both functionality and user
                experience. My focus was on making the site more intuitive while
                maintaining its visual appeal.
              </p>
              <p>
                I also contributed to several redesigns, refreshing the site's
                look to better align with Astroshot's innovative brand and
                enhance the overall user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
