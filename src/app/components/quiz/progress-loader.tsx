import { motion } from "framer-motion";
import React from "react";

export default function ProgressLoader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[var(--Black,#111b23)] p-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.h2
          className="text-white/60 text-lg md:text-xl font-medium tracking-wider mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          LOADING RESULT
        </motion.h2>
        <div className="border-blue-radial rounded-2xl">
          <div className="bg-blue-radial rounded-2xl p-4 md:p-8 space-y-3">
            <motion.div
              className="flex items-center justify-between text-sm md:text-md lg:text-lg font-medium text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>Your DNA is being analyzed...</span>
              <span className="text-[#92d5e3]">...</span>
            </motion.div>
            <div className="h-2 rounded-full bg-foreground overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#92d5e3] to-[#3571a3]"
                initial={{ width: "0%" }}
                animate={{ width: "95%" }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
        <motion.p
          className="mt-8 text-center text-white/80 text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 3.0 }}
        >
          Getting ready..
        </motion.p>
      </div>
    </div>
  );
}
