"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import IntroButton from "@/app/components/dna/intro-button";

export default function CTABanner() {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ctaRef}
      className="relative bg-[#92D5E3] px-8 py-6 sm:p-10 lg:px-24 lg:py-24"
    >
      <div className="max-w-10xl max-sm:max-w-xs lg:px-20 mx-auto w-fit">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.25rem,5vw,6rem)] font-extrabold leading-[1.1] tracking-normal text-[#000000] mb-4 lg:mb-14"
          style={{ fontFamily: '"Satoshi", system-ui, sans-serif' }}
        >
          Someone in your industry is <br className="max-sm:hidden" />
          making a move you won't see <br className="max-sm:hidden" />
          until it's too late
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:mt-8"
        >
          <IntroButton href="https://wa.link/xo9fej" label="Contact Us" />
        </motion.div>
      </div>
    </section>
  );
}
