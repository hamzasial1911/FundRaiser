"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function ProgressSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isInView) {
      setProgress(65);
    }
  }, [isInView]);

  return (
    <section className="py-16 px-4 bg-muted" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <Card className="p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-6">Fundraising Progress</h2>
            <div className="mb-8">
              <Progress value={progress} className="h-6 mb-4" />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold">${progress},000</p>
                  <p className="text-sm text-muted-foreground">
                    Current Amount
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">$100,000</p>
                  <p className="text-sm text-muted-foreground">Goal Amount</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-center italic">
              Join 1,234 donors who have already contributed to our cause
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
