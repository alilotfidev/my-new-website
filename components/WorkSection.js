import TextReveal from "./animation/TextReveal";
import WorkList from "./WorkList";

export default function WorkSection() {
  return (
    <section className="work-section bg-black text-white p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="text min-h-[40vh] mt-20" id="about">
        <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto">
          <TextReveal triggerOnScroll={true}>
            A creative front-end developer with a passion for digital product
            design and seamless user experiences, enriched by a background in
            web development and branding. I love collaborating with visionary
            individuals to bring innovative ideas to life.
          </TextReveal>
        </p>
      </div>
      <div className="work" id="work">
        <div className="work-header flex flex-col gap-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <TextReveal triggerOnScroll={true}>Selected Works /</TextReveal>
          </h2>
        </div>
        <WorkList />
      </div>
    </section>
  );
}
