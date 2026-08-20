"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function ExploreSection() {
  const exploreRef = useRef(null);
  const exploreInView = useInView(exploreRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section ref={exploreRef} className="py-40 px-4 bg-[#111B23] text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.75rem,8vw,5rem)] font-semibold text-white"
        >
          Explore
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[#F5F5F5]/70 text-lg md:text-xl space-y-1 mb-12"
        >
          <p>Curious how we think and observe?</p>
          <p>Stay close to how we think.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={exploreInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="https://www.instagram.com/plugnddprojects?igsh=MXdha280aDJvcXl1aQ==" //sementara diarahakan ke about dulu
            className="relative group text-white text-lg font-medium pb-1"
          >
            Find more about us
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/40 group-hover:bg-white transition-all duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
