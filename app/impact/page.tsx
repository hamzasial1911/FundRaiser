"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Users, Heart, Target, Landmark } from "lucide-react";

const impactStats = [
  {
    icon: <Users className="h-8 w-8 mx-auto mb-4 text-primary" />,
    value: "10,000+",
    label: "Lives Impacted",
  },
  {
    icon: <Heart className="h-8 w-8 mx-auto mb-4 text-primary" />,
    value: "$250K",
    label: "Total Raised",
  },
  {
    icon: <Target className="h-8 w-8 mx-auto mb-4 text-primary" />,
    value: "50+",
    label: "Projects Completed",
  },
  {
    icon: <Landmark className="h-8 w-8 mx-auto mb-4 text-primary" />,
    value: "25+",
    label: "Partner Organizations",
  },
];

const projects = [
  {
    title: "Clean Water Initiative",
    progress: 85,
    raised: 85000,
    goal: 100000,
    description: "Providing clean water access to rural communities",
  },
  {
    title: "Education for All",
    progress: 60,
    raised: 30000,
    goal: 50000,
    description:
      "Supporting underprivileged students with educational resources",
  },
  {
    title: "Healthcare Access",
    progress: 40,
    raised: 40000,
    goal: 100000,
    description: "Improving medical facilities in remote areas",
  },
];

export default function ImpactPage() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-center">Our Impact</h1>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Through the generosity of our donors, we've made significant
            progress in creating positive change. Here's how your donations are
            making a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  {stat.icon}
                  <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Active Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <Progress value={project.progress} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      ${project.raised.toLocaleString()} raised
                    </span>
                    <span className="text-muted-foreground">
                      Goal: ${project.goal.toLocaleString()}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
