import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
      >
        <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Join Our Movement
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you're a potential scholar, mentor, partner, or supporter,
          there's a place for you in the ChessNcode community.
        </p>
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          whileHover="hover"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href='mailto:hello@chessncode.org'
            className="bg-white text-[var(--brand-primary)] px-[13px] py-[5px] md:px-8 md:py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Get Involved
          </motion.a>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Learn More
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}