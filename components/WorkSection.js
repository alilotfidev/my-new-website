import WorkList from "./WorkList";

export default function WorkSection() {
  return (
    <section className="work-section bg-white text-black p-16">
      <div className="text min-h-[40vh] mt-20">
        <p className="text-2xl font-light max-w-3xl mx-auto">
          A creative front-end developer with a passion for digital product
          design and seamless user experiences, enriched by a background in web
          development and branding. I love collaborating with visionary
          individuals to bring innovative ideas to life.
        </p>
      </div>
      <div className="work">
        <div className="work-header flex flex-col gap-16">
          <h2 className="text-8xl font-bold">Selected Works /</h2>
          <p className="max-w-sm text-xl font-light opacity-70 self-end">
            Featured projects meticulously crafted with passion to deliver
            impactful digital experiences and drive results.
          </p>
        </div>
        <WorkList />
      </div>
    </section>
  );
}
