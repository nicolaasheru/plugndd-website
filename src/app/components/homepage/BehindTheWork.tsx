"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Overlay from "@/../public/about-page/overlay.png";
import Slide1 from "@/../public/about-page/slider11.png";
import Slide2 from "@/../public/about-page/slider12.png";
import Slide3 from "@/../public/about-page/slider13.png";
import Slide4 from "@/../public/about-page/slider14.png";
import Slide5 from "@/../public/about-page/slider15.png";
import Slide6 from "@/../public/about-page/slider16.png";
import Stars from "@/../public/bg-elements/stars.png";
import Spiral from "@/../public/bg-elements/spiral.png";

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function BehindTheWork() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-10 md:pt-20"
    >
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-[140%] w-full">
        <Image src={Overlay} alt="Overlay" fill className="object-cover" />
      </div>

      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-0 top-0 z-20 h-[140%] w-full"
      >
        <Image src={Stars} alt="Stars" fill className="object-cover" />
      </motion.div>

      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center px-6 text-center pb-10 md:pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.75rem,8vw,4rem)] font-semibold text-white"
        >
          Behind The Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 md:mt-8 max-w-2xl text-sm md:text-lg lg:text-xl text-[#b6c1cb] leading-relaxed"
        >
          Powered by top-university strategic thinkers with consulting mindsets and creative depth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 md:mt-5 flex flex-col gap-1 md:gap-2 text-[#b6c1cb]/70 text-xs md:text-base lg:text-lg"
        >
          <span>Professionally reviewed.</span>
          <span>Accessibly priced.</span>
          <span>Built for real decisions.</span>
        </motion.div>
      </div>

      {/* Spiral bleeding into Recent Projects */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="absolute bottom-0 left-1/2 w-[150%] max-w-[2100px] h-[1200px] pointer-events-none z-40"
        style={{ translateX: "-50%", translateY: "50%" }}
      >
        <Image src={Spiral} alt="" fill className="object-contain opacity-70" />
      </motion.div>

      <div className="relative -mt-32 aspect-[21/10] w-full overflow-hidden select-none">
        {/* Top fade to blend with text section above */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#111B23] to-transparent z-10 pointer-events-none" />

        {/* Bottom fade to blend into Recent Projects section */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111B23] to-transparent z-10 pointer-events-none" />

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index]}
              alt="Team slide"
              fill
              className="w-full object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-4 sm:left-8 lg:left-12 top-1/2 z-30 -translate-y-1/2 p-2 sm:p-3"
          >
            <Image
              src="/left-arrow.svg"
              alt="Previous"
              width={56}
              height={56}
              className="w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
            />
          </button>

          <button
            onClick={next}
            className="absolute right-4 sm:right-8 lg:right-12 top-1/2 z-30 -translate-y-1/2 p-2 sm:p-3"
          >
            <Image
              src="/right-arrow.svg"
              alt="Next"
              width={56}
              height={56}
              className="w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
            />
          </button>


      </div>
    </section>
  );
}
