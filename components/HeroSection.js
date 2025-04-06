import TextReveal from "./animation/TextReveal";

export default function HeroSection() {
  return (
    <section className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 pb-0">
      <div className="">
        <h4 className="max-w-sm text-xl font-light opacity-70 absolute top-1/2 right-4 -translate-y-1/2">
          <TextReveal initalOpacity={0} delay={5.4}>
            I empower growing brands and startups with high-performance,
            results-driven websites that give them a competitive edge.
          </TextReveal>
        </h4>
      </div>
      <h1 className="absolute bottom-0 left-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl w-full font-bold text-pretty flex flex-col">
        <TextReveal delay={3.9}>
          <span>Ali Lotfi</span>
        </TextReveal>
        <TextReveal delay={4}>
          <span>Front-end Developer</span>
        </TextReveal>
      </h1>
    </section>
  );
}
