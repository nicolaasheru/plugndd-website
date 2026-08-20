"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import IntroButton from "@/app/components/dna/intro-button";
import { SectionDescription } from "./section-description";
import { SectionTitle } from "./section-title";
import { WhatWeDoCircles } from "./what-we-do-circles";
import { WhatWeDodashedLines } from "./what-we-do-dashed-lines";
import { WhatWeDoHeadline } from "./what-we-do-headline";

export function WhatWeDoSection() {
  const whatWeDoRef = useRef(null);
  const whatWeDoInView = useInView(whatWeDoRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={whatWeDoRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#111B23" }}
    >
      {/* Mobile layout — replaces the scaled version on small screens */}
      <div className="sm:hidden px-6 py-16 flex flex-col items-center gap-12">
        <h2 className="font-sans text-center leading-tight font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-b from-gray-400 to-white">
          What We Do
        </h2>

        {/* Business Logic */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 w-full max-w-xs"
          initial={{ opacity: 0, y: 30 }}
          animate={whatWeDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h3 className="font-sans font-bold text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3571A3] to-white">
            Business Logic
          </h3>
          <p className="text-[#b6c1cb] text-base leading-relaxed">
            Translating cultural signals into stories, dashboards, and strategies.
          </p>
          <IntroButton href="https://wa.link/xo9fej" label="Contact Us" />
        </motion.div>

        {/* Divider */}
        <div className="w-px h-16 bg-gradient-to-b from-[#3571A3] to-transparent" />

        {/* Outthinkers Society */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 w-full max-w-xs"
          initial={{ opacity: 0, y: 30 }}
          animate={whatWeDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="font-sans font-bold text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3571A3] to-white">
            Outthinkers Society
          </h3>
          <p className="text-[#b6c1cb] text-base leading-relaxed">
            Shaping the next wave of trend-literate, market-ready studentpreneurs.
          </p>
          <IntroButton href="https://chat.whatsapp.com/FAiHb4BV0MBIKXyKYp7VIa" label="Join Community" />
        </motion.div>
      </div>

      {/* Desktop layout — scaled version, hidden on mobile */}
      <div
        className="
        relative hidden sm:flex
        h-[560px] md:h-[840px] lg:h-[1120px] xl:h-[1400px]
        items-start justify-center
      "
      >
        <div
          className="
            absolute top-0
            w-[1440px] h-[1400px]
            origin-top
            scale-[0.25] sm:scale-[0.4] md:scale-[0.6] lg:scale-[0.8] xl:scale-100
          "
        >
          {/* Circles Background */}
          <WhatWeDoCircles />

          {/* Dashed Lines */}
          <WhatWeDodashedLines />

          {/* Content */}
          <div className="relative z-10 h-full py-20">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={
                whatWeDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <WhatWeDoHeadline className="mt-10">What We Do</WhatWeDoHeadline>

              {/* Stars Effect */}
              <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 z-[11] pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    whatWeDoInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src="/bg-elements/stars.png"
                    alt="Rotating stars"
                    width={800}
                    height={800}
                    className="animate-slow-spin w-[800px] h-[800px]"
                    priority={false}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 h-full">
              <div className="flex items-start justify-center pt-[350px]">
                <motion.div
                  className="text-center space-y-8 max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    whatWeDoInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  <SectionTitle>
                    Business <br /> Logic
                  </SectionTitle>

                  <SectionDescription>
                    Translating cultural signals into stories, dashboards, and
                    strategies.
                  </SectionDescription>

                  <div className="pt-6">
                    <IntroButton
                      href="https://wa.link/xo9fej"
                      label="Contact Us"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="flex items-start justify-center pt-[350px]">
                <motion.div
                  className="text-center space-y-8 max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    whatWeDoInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <SectionTitle>Outthinkers Society</SectionTitle>

                  <SectionDescription>
                    Shaping the next wave of <br /> trend-literate, market-ready
                    studentpreneurs.
                  </SectionDescription>

                  <div className="pt-6">
                    <IntroButton
                      href="https://chat.whatsapp.com/FAiHb4BV0MBIKXyKYp7VIa "
                      label="Join Community"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
