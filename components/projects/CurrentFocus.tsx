import { motion } from "framer-motion";
import { Lightbulb, Brain, Target } from "lucide-react";
import { Student } from "@/constants/studentsData";

interface CurrentFocusProps {
  student: Student;
}

export default function CurrentFocus({ student }: CurrentFocusProps) {
  const Icon = student.currentFocus.title.toLowerCase().includes("machine learning") 
    ? Brain 
    : Target;

  return (
    <motion.section
      className="py-16 px-4 bg-[var(--bg-secondary)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <Lightbulb className="w-16 h-16 text-[var(--warning)] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Current Focus: {student.currentFocus.title}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            {student.currentFocus.description}
          </p>
          
          <motion.div
            className="inline-flex items-center gap-2 px-[8px] md:px-6 py-3 rounded-full bg-[var(--bg-primary)] shadow-lg border border-[var(--border-primary)]"
            whileHover={{ scale: 1.05 }}
          >
            <Icon className="w-5 h-5 text-[var(--brand-primary)]" />
            <span className="font-semibold text-[var(--text-primary)]">
              Building: {student.currentFocus.project}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}