"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const causes = [
  {
    title: "Clean Water Initiative",
    description: "Providing clean water access to rural communities in need",
    raised: 85000,
    goal: 100000,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Education for All",
    description:
      "Supporting underprivileged students with educational resources",
    raised: 30000,
    goal: 50000,
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Healthcare Access",
    description: "Improving medical facilities in remote areas",
    raised: 40000,
    goal: 100000,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
  },
];

export function FeaturedCauses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Causes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Support these ongoing initiatives and help us make a lasting impact
            in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <motion.div
              key={cause.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {cause.description}
                  </p>
                  <Progress
                    value={(cause.raised / cause.goal) * 100}
                    className="h-2 mb-4"
                  />
                  <div className="flex justify-between text-sm mb-4">
                    <span>
                      Raised:{" "}
                      <span className="font-semibold">
                        ${cause.raised.toLocaleString()}
                      </span>
                    </span>
                    <span>
                      Goal:{" "}
                      <span className="font-semibold">
                        ${cause.goal.toLocaleString()}
                      </span>
                    </span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/donate">Support This Cause</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
