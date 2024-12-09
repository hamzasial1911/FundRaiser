import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "With over 15 years of experience in nonprofit management",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Specialized in creating efficient processes for maximum impact",
  },
  {
    name: "Emily Rodriguez",
    role: "Community Outreach",
    bio: "Passionate about connecting donors with meaningful causes",
  },
  {
    name: "David Kim",
    role: "Technical Lead",
    bio: "Ensuring secure and seamless donation experiences",
  },
];

export function TeamSection() {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member) => (
          <div key={member.name} className="space-y-2">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-primary font-medium">{member.role}</p>
            <p className="text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
