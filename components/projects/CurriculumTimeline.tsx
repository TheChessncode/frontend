import { motion } from "framer-motion";
import TimelineCard from "./TimelineCard";
import { curriculumData } from "@/constants/projectsData";

export default function CurriculumTimeline() {
  return (
    <motion.section
      className="py-16 px-4 bg-[var(--bg-primary)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Elora's Learning Journey
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            12-month intensive Data Science & Machine Learning curriculum
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-primary)] -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {curriculumData.map((phase, i) => (
                //@ts-ignore
              <TimelineCard key={i} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}