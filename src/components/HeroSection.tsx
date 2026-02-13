import messiHero from "@/assets/messi-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${messiHero})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative z-10 text-center pb-20 px-6 max-w-4xl mx-auto">
        <p className="text-gold font-sans text-sm tracking-[0.4em] uppercase mb-4 animate-fade-up">
          A Tribute to the Greatest
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-900 leading-none mb-6 animate-fade-up-delay-1">
          <span className="text-gold-gradient">Lionel</span>
          <br />
          <span className="text-foreground">Messi</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light animate-fade-up-delay-2">
          The boy from Rosario who became the greatest footballer the world has
          ever seen. This is our gratitude.
        </p>
        <div className="mt-8 animate-fade-up-delay-3">
          <div className="w-px h-16 bg-gold/30 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
