import { motion } from "framer-motion";
import StudentInfo from "./StudentInfo";
import ChessToCode from "./ChessToCode";
import { gradientBackground } from "../contact/HeroSection";

export default function HeroSection() {
  return (
    <motion.section
      className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden"
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <StudentInfo />
          <ChessToCode />
        </div>
      </div>
    </motion.section>
  );
}
