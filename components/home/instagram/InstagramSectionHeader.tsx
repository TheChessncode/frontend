"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function InstagramSectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-2.5 rounded-xl shadow-lg">
          <Instagram className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest">
          Instagram
        </span>
      </div>

      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
        Follow Our{" "}
        <span className="relative inline-block">
          <span className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] bg-clip-text text-transparent">
            Journey
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full origin-left"
          />
        </span>
      </h2>

      <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
        Catch our latest moments, updates, and behind-the-scenes content from
        our chess and coding community
      </p>
    </motion.div>
  );
}
