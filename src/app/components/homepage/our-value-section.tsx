"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeroHeadline } from "./hero-headline";
import { HeroSubtitle } from "./hero-subtitle";

export function OurValueSection() {
  const culturalRef = useRef(null);
  const culturalInView = useInView(culturalRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      id="our-value"
      className="relative py-20 min-h-[700px] overflow-hidden"
      ref={culturalRef}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-80">
        <img
          src="/home-page/Rectangle Gradient.png"
          alt="gradient background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 glass-horizontal-lines"></div>

      {/* Bottom fade to blend into What We Do section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#111B23] z-0 pointer-events-none" />

      <div className="relative z-10 w-full px-6 space-y-8 pt-84 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            culturalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <HeroSubtitle className="text-[clamp(1.25rem,3vw,1.875rem)]">
            Our Value
          </HeroSubtitle>
        </motion.div>

        <HeroHeadline>
          <span className="block overflow-hidden">
            {["Central", "of"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em] text-[clamp(2.25rem,10vw,7.5rem)] leading-[0.95] tracking-tight"
                initial={{ opacity: 0, y: 60, scale: 0.6, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {["Cultural", "Outthink"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em] text-[clamp(2.25rem,10vw,7.5rem)] leading-[0.95] tracking-tight"
                initial={{ opacity: 0, y: 80, scale: 0.5, filter: "blur(16px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </HeroHeadline>
      </div>
    </div>
  );
}
