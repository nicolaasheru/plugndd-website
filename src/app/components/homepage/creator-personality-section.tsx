"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const personalities = [
  {
    name: "STORY CRAFTER",
    tagline: "The Heart of the Brand.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1"/>
        <path d="M24 52V28a2 2 0 012-2h20l8 8v18a2 2 0 01-2 2H26a2 2 0 01-2-2z" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.5" fill="none"/>
        <path d="M44 26v8h8" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.5"/>
        <path d="M30 38h20M30 43h14M30 48h10" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "TASTE CURATOR",
    tagline: "The Eye of the Brand.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1"/>
        <ellipse cx="40" cy="40" rx="18" ry="11" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="5" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.1"/>
        <circle cx="40" cy="40" r="2" fill="#FFFFFF" fillOpacity="0.7"/>
        <path d="M22 40c4-8 12-13 18-13s14 5 18 13" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    name: "INSIGHT ENGINEER",
    tagline: "The Brain of the Brand.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1"/>
        <rect x="22" y="28" width="36" height="24" rx="3" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1.5" fill="none"/>
        <path d="M22 34h36" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1"/>
        <path d="M30 42l4-4 4 6 4-8 4 6" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "TREND WHISPERER",
    tagline: "The Pulse of the Brand.",
    illustration: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeOpacity="0.15" strokeWidth="1"/>
        <path d="M20 48c4-10 8-4 12-12s6-14 8-14 4 20 8 20 4-8 8-14" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="30" r="3" fill="#FFFFFF" fillOpacity="0.2" stroke="#FFFFFF" strokeOpacity="0.6" strokeWidth="1"/>
        <circle cx="56" cy="42" r="2" fill="#FFFFFF" fillOpacity="0.4"/>
        <circle cx="24" cy="44" r="2" fill="#FFFFFF" fillOpacity="0.4"/>
      </svg>
    ),
  },
];


export default function CreatorPersonalitySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "0px 0px -80px 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-28 px-5 md:px-12 bg-[#111B23] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3571A3]/7 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5 }}
            className="text-[#FFFFFF] text-[10px] md:text-xs font-medium tracking-widest uppercase mb-3"
          >
            Find Your Creator Personality
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(1.75rem,6vw,3.75rem)] font-bold text-white leading-tight"
          >
            What&apos;s Your Creator DNA?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm text-white/40 max-w-md mx-auto"
          >
            Every great brand mind has a distinct personality. Discover yours in under 3 minutes.
          </motion.p>
        </div>

        {/* Personality cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12 md:mb-16">
          {personalities.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="rounded-xl border border-white/10"
            >
              <div
                className="relative rounded-xl p-3 md:p-4 flex flex-col items-center gap-2 h-full"
                style={{ background: "rgba(17,27,35,0.65)" }}
              >
                <div className="w-10 h-10 md:w-14 md:h-14">{p.illustration}</div>
                <p className="text-[9px] md:text-[10px] font-bold tracking-widest text-center text-white/75">
                  {p.name}
                </p>
                <p className="text-white/60 text-[10px] md:text-xs text-center leading-snug">{p.tagline}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mockup group image with clickable overlay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full"
        >
          <Image
            src="/mockups/quiz-mockups-group.png"
            alt="PLUGNDD DNA Quiz mockups"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          {/* Fade edges */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to right, #111B23 0%, transparent 18%, transparent 82%, #111B23 100%)"
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to bottom, transparent 60%, #111B23 100%)"
          }} />
          {/* Visible CTA button */}
          <Link
            href="/quiz"
            className="absolute inline-flex items-center justify-center gap-2 rounded-full border border-[#3571A3] text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 text-[clamp(0.75rem,1.6vw,1.15rem)] px-[clamp(1.5rem,3.5vw,3.5rem)] py-[clamp(0.65rem,1.3vw,1.25rem)]"
            style={{
              top: "77%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, #5fa8d3 0%, #3571A3 60%, #1e4f7a 100%)",
              boxShadow: "0 4px 32px 0 rgba(53,113,163,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            Discover Your Creator Type
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
