"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Star,
  Target,
  Trophy,
  User,
  Brain,
  Database,
  GraduationCap,
  Rocket,
} from "lucide-react";
import { getAllStudents } from "@/constants/studentsData";
import Link from "next/link";

export default function StudentJourneySection() {
  const students = getAllStudents();
  const [selectedStudentSlug, setSelectedStudentSlug] = useState(
    students[0]?.slug || "elora",
  );
  const selectedStudent =
    students.find((s) => s.slug === selectedStudentSlug) || students[0];

  // Generate levels based on student's curriculum
  const getLevelsForStudent = (student: typeof selectedStudent) => {
    if (!student) return [];

    if (student.slug === "elora") {
      // Elora's journey: Data Science & Machine Learning track
      return [
        {
          level: 1,
          title: "Foundation Phase",
          status: "completed" as const,
          skills: ["Math Fundamentals", "Python Basics", "SQL", "Git & GitHub"],
          projects: ["Math fundamentals", "Data structure understanding"],
          icon: (
            <GraduationCap className="w-5 h-5 text-[var(--text-secondary)]" />
          ),
        },
        {
          level: 2,
          title: "Data Analysis",
          status: "completed" as const,
          skills: ["Pandas", "NumPy", "Data Visualization", "Tableau"],
          projects: ["Data analysis projects", "Visualization dashboards"],
          icon: <Database className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
        {
          level: 3,
          title: "Machine Learning",
          status: "current" as const,
          skills: [
            "Supervised Learning",
            "Model Selection",
            "Feature Engineering",
            "APIs",
          ],
          projects: ["Predictive models", "Chess move prediction"],
          icon: <Brain className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
        {
          level: 4,
          title: "Deployment & MLOps",
          status: "upcoming" as const,
          skills: ["Streamlit", "Docker", "MLOps", "Deep Learning"],
          projects: ["Model deployment", "Production systems"],
          icon: <Rocket className="w-5 h-5 text-[var(--text-secondary)]" />,
        },

        {
          level: 5,
          title: "Advanced Topics & Career",
          status: "upcoming" as const,
          skills: ["NLP", "Computer Vision", "Capstone Project", "Job Prep"],
          projects: ["Capstone project", "Professional portfolio"],
          icon: <User className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
      ];
    } else if (student.slug === "praise") {
      // Praise's journey: Chess Training + Data Analysis track (just starting)
      return [
        {
          level: 1,
          title: "Chess Fundamentals",
          status: "completed" as const,
          skills: [
            "Piece Movements",
            "Coordination",
            "Fundamentals",
            "Mini-games",
          ],
          projects: ["Chess basics", "Pattern recognition"],
          icon: <Brain className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
        {
          level: 2,
          title: "Defense & Attacking",
          status: "current" as const,
          skills: [
            "Defensive Thinking",
            "Attacking Principles",
            "Piece Roles",
            "Strong Squares",
          ],
          projects: ["Chess strategies", "Tactical thinking"],
          icon: <Target className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
        {
          level: 3,
          title: "Opening & Checkmate",
          status: "upcoming" as const,
          skills: [
            "Opening Principles",
            "Pawn Structures",
            "Checkmate Patterns",
            "Castling",
          ],
          projects: ["Opening repertoire", "Endgame techniques"],
          icon: (
            <GraduationCap className="w-5 h-5 text-[var(--text-secondary)]" />
          ),
        },
        {
          level: 4,
          title: "Data Analysis Foundations",
          status: "upcoming" as const,
          skills: [
            "Statistics",
            "Excel",
            "Data Fundamentals",
            "Analysis Process",
          ],
          projects: ["Statistical analysis", "Excel dashboards"],
          icon: <Database className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
        {
          level: 5,
          title: "Data Analysis Mastery",
          status: "upcoming" as const,
          skills: ["SQL", "Python", "Visualization", "BI Tools", "Career Prep"],
          projects: ["Data projects", "Portfolio development"],
          icon: <User className="w-5 h-5 text-[var(--text-secondary)]" />,
        },
      ];
    }
    return [];
  };

  const levels = getLevelsForStudent(selectedStudent);
  const currentLevelIndex = levels.findIndex((l) => l.status === "current");
  const [currentLevel, setCurrentLevel] = useState(
    currentLevelIndex >= 0 ? currentLevelIndex + 1 : 1,
  );

  // Update current level when student changes
  useEffect(() => {
    const newLevels = getLevelsForStudent(selectedStudent);
    const newCurrentLevelIndex = newLevels.findIndex(
      (l) => l.status === "current",
    );
    setCurrentLevel(newCurrentLevelIndex >= 0 ? newCurrentLevelIndex + 1 : 1);
  }, [selectedStudentSlug, selectedStudent]);

  return (
    <section className="bg-[var(--bg-secondary)] py-16 px-4 border-b border-[var(--border-primary)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Meet Our{" "}
            <span className="text-[var(--brand-primary)]">Scholars</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Transforming chess skills into tech expertise
          </p>

          {/* Student Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {students.map((student) => (
              <button
                key={student.slug}
                onClick={() => setSelectedStudentSlug(student.slug)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedStudentSlug === student.slug
                    ? "bg-[var(--brand-primary)] text-white shadow-lg scale-105"
                    : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-primary)] hover:border-[var(--brand-primary)]"
                }`}
              >
                {student.name.split(" ").pop()}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                {selectedStudent.name}
              </h3>
              <p className="text-[var(--text-secondary)]">
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors text-sm font-semibold"
              >
                View Full Journey
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[var(--bg-secondary)] backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-[var(--border-primary)]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[var(--text-primary)] text-lg">
                  Journey Progress
                </h3>
                <span className="text-[var(--brand-primary)] font-bold">
                  {((currentLevel / levels.length) * 100).toFixed(0)}% Complete
                </span>
              </div>

              <div className="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${(currentLevel / levels.length) * 100}%`,
                  }}
                  transition={{ duration: 1.5 }}
                />
              </div>

              <div className="flex justify-between text-sm text-[var(--text-tertiary)] mt-2">
                <span>Chess Mastery</span>
                <span>Career Ready</span>
              </div>
            </div>

            <div className="space-y-4">
              {levels.map((level, index) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                    level.status === "current"
                      ? "border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 shadow-lg"
                      : level.status === "completed"
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-[var(--border-primary)] bg-[var(--bg-secondary)]"
                  }`}
                  onClick={() => setCurrentLevel(level.level)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        level.status === "completed"
                          ? "bg-green-500 text-white"
                          : level.status === "current"
                            ? "bg-[var(--brand-primary)] text-white"
                            : "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      {level.status === "completed" ? "✓" : level.level}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {level.icon}
                        <h4 className="font-bold text-[var(--text-primary)]">
                          {level.title}
                        </h4>
                        {level.status === "current" && (
                          <span className="px-2 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full">
                            LEARNING NOW
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-2">
                        {level.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-[var(--text-tertiary)]">
                        Focus: {level.projects.join(", ")}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 text-[var(--text-secondary)] text-[var(--text-tertiary)] transition-transform ${
                        currentLevel === level.level ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-[var(--brand-primary)] via-[var(--brand-primary-dark)] to-[var(--brand-primary-dark)] rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-2">
            Current Focus: {levels.find((l) => l.level === currentLevel)?.title}
          </h3>
          <p className="mb-4 opacity-90">
            {selectedStudent?.slug === "elora"
              ? currentLevel === 3
                ? "Mastering supervised and unsupervised learning algorithms, building on chess-honed pattern recognition skills"
                : currentLevel === 2
                  ? "Completed data analysis fundamentals, now advancing to machine learning"
                  : "Building on chess analytical skills to solve real-world data problems"
              : selectedStudent?.slug === "praise"
                ? currentLevel === 2
                  ? "Learning defensive thinking and attacking principles in chess, building the foundation for data analysis"
                  : "Building foundational chess skills that will translate to data analysis expertise"
                : "Building on chess analytical skills to solve real-world data problems"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {levels
              .find((l) => l.level === currentLevel)
              ?.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
