"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import IntroButton from "@/app/components/dna/intro-button";
import ProgressLoader from "@/app/components/quiz/progress-loader";
import SpiderChart from "@/app/components/quiz/spider-chart";
import { getDNAType } from "@/constants/dna-types";
import { useQuizStore } from "@/store/quiz-store";

export default function Page() {
  const { totalWeight } = useQuizStore();
  const dnaType = getDNAType(totalWeight);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <ProgressLoader />;
  }

  return (
    <section className="min-h-lvh flex flex-col justify-center space-y-6  py-12">
      {/* Header */}
      <motion.div
        className="max-w-7xl w-full mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="text-sm text-foreground/60 flex items-center gap-2 pt-12 md:pt-16">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/quiz" className="hover:underline">
            DNA Quiz
          </Link>
          <span>/</span>
          <span className="text-foreground">Result</span>
        </nav>
      </motion.div>

      <motion.h1
        className="mt-4 text-center text-2xl md:text-3xl lg:text-5xl font-bold text-blue-leak"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Your PLUGNDD DNA Is Unlocked
      </motion.h1>
      <motion.p
        className="text-center text-foreground/70 px-6 max-sm:text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        This is your Cultural Outthinker Type : the blueprint behind your
        storytelling, strategy, intuition, and cultural instinct.
      </motion.p>

      {/* Main Content */}
      <motion.div
        className="p-6 flex flex-col gap-6 max-w-7xl w-full mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="border-blue-radial rounded-2xl">
          <div className="bg-background rounded-2xl overflow-hidden">
            <div className="p-4 md:p-6 lg:p-10 space-y-6 md:space-y-8">
              {/* DNA Type Header */}
              <div className="flex gap-3 md:gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/dnaquizlogo.png"
                    alt="DNA Quiz Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-20 md:h-28 lg:h-36 object-contain"
                  />
                </div>

                <div className="space-y-3 md:space-y-4 flex-1">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider text-blue-leak-b">
                      {dnaType.name}
                    </h2>
                    <p className="text-xs md:text-lg lg:text-xl text-blue-leak-b">
                      {dnaType.tagline}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 md:gap-3 pt-1 md:pt-2">
                    {dnaType.tags.map((tag) => (
                      <div
                        key={tag}
                        className="border-blue-radial rounded-full"
                      >
                        <span className="block px-3 py-1.5 md:px-5 md:py-2 bg-background rounded-full text-xs md:text-sm text-foreground/90">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-foreground/20 mx-6 md:mx-10"></div>

            <div className="p-6 md:p-10 space-y-8">
              {/* Two Column Layout - Description & What You Bring */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Description */}
                <div className="space-y-4 text-white text-xs md:text-base leading-relaxed">
                  {dnaType.description.map((paragraph) => (
                    <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                  ))}
                </div>

                {/* Right Column - What You Bring to a Team */}
                <div className="border-blue-radial rounded-xl">
                  <div className="bg-background bg-auto h-full rounded-xl p-6 space-y-4">
                    <h3 className="font-semibold text-lg md:text-xl">
                      What You Bring to a Team
                    </h3>
                    <ul className="space-y-3">
                      {dnaType.teamContributions.map((contribution) => (
                        <li
                          key={contribution.slice(0, 20)}
                          className="flex items-start gap-3"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full border-blue-radial flex-shrink-0" />
                          <span className="text-xs md:text-lg text-foreground/70">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Spider Chart & Additional Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-3 md:gap-8 p-2 md:p-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Spider Chart */}
                  <div className="w-full max-w-none md:max-w-full">
                    <div className="scale-110 md:scale-100 origin-center">
                      <SpiderChart data={dnaType.spiderData} />
                    </div>
                  </div>

                  {/* Environments */}
                  <div className="border-blue-radial rounded-xl">
                    <div className="bg-background rounded-xl p-3 md:p-6">
                      <div className="flex gap-2 md:gap-6 items-center">
                        <Icon
                          icon="carbon:crop-growth"
                          className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0 text-[#92d5e3]"
                        />
                        <div className="space-y-2 md:space-y-3 flex-1">
                          <h3 className="font-semibold text-base md:text-2xl">
                            Environments You Thrive In
                          </h3>
                          <div className="space-y-2 text-xs md:text-base text-foreground/90 leading-relaxed">
                            {dnaType.environments.map((env) => (
                              <p key={env.slice(0, 20)}>{env}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6 flex flex-col">
                  {/* Quotes */}
                  <div className="space-y-3 gap-2 flex flex-col">
                    {dnaType.quotes.map((quote) => (
                      <div
                        key={quote.slice(0, 20)}
                        className="border-blue-radial rounded-xl"
                      >
                        <div className="bg-[#182D3E] rounded-xl px-5 py-4">
                          <p className="text-xs md:text-xl text-center font-medium">
                            {quote}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Growth Path */}
                  <div className="border-blue-radial rounded-xl mt-15 flex-1">
                    <div className="bg-background rounded-xl p-10 space-y-3 h-full">
                      <h3 className="font-semibold text-xl md:text-2xl">
                        Growth Path
                      </h3>
                      <div className="space-y-2 text-xs sm:text-sm md:text-xl text-white">
                        {dnaType.growthPath.map((path) => (
                          <p key={path.slice(0, 20)}>{path}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact CTA */}
      <motion.div
        className="flex flex-col items-center gap-3 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-sm text-foreground/50">Ready to put your DNA to work?</p>
        <IntroButton href="https://wa.link/xo9fej" label="Contact Us" />
      </motion.div>
    </section>
  );
}
