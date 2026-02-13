import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TimelineSection from "@/components/TimelineSection";
import GratitudeSection from "@/components/GratitudeSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <StatsSection />
      <TimelineSection />
      <GratitudeSection />
    </main>
  );
};

export default Index;
