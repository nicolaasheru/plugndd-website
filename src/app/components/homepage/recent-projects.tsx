"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { partnerLogos } from "@/constants/partner-logo";

export default function RecentProjects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 bg-[#111B23] overflow-hidden z-10"
    >
      <motion.div
        initial={{ opacity: 0, x: "-50%", y: "-35%", rotate: 0 }}
        animate={
          isInView
            ? { opacity: [0.5, 0.9, 0.5], x: "-50%", y: "-50%", rotate: 360 }
            : { opacity: 0, x: "-50%", y: "-35%", rotate: 0 }
        }
        transition={{
          opacity: { duration: 6, ease: "easeInOut", repeat: Infinity },
          y: { duration: 0.8, ease: "easeOut" },
          x: { duration: 0.8, ease: "easeOut" },
          rotate: { duration: 40, ease: "linear", repeat: Infinity },
        }}
        className="absolute top-0 left-1/2 w-[150%] max-w-[2100px] h-[1200px] pointer-events-none z-[-1]"
      >
        <Image
          src="/bg-elements/spiral.png"
          alt="Spiral Background"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.75rem,8vw,5rem)] font-semibold text-white"
        >
          Recent Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#F5F5F5]/60 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <p>
            Trusted by brands, communities, and initiatives across culture, education, and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-x-20"
        >
          {partnerLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={50}
                className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
