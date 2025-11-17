import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Ready to Make <span className="text-cyan-300">History</span>?
        </h2>
        <p className="text-xl text-white/80 mb-8">
          Have an idea, question, or need support? We&apos;re here to help. Reach out and let&apos;s make something amazing together!
        </p>
        <motion.button
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 py-[5px] flex items-center gap-[10px] justify-center bg-white text-[var(--brand-primary)] rounded-xl font-bold text-lg hover:bg-cyan-50 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Make Contact
          <Mail/>
        </motion.button>
      </motion.div>
    </section>
  );
}