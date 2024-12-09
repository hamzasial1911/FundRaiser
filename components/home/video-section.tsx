"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function VideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">See Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how your donations are making a real difference in communities
            around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden aspect-video">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&auto=format&fit=crop&q=80"
              alt="Impact Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-16 h-16 p-0 border-2"
                onClick={() => setVideoOpen(true)}
              >
                <Play className="h-8 w-8" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
          </Card>
        </motion.div>

        <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9A8ihv9nv60?autoplay=1"
                title="Impact Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
          </DialogContent>
        </Dialog>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {[
            {
              title: "Clean Water Projects",
              description:
                "Providing access to clean water in rural communities",
            },
            {
              title: "Education Initiatives",
              description: "Supporting schools and educational programs",
            },
            {
              title: "Healthcare Access",
              description: "Improving medical facilities in remote areas",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
