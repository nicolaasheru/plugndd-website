import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function MarketIntelligence() {
  const marketRef = useRef(null);
  const marketInView = useInView(marketRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });
  return (
    <section
      ref={marketRef}
      className="relative overflow-hidden px-6 py-12 lg:px-12 lg:py-16"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={marketInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[clamp(1rem,2vw,1.25rem)] text-[#b6c1cb]"
        >
          Our Approach
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={marketInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(1.75rem,8vw,5rem)] font-semibold leading-tight"
        >
          Market Intelligence
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={marketInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="my-24 flex items-center justify-center gap-2 md:gap-6 mx-auto"
        >
          <Image
            src="/home-page/market-intelligence.png"
            alt="Market Intelligence diagram"
            width={1710}
            height={1850}
            className="max-w-52 sm:max-w-64 w-full md:w-2/3 h-auto md:max-w-5xl"
            priority
          />
          <h3 className="text-sm sm:text-2xl md:text-[clamp(1.8rem,3.6vw,2.70rem)] font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#c3d1ff_0%,#b5c2e9_40%,#9fb0de_80%,#bfcdf5_100%)]">
            Market
            <br />
            Intelligence
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
