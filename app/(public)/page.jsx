import AboutSection from "@/components/sections/AboutSection";
import FeaturedChallenge from "@/components/sections/FeaturedChallenge";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata = {
  title: 'Home | BLING',
  description: 'Take on exciting fitness challenges, track your progress with Strava, and earn exclusive medals for your achievements. Start your journey today!'
}

export default function Home() {
  return (
    <div className="flex flex-col gap-12 mb-12">
      <HeroSection />
      {/* <AboutSection /> */}
      <HowItWorksSection />
      <FeaturedChallenge />
    </div>
  );
}
