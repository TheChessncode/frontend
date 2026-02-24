"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home } from "lucide-react";
import Link from "next/link";

export const SuccessView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-20 px-6 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-3xl shadow-2xl"
    >
      <div className="flex justify-center mb-6">
        <div className="h-24 w-24 rounded-full bg-[var(--success-light)]/30 flex items-center justify-center text-[var(--success)]">
          <CheckCircle2 size={60} />
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-[var(--text-primary)] mb-4">
        Application Submitted!
      </h2>

      <p className="text-lg text-[var(--text-secondary)] max-w-md mx-auto mb-10">
        Your application to ChessNcode has been received. Our team
        will review your submission and get back to you soon.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brand-primary)] text-white rounded-full font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-dark)] transition-all"
      >
        <Home size={18} />
        Return Home
      </Link>
    </motion.div>
  );
};
