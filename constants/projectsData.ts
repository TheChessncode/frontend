import { Brain, Code2, Database, Rocket, GraduationCap, Cpu } from 'lucide-react';

export const studentData = {
  name: "Oise Elora Iguehi",
  image: "/elora-portrait.jpeg",
  chessBackground: "Top Female Chess Player in Nigeria",
  currentGoal: "Data Scientist & Machine Learning Specialist",
  quote: "Chess taught me pattern recognition, data science lets me apply it to real problems",
  joined: "September 2025",
  project: "Project Elora",
} as const;

export const curriculumData = [
  {
    phase: "Foundation Phase",
    duration: "Months 1-2",
    icon: GraduationCap,
    skills: ["Math Fundamentals", "Python Basics", "SQL", "Git & GitHub"],
    status: "completed" as const,
  },
  {
    phase: "Data Analysis",
    duration: "Months 3-5",
    icon: Database,
    skills: ["Pandas", "NumPy", "Data Visualization", "Tableau"],
    status: "completed" as const,
  },
  {
    phase: "Machine Learning",
    duration: "Months 6-8",
    icon: Brain,
    skills: ["Supervised Learning", "Model Selection", "Feature Engineering", "APIs"],
    status: "current" as const,
  },
  {
    phase: "Deployment & MLOps",
    duration: "Months 9-10",
    icon: Rocket,
    skills: ["Streamlit", "Docker", "MLOps", "Deep Learning"],
    status: "upcoming" as const,
  },
  {
    phase: "Advanced Topics",
    duration: "Months 11-12",
    icon: Cpu,
    skills: ["NLP", "Computer Vision", "Capstone Project", "Job Prep"],
    status: "upcoming" as const,
  },
] as const;