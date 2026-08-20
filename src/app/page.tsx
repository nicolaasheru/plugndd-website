"use client";

import { motion, useInView } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";
import BehindTheWork from "@/app/components/homepage/BehindTheWork";
import CTABanner from "@/app/components/homepage/cta-banner";
import Explore from "@/app/components/homepage/explore";
import Footer from "@/app/components/homepage/footer";
import { HeroDescription } from "@/app/components/homepage/hero-description";
import { HeroHeadline } from "@/app/components/homepage/hero-headline";
import { HeroSubtitle } from "@/app/components/homepage/hero-subtitle";
import MarketIntelligence from "@/app/components/homepage/MarketIntelligence";
import OurServices from "@/app/components/homepage/OurServices";
import RecentProjects from "@/app/components/homepage/recent-projects";
import { WhatWeDoSection } from "@/app/components/homepage/what-we-do-section";
import IntroButton from "@/app/components/dna/intro-button";
import CreatorPersonalitySection from "@/app/components/homepage/creator-personality-section";
import InquirySection from "@/app/components/homepage/inquiry-section";
import { useScrollToAnchor } from "@/lib/useScrollToAnchor";
import { Navbar } from "./components/navbar/navbar";

const HERO_STARS = [
  { x: 8,  y: 12, size: 1.5, d: 3.5, delay: 0,   blue: false },
  { x: 18, y: 28, size: 1,   d: 4.8, delay: 0.7, blue: true  },
  { x: 30, y: 8,  size: 2,   d: 3.2, delay: 1.3, blue: false },
  { x: 45, y: 18, size: 1,   d: 5.5, delay: 0.4, blue: true  },
  { x: 55, y: 6,  size: 1.5, d: 4.1, delay: 2.0, blue: false },
  { x: 68, y: 22, size: 1,   d: 3.8, delay: 1.1, blue: true  },
  { x: 78, y: 10, size: 2,   d: 5.0, delay: 0.2, blue: false },
  { x: 88, y: 35, size: 1,   d: 4.3, delay: 1.6, blue: true  },
  { x: 92, y: 15, size: 1.5, d: 3.6, delay: 0.9, blue: false },
  { x: 12, y: 65, size: 1,   d: 4.7, delay: 2.3, blue: true  },
  { x: 25, y: 75, size: 1.5, d: 3.3, delay: 0.5, blue: false },
  { x: 38, y: 82, size: 1,   d: 5.2, delay: 1.8, blue: true  },
  { x: 52, y: 70, size: 2,   d: 4.0, delay: 0.1, blue: false },
  { x: 65, y: 85, size: 1,   d: 3.9, delay: 2.5, blue: true  },
  { x: 75, y: 72, size: 1.5, d: 4.6, delay: 1.4, blue: false },
  { x: 85, y: 80, size: 1,   d: 5.3, delay: 0.8, blue: true  },
  { x: 3,  y: 45, size: 1.5, d: 4.2, delay: 1.9, blue: false },
  { x: 95, y: 55, size: 1,   d: 3.7, delay: 0.3, blue: true  },
];

