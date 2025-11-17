import { founderItems } from "@/constants/aboutData";
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

export default function FounderSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Image
              width={500}
              height={500}
              src="/founder.jpeg"
              alt="Founder Abimbola Ayo Osunfuyi"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">
              Meet Our Founder
            </h2>
            <h3 className="text-xl text-[var(--brand-primary)] font-semibold mb-4">
              Abimbola Ayo Osunfuyi
            </h3>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              With extensive experience as part of the team that built Promoting
              Queens from scratch, I understand the importance of matching the
              right solutions to the right problems. ChessNcode represents the
              fusion of my passion for chess, technology, and women&apos;s
              empowerment.
            </p>
            <div className="space-y-3">
              {founderItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 text-[var(--text-secondary)]"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-5 h-5 text-[var(--brand-primary)]" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
