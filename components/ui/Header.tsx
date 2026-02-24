"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Handshake, Info, X, ArrowRight, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { WaitlistModal } from "./WaitlistModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Projects", href: "/projects", icon: Target },
    // { name: "Impact", href: "/impact", icon: TrendingUp },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact us", href: "/contact", icon: Mail },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {" "}
      <header
        className={`fixed top-0 p-[10px] lg:p-0 flex items-center justify-center left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-lg"
            : "bg-[var(--bg-primary)]"
        } borde r-b border-[var(--border-primary)]`}
      >
        <div className="max-w-7xl px-[10px] sm:p-0 mx-auto w-full">
          <div className="flex justify-between w-full items-center h-16 md:h-20">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Image
                src="/logo.svg"
                width={120}
                height={40}
                alt="Logo"
                className="h-10 w-auto"
              />
            </motion.a>

            <nav className="hidden md:flex items-center md:gap-[40px] lg:gap-[60px]">
              {menuItems.map((item) => {
                // const IconComponent = item.icon;
                const isActive = pathname === item.href;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    className={`${
                      isActive
                        ? "text-[var(--brand-primary)]"
                        : "text-[var(--text-secondary)]"
                    }  hover:text-[var(--brand-primary)] transition-colors duration-200 font-medium flex items-center space-x-2 group`}
                  >
                    <span>{item.name}</span>
                  </motion.a>
                );
              })}
            </nav>

            <motion.a
              href="/apply"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex items-center px-6 py-2.5 rounded-full bg-[var(--brand-primary)] text-[var(--text-inverse)] font-semibold hover:bg-[var(--brand-primary-dark)] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Join us
              <span className="bg-white text-[var(--brand-primary)] rounded-full inline-flex ml-[10px]">
                <ArrowRight size={20} className="-rotate-45" />
              </span>
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-[var(--text-primary)] group-hover:bg-[var(--brand-primary)] transition-colors duration-200"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-[var(--text-primary)] group-hover:bg-[var(--brand-primary)] transition-colors duration-200"
              />
              <motion.span
                animate={
                  isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                }
                className="block w-6 h-0.5 bg-[var(--text-primary)] group-hover:bg-[var(--brand-primary)] transition-colors duration-200"
              />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="md:hidden top-0 left-0 bottom-0 h-screen fixed inset-0 backdrop-blur-[3px] bg-[var(--bg-overlay)] z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="md:hidden fixed top-0 right-0 bottom-0 h-screen w-80 max-w-full bg-[var(--bg-primary)] shadow-2xl z-50 border-l border-[var(--border-primary)]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-6 border-b border-[var(--border-primary)]">
                    <motion.a
                      href="/"
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0"
                      onClick={closeMenu}
                    >
                      <Image
                        src="/logo.svg"
                        width={120}
                        height={40}
                        alt="Logo"
                        className="h-8 w-auto"
                      />
                    </motion.a>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={closeMenu}
                      className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors duration-200"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5 text-[var(--text-primary)]" />
                    </motion.button>
                  </div>

                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {menuItems.map((item, index) => {
                        // const IconComponent = item.icon;
                        const isActive = pathname === item.href;
                        return (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={closeMenu}
                            className={
                              "flex items-center space-x-3 p-4 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors duration-200 text-lg font-medium  group" +
                              (isActive
                                ? " bg-[var(--bg-secondary)] text-[var(--brand-primary)]"
                                : "hidden text-[var(--text-primary)]")
                            }
                          >
                            {/* <IconComponent className="w-5 h-5 text-[var(--text-tertiary)] group-hover:text-[var(--brand-primary)] transition-colors duration-200" /> */}
                            <span>{item.name}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </nav>

                  <div className="p-6 border-t border-[var(--border-primary)]">
                    <motion.a
                      href="/apply"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeMenu}
                      className="block w-full py-3 px-6 rounded-full bg-[var(--brand-primary)] text-[var(--text-inverse)] font-semibold hover:bg-[var(--brand-primary-dark)] transition-all duration-200 text-center shadow-lg"
                    >
                      Join
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
