"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMounted, setIsMounted] = useState(false);
  
  return

  useEffect(() => {
    setIsMounted(true);
    
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!isMounted) {
    return (
      <button className="w-12 h-6 bg-gray-300 rounded-full p-1">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </button>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative hidden w-12 h-6 bg-[var(--bg-tertiary)] rounded-full p-1 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-4 h-4"
        initial={false}
        animate={{ 
          left: theme === "light" ? "0.25rem" : "calc(100% - 1.25rem)" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ scale: 0.5, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              <Sun className="w-3 h-3 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ scale: 0.5, rotate: 90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center"
            >
              <Moon className="w-3 h-3 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}