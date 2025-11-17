"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";
import Image from "next/image";

interface CertificateModalProps {
  certificate: {
    title: string;
    issuer: string;
    image: string;
  } | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-overlay)] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-[var(--bg-primary)] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--border-primary)]">
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                  {certificate.title}
                </h2>
                <p className="text-[var(--brand-primary)] font-semibold">
                  {certificate.issuer}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-[var(--text-primary)]" />
              </motion.button>
            </div>

            {/* Certificate Image */}
            {/* <div className="relative aspect-[4/3] bg-gray-50">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={500}
                height={500}
                className="object-cover"
              />
            </div> */}

            <div className="">
              <Image
                src={certificate.image}
                alt={certificate.title}
                width={500}
                height={500}
                className="object-cover w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 p-6 border-t border-[var(--border-primary)]">
              <motion.a
                href={certificate.image}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-[var(--brand-primary)] text-[var(--text-inverse)] rounded-xl font-semibold flex-1 justify-center"
              >
                <Download className="w-5 h-5" />
                Download
              </motion.a>
              {/* <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-[var(--border-primary)] text-[var(--text-primary)] rounded-xl font-semibold flex-1 justify-center"
              >
                <ExternalLink className="w-5 h-5" />
                Verify Online
              </motion.a> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
