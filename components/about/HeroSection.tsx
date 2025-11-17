import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

export default function HeroSection() {
  return (
    <motion.section
      className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden py-[20px]"
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-[white] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Empowering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary-dark)] to-[var(--brand-primary-dark)]">
                Women & Girls
              </span>{" "}
              Through Chess & Code
            </motion.h1>
            <motion.p
              className="text-xl text-[white]/60 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Building pathways to tech careers through strategic thinking,
              mentorship, and community in the AI era.
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-[10px]"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[white]">
                  2B
                </div>
                <div className="text-[white]/70 text-sm">
                  Women facing inequality
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[white]">
                  1M+
                </div>
                <div className="text-[white]/70 text-sm">Target by 2035</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-[10px] transform rotate-[-20deg] hover:rotate-0 transition-transform duration-300">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Diverse team of women collaborating on technology project with laptops and chess pieces"
                className="rounded-xl w-full h-64 lg:h-80 object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] rounded-2xl opacity-20 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
