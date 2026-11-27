import { motion } from "framer-motion";
import { Heart, Globe, Trophy } from "lucide-react";

export default function ImpactStats() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-[var(--text-primary)]">
            Partnership Progress
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Promoting Queens reach and ChessNCode graduate progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: "750+", label: "Promoting Queens: girls engaged through programs", icon: Heart, color: "var(--success)" },
            { value: "4+", label: "Promoting Queens: regions reached", icon: Globe, color: "var(--info)" },
            { value: "ChessNCode", label: "2 scholars, 2 graduates, with 4 more enrolling. Our first graduate completed all 5 modules and earned 3 certificates.", icon: Trophy, color: "var(--warning)" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-[var(--bg-primary)] rounded-3xl border border-[var(--border-primary)] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: item.color }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <item.icon className="w-8 h-8 text-[var(--text-inverse)]" />
              </motion.div>
              <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-[var(--text-secondary)] font-semibold">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}