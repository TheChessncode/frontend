"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import { WaitlistModal } from "../ui/WaitlistModal";
import { useRouter } from "next/navigation";
import StudentCountdown from "./StudentCountdown";

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Chess + Coding", "Strategy + Innovation", "Logic + Creativity"],
    loop: true,
    delaySpeed: 2000,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      <section className="relative min-h-[90dvh] flex flex-col items-center justify-center overflow-hidden py-16 lg:py-24 border-b border-white/10">
        {/* HERO BACKGROUND IMAGE (/heroBg.png) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroBg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle Dark Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#080d1a]/90 backdrop-blur-[1px]" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-10 lg:space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-6 lg:space-y-8 max-w-4xl mx-auto"
          >
            {/* Typewriter Ticker Pill */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 shadow-lg">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-200">
                  <span>{text}</span>
                  <Cursor cursorColor="#60a5fa" />
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                Empowering Girls & Women through{" "}
                <span className="text-blue-400 drop-shadow-md">
                  Chess & Coding
                </span>
              </h1>
            </motion.div>

            {/* Solid Clean CTA Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto"
            >
              <motion.a
                href="mailto:info@chessncode.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#2963ff] hover:bg-[#1a4fd9] text-white px-8 py-4 text-base font-bold rounded-xl transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5"
              >
                <HeartHandshake className="w-5 h-5 text-white/90" />
                <span>Sponsor a Scholar</span>
              </motion.a>

              <motion.button
                onClick={() => router.push("/apply")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-base font-bold rounded-xl transition-all duration-200 backdrop-blur-md shadow-xl flex items-center justify-center gap-2.5"
              >
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 text-white/80" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* COUNTDOWN SECTION: Centered below the main content over heroBg.png */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full pt-6 border-t border-white/10"
          >
            <StudentCountdown />
          </motion.div>
        </div>
      </section>

      {/* Waitlist Modal Component */}
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
