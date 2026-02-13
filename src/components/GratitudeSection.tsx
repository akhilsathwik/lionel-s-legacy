const GratitudeSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-20 h-px bg-gold/40 mx-auto mb-8" />
        <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6">
          Our Gratitude
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-tight mb-8">
          Thank You,{" "}
          <span className="text-gold-gradient italic">Leo</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-8">
          You taught us that greatness isn't just about talent — it's about
          humility, perseverance, and the quiet magic of never giving up. You
          made millions of children dream, brought nations to tears of joy, and
          played the beautiful game more beautifully than anyone before.
        </p>
        <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-12">
          From the streets of Rosario to the summit of world football, your
          journey is a reminder that the smallest among us can achieve the
          greatest things. For every goal, every dribble, every moment of pure
          genius — <span className="text-gold">gracias, Leo.</span>
        </p>
        <div className="inline-block border border-gold/30 rounded-lg px-8 py-4 glow-gold">
          <p className="font-serif text-2xl md:text-3xl text-gold-gradient italic">
            "I was born to play football, and I will always be grateful for that."
          </p>
          <p className="text-muted-foreground text-sm mt-3">— Lionel Messi</p>
        </div>
        <div className="mt-16">
          <p className="text-muted-foreground/50 text-xs tracking-widest uppercase">
            D10S · The GOAT · La Pulga
          </p>
        </div>
      </div>
    </section>
  );
};

export default GratitudeSection;
