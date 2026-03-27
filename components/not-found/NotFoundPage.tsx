"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";
import MiniKnightBoard from "./MiniKnightBoard";
import KnightIcon from "./KnightIcon";
import NotFoundBackground from "./NotFoundBackground";

export default function NotFoundPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/apply", label: "Apply" },
    { href: "/projects", label: "Scholars" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact" },
  ];

  const searchHref = query.trim()
    ? `/projects?search=${encodeURIComponent(query.trim())}`
    : "/projects";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)]">
      <NotFoundBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-primary)] bg-[var(--bg-primary)]/70 backdrop-blur-md px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
              <span className="text-xs font-black uppercase tracking-widest text-[var(--text-secondary)]">
                Page Not Found
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-[64px] sm:text-[80px] leading-none font-black tracking-tight">
                <span className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] bg-clip-text text-transparent">
                  404
                </span>
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
                That page is out of bounds.
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl">
                Looks like you&apos;ve wandered off the board. Choose a safe
                square below or make a quick knight move on the right.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)]/60 text-[var(--text-primary)] font-bold hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-[var(--brand-primary)] text-white font-bold shadow-lg shadow-[var(--brand-primary)]/20 hover:bg-[var(--brand-primary-dark)] transition-colors"
              >
                <Home size={18} />
                Go Home
              </Link>
            </div>

            <div className="rounded-3xl border border-[var(--border-primary)] bg-[var(--bg-primary)]/70 backdrop-blur-md p-5 shadow-[0_25px_60px_rgba(0,0,0,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-[var(--text-primary)]">
                  Quick navigation
                </p>
                <Image
                  src="/logo.svg"
                  alt=""
                  width={44}
                  height={44}
                  className="opacity-80"
                  priority
                />
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {quickLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group inline-flex items-center justify-between gap-2 rounded-2xl px-4 py-3 border border-[var(--border-primary)] bg-[var(--bg-primary)]/60 text-[var(--text-primary)] font-bold hover:bg-[var(--bg-secondary)] transition-colors"
                  >
                    <span>{l.label}</span>
                    <ArrowRight
                      size={16}
                      className="opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </div>

              <div className="mt-5">
                <label className="text-[10px] uppercase tracking-widest font-black text-[var(--text-muted)] ml-1">
                  Find a scholar
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                    />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search scholars (e.g., Elora)"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)]/30 backdrop-blur-sm outline-none text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] transition-all"
                    />
                  </div>
                  <Link
                    href={searchHref}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-[var(--brand-primary)] text-white font-bold hover:bg-[var(--brand-primary-dark)] transition-colors"
                    title="Search"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <p className="mt-2 text-xs text-[var(--text-tertiary)]">
                  This opens the scholars page; you can refine results there.
                </p>
              </div>
            </div>

            <div className="text-xs text-[var(--text-tertiary)]">
              If you believe this is a mistake, reach us at{" "}
              <a
                href="mailto:info@chessncode.com"
                className="font-bold text-[var(--brand-primary)] hover:underline"
              >
                info@chessncode.com
              </a>
              .
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative"
          >
            <div className="absolute -top-8 -right-10 hidden lg:block">
              <motion.div
                className="h-16 w-16 rounded-3xl bg-[var(--bg-primary)]/70 backdrop-blur-md border border-[var(--border-primary)] shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex items-center justify-center text-[var(--brand-primary)]"
                animate={{ rotate: [0, 4, 0], y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <KnightIcon className="h-8 w-8" />
              </motion.div>
            </div>

            <div className="relative rounded-[2.75rem] border border-[var(--border-primary)] bg-[var(--bg-primary)]/60 backdrop-blur-md p-4 sm:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/chess-friends-hero.jpg"
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority
                />
              </div>
              <div className="relative z-10">
                <MiniKnightBoard />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

