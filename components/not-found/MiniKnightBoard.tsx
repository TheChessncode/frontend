"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RefreshCcw, Sparkles } from "lucide-react";
import KnightIcon from "./KnightIcon";
import type { Square } from "./knight";
import { getKnightMoves } from "./knight";

export default function MiniKnightBoard() {
  const [position, setPosition] = useState<Square>({ row: 6, col: 1 });
  const [moveCount, setMoveCount] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  const tips = useMemo(
    () => [
      "Tip: Check the URL — a single character can change the whole position.",
      "Tip: Explore our scholars and projects for inspiration.",
      "Tip: Want to join the next cohort? Apply in under 10 minutes.",
      "Tip: Partners make impact possible — see who powers Chessncode.",
    ],
    [],
  );

  const legalMoves = useMemo(() => getKnightMoves(position), [position]);

  const makeMove = () => {
    if (legalMoves.length === 0) return;
    const next = legalMoves[Math.floor(Math.random() * legalMoves.length)];
    setPosition(next);
    setMoveCount((c) => c + 1);
    setTipIndex((i) => (i + 1) % tips.length);
  };

  const reset = () => {
    setPosition({ row: 6, col: 1 });
    setMoveCount(0);
    setTipIndex(0);
  };

  return (
    <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-primary)]/70 backdrop-blur-md p-5 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)]">
            Interactive
          </p>
          <h3 className="text-lg font-black text-[var(--text-primary)]">
            Make a Knight Move
          </h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Moves: <span className="font-bold">{moveCount}</span>
          </p>
        </div>
        <div className="shrink-0 h-10 w-10 rounded-2xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] flex items-center justify-center border border-[var(--brand-primary)]/20">
          <Sparkles size={18} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-8 rounded-2xl overflow-hidden border border-[var(--border-primary)]">
        {Array.from({ length: 64 }).map((_, idx) => {
          const row = Math.floor(idx / 8);
          const col = idx % 8;
          const isDark = (row + col) % 2 === 1;
          const isPiece = row === position.row && col === position.col;
          const isTarget = legalMoves.some((m) => m.row === row && m.col === col);

          return (
            <div
              key={idx}
              className={[
                "relative aspect-square",
                isDark
                  ? "bg-[var(--bg-tertiary)]/70"
                  : "bg-[var(--bg-secondary)]/70",
              ].join(" ")}
            >
              {isTarget && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-primary)]/35" />
                </div>
              )}
              <AnimatePresence initial={false}>
                {isPiece && (
                  <motion.div
                    key={`${row}-${col}`}
                    initial={{ scale: 0.85, opacity: 0, y: 4 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-primary-dark)] shadow-[0_18px_35px_rgba(41,99,255,0.25)] flex items-center justify-center text-white">
                      <KnightIcon className="h-6 w-6" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          onClick={makeMove}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-[var(--brand-primary)] text-white font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-dark)] transition-colors"
        >
          Move
          <ArrowRight size={18} />
        </button>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)]/60 text-[var(--text-primary)] font-bold hover:bg-[var(--bg-secondary)] transition-colors"
          title="Reset"
        >
          <RefreshCcw size={18} />
        </button>
      </div>

      <motion.p
        key={tipIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-4 text-xs text-[var(--text-tertiary)] leading-relaxed"
      >
        {tips[tipIndex]}
      </motion.p>
    </div>
  );
}

