"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Sparkles,
  MailCheck,
  Loader2,
} from "lucide-react";
import { ContactFormData } from "./ContactPage";
import { useEffect } from "react";

interface ContactFormProps {
  formRef: React.RefObject<HTMLFormElement | null>;
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  activeInterest: string;
}

const pulseGlow = {
  animate: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0px rgba(59, 130, 246, 0)",
      "0 0 30px rgba(59, 130, 246, 0.4)",
      "0 0 0px rgba(59, 130, 246, 0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const placeholderStyle =
  "block text-sm font-semibold text-[var(--text-primary)] mb-[1px]";

const iconStyle =
  "absolute left-[10px] top-1/2 translate-y-[-70%] transform -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]";

const inputStyle =
  "w-full pl-[35px] pr-[8px] py-[10px] bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand-primary)] focus:ring-[3px] focus:ring-[var(--brand-primary)]/20 transition-all duration-300 placeholder:text-[14px] mb-[10px]";

const errorStyle =
  "mt-1 text-sm text-[var(--error)] flex items-center gap-2  mb-[15px]";

export default function ContactForm({
  formRef,
  onSubmit,
  isSubmitting,
  submitStatus,
  activeInterest,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>();

  useEffect(() => {
    setValue("interest", activeInterest);
  }, [activeInterest, setValue]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="xl:col-span-1"
    >
      <div className="bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl px-[10px] py-[25px] md:px-[15px] shadow-2xl">
        <form
          ref={formRef}
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            reset();
          })}
          className="space-y-[10px]"
        >
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl flex items-center gap-4"
              >
                <CheckCircle className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Message Sent!</h4>
                  <p>
                    We&apos;ve received your message and will get back to you right
                    away.
                  </p>
                </div>
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="p-[10px] bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl flex items-center gap-[5px]"
              >
                <AlertCircle className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Something went wrong</h4>
                  <p>
                    Please try again or contact us directly at{" "}
                    <a
                      href="mailto:hello@chessncode.org"
                      className="underline hover:opacity-80"
                    >
                      hello@chessncode.org
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="">
            <div>
              <label className={placeholderStyle}>Your Name *</label>
              <div className="relative">
                <User className={iconStyle} />
                <input
                  {...register("name", {
                    required: "Please enter your name",
                  })}
                  className={inputStyle}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={errorStyle}
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.name.message}
                </motion.p>
              )}
            </div>
            <div>
              <label className={placeholderStyle}>Email Address *</label>
              <div className="relative">
                <Mail className={iconStyle} />
                <input
                  type="email"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={inputStyle}
                  placeholder="your.email@example.com"
                />
              </div>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={errorStyle}
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.email.message}
                </motion.p>
              )}
            </div>
            <div>
              <label className={placeholderStyle}>Title *</label>

              <div className="relative">
                <MailCheck className={iconStyle} />
                <input
                  {...register("subject", {
                    required: "Please enter a subject",
                  })}
                  className={inputStyle}
                  placeholder="What's the title of your message?"
                />
              </div>

              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={errorStyle}
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.subject.message}
                </motion.p>
              )}
            </div>
            <div>
              <label className={placeholderStyle}>Your Vision *</label>
              <div className="relative">
                <MessageSquare className="absolute left-[10px] top-[12px] w-5 h-5 text-[var(--text-muted)]" />
                <textarea
                  rows={6}
                  {...register("message", {
                    required: "Please tell us about your project",
                    minLength: {
                      value: 20,
                      message:
                        "Please provide more details (at least 20 characters)",
                    },
                  })}
                  className={inputStyle}
                  resize-none="true"
                  placeholder="Describe your project, goals, and any specific requirements..."
                />
              </div>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={errorStyle}
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.message.message}
                </motion.p>
              )}
            </div>
            <input
              type="hidden"
              {...register("interest", {
                required: "Please select an interest",
              })}
            />

            {activeInterest === "" && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                type="button"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-1 text-sm text-[var(--info)] flex items-center gap-2 mb-[10px] cursor-pointer underline hover:opacity-80"
              >
                <AlertCircle className="w-4 h-4" />
                Please select your area of interest
              </motion.button>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting || !activeInterest}
              variants={pulseGlow}
              animate={!isSubmitting && activeInterest ? "animate" : ""}
              className="w-full group relative px-8 py-[10px] bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] text-white rounded-xl font-bold text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isSubmitting ? (
                <div className="relative flex items-center justify-center gap-3">
                  <Loader2 className="animate-spin" />
                </div>
              ) : (
                <span className="relative flex items-center justify-center gap-3">
                  Send message
                  <Sparkles className="w-5 h-5" />
                </span>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
