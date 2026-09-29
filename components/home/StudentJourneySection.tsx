"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Clock, 
  CheckCircle2, 
  Brain, 
  Code2, 
  Calendar,
  Activity
} from "lucide-react";
import {
  getAllStudents,
  Student,
  CurriculumPhase,
  formatTimestamp
} from "@/constants/studentsData";
import Link from "next/link";

// Retain types and unused functions as requested ("do not remove what we have now, just don't use it")
type JourneyLevel = {
  level: number;
  title: string;
  status: "completed" | "current" | "upcoming";
  skills: string[];
  duration: string;
  icon: React.ReactNode;
};

function phasesToLevels(
  phases: CurriculumPhase[],
  levelOffset: number,
): JourneyLevel[] {
  return phases.map((phase, index) => ({
    level: levelOffset + index + 1,
    title: phase.phase,
    status: phase.status,
    skills: phase.skills,
    duration: phase.duration,
    icon: <phase.icon className="w-5 h-5 text-[var(--text-secondary)]" />,
  }));
}

function getJourneyLevels(student: Student | undefined): JourneyLevel[] {
  if (!student) return [];
  const mainLevels = phasesToLevels(student.curriculum, 0);
  const extraLevels = student.dataAnalysisCurriculum?.length
    ? phasesToLevels(student.dataAnalysisCurriculum, mainLevels.length)
    : [];
  return [...mainLevels, ...extraLevels];
}

// Helper to parse duration string to numeric hours
function parseDurationToHours(duration: string): number {
  const d = duration.toLowerCase().trim();
  if (d.includes("hour") || d.includes("hr")) {
    const hrMatch = d.match(/(\d+)\s*(?:hour|hr)s?/);
    const minMatch = d.match(/(\d+)\s*(?:min)s?/);
    
    let hours = 0;
    if (hrMatch) {
      hours += parseInt(hrMatch[1], 10);
    }
    if (minMatch) {
      hours += parseInt(minMatch[1], 10) / 60;
    }
    return hours;
  }
  
  if (d.includes("min")) {
    const minMatch = d.match(/(\d+)\s*mins?/);
    if (minMatch) {
      return parseInt(minMatch[1], 10) / 60;
    }
  }
  
  return 1.5; // Fallback
}

