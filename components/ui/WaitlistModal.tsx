"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, CheckCircle } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) return;

    setIsLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/info@chessncode.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "🎉 New Waitlist Signup" }),
      });
    } catch {
      const submissions = JSON.parse(
        localStorage.getItem("chessncodeWaitlist") || "[]"
      );
      submissions.push({ email, date: new Date().toISOString() });
      localStorage.setItem("chessncodeWaitlist", JSON.stringify(submissions));
    } finally {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - This should close modal when clicked */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container - This prevents closing when clicking modal content */}
          <div className="fixed top-[50%] w-[90%] max-w-[400px] left-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]">
            <motion.div
              className="bg-white rounded-3xl w-full shadow-2xl border border-gray-200 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()} // This prevents backdrop click from closing
            >
              {/* Header */}
              <div className="relative p-8 text-center bg-gradient-to-br from-blue-500 to-purple-600">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-4"
                >
                  <Rocket className="w-16 h-16 text-white mx-auto" />
                </motion.div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  Join the Waitlist
                </h2>
                <p className="text-blue-100">Get notified when we launch</p>
              </div>

              {/* Content */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-base"
                          />
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isLoading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all hover:from-blue-600 hover:to-purple-700 disabled:opacity-50"
                        >
                          {isLoading ? (
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <>
                              <Rocket className="w-5 h-5" />
                              Join Waitlist
                            </>
                          )}
                        </motion.button>
                      </form>

                      <p className="text-gray-500 text-sm text-center">
                        Be the first to access our platform 🚀
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center space-y-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto"
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          Welcome! 🎉
                        </h3>
                        <p className="text-gray-600">
                          You&apos;ll be the first to know when we launch
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
