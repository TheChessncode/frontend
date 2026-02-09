"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Sparkles, Target, Users } from "lucide-react";

export default function PartnershipSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-[var(--bg-secondary)] py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">♛</div>
        <div className="absolute top-20 right-20 text-4xl">♔</div>
        <div className="absolute bottom-16 left-1/4 text-5xl">♕</div>
        <div className="absolute bottom-20 right-16 text-3xl">♖</div>
      </div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-8 left-8 text-[var(--brand-primary)] opacity-20"
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-8 right-8 text-[var(--brand-primary)] opacity-20"
      >
        <Target size={40} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left flex-1"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-[var(--brand-primary)] text-white p-2 rounded-full"
              >
                <Users size={20} />
              </motion.div>
              <span className="text-sm font-semibold text-[var(--brand-primary)] uppercase tracking-widest">
                Strategic Partnership
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              Proud Partner of{" "}
              <motion.span
                className="text-[var(--brand-primary)] relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Promoting Queens
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[var(--brand-primary)]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </motion.span>
            </h2>

            <p className="text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Empowering girls to lead, strategize and conquer through chess
            </p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--brand-primary)]">
                  750+
                </div>
                <div className="text-sm text-[var(--text-tertiary)]">
                  Girls Empowered
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--brand-primary)]">
                  4+
                </div>
                <div className="text-sm text-[var(--text-tertiary)]">
                  Regions Reached
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-[var(--brand-primary)]">
                  100%
                </div>
                <div className="text-sm text-[var(--text-tertiary)]">
                  Success Rate
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://www.promotingqueens.org/"
              target="_blank"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(41, 99, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 bg-[var(--brand-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--brand-primary-dark)] transition-all duration-200 shadow-lg inline-flex items-center gap-2"
            >
              Learn More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[var(--brand-primary)] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

              <div className="relative bg-white p-8 lg:p-10 rounded-2xl shadow-2xl border border-[var(--border-primary)] transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/promoting-queens.svg"
                  width={240}
                  height={90}
                  alt="Promoting Queens"
                  className="h-16 lg:h-20 w-auto"
                />

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute -top-3 -right-3 bg-[var(--brand-primary)] text-white p-2.5 rounded-full shadow-lg"
                >
                  <Crown size={20} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 pt-8 border-t border-[var(--border-primary)]"
        >
          <p className="text-center text-[var(--text-tertiary)] text-sm">
            Together, we&apos;re building a brighter future for the next
            generation of female leaders
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
