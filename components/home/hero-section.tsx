"use client";

import Link from "next/link";
import { Heart, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const trustIndicators = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Bank-level security",
  },
  {
    icon: Heart,
    title: "100% to Charity",
    description: "Zero platform fees",
  },
  {
    icon: Award,
    title: "Verified Nonprofit",
    description: "501(c)(3) registered",
  },
];

export function HeroSection() {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Make a <span className="text-primary">Real Difference</span> Today
          </h1>
        </div>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join thousands of donors who have already contributed to creating
          positive change. Every donation brings hope to those who need it most.
        </p>
        <div className="mb-16">
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg">
            <Link href="/donate">
              Donate Now
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustIndicators.map((indicator) => (
            <Card
              key={indicator.title}
              className="p-6 gradient-border bg-card/50 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <indicator.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{indicator.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {indicator.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-5" />
    </div>
  );
}
