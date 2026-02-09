"use client";

import React from "react";
import { INSTAGRAM_REELS } from "@/constants/instagramData";
import ReelCard from "./instagram/ReelCard";
import InstagramSectionHeader from "./instagram/InstagramSectionHeader";
import InstagramCTAButton from "./instagram/InstagramCTAButton";
import InstagramBackgroundDecor from "./instagram/InstagramBackgroundDecor";

export default function InstagramReelsSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-[var(--bg-primary)] border-b border-[var(--border-primary)] overflow-hidden">
      <InstagramBackgroundDecor />

      {/* Section Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-[var(--bg-primary)] p-3 rounded-full border border-[var(--border-primary)] shadow-sm">
          <div className="w-2 h-2 bg-[var(--brand-primary)] rounded-full animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <InstagramSectionHeader />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {INSTAGRAM_REELS.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        <InstagramCTAButton />
      </div>
    </section>
  );
}
