"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ms: number;
}

const TARGET_DATE = new Date("January 1, 2035 00:00:00").getTime();
const STUDENT_GOAL = 1000000;
const CURRENT_STUDENTS = 2; // Based on studentsData.ts

export default function StudentCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  });

  const progress = (CURRENT_STUDENTS / STUDENT_GOAL) * 100;

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, ms: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        ms: Math.floor((distance % 1000) / 10), // Reduced to 2 digits for better performance/readability
      });

      requestAnimationFrame(updateCountdown);
    };

    const animationId = requestAnimationFrame(updateCountdown);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto lg:mx-0 mt-8"
    >
      {/* Countdown Grid */}
      <div className="flex items-center justify-between gap-0.5 sm:gap-1 md:gap-2 mb-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
        <TimeSeparator />
        <TimeUnit value={timeLeft.ms} label="Ms" isMs />
      </div>

      {/* Progress Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
              Current Enrollment
            </p>
            <div className="flex items-baseline gap-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold text-white"
              >
                {CURRENT_STUDENTS.toLocaleString()}
              </motion.span>
              <span className="text-white/40 text-sm">students</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
              2035 Goal
            </p>
            <p className="text-xl font-bold text-[var(--brand-primary-light)]">
              1M+
            </p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-4 bg-white/10 rounded-full overflow-hidden border border-white/5">
          {/* Progress Fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(progress, 0.2)}%` }} // Show at least a sliver for 2 students
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] shadow-[0_0_15px_rgba(41,99,255,0.5)]"
          />

          {/* Animated Particles/Pulse for the 2 students */}
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
              x: ["0%", "0.1%"], // Tiny jitter
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 h-full w-1 bg-white shadow-[0_0_10px_white]"
          />
        </div>

        <div className="flex flex-col items-center gap-1 mt-2">
          <p className="text-blue-200 text-center text-sm italic max-w-md">
            "The electric light did not come from the continuous improvement of
            candles"
          </p>
          <p className="text-[var(--brand-primary-light)] text-[10px] font-bold uppercase tracking-widest mt-1">
            — Oren Haran
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TimeSeparator() {
  return (
    <div className="text-white/20 text-lg md:text-3xl font-bold pb-4 md:pb-6 self-center">
      :
    </div>
  );
}

function TimeUnit({
  value,
  label,
  isMs = false,
}: {
  value: number;
  label: string;
  isMs?: boolean;
}) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-2 px-1 md:p-4 bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 hover:border-white/20 transition-all group min-w-0">
      <div className="relative h-6 md:h-12 flex items-center justify-center">
        <motion.span
          // Disable key-based slide-in for MS to allow smooth continuous updating
          key={isMs ? undefined : value}
          initial={isMs ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-base sm:text-lg md:text-4xl font-bold tabular-nums leading-none ${
            isMs ? "text-white/50" : "text-white"
          }`}
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </div>
      <span className="text-[7px] md:text-xs font-medium text-white/50 uppercase tracking-tighter mt-1 group-hover:text-white/80 transition-colors truncate w-full text-center">
        {label}
      </span>
    </div>
  );
}
