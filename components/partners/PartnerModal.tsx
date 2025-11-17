import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Partner } from "@/constants/partnersData";
import Image from "next/image";

interface PartnerModalProps {
  selectedPartner: Partner | null;
  setSelectedPartner: (partner: Partner | null) => void;
}

export default function PartnerModal({
  selectedPartner,
  setSelectedPartner,
}: PartnerModalProps) {
  return (
    <AnimatePresence>
      {selectedPartner && (
        <motion.div
          className="fixed inset-0 bg-[var(--bg-overlay)] flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPartner(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[var(--bg-primary)] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--border-primary)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-2xl flex items-center justify-center p-3 border border-[var(--border-primary)]">
                    <Image
                      width={500}
                      height={500}
                      priority={true}
                      src={selectedPartner.logoUrl}
                      alt={selectedPartner.partnerName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {selectedPartner.partnerName}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {selectedPartner.description}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--error)] transition-colors duration-200"
                  onClick={() => setSelectedPartner(null)}
                >
                  ×
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-light)] text-[var(--text-inverse)] p-4 rounded-2xl mb-6 text-center"
              >
                <Star className="w-5 h-5 inline-block mr-2" />
                <span className="font-semibold">{selectedPartner.tag}</span>
              </motion.div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedPartner.stats.map((stat, index) => (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center p-4 bg-[var(--bg-secondary)] rounded-xl"
                  >
                    <div className="text-2xl font-bold text-[var(--brand-primary)] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--text-tertiary)]">
                      {stat.title}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <motion.a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-[var(--brand-primary)] text-[var(--text-inverse)] py-3 px-6 rounded-2xl font-semibold text-center flex items-center justify-center gap-2 hover:bg-[var(--brand-primary-dark)] transition-colors duration-300"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 border border-[var(--border-primary)] text-[var(--text-primary)] py-3 px-6 rounded-2xl font-semibold hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors duration-300"
                  onClick={() => setSelectedPartner(null)}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
