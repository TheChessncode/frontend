"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) => {
  // Logic: Progress represents the percentage of the journey completed.
  // Step 1: 0% (nothing done yet)
  // Step 6: 100% (all inputs filled, ready for review/submit)
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-16">
      <div className="flex justify-between items-end mb-4 px-2">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)]">
            Step Progress
          </p>
          <p className="text-2xl font-black text-[var(--text-primary)]">
            0{currentStep}{" "}
            <span className="text-[var(--text-muted)] font-light">/</span> 0
            {totalSteps}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-[var(--brand-primary)]">
            {Math.round(progress)}%{" "}
            <span className="text-[var(--text-muted)] font-normal ml-1">
              Complete
            </span>
          </p>
        </div>
      </div>
      <div className="h-1.5 w-full bg-[var(--bg-tertiary)]/50 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  );
};
