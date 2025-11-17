import { contactInfo } from "@/constants/contactData";
import { motion } from "framer-motion";

export default function ContactInfoSection() {
  return (
    <section
      id="contact-info"
      className="py-20 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[var(--text-primary)] mb-4">
            Multiple Ways to{" "}
            <span className="text-[var(--brand-primary)]">Connect</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            Choose your preferred method of communication
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`relative bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-2xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-[var(--brand-primary)] group-hover:scale-105 ${
                  item.url ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() =>
                  item.url &&
                  (item.external
                    ? window.open(item.url, "_blank", "noopener,noreferrer")
                    : (window.location.href = item.url))
                }
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-[var(--brand-primary)] mb-2">
                    {item.content}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
