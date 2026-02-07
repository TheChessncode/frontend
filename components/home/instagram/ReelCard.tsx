"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { ReelData, INSTAGRAM_HANDLE } from "@/constants/instagramData";

interface ReelCardProps {
  reel: ReelData;
  index: number;
}

export default function ReelCard({ reel, index }: ReelCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[var(--bg-tertiary)] rounded-2xl overflow-hidden shadow-xl border border-[var(--border-primary)] hover:border-[var(--brand-primary)] aspect-[9/16] transition-all duration-300"
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[var(--brand-primary)] animate-spin" />
          </div>
        )}

        {/* Instagram Iframe - Full interaction */}
        <iframe
          src={reel.embedUrl}
          className="w-full h-full border-0"
          onLoad={() => setIsLoading(false)}
          allowFullScreen
          scrolling="no"
          title={reel.title}
        />

        {/* Bottom info - pointer-events-none so it doesn't block iframe */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-20">
          <h4 className="text-white font-semibold text-xs line-clamp-1">
            {reel.title}
          </h4>
          <p className="text-white/60 text-[10px]">{INSTAGRAM_HANDLE}</p>
        </div>

        {/* External Link */}
        <motion.a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          whileHover={{ scale: 1.1 }}
          className="absolute top-2 right-2 z-30 bg-black/50 backdrop-blur-sm p-1.5 rounded-full border border-white/30 hover:bg-black/70 transition-colors"
        >
          <ExternalLink className="w-3 h-3 text-white" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