export default function StudentJourneySection() {
  const students = useMemo(() => getAllStudents(), []);
  const [selectedStudentSlug, setSelectedStudentSlug] = useState(
    students[0]?.slug || "elora"
  );
  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handleStudentSelect = (slug: string) => {
    setSelectedStudentSlug(slug);
    setCurrentPage(1);
  };

  const selectedStudent = useMemo(() => {
    return (
      students.find((s) => s.slug === selectedStudentSlug) || students[0]
    );
  }, [students, selectedStudentSlug]);

  // Compute Stats
  const stats = useMemo(() => {
    const logs = selectedStudent.logs || [];
    const totalSessions = logs.length;
    const chessSessions = logs.filter(l => l.sessionType === "Chess").length;
    const techSessions = logs.filter(l => l.sessionType === "Tech").length;
    const completedSessions = logs.filter(l => l.status === "Completed").length;
    
    const totalHours = logs.reduce((sum, log) => {
      return sum + parseDurationToHours(log.duration);
    }, 0);

    return {
      totalSessions,
      chessSessions,
      techSessions,
      completedSessions,
      totalHours: Math.round(totalHours)
    };
  }, [selectedStudent]);

  // Extract all logs (newest first)
  const allLogs = useMemo(() => {
    const logs = selectedStudent.logs || [];
    return [...logs].reverse();
  }, [selectedStudent]);

  const totalPages = Math.ceil(allLogs.length / ITEMS_PER_PAGE) || 1;

  const displayedLogs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allLogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allLogs, currentPage]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  if (!selectedStudent) {
    return null;
  }

  return (
    <section className="bg-[var(--bg-secondary)] py-16 px-4 border-b border-[var(--border-primary)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Meet Our{" "}
            <span className="text-[var(--brand-primary)]">Scholars</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Real-time logs of their chess study, coding sessions, and learning reflections
          </p>

          {/* Student Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {students.map((student) => (
              <button
                key={student.slug}
                onClick={() => handleStudentSelect(student.slug)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedStudentSlug === student.slug
                    ? "bg-[var(--brand-primary)] text-white shadow-lg scale-105"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                }`}
              >
                {student.slug === "elora" ? "Elora" : "Praise"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-[var(--bg-secondary)] backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[var(--border-primary)]"
          >
            <div className="text-center">
              <div className="relative mx-auto w-32 h-32 mb-4">
                <Image
                  src={selectedStudent.image}
                  alt={selectedStudent.name}
                  fill
                  className="rounded-full object-center object-cover border-4 border-[var(--brand-primary)]"
                />
                <div className="absolute -bottom-2 -right-2 bg-[var(--brand-primary)] text-white p-2 rounded-full">
                  <Star className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                {selectedStudent.slug === "elora" ? "Oise Elora Iguehi" : "Praise Okoro"}
              </h3>
              <p className="text-[var(--text-secondary)] mt-1">
                {selectedStudent.chessBackground}
              </p>
              <p className="text-sm text-[var(--brand-primary)] font-semibold mt-2">
                Goal: {selectedStudent.currentGoal}
              </p>

              <div className="mt-4 p-3 bg-[var(--bg-tertiary)] rounded-lg">
                <p className="text-sm italic text-[var(--text-secondary)]">
                  &quot;{selectedStudent.quote}&quot;
                </p>
              </div>

              <div className="mt-4 text-xs text-[var(--text-tertiary)] mb-4">
                • Joined: {selectedStudent.joined} •
              </div>

              <Link
                href={`/projects/${selectedStudent.slug}`}
                className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-[var(--brand-primary)] text-white rounded-lg hover:bg-[var(--brand-primary-dark)] transition-all text-sm font-semibold hover:shadow-md"
              >
                View Full Reflections Journal
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Stats and Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats Dashboard */}
            <div className="bg-[var(--bg-secondary)] backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[var(--border-primary)]">
              <h3 className="font-bold text-[var(--text-primary)] text-lg mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-[var(--brand-primary)]" />
                Learning Activity Stats
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-primary)] flex flex-col items-center justify-center text-center">
                  <Clock className="w-6 h-6 text-[var(--brand-primary)] mb-2" />
                  <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.totalHours} hrs</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-1">Study Time</span>
                </div>
                <div className="bg-[var(--bg- primary)] p-4 rounded-xl border border-[var(--border-primary)] flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.completedSessions}</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-1">Completed Sessions</span>
                </div>
                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-primary)] flex flex-col items-center justify-center text-center">
                  <Brain className="w-6 h-6 text-purple-500 mb-2" />
                  <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.chessSessions}</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-1">Chess Logs</span>
                </div>
                <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-primary)] flex flex-col items-center justify-center text-center">
                  <Code2 className="w-6 h-6 text-blue-500 mb-2" />
                  <span className="text-2xl font-bold text-[var(--text-primary)]">{stats.techSessions}</span>
                  <span className="text-xs text-[var(--text-secondary)] mt-1">Tech Logs</span>
                </div>
              </div>
            </div>

            {/* Activity List with Next/Previous Pagination */}
            <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <h4 className="font-bold text-[var(--text-primary)] text-lg">
                  Activity Logs ({allLogs.length})
                </h4>
                <span className="text-xs text-[var(--text-secondary)] font-medium">
                  Showing {allLogs.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}–{Math.min(currentPage * ITEMS_PER_PAGE, allLogs.length)} of {allLogs.length}
                </span>
              </div>

              <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                  {displayedLogs.map((log, index) => {
                    const isChess = log.sessionType === "Chess";
                    const isCompleted = log.status === "Completed";

                    return (
                      <motion.div
                        key={log.timestamp}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                        className={`p-4 rounded-xl border transition-all duration-300 bg-[var(--bg-secondary)] border-[var(--border-primary)] hover:border-[var(--brand-primary)] hover:shadow-md`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="flex items-center gap-3">
                            {/* Icon Indicator */}
                            <div className={`p-2.5 rounded-lg ${
                              isChess ? 'bg-purple-500/10 text-purple-500' : 'bg-blue-500/10 text-blue-500'
                            }`}>
                              {isChess ? <Brain className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                            </div>

                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  isChess ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                                }`}>
                                  {log.sessionType}
                                </span>
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  isCompleted ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
                                }`}>
                                  {log.status}
                                </span>
                              </div>
                              <h4 className="font-bold text-[var(--text-primary)] mt-1 text-sm md:text-base">
                                {log.topicCovered}
                              </h4>
                            </div>
                          </div>

                          <div className="flex sm:flex-col items-end justify-between sm:justify-start text-xs text-[var(--text-secondary)] mt-2 sm:mt-0 font-medium">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                              {formatTimestamp(log.timestamp).split(' • ')[0]}
                            </span>
                            <span className="text-[var(--text-tertiary)] sm:mt-1">
                              Duration: {log.duration}
                            </span>
                          </div>
                        </div>

                        {/* Learning reflection excerpt */}
                        <div className="mt-3 pt-3 border-t border-[var(--border-primary)]/50">
                          <p className="text-xs text-[var(--text-secondary)] italic line-clamp-2 pl-3 border-l-2 border-[var(--brand-primary)]/40">
                            &quot;{log.whatLearned}&quot;
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-primary)]/50">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed border-[var(--border-primary)] text-[var(--text-tertiary)]"
                        : "border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                          currentPage === page
                            ? "bg-[var(--brand-primary)] text-white shadow-sm"
                            : "bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      currentPage >= totalPages
                        ? "opacity-40 cursor-not-allowed border-[var(--border-primary)] text-[var(--text-tertiary)]"
                        : "border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white"
                    }`}
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
