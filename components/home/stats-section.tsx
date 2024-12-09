"use client";

import { Card } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    icon: Users,
    value: "1,234",
    label: "Donors",
    description: "Amazing people who have joined our cause",
  },
  {
    icon: Target,
    value: "65%",
    label: "Of Goal Reached",
    description: "We're making steady progress towards our target",
  },
  {
    icon: Heart,
    value: "$65,000",
    label: "Total Raised",
    description: "Every dollar makes a difference in someone's life",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20"
      ref={ref}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <Card className="p-8 text-center h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-xl" />
                  <stat.icon className="h-12 w-12 mx-auto text-primary relative" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
