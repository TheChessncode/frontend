"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2035-01-01T00:00:00");
const STUDENT_GOAL = 1000000;
const CURRENT_STUDENTS = 2; // Based on studentsData.ts

export default function StudentCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const progress = (CURRENT_STUDENTS / STUDENT_GOAL) * 100;

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      if (now >= TARGET_DATE) {
        return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      let months =
        (TARGET_DATE.getFullYear() - now.getFullYear()) * 12 +
        (TARGET_DATE.getMonth() - now.getMonth());

      const tempDate = new Date(now);
      tempDate.setMonth(tempDate.getMonth() + months);

      if (tempDate > TARGET_DATE) {
        months -= 1;
        tempDate.setMonth(tempDate.getMonth() - 1);
      }

      const diffMs = TARGET_DATE.getTime() - tempDate.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

      return { months, days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Countdown Title Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
          Target 2035 Countdown
        </p>
      </div>

      {/* Countdown Grid (Months, Days, Hours, Mins, Secs) */}
      <div className="w-full max-w-3xl grid grid-cols-5 gap-2 sm:gap-3.5 mb-4">
        <TimeUnit value={timeLeft.months} label="Months" />
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>

      {/* Compact Enrollment & Quote Packaging (No zeros, clean 1M goal display) */}
      <div className="w-full max-w-xl bg-white/[0.04] backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-lg space-y-2.5">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Enrolled:</span>
            <span className="text-sm sm:text-base font-bold text-white">{CURRENT_STUDENTS} Students</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Goal:</span>
            <span className="text-sm sm:text-base font-extrabold text-blue-400">1M Scholars</span>
          </div>
        </div>

        {/* Compact Progress Bar */}
        <div className="relative h-2 bg-black/40 rounded-full overflow-hidden border border-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.max(progress, 0.4)}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full rounded-full bg-blue-500 shadow-[0_0_10px_rgba(41,99,255,0.8)]"
          />
        </div>

        {/* Oren Haran Quote */}
        <div className="pt-2 border-t border-white/5 flex flex-col items-center">
          <p className="text-[11px] sm:text-xs text-white/70 italic text-center">
            &quot;The electric light did not come from the continuous improvement of candles&quot;
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-300/80 mt-0.5">
            — Oren Haran
          </p>
        </div>
      </div>
    </div>
  );
}

function TimeUnit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-3 px-1 bg-white/[0.05] backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-400/40 transition-colors group">
      <div className="relative h-6 sm:h-8 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-base sm:text-xl md:text-2xl font-black tracking-tight tabular-nums text-white group-hover:text-blue-200 transition-colors"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] sm:text-[10px] font-semibold text-white/50 uppercase tracking-wider mt-0.5">
        {label}
      </span>
    </div>
  );
}
