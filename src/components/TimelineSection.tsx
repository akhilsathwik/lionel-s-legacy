const milestones = [
  {
    year: "2004",
    title: "The Beginning",
    description:
      "At just 17, Messi made his official debut for FC Barcelona, marking the start of an era that would redefine football forever.",
  },
  {
    year: "2009",
    title: "First Ballon d'Or",
    description:
      "Winning his first Ballon d'Or at age 22, Messi announced himself as the world's best — a title he would hold for years to come.",
  },
  {
    year: "2012",
    title: "91 Goals in a Year",
    description:
      "Shattering Gerd Müller's 40-year record, Messi scored an unprecedented 91 goals in a single calendar year — a feat many thought impossible.",
  },
  {
    year: "2021",
    title: "Copa América Champion",
    description:
      "Leading Argentina to their first Copa América title in 28 years, Messi finally silenced critics about his international legacy.",
  },
  {
    year: "2022",
    title: "World Cup Glory",
    description:
      "In what many call the greatest World Cup final ever played, Messi lifted the one trophy that had eluded him — completing football's ultimate story.",
  },
  {
    year: "2023",
    title: "Record 8th Ballon d'Or",
    description:
      "Extending his own record with an 8th Ballon d'Or, Messi cemented a legacy that may never be matched in the beautiful game.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase text-center mb-3">
          The Journey
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">
          Moments That{" "}
          <span className="text-gold-gradient italic">Defined</span> an Era
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          {milestones.map((m, i) => (
            <div
              key={m.year}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`md:w-1/2 pl-12 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}
              >
                <span className="text-gold font-serif text-2xl font-bold">
                  {m.year}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-1 mb-2">
                  {m.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {m.description}
                </p>
              </div>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background -translate-x-1/2 mt-2 glow-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
