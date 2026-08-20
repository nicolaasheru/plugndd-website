"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeroDescription } from "./hero-description";
import { HeroHeadline } from "./hero-headline";
import { HeroSubtitle } from "./hero-subtitle";

export function AboutSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      id="about"
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(237, 237, 237, 0.35) 0%, transparent 20%), linear-gradient(135deg, #111b23 0%, #111b23 100%)",
      }}
    >
      <div className="w-full px-6 py-20 lg:space-y-10 min-h-lvh flex flex-col justify-center lg:ml-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <HeroSubtitle className="text-[clamp(1.25rem,3vw,1.875rem)]">
            Indonesia's First-Ever End-to-End Market Intelligence Support
          </HeroSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <HeroHeadline>
            <span className="text-[clamp(2.25rem,6vw,3.75rem)] mb-4 block leading-tight">
              The Intelligence You Need to
            </span>
            <span className="text-[clamp(2.75rem,12vw,9.375rem)] block leading-[0.95] tracking-tight font-black">
              WIN YOUR
            </span>
            <span className="text-[clamp(2.75rem,12vw,9.375rem)] block leading-[0.95] tracking-tight font-black">
              MARKET
            </span>
          </HeroHeadline>
        </motion.div>

        <motion.div
          className="space-y-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <HeroDescription className="text-[clamp(1rem,3.2vw,1.375rem)]">
            Markets move fast and not always in obvious ways. PLUGNDD helps you
            <br />
            understand what's actually happening, and what's quietly coming
            next.
          </HeroDescription>
          <HeroDescription className="text-[clamp(1rem,3.2vw,1.375rem)]">
            We read culture, behavior, and market signals, then turn them into
            <br />
            insight your team can act on.
          </HeroDescription>
        </motion.div>
      </div>

      <div
        style={{
          position: "absolute",
          width: "120vw",
          height: "302px",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-205px",
          background: "linear-gradient(0deg, #111B23, #111B23), #D9D9D9",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 10,
          borderRadius: "70%",
        }}
      />
    </div>
  );
}
