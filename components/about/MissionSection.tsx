import { missionItems } from '@/constants/aboutData';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function MissionSection() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Our Mission
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
            True empowerment comes from matching problems with the right solutions through chess, code, and community.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}