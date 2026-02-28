import {
  Brain,
  Code2,
  Database,
  Rocket,
  GraduationCap,
  Cpu,
  Award,
  Target,
  Calendar,
  MapPin,
} from "lucide-react";

// Student data schema
export interface Student {
  slug: string;
  name: string;
  image: string;
  chessBackground: string;
  currentGoal: string;
  quote: string;
  joined: string;
  project: string;
  location: string;
  curriculum: CurriculumPhase[];
  dataAnalysisCurriculum?: CurriculumPhase[]; // Optional second curriculum for dual-track students
  certifications: Certification[];
  currentFocus: {
    title: string;
    description: string;
    project: string;
  };
}

export interface CurriculumPhase {
  phase: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  status: "completed" | "current" | "upcoming";
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  image?: string;
  date?: string;
  status: "achieved" | "upcoming";
  tags: string[];
}

// Students database
export const students: Student[] = [
  {
    slug: "elora",
    name: "Oise Elora Iguehi",
    image: "/elora-portrait.jpeg",
    chessBackground: "Top Female Chess Player in Nigeria",
    currentGoal: "Data Scientist & Machine Learning Specialist",
    quote:
      "Chess taught me pattern recognition, data science lets me apply it to real problems",
    joined: "September 2025",
    project: "Project Elora",
    location: "Nigeria",
    curriculum: [
      {
        phase: "Foundation Phase",
        duration: "Months 1-2",
        icon: GraduationCap,
        skills: ["Math Fundamentals", "Python Basics", "SQL", "Git & GitHub"],
        status: "completed",
      },
      {
        phase: "Data Analysis",
        duration: "Months 3-5",
        icon: Database,
        skills: ["Pandas", "NumPy", "Data Visualization", "Tableau"],
        status: "completed",
      },
      {
        phase: "Machine Learning",
        duration: "Months 6-8",
        icon: Brain,
        skills: [
          "Supervised Learning",
          "Model Selection",
          "Feature Engineering",
          "APIs",
        ],
        status: "current",
      },
      {
        phase: "Deployment & MLOps",
        duration: "Months 9-10",
        icon: Rocket,
        skills: ["Streamlit", "Docker", "MLOps", "Deep Learning"],
        status: "upcoming",
      },
      {
        phase: "Advanced Topics",
        duration: "Months 11-12",
        icon: Cpu,
        skills: ["NLP", "Computer Vision", "Capstone Project", "Job Prep"],
        status: "upcoming",
      },
    ],
    certifications: [
      {
        id: 1,
        title: "Introduction to Excel",
        issuer: "Datacamp",
        image: "/datacamp-cert.jpg",
        date: "November 9 2025",
        status: "achieved",
        tags: ["Python", "ML", "Data Analysis"],
      },
      {
        id: 2,
        title: "Introduction to Data Science",
        issuer: "IBM",
        image: "/ibm-cert.jpg",
        date: "October 30 2025",
        status: "achieved",
        tags: ["AI", "Cloud", "Big Data"],
      },
      {
        id: 3,
        title: "Introduction to SQL",
        issuer: "Datacamp",
        date: "November 7 2025",
        image: "/sql-cert.jpg",
        status: "achieved",
        tags: ["TensorFlow", "GCP", "MLOps"],
      },
    ],
    currentFocus: {
      title: "Machine Learning",
      description:
        "Elora is currently mastering supervised and unsupervised learning algorithms, building on her chess-honed pattern recognition skills to create intelligent systems.",
      project: "Chess Move Prediction Model",
    },
  },
  {
    slug: "praise",
    name: "Praise",
    image: "/praise-portrait.jpg",
    chessBackground: "ChessNcode Scholar",
    currentGoal: "Job-Ready Data Analyst",
    quote:
      "Transforming strategic thinking from chess into data-driven insights for the real world",
    joined: "December 2025",
    project: "Project Praise",
    location: "Nigeria",
    curriculum: [
      {
        phase: "Chess Fundamentals",
        duration: "Month 1",
        icon: Brain,
        skills: [
          "Piece Movements",
          "Coordination",
          "Fundamentals",
          "Mini-games",
        ],
        status: "completed",
      },
      {
        phase: "Checkmate",
        duration: "Month 2",
        icon: Target,
        skills: [
          "Checkmate",
          "Bicycle Mater up",
          "Practiced checkmate on Lichess",
          "Assisted checkmate- Checkmate with the queen",
          "Checkmate with the rook",
          "Evaluating Checkmate",
        ],
        status: "completed",
      },
      {
        phase: "Opening & Checkmate",
        duration: "Month 3",
        icon: GraduationCap,
        skills: [
          "5 steps in chess opening",
          "My lichess game review",
          "Opening Development, structures & response; Opening Principles",
        ],
        status: "completed",
      },
      {
        phase: "Tactics & Calculation",
        duration: "Month 4",
        icon: Code2,
        skills: [
          "Counting Captures, Double attacks and fork",
          "En prise and counting captures",
          "Counting Capture contd",
        ],
        status: "current",
      },
      {
        phase: "Opening Models & Threats",
        duration: "Month 5",
        icon: Database,
        skills: [
          "Italian Game",
          "Queen's Gambit",
          "Threat Recognition",
          "Candidate Moves",
        ],
        status: "upcoming",
      },
      {
        phase: "Middle Game Mastery",
        duration: "Month 6",
        icon: Rocket,
        skills: ["Planning", "Open Files", "Attacking", "Positional Play"],
        status: "upcoming",
      },
    ],
    certifications: [
      {
        id: 1,
        title: "Introduction to Excel",
        issuer: "Datacamp",
        image: "/praise-intro-to-excel-cert.jpg",
        date: "February 22 2026",
        status: "achieved",
        tags: ["Python", "ML", "Data Analysis"],
      },
    ],
    currentFocus: {
      title: "Chess Training - Tactics & Calculation",
      description:
        "Praise is currently learning Counting Captures, Double attacks and fork, and En prise — building tactical calculation skills that will translate to data analysis expertise.",
      project: "Counting Captures, Double attacks and fork",
    },
    dataAnalysisCurriculum: [
      {
        phase: "Foundations & Statistics",
        duration: "Month 1",
        icon: Database,
        skills: [
          "Data Analysis Fundamentals",
          "Descriptive Statistics",
          "Probability",
          "Hypothesis Testing",
        ],
        status: "upcoming",
      },
      {
        phase: "Excel Mastery",
        duration: "Month 2",
        icon: Code2,
        skills: [
          "Advanced Functions",
          "VLOOKUP",
          "Pivot Tables",
          "Data Analysis",
        ],
        status: "upcoming",
      },
      {
        phase: "SQL & Databases",
        duration: "Month 3",
        icon: Database,
        skills: ["SQL Fundamentals", "JOINs", "Subqueries", "Window Functions"],
        status: "upcoming",
      },
      {
        phase: "Python for Data Analysis",
        duration: "Month 4",
        icon: Code2,
        skills: ["Python Basics", "NumPy", "Pandas", "Data Cleaning"],
        status: "upcoming",
      },
      {
        phase: "Data Visualization",
        duration: "Month 5",
        icon: Rocket,
        skills: ["Matplotlib", "Seaborn", "Tableau", "Storytelling"],
        status: "upcoming",
      },
      {
        phase: "BI Tools & Career Prep",
        duration: "Month 6",
        icon: GraduationCap,
        skills: ["Power BI", "Portfolio", "LinkedIn", "Interview Prep"],
        status: "upcoming",
      },
    ],
  },
];