function HomePageContent() {
  const searchParams = useSearchParams();
  const scrollToAnchor = useScrollToAnchor();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });
  const culturalRef = useRef(null);
  const culturalInView = useInView(culturalRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const timer = setTimeout(() => {
        scrollToAnchor(section);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, scrollToAnchor]);

  return (
    <>
      <Navbar />

      <div
        id="about"
        className="relative overflow-x-clip pt-16"
        ref={heroRef}
        style={{ background: "#080e13" }}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(146,213,227,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Background glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#3571A3]/12 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[#92d5e3]/5 blur-[80px] pointer-events-none" />


        {/* Sparkling stars — CSS animated for scroll perf */}
        {HERO_STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${s.x}%`, top: `${s.y}%`,
              width: s.size, height: s.size,
              background: s.blue ? "rgba(146,213,227,0.9)" : "rgba(255,255,255,0.85)",
              boxShadow: s.blue ? "0 0 4px 2px rgba(146,213,227,0.4)" : "0 0 3px 1px rgba(255,255,255,0.2)",
              animation: `twinkle ${s.d}s ease-in-out ${s.delay}s infinite`,
              willChange: "opacity, transform",
            }}
          />
        ))}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111B23] to-transparent pointer-events-none z-10" />

        <div className="relative w-full px-6 py-28 md:py-36 space-y-6 lg:space-y-10 flex flex-col justify-center lg:ml-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-block text-white/55 text-[clamp(0.65rem,2vw,0.8rem)] font-medium tracking-[0.12em] uppercase">
              Indonesia's First-Ever End-to-End Market Intelligence Support
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          >
            <HeroHeadline>
              <span className="text-[clamp(0.95rem,4.5vw,3rem)] mb-3 block leading-snug font-medium text-[#A1A1A1]">
                The Intelligence You Need to
              </span>
              <span
                className="text-[clamp(2rem,12vw,9.375rem)] block leading-[0.92] tracking-tight font-black"
                style={{
                  background: "linear-gradient(135deg, #ffffff 30%, #92d5e3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 40px rgba(146,213,227,0.15))",
                }}
              >
                WIN YOUR
              </span>
              <span
                className="text-[clamp(2rem,12vw,9.375rem)] block leading-[0.92] tracking-tight font-black"
                style={{
                  background: "linear-gradient(135deg, #ffffff 30%, #92d5e3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 40px rgba(146,213,227,0.15))",
                }}
              >
                MARKET
              </span>
            </HeroHeadline>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={heroInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="origin-left h-px w-16 bg-gradient-to-r from-[#92d5e3]/60 to-transparent"
          />

          {/* Description + CTA */}
          <motion.div
            className="space-y-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          >
            <HeroDescription className="text-[clamp(0.8rem,3vw,1.1rem)] text-[#A1A1A1]/80 leading-relaxed">
              Plug in your market, get back a campaign. <br />Powered by intelligence.
            </HeroDescription>
            <div className="pt-2">
              <IntroButton href="https://wa.link/xo9fej" label="Contact Us" />
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="relative py-10 min-h-[520px] overflow-hidden"
        ref={culturalRef}
      >
        {/* Base dark bg — matches hero exactly for seamless join */}
        <div className="absolute inset-0 -z-30" style={{ background: "#111b23" }} />

        {/* Animated sea waves */}
        <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">

          {/* ── Fill waves (very subtle — bg stays as dark as hero) ── */}
          <div className="absolute bottom-0 left-0" style={{ width: "200%", animation: "waveSlide1 26s linear infinite" }}>
            <svg viewBox="0 0 2880 480" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "480px", display: "block" }}>
              <path d="M0 220 C180 155 360 155 540 220 S900 285 1080 220 S1260 155 1440 220 S1620 285 1800 220 S1980 155 2160 220 S2340 285 2520 220 S2700 155 2880 220 L2880 480 L0 480 Z" fill="rgba(20,50,80,0.16)"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0" style={{ width: "200%", animation: "waveSlide2 17s linear infinite" }}>
            <svg viewBox="0 0 2880 360" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "360px", display: "block" }}>
              <path d="M0 165 C120 110 240 110 360 165 S600 220 720 165 S960 110 1080 165 S1320 220 1440 165 S1560 110 1680 165 S1920 220 2040 165 S2280 110 2400 165 S2640 220 2760 165 S2880 110 2880 165 L2880 360 L0 360 Z" fill="rgba(35,75,115,0.1)"/>
            </svg>
          </div>

          {/* ── Stroke wave lines — the main visible moving elements ── */}
          <div className="absolute left-0" style={{ top: "8%", width: "200%", animation: "waveSlide1 32s linear infinite" }}>
            <svg viewBox="0 0 2880 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "70px", display: "block" }}>
              <path d="M0 35 C90 12 270 12 360 35 S630 58 720 35 S990 12 1080 35 S1350 58 1440 35 S1710 12 1800 35 S2070 58 2160 35 S2430 12 2520 35 S2790 58 2880 35" stroke="rgba(146,213,227,0.2)" strokeWidth="1" fill="none"/>
            </svg>
          </div>
          <div className="absolute left-0" style={{ top: "28%", width: "200%", animation: "waveSlide2 22s linear infinite" }}>
            <svg viewBox="0 0 2880 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "70px", display: "block" }}>
              <path d="M0 35 C180 10 360 10 540 35 S900 60 1080 35 S1260 10 1440 35 S1620 60 1800 35 S1980 10 2160 35 S2340 60 2520 35 S2700 10 2880 35" stroke="rgba(146,213,227,0.25)" strokeWidth="1.3" fill="none"/>
            </svg>
          </div>
          <div className="absolute left-0" style={{ top: "50%", width: "200%", animation: "waveSlide3 14s linear infinite" }}>
            <svg viewBox="0 0 2880 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "70px", display: "block" }}>
              <path d="M0 35 C90 12 270 12 360 35 S630 58 720 35 S990 12 1080 35 S1350 58 1440 35 S1710 12 1800 35 S2070 58 2160 35 S2430 12 2520 35 S2790 58 2880 35" stroke="rgba(146,213,227,0.16)" strokeWidth="0.9" fill="none"/>
            </svg>
          </div>
          <div className="absolute left-0" style={{ top: "68%", width: "200%", animation: "waveSlide1 20s linear infinite" }}>
            <svg viewBox="0 0 2880 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "70px", display: "block" }}>
              <path d="M0 35 C180 10 360 10 540 35 S900 60 1080 35 S1260 10 1440 35 S1620 60 1800 35 S1980 10 2160 35 S2340 60 2520 35 S2700 10 2880 35" stroke="rgba(146,213,227,0.28)" strokeWidth="1.4" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Bottom fade to blend into What We Do section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#111B23] z-10 pointer-events-none" />

        <div className="relative z-10 w-full px-6 space-y-3 pt-40 lg:px-24">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              culturalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <HeroHeadline>
              <span className="text-[clamp(1.75rem,10vw,4.75rem)] sm:text-[clamp(3.55rem,12.6vw,7.2rem)] block leading-[0.95] tracking-tight break-words">
                Central of
              </span>
              <span className="text-[clamp(1.75rem,10vw,4.75rem)] sm:text-[clamp(3.55rem,12.6vw,7.2rem)] block leading-[0.95] tracking-tight break-words">
                Cultural Outthink
              </span>
            </HeroHeadline>
          </motion.div>
        </div>
      </div>
      <div id="what-we-do">
        <WhatWeDoSection />
      </div>
      <div id="services">
        <OurServices />
      </div>
      <div id="market-intelligence">
        <MarketIntelligence />
      </div>
      <div id="behind-the-work">
        <BehindTheWork />
      </div>
      <div id="projects">
        <RecentProjects />
      </div>
      <div id="explore">
        <Explore />
      </div>
      <div id="creator-personality">
        <CreatorPersonalitySection />
      </div>
      <div id="inquiry">
        <InquirySection />
      </div>
      <div id="banner">
        <CTABanner />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}
