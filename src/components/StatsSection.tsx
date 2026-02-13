import { Trophy, Star, Target, Award } from "lucide-react";

const stats = [
  { icon: Trophy, value: "8", label: "Ballon d'Or", detail: "Most in history" },
  { icon: Star, value: "45", label: "Trophies", detail: "Club & Country" },
  { icon: Target, value: "838+", label: "Career Goals", detail: "And counting" },
  { icon: Award, value: "1", label: "World Cup", detail: "Qatar 2022" },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase text-center mb-3">
          By the Numbers
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-foreground">
          A Legacy in <span className="text-gold-gradient italic">Numbers</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-card border border-border rounded-lg p-8 text-center glow-gold hover:border-gold/40 transition-all duration-500 animate-fade-up-delay-${Math.min(i, 3)}`}
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-4" />
              <p className="font-serif text-5xl md:text-6xl font-bold text-gold-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-foreground font-medium text-sm uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-xs mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
