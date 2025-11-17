import { motion } from "framer-motion";

interface Phase {
  phase: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  status: "completed" | "current" | "upcoming";
}

interface Props {
  phase: Phase;
  index: number;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'completed':
      return { bg: 'bg-[var(--success-light)]', text: 'text-[var(--success)]', border: 'border-[var(--success)]', progress: 'bg-[var(--success)]' };
    case 'current':
      return { bg: 'bg-[var(--info-light)]', text: 'text-[var(--info)]', border: 'border-[var(--info)]', progress: 'bg-[var(--info)]' };
    default:
      return { bg: 'bg-[var(--bg-tertiary)]', text: 'text-[var(--text-muted)]', border: 'border-[var(--border-primary)]', progress: 'bg-[var(--text-muted)]' };
  }
};

export default function TimelineCard({ phase, index }: Props) {
  const styles = getStatusStyles(phase.status);

  return (
    <motion.div
      className="relative flex items-start gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl border-4 border-[var(--bg-primary)] shadow-lg flex items-center justify-center ${styles.bg} ${styles.border}`}>
        <phase.icon className={`w-6 h-6 ${styles.text}`} />
        {phase.status === 'current' && (
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--success)] rounded-full border-2 border-[var(--bg-primary)]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      <motion.div
        className={`flex-1 p-6 rounded-2xl border ${styles.bg} ${styles.border} shadow-sm`}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{phase.phase}</h3>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] mt-2 sm:mt-0">
            {phase.duration}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {phase.skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full text-sm bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-primary)]">
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${styles.progress}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ width: phase.status === 'completed' ? '100%' : phase.status === 'current' ? '60%' : '0%' }}
            />
          </div>
          <span className={`text-sm font-medium ${styles.text}`}>
            {phase.status === 'completed' ? 'Completed' : phase.status === 'current' ? 'In Progress' : 'Upcoming'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}