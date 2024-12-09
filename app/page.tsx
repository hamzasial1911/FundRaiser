import { HeroSection } from "@/components/home/hero-section";
import { ProgressSection } from "@/components/home/progress-section";
import { VideoSection } from "@/components/home/video-section";
import { StatsSection } from "@/components/home/stats-section";
import { FeaturedCauses } from "@/components/home/featured-causes";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <HeroSection />
      <ProgressSection />
      <VideoSection />
      <FeaturedCauses />
      <StatsSection />
      <Testimonials />
    </div>
  );
}