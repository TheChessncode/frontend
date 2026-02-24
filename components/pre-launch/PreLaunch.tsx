"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Rocket, Mail } from "lucide-react";

const gradientBackground = {
  hidden: { backgroundPosition: "0% 50%" },
  visible: {
    backgroundPosition: "100% 50%",
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PreLaunch() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  console.log(error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@chessncode.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            _subject: "🎉 New Waitlist Signup - Chessncode",
            _captcha: "false",
            _replyto: email,
            message: `New waitlist signup from: ${email}`,
          }),
        },
      );

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      const submissions = JSON.parse(
        localStorage.getItem("chessncodeWaitlist") || "[]",
      );
      console.log(error);
      submissions.push({ email, date: new Date().toISOString() });
      localStorage.setItem("chessncodeWaitlist", JSON.stringify(submissions));
      setIsSubmitted(true);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      // @ts-expect-error - Framer Motion backgroundPosition type issue
      variants={gradientBackground}
      initial="hidden"
      animate="visible"
      style={{
        background:
          "linear-gradient(-45deg, var(--bg-primary), var(--brand-primary-dark), var(--brand-primary-light), var(--brand-primary))",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-primary)]/10 to-[var(--brand-primary-light)]/5"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <Image
              src="/logo.svg"
              width={160}
              height={60}
              alt="Logo"
              className="h-15 w-auto mx-auto"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">
                Coming Soon
              </span>
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get Ready
            </motion.h1>

            <p className="text-xl text-white/80 max-w-md mx-auto">
              Something extraordinary is brewing behind the scenes
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full max-w-md mx-auto">
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your email for early access"
                    required
                    disabled={isLoading}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:border-white/40 focus:ring-2 focus:ring-white/20 outline-none transition-all disabled:opacity-50"
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-300 text-sm text-center"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className="bg-white/20 backdrop-blur-lg text-white py-4 px-8 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-white/30 border border-white/30 transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Rocket className="w-5 h-5" />
                      Join Waitlist
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/20 backdrop-blur-lg border border-white/30 text-white p-6 rounded-2xl"
              >
                <p className="text-lg font-semibold">
                  🎉 You&apos;re on the list!
                </p>
                <p className="text-sm mt-2">
                  We&apos;ll notify you when we launch
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-10 left-10 opacity-40"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-10 right-10 opacity-40"
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