// Data Analysis Curriculum for Praise
export const praiseDataAnalysisCurriculum = [
  {
    phase: "Foundations & Statistics",
    duration: "Month 1",
    icon: Database,
    skills: [
      "Data Analysis Fundamentals",
      "Descriptive Statistics",
      "Probability",
      "Hypothesis Testing",
    ],
    status: "upcoming" as const,
  },
  {
    phase: "Excel Mastery",
    duration: "Month 2",
    icon: Code2,
    skills: ["Advanced Functions", "VLOOKUP", "Pivot Tables", "Data Analysis"],
    status: "upcoming" as const,
  },
  {
    phase: "SQL & Databases",
    duration: "Month 3",
    icon: Database,
    skills: ["SQL Fundamentals", "JOINs", "Subqueries", "Window Functions"],
    status: "upcoming" as const,
  },
  {
    phase: "Python for Data Analysis",
    duration: "Month 4",
    icon: Code2,
    skills: ["Python Basics", "NumPy", "Pandas", "Data Cleaning"],
    status: "upcoming" as const,
  },
  {
    phase: "Data Visualization",
    duration: "Month 5",
    icon: Rocket,
    skills: ["Matplotlib", "Seaborn", "Tableau", "Storytelling"],
    status: "upcoming" as const,
  },
  {
    phase: "BI Tools & Career Prep",
    duration: "Month 6",
    icon: GraduationCap,
    skills: ["Power BI", "Portfolio", "LinkedIn", "Interview Prep"],
    status: "upcoming" as const,
  },
];

// Helper function to get student by slug
export function getStudentBySlug(slug: string): Student | undefined {
  return students.find((student) => student.slug === slug.toLowerCase());
}

// Helper function to get all students
export function getAllStudents(): Student[] {
  return students;
}
