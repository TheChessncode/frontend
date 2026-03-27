"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NotFoundBackground() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.65]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, rgba(41,99,255,0.18), transparent 45%), radial-gradient(circle at 75% 70%, rgba(90,138,255,0.16), transparent 48%), linear-gradient(90deg, rgba(41,99,255,0.08) 1px, transparent 1px), linear-gradient(rgba(41,99,255,0.08) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 64px 64px, 64px 64px",
          backgroundPosition: "center, center, 0 0, 0 0",
        }}
      />

      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--brand-primary)]/20 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-[var(--brand-primary-light)]/20 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

