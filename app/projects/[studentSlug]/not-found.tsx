"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, UserX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <UserX className="w-24 h-24 text-[var(--text-muted)] mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
          Scholar Not Found
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          The student you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-white rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          View All Scholars
        </Link>
      </motion.div>
    </div>
  );
}
