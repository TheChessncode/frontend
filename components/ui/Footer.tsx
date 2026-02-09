"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Brain,
  Users,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const footerLinks = {
    programs: [
      { name: "Chess Fundamentals", href: "/programs/chess" },
      { name: "Coding Bootcamp", href: "/programs/coding" },
      { name: "Data Science Track", href: "/programs/data-science" },
      { name: "Mentorship Program", href: "/programs/mentorship" },
    ],
    about: [
      { name: "Our Story", href: "/about" },
      { name: "Team", href: "/about/team" },
      { name: "Success Stories", href: "/about/success" },
      { name: "Careers", href: "/about/careers" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Learning Materials", href: "/resources" },
      { name: "Chess Strategies", href: "/resources/chess" },
      { name: "Coding Tutorials", href: "/resources/coding" },
    ],
    support: [
      { name: "FAQ", href: "/support" },
      { name: "Contact Us", href: "/contact" },
      { name: "Donate", href: "/donate" },
      { name: "Volunteer", href: "/volunteer" },
    ],
  };

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/TheChessNcode",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/chessncode",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@chessncode",
      label: "YouTube",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info@chessncode.org",
      href: "mailto:info@chessncode.org",
    },
    // { icon: Phone, text: '+1 (862) 373-7399', href: 'tel:+18623737399' },
    { icon: MapPin, text: "World wide", href: "#" },
  ];

  if (!isClient) {
    return (
      <footer className="relative border-t border-gray-200 py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Chessncode. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {i % 4 === 0 ? "♛" : i % 4 === 1 ? "{}" : i % 4 === 2 ? "</>" : "♔"}
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo.svg"
                  width={160}
                  height={50}
                  alt="ChessNcode"
                  className="h-12 w-auto"
                />
              </motion.div>
            </Link>

            <p className="text-[var(--text-secondary)] mb-6 text-lg leading-relaxed max-w-md">
              Transforming strategic minds from the chessboard to the codebase.
              Empowering the next generation of female tech innovators through
              chess and coding education.
            </p>

            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[var(--bg-tertiary)] text-[var(--text-secondary)] p-2 rounded-lg hover:bg-[var(--brand-primary)] hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-200 group"
                >
                  <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="hidden">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-[var(--brand-primary)]" />
                Programs
              </h3>
              <ul className="space-y-3">
                {footerLinks.programs.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--brand-primary)]" />
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[var(--brand-primary)]" />
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-[var(--border-primary)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-[var(--text-tertiary)] text-sm mb-4 md:mb-0">
            <span>© {currentYear} Chessncode. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>

          <div className="flex items-center space-x-6 text-sm text-[var(--text-tertiary)]">
            <Link
              href="/privacy"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-[var(--brand-primary)] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[var(--brand-primary)] text-white p-3 rounded-full shadow-2xl hover:bg-[var(--brand-primary-dark)] transition-all duration-300 z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
