"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CertificateModal from "./CertificateModal";
import { Student } from "@/constants/studentsData";

interface CertificationSectionProps {
  student: Student;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CertificationsSection({ student }: CertificationSectionProps) {
  const [selectedCert, setSelectedCert] = useState(null);
  const certifications = student.certifications;

  return (
    <>
      <section className="py-20 px-4 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-8 h-8 text-[var(--brand-primary)]" />
              <Sparkles className="w-6 h-6 text-[var(--warning)]" />
              <Award className="w-8 h-8 text-[var(--brand-primary)]" />
            </motion.div>
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Certifications{" "}
              <span className="text-[var(--brand-primary)]">Earned</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Validating skills through industry-recognized credentials
            </p>
          </motion.div>

          {/* Certifications Grid */}
          {certifications.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="show"
            >
              {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-2xl border-2 p-6 backdrop-blur-sm ${
                  cert.status === "achieved"
                    ? "bg-[var(--bg-primary)] border-[var(--border-primary)] shadow-lg"
                    : "bg-[var(--bg-tertiary)] border-dashed border-[var(--text-muted)] opacity-60"
                }`}
              >
                {/* Status Badge */}
                <div
                  className={`absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold ${
                    cert.status === "achieved"
                      ? "bg-[var(--success)] text-[var(--text-inverse)]"
                      : "bg-[var(--warning)] text-[var(--text-inverse)]"
                  }`}
                >
                  {cert.status === "achieved" ? "✓ Achieved" : "Coming Soon"}
                </div>

                {/* Certificate Image/Placeholder */}
                <div
                  className={`mb-4 rounded-xl overflow-hidden border-2 ${
                    cert.status === "achieved"
                      ? "border-[var(--brand-primary)]"
                      : "border-[var(--border-primary)]"
                  }`}
                >
                  {cert.image ? (
                    <div className="aspect-video relative flex items-center justify-center">
                      <div className="bg-gradient-to-br from-[var(--brand-primary-light)] to-[var(--brand-primary-dark)] absolute top-0 left-0 rounded-ee-full pb-[15px] pr-[15px]">
                        <Award className="w-12 h-12 text-[var(--text-inverse)] opacity-80 " />
                      </div>

                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-[var(--bg-tertiary)] flex items-center justify-center">
                      <Award className="w-12 h-12 text-[var(--text-muted)]" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3
                    className={`font-bold text-lg ${
                      cert.status === "achieved"
                        ? "text-[var(--text-primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    {cert.title}
                  </h3>

                  <p className="text-[var(--brand-primary)] font-semibold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)]">
                    {cert.date && <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </span>}
                    {cert.status === "achieved" && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Completed
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 rounded text-xs ${
                          cert.status === "achieved"
                            ? "bg-[var(--info-light)] text-[var(--info)]"
                            : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  {cert.status === "achieved" && (
                    <motion.button
                      // onClick={() => setSelectedCert(cert)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-lg bg-[var(--brand-primary)] text-[var(--text-inverse)] font-semibold text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </motion.button>
                  )}
                </div>

                {/* Hover Glow */}
                {cert.status === "achieved" && (
                  <div className="absolute inset-0 rounded-2xl bg-[var(--brand-primary)] opacity-0 group-hover:opacity-5 transition-opacity -z-10" />
                )}
              </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-12 px-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Award className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Certifications Coming Soon
              </h3>
              <p className="text-[var(--text-secondary)]">
                {student.name} is working hard to earn their first certifications!
              </p>
            </motion.div>
          )}

          {/* Progress Summary */}
          {certifications.length > 0 && (
            <motion.div
              className="text-center mt-12 p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-primary)] max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                {certifications.filter((c) => c.status === "achieved").length}/
                {certifications.length}
              </div>
              <div className="text-[var(--text-secondary)]">
                Certifications Completed
              </div>
              <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2 mt-3">
                <motion.div
                  className="h-2 rounded-full bg-[var(--success)]"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${
                      certifications.length > 0
                        ? (certifications.filter((c) => c.status === "achieved").length /
                            certifications.length) *
                          100
                        : 0
                    }%`,
                  }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <CertificateModal 
        certificate={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </>
  );
}