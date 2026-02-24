"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

interface StepNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
  isSubmitting?: boolean;
  isValid?: boolean;
}

export const StepNavigation = ({
  onBack,
  onNext,
  isFirst,
  isLast,
  isSubmitting,
  isValid = true,
}: StepNavigationProps) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between pt-8 mt-12 border-t border-[var(--border-primary)]">
      {!isFirst ? (
        <button
          onClick={onBack}
          type="button"
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      ) : (
        <div />
      )}

      {isLast ? (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary)] text-white rounded-full font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-dark)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending Application..." : "Submit Application"}
          {!isSubmitting && <Send size={18} />}
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          disabled={!isValid}
          type="button"
          className="flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary)] text-white rounded-full font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-dark)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step
          <ArrowRight size={18} />
        </motion.button>
      )}
    </div>
  );
};
