"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FeatureText } from "@/app/components/dna/feature-text";
import IntroButton from "@/app/components/dna/intro-button";
import DnaCard from "@/app/components/dna/intro-card";
import { MainText } from "@/app/components/dna/main-text";
import { SubText } from "@/app/components/dna/sub-text";
import { GlassBlur } from "@/app/components/glass/glass-blur";
import { GlassContainer } from "@/app/components/glass/glass-container";
import { introCardData } from "@/constants/intro-card-data";
import Footer from "../components/homepage/footer";

function App() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    setLogoLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#111b23]">
      {/* <Link href="/" className="flex-shrink-0 absolute top-6 left-6 z-[60] md:top-8 md:left-8">
        <Image
          src="/intro-logo/plugndd_logo.png"
          alt="PLUGNDD Logo"
          width={242}
          height={35}
          priority
          className="w-40 md:w-48 h-auto"
        />
      </Link> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={logoLoaded ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="absolute top-[5vh] left-1/2 -translate-x-1/2 z-[10] pointer-events-none"
      >
        <div className="w-[140vw] md:w-[1200px] h-auto flex justify-center">
          <Image
            src="/bg-elements/puzzle.png"
            alt="Background puzzle element"
            width={1600}
            height={2000}
            className="w-full h-auto"
            style={{
              filter: "brightness(1.3) contrast(1.1)",
              maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
            }}
          />
        </div>
      </motion.div>

      <GlassBlur isLoaded={logoLoaded} />

      <div className="absolute top-[-150px] md:top-[-250px] left-1/2 -translate-x-1/2 z-[11] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={logoLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/bg-elements/stars.png"
            alt="Rotating stars"
            width={1600}
            height={1600}
            className="animate-slow-spin w-[150vw] md:w-[1600px] max-w-none h-auto opacity-40 md:opacity-100"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={logoLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="relative z-50 w-full"
      >

        <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">
          <div>
            <MainText size="text-[clamp(1.75rem,8vw,5rem)] leading-[1.1]">
              Discover Your <br />
              PLUGNDD Brand's DNA
            </MainText>
          </div>

          <div className="mt-4 md:mt-6">
            <SubText size="text-[clamp(0.875rem,3vw,1.5rem)]" weight="500">
              Every brand has its own creative fingerprint.
              <br className="hidden md:block" />
              Discover your brand's DNA now.
            </SubText>
          </div>

          <div className="mt-8">
            <IntroButton href="/quiz" label="Take PLUGNDD DNA Quiz" />
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 text-center">
          <MainText size="text-[clamp(1.5rem,5vw,2.5rem)]">Four Distinct PLUGNDD DNA</MainText>
          <div className="mt-3 mb-6 md:mb-8">
            <SubText
              size="text-[clamp(0.8rem,2.5vw,1.125rem)] text-[#F5F5F5]/80"
              weight="400"
              className="max-w-xl mx-auto px-4"
            >
              Each personality type represents a unique approach to brand building.
              Which one resonates with you?
            </SubText>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-8 md:gap-y-16 max-w-7xl mx-auto px-4">
            {introCardData.map((cardData) => (
              <DnaCard
                key={cardData.title}
                title={cardData.title}
                description={cardData.description}
              />
            ))}
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="text-center">
            <MainText size="text-[clamp(1.5rem,5vw,2.5rem)]">Here's What You Unplug</MainText>
            <div className="mt-3 mb-6 md:mb-8">
              <SubText
                size="text-[clamp(0.8rem,2.5vw,1.125rem)] text-[#F5F5F5]/70"
                weight="400"
                className="max-w-xl mx-auto px-4"
              >
                A streamlined assessment built for cultural explorers.
              </SubText>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-y-12 md:gap-x-8 max-w-7xl mx-auto px-6 place-items-center text-center">
            <FeatureText iconPath="/intro-logo/Group.svg" title="1-2 Minutes" description="Quick yet comprehensive assessment." />
            <FeatureText iconPath="/intro-logo/Vector.svg" title="10 Questions" description="Built to uncover your mindset." />
            <FeatureText iconPath="/intro-logo/si_insights-fill.svg" title="Visual insights" description="Strategic guidance based on profile." />
            <FeatureText iconPath="/intro-logo/lucide_goal.svg" title="Goal map" description="A pathway aligned with model." />
          </div>
        </section>

        <section className="py-10 md:py-24 px-4">
          <GlassContainer className="max-w-7xl mx-auto overflow-hidden p-5 md:p-10 border border-white/10 shadow-2xl">
            <h2 className="font-bold text-center leading-[1.2] bg-clip-text text-transparent bg-[linear-gradient(115deg,rgba(53,113,163,0.50)_-53.02%,#F5F5F5_48.07%)] text-[clamp(1.25rem,4vw,2.8rem)]">
              Ready to Discover Your PLUGNDD DNA?
            </h2>

            <p className="text-[clamp(0.8rem,2vw,1.125rem)] text-[#F5F5F5]/80 max-w-xl mx-auto mb-6 md:mb-10 mt-4 md:mt-6 px-2">
              Take the first step toward understanding your unique creative
              approach and unlocking personalized strategies for brand success.
            </p>

            <div className="mb-6 md:mb-10 text-center">
              <IntroButton href="/quiz" label="Take Quiz Now" />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 md:gap-x-8 text-xs md:text-sm font-semibold text-white/90">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#3571A3] rounded-full"></span>
                <span>No registration required</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#3571A3] rounded-full"></span>
                <span>Results in under 1 minute.</span>
              </div>
            </div>
          </GlassContainer>
        </section>


      </motion.div>
      <Footer />
    </div>
  );
}

export default App;
