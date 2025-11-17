import { motion } from "framer-motion";
import { Lightbulb, Brain } from "lucide-react";

export default function CurrentFocus() {
  return (
    <motion.section
      className="py-16 px-4 bg-[var(--bg-secondary)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <Lightbulb className="w-16 h-16 text-[var(--warning)] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Current Focus: Machine Learning
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Elora is currently mastering supervised and unsupervised learning algorithms, 
            building on her chess-honed pattern recognition skills to create intelligent systems.
          </p>
          
          <motion.div
            className="inline-flex items-center gap-2 px-[8px] md:px-6 py-3 rounded-full bg-[var(--bg-primary)] shadow-lg border border-[var(--border-primary)]"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-5 h-5 text-[var(--brand-primary)]" />
            <span className="font-semibold text-[var(--text-primary)]">
              Building: Chess Move Prediction Model
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}