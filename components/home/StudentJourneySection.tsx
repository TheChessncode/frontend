"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import {
  getAllStudents,
  Student,
  CurriculumPhase,
} from "@/constants/studentsData";
import Link from "next/link";

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

export default function StudentJourneySection() {
  const students = useMemo(() => getAllStudents(), []);
  const [selectedStudentSlug, setSelectedStudentSlug] = useState(
    students[0]?.slug || "elora",
  );

  const selectedStudent = useMemo(() => {
    return (
      students.find((s) => s.slug === selectedStudentSlug) || students[0]
    );
  }, [students, selectedStudentSlug]);

  const levels = useMemo(() => getJourneyLevels(selectedStudent), [selectedStudent]);

  const defaultCurrentLevel = useMemo(() => {
    if (!levels.length) return 1;

    const currentIndices = levels
      .map((level, index) => (level.status === "current" ? index : -1))
      .filter((index) => index >= 0);

    if (currentIndices.length) {
      return currentIndices[currentIndices.length - 1] + 1;
    }

    const lastCompletedIndex = levels
      .map((level, index) => (level.status === "completed" ? index : -1))
      .filter((index) => index >= 0)
      .pop();

    return lastCompletedIndex !== undefined ? lastCompletedIndex + 1 : 1;
  }, [levels]);

  const [currentLevel, setCurrentLevel] = useState(defaultCurrentLevel);

  // Update current level when student changes
  useEffect(() => {
    setCurrentLevel(defaultCurrentLevel);
  }, [selectedStudentSlug, defaultCurrentLevel]);

  const activeLevel = useMemo(() => {
    return levels.find((level) => level.level === currentLevel);
  }, [levels, currentLevel]);

  const progressPercent = levels.length
    ? (currentLevel / levels.length) * 100
    : 0;

  if (!selectedStudent) {
    return null;
  }

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
                  {progressPercent.toFixed(0)}% Complete
                </span>
              </div>

              <div className="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${progressPercent}%`,
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
                        Duration: {level.duration}
                      </p>
                    </div>

                    {/* <ChevronRight
                      className={`w-5 h-5 text-[var(--text-secondary)] text-[var(--text-tertiary)] transition-transform ${
                        currentLevel === level.level ? "rotate-90" : ""
                      }`}
                    /> */}
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
            Current Focus: {activeLevel?.title || "—"}
          </h3>
          <p className="mb-4 opacity-90">
            {activeLevel?.status === "current" &&
            activeLevel.title === selectedStudent.currentFocus.title
              ? selectedStudent.currentFocus.description
              : activeLevel?.status === "completed"
                ? `Completed ${activeLevel.title}.`
                : activeLevel?.status === "current"
                  ? `Currently working on ${activeLevel.title}.`
                  : activeLevel
                    ? `Next up: ${activeLevel.title}.`
                    : "Select a level to view the focus."}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {activeLevel?.skills.map((skill, i) => (
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
