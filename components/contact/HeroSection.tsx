import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";
import { floatingElements } from "@/constants/contactData";

const cosmicFloat = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const gradientBackground = {
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

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideUpFade = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden"
      // @ts-ignore
      variants={gradientBackground}
      initial="hidden"
      animate="visible"
      style={{
        background:
          "linear-gradient(-45deg, var(--bg-primary), var(--brand-primary-dark), var(--brand-primary-light), var(--brand-primary))",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute text-[var(--brand-primary-light)] opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            // @ts-ignore
            variants={cosmicFloat}
            animate="animate"
            initial={{ scale: 0 }}
            transition={{ delay: element.delay, duration: 1 }}
          >
            <element.icon size={32} />
          </motion.div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <motion.div
        className="relative text-center max-w-6xl mx-auto px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          // @ts-ignore
          variants={slideUpFade}
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <Sparkles className="w-5 h-5 text-[var(--brand-primary)]" />
          <span className="text-sm font-medium text-[var(--text-inverse)]">
            Ready to Create Magic?
          </span>
        </motion.div>
        <motion.h1
          // @ts-ignore
          variants={slideUpFade}
          className="text-6xl md:text-8xl font-black mb-6 text-[var(--text-inverse)]"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Build
          </span>{" "} 
          The Future
        </motion.h1>
        <motion.p
          // @ts-ignore
          variants={slideUpFade}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Where chess strategy meets cutting-edge code. Let's discuss your next
          groundbreaking project.
        </motion.p>
        <motion.div
          // @ts-ignore
          variants={slideUpFade}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() =>
              document
                .getElementById("contact-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 bg-[var(--brand-primary)] text-white rounded-xl font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Conversation
            </span>
          </motion.button>
          <motion.button
            onClick={() =>
              document
                .getElementById("contact-info")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold backdrop-blur-sm hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </motion.section>
  );
}
