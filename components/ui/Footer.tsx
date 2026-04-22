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
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
);

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
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/15512148419",
      label: "WhatsApp",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info@chessncode.com",
      href: "mailto:info@chessncode.com",
    },
    { icon: Phone, text: "+1 (551) 214-8419", href: "tel:+15512148419" },
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
