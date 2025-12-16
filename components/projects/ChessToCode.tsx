import { motion } from "framer-motion";
import { Brain, Code2, Database } from "lucide-react";
import { Student } from "@/constants/studentsData";

interface ChessToCodeProps {
  student: Student;
}

export default function ChessToCode({ student }: ChessToCodeProps) {
  // Determine the target field based on student's goal
  const isDataAnalyst = student.currentGoal.toLowerCase().includes("data analyst");
  const targetField = isDataAnalyst ? "Data Analysis" : "Data Science";
  const targetSkills = isDataAnalyst 
    ? "Excel • SQL • Python • Data Visualization • BI Tools"
    : "Machine Learning • Python • Data Analysis • Deployment";

  return (
    <motion.div
      className="relative pb-[50px] md:pb-0"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="bg-[var(--bg-primary)] rounded-2xl p-[15px] md:p-8 shadow-xl border border-[var(--border-primary)]">
        <h2 className="text-2xl font-bold text-center text-[var(--text-primary)] mb-8">
          From Chess to {targetField}
        </h2>
        
        <div className="space-y-6">
          <motion.div
            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--info-light)] border border-[var(--info)]"
            whileHover={{ scale: 1.02 }}
          >
            <Brain className="w-8 h-8 text-[var(--info)]" />
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">Chess Skills</h3>
              <p className="text-sm text-[var(--text-secondary)]">Pattern Recognition • Strategic Thinking • Resilience</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-primary-dark)] rounded-full flex items-center justify-center text-[var(--text-inverse)] font-bold">
              →
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 p-4 rounded-xl bg-[var(--success-light)] border border-[var(--success)]"
            whileHover={{ scale: 1.02 }}
          >
            {isDataAnalyst ? (
              <Database className="w-8 h-8 text-[var(--success)]" />
            ) : (
              <Code2 className="w-8 h-8 text-[var(--success)]" />
            )}
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">{targetField}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{targetSkills}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}