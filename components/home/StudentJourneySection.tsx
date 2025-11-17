"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Star, Target, Trophy, User, Brain, Database } from "lucide-react";

export default function StudentJourneySection() {
  const [currentLevel, setCurrentLevel] = useState(2); 

  const student = {
    name: "Oise Elora Iguehi",
    image: "/elora-portrait.jpeg", 
    chessBackground: "Top Female Chess Player in Nigeria",
    currentGoal: "Data Scientist & Machine Learning Specialist",
    quote: "Chess taught me pattern recognition, data science lets me apply it to real problems",
    joined: "September 2025"
  };

  const levels = [
    {
      level: 1,
      title: "Chess Mastery",
      status: "completed",
      skills: ["Strategic Thinking", "Pattern Recognition", "Analytical Skills"],
      projects: ["Competitive tournament play", "Game analysis techniques"],
      icon: <Brain className="w-5 h-5 text-[var(--text-secondary)]" />
    },
    {
      level: 2,
      title: "Data Science Foundations", 
      status: "current",
      skills: ["Linear Algebra", "Data Modeling", "Database Concepts"],
      projects: ["Math fundamentals", "Data structure understanding"],
      icon: <Database className="w-5 h-5 text-[var(--text-secondary)]" />
    },
    {
      level: 3,
      title: "Machine Learning Core",
      status: "upcoming",
      skills: ["Algorithms", "Statistical Analysis", "Model Building"],
      projects: ["Predictive models", "Data analysis projects"],
      icon: <Target className="w-5 h-5 text-[var(--text-secondary)]" />
    },
    {
      level: 4,
      title: "Advanced Specialization",
      status: "upcoming", 
      skills: ["Deep Learning", "AI Applications", "Big Data"],
      projects: ["Real-world datasets", "Industry projects"],
      icon: <Trophy className="w-5 h-5 text-[var(--text-secondary)]" />
    },
    {
      level: 5,
      title: "Career Transition",
      status: "upcoming",
      skills: ["Portfolio Development", "Interview Prep", "Job Ready"],
      projects: ["Capstone project", "Professional portfolio"],
      icon: <User className="w-5 h-5 text-[var(--text-secondary)]" />
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Meet Our Pioneer 
            <span className="text-[var(--brand-primary)] block">Oise Elora Iguehi</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            The first scholar project that creates a path for 1 million girls and women by 2035
          </p>
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
                  src={student.image}
                  alt={student.name}
                  fill
                  className="rounded-full object-center object-cover border-4 border-[var(--brand-primary)]"
                />
                <div className="absolute -bottom-2 -right-2 bg-[var(--brand-primary)] text-white p-2 rounded-full">
                  <Star className="w-4 h-4" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">{student.name}</h3>
              <p className="text-[var(--text-secondary)]">{student.chessBackground}</p>
              <p className="text-sm text-[var(--brand-primary)] font-semibold mt-2">
                Goal: {student.currentGoal}
              </p>
              
              <div className="mt-4 p-3 bg-[var(--bg-tertiary)] rounded-lg">
                <p className="text-sm italic text-[var(--text-secondary)]">"{student.quote}"</p>
              </div>
              
              <div className="mt-4 text-xs text-[var(--text-tertiary)]">
                • Joined: {student.joined} •
              </div>
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
                <h3 className="font-bold text-[var(--text-primary)] text-lg">Journey Progress</h3>
                <span className="text-[var(--brand-primary)] font-bold">
                  {((currentLevel / levels.length) * 100).toFixed(0)}% Complete
                </span>
              </div>
              
              <div className="h-3 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(currentLevel / levels.length) * 100}%` }}
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
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      level.status === "completed" ? "bg-green-500 text-white" :
                      level.status === "current" ? "bg-[var(--brand-primary)] text-white" :
                      "bg-[var(--bg-tertiary)] text-[var(--text-tertiary)]"
                    }`}>
                      {level.status === "completed" ? "✓" : level.level}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {level.icon}
                        <h4 className="font-bold text-[var(--text-primary)]">{level.title}</h4>
                        {level.status === "current" && (
                          <span className="px-2 py-1 bg-[var(--brand-primary)] text-white text-xs rounded-full">
                            LEARNING NOW
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-2">
                        {level.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-sm text-[var(--text-tertiary)]">
                        Focus: {level.projects.join(", ")}
                      </p>
                    </div>
                    
                    <ChevronRight className={`w-5 h-5 text-[var(--text-secondary)] text-[var(--text-tertiary)] transition-transform ${
                      currentLevel === level.level ? "rotate-90" : ""
                    }`} />
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
            Current Focus: {levels.find(l => l.level === currentLevel)?.title}
          </h3>
          <p className="mb-4 opacity-90">
            {currentLevel === 2 
              ? "Mastering Linear Algebra and database foundations for data science"
              : "Building on chess analytical skills to solve real-world data problems"}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {levels.find(l => l.level === currentLevel)?.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}