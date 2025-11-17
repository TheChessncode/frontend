import { timelineItems } from '@/constants/aboutData';
import { motion } from 'framer-motion';

export default function TimelineSection() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Our Strategic Journey
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Building a movement that connects education, identity, and opportunity
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--brand-primary)] to-[var(--brand-primary-light)]"></div>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-[65%] md:w-[50%] ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                <div className="bg-[var(--bg-secondary)] rounded-2xl p-[8px] md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-[1px] md:gap-3 mb-[3px] md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-[var(--brand-primary)] bg-[var(--brand-primary-light)]/20 px-[4px] py-[2px] md:px-3 md:py-1 rounded-full text-[12px] md:text-sm">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-[16px] md:text-xl font-bold text-[var(--text-primary)] md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-[13px] md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--brand-primary)] rounded-full border-4 border-white shadow-lg z-10"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}