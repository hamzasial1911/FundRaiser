"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Making a donation was incredibly easy and transparent. I love being able to see the direct impact of my contribution.",
    author: "Sarah M.",
    role: "Regular Donor",
  },
  {
    quote:
      "This platform has transformed how we connect with donors. The tools and support provided are exceptional.",
    author: "David Chen",
    role: "Nonprofit Partner",
  },
  {
    quote:
      "I appreciate the regular updates about how my donations are making a difference in the community.",
    author: "Michael R.",
    role: "Monthly Supporter",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community of donors and partners about their
            experiences with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 h-full">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="mb-4 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </footer>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
