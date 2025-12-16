import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { Student, CurriculumPhase } from "@/constants/studentsData";

interface CurriculumTimelineProps {
  student: Student;
  curriculum?: CurriculumPhase[];
  title?: string;
  subtitle?: string;
}

export default function CurriculumTimeline({ 
  student, 
  curriculum,
  title,
  subtitle 
}: CurriculumTimelineProps) {
  const curriculumToShow = curriculum || student.curriculum;
  const curriculumType = student.slug === "praise" && !curriculum 
    ? "Chess Training" 
    : curriculum 
    ? "Data Analysis" 
    : "Data Science & Machine Learning";
  const duration = student.slug === "praise" && !curriculum ? "6-month" : curriculum ? "6-month" : "12-month";
  
  const displayTitle = title || `${student.name.split(' ')[student.name.split(' ').length - 1]}'s Learning Journey`;
  const displaySubtitle = subtitle || `${duration} intensive ${curriculumType} curriculum`;

  return (
    <motion.section
      className={`py-16 px-4 ${curriculum ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            {displayTitle}
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            {displaySubtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-primary)] -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {curriculumToShow.map((phase, i) => (
              <TimelineCard key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}