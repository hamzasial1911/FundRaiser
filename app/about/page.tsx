import { MissionSection } from "@/components/about/mission-section";
import { TeamSection } from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <MissionSection />
        <TeamSection />
      </div>
    </div>
  );
}