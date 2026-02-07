"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_PROFILE_URL } from "@/constants/instagramData";

export default function InstagramCTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-center"
    >
      <motion.a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(131, 58, 180, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        <Instagram className="w-5 h-5" />
        Follow Us on Instagram
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
