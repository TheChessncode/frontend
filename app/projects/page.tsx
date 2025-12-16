"use client";

import { getAllStudents } from '@/constants/studentsData';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, ArrowRight } from 'lucide-react';
import PublicPageContainer from '@/components/ui/PublicPageContainer';

// Note: Metadata should be added via layout or separate metadata file
// This is a client component for interactivity

export default function ProjectsPage() {
  const students = getAllStudents();

  return (
    <PublicPageContainer>
      <div className="min-h-screen bg-[var(--bg-primary)] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Our <span className="text-[var(--brand-primary)]">Scholars</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Meet our talented students transforming their chess skills into tech expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {students.map((student, index) => (
              <motion.div
                key={student.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Link href={`/projects/${student.slug}`}>
                  <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 shadow-lg border border-[var(--border-primary)] hover:border-[var(--brand-primary)] transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-xl border-4 border-[var(--bg-primary)] shadow-md overflow-hidden">
                          <Image
                            src={student.image}
                            alt={student.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-[var(--success)] text-[var(--text-inverse)] p-1 rounded-full">
                          <Award className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1">
                          {student.name}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-2">
                          {student.chessBackground}
                        </p>
                        <p className="text-sm font-semibold text-[var(--brand-primary)]">
                          {student.currentGoal}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-sm italic text-[var(--text-secondary)] border-l-4 border-[var(--brand-primary)] pl-4 mb-4">
                      &quot;{student.quote}&quot;
                    </blockquote>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--border-primary)]">
                      <div className="text-sm text-[var(--text-tertiary)]">
                        Joined: {student.joined}
                      </div>
                      <div className="flex items-center gap-2 text-[var(--brand-primary)] font-semibold group-hover:gap-3 transition-all">
                        <span>View Journey</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PublicPageContainer>
  );
}
