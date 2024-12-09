import { Card } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Transparency",
    description: "Real-time tracking of donations and regular updates on project impact",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong connections between donors and beneficiaries",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Creating lasting change through targeted fundraising campaigns",
  },
];

export function MissionSection() {
  return (
    <Card className="p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-muted-foreground mb-6">
        We are dedicated to making a positive impact in our community by connecting generous donors with meaningful causes. Our platform ensures that every donation reaches those who need it most, while maintaining complete transparency throughout the process.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {values.map((value) => (
          <div key={value.title} className="flex flex-col items-center text-center">
            <value.icon className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}