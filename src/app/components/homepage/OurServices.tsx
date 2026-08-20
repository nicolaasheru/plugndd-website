import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const servicesInformation = [
  {
    label: "Market Dashboard",
    description:
      "A clear view of who your customers are and which ones matter most.",
  },
  {
    label: "Brand Insight",
    description: "Understand how people see your brand and where it can grow.",
  },
  {
    label: "Live Market Signals",
    description: "Spot trends and shifts as they happen, not after they pass.",
  },
  {
    label: "Audience & Culture Mapping",
    description: "Understand how different groups think, talk, and behave.",
  },
  {
    label: "Go-to-Market Direction",
    description: "Turn insight into clear next steps for launch or growth.",
  },
  {
    label: "Competitive Landscape",
    description: "See where you stand and how others are moving.",
  },
  {
    label: "Content & Message Direction",
    description: "Clarify what to say, who to say it to, and why.",
  },
  {
    label: "Digital Activation Product",
    description: "Website or Apps? Developed by the nation's best.",
  },
];

export default function OurServices() {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  return (
    <section className="py-12" ref={servicesRef}>
      <motion.h1
        className="
          text-[#92d5e3] my-6 text-center text-[clamp(1.75rem,8vw,5rem)] font-semibold
        "
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Services
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-12 px-4 sm:px-6 lg:px-24 xl:px-36 mx-auto gap-3 sm:gap-6 auto-rows-fr grid-flow-row-dense"
        initial={{ opacity: 0, y: 30 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        {servicesInformation.map((s, i) => {
          const span =
            i === 0
              ? "sm:col-span-3 md:col-span-6 lg:col-span-6"
              : i === 1
                ? "sm:col-span-2 md:col-span-4 lg:col-span-3"
                : i === 2
                  ? "sm:col-span-2 md:col-span-2 lg:col-span-3"
                  : i === 3
                    ? "sm:col-span-3 md:col-span-3 lg:col-span-2"
                    : i === 4
                      ? "sm:col-span-3 md:col-span-3 lg:col-span-2"
                      : i === 5
                        ? "sm:col-span-2 md:col-span-2 lg:col-span-3"
                        : i === 6
                          ? "sm:col-span-2 md:col-span-2 lg:col-span-2"
                          : "sm:col-span-3 md:col-span-2 lg:col-span-3";
          return (
            <motion.div
              key={s.label}
              className={`${span} h-full `}
              initial={{ opacity: 0, y: 20 }}
              animate={
                servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                opacity: {
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.15 + i * 0.05,
                },
                y: { duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.05 },
                default: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <ServiceCard
                label={s.label}
                description={s.description}
                variant={i === 0 ? "radial-mask" : undefined}

              />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
