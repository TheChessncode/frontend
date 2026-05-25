import {
  Brain,
  Code2,
  Database,
  Rocket,
  GraduationCap,
  Cpu,
  Target,
  Calendar,
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

// Praise — Data Analysis curriculum (lesson-by-lesson)
export const praiseDataAnalysisCurriculum: CurriculumPhase[] = [
  {
    phase: "Revision: Foundations & Statistics",
    duration: "23/01/2026 • 1hr 30mins",
    icon: Database,
    skills: [
      "Mr. Clifford",
      "Data analysis process",
      "Assignment: analysis process report",
    ],
    status: "completed",
  },
  {
    phase: "Excel: Data Collection & Cleaning",
    duration: "30/01/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Clifford", "Data collection", "Data cleaning"],
    status: "completed",
  },
  {
    phase: "Excel: Data Cleaning (Tools & Fixes)",
    duration: "04/02/2026 • 1hr 30mins",
    icon: Code2,
    skills: ["Mr. Clifford", "Sort & filter", "Rows, columns & cells"],
    status: "completed",
  },
  {
    phase: "Report Setup & Visualization Prep",
    duration: "06/02/2026 • 2hrs",
    icon: Rocket,
    skills: ["Mr. Clifford", "Report-ready dataset", "Visualization setup"],
    status: "completed",
  },
  {
    phase: "Excel: Filtering & Sorting",
    duration: "16/03/2026 • 2hrs",
    icon: Target,
    skills: ["Mr. Clifford", "Filtering workflows", "Sorting workflows"],
    status: "completed",
  },
  {
    phase: "Revision: Data Analysis Foundation",
    duration: "06/04/2026 • 2hrs",
    icon: Database,
    skills: ["Mr. Jadons", "Foundation refresh"],
    status: "completed",
  },
  {
    phase: "Excel: Analyst Worksheet Setup",
    duration: "07/04/2026 • 1hr 30mins",
    icon: Code2,
    skills: ["Mr. Jadons", "Worksheet structure", "Best practices"],
    status: "completed",
  },
  {
    phase: "Excel: Analyst vs Ordinary User",
    duration: "13/04/2026 • 1hr 30mins",
    icon: Brain,
    skills: ["Mr. Jadons", "Analyst workflow mindset"],
    status: "completed",
  },
  {
    phase: "Excel: Data Analysis Features",
    duration: "14/04/2026 • 1hr 30mins",
    icon: Code2,
    skills: ["Mr. Jadons", "Excel features overview"],
    status: "completed",
  },
  {
    phase: "Excel: Data Entry + Functions Intro",
    duration: "20/04/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Jadons", "Data organization", "Presentation"],
    status: "completed",
  },
  {
    phase: "Excel: Functions & Formulas (Intro)",
    duration: "21/04/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Jadons", "Functions basics", "Formulas basics"],
    status: "completed",
  },
  {
    phase: "Excel: Functions & Formulas (Practice)",
    duration: "27/04/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Jadons", "Practice session"],
    status: "completed",
  },
  {
    phase: "Excel: Functions & Formulas (Practice)",
    duration: "28/04/2026 • 1hr 30mins",
    icon: Code2,
    skills: ["Mr. Jadons", "Practice session"],
    status: "completed",
  },
  {
    phase: "Excel: Functions & Formulas (Practice)",
    duration: "04/05/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Jadons", "Practice session"],
    status: "completed",
  },
  {
    phase: "Excel: Functions & Formulas (Practice)",
    duration: "05/05/2026 • 1hr 30mins",
    icon: Code2,
    skills: ["Mr. Jadons", "Practice session"],
    status: "completed",
  },
  {
    phase: "Text Functions: LEN & LEFT",
    duration: "18/05/2026 • 2hrs",
    icon: Code2,
    skills: ["Mr. Jadons", "Text cleanup", "Dataset formatting"],
    status: "completed",
  },
  {
    phase: "Text Functions: Mastery",
    duration: "19/05/2026 • 1hr 30mins",
    icon: GraduationCap,
    skills: [
      "Mr. Jadons",
      "PROPER, TRIM, CONCAT",
      "UPPER/LOWER, RIGHT",
    ],
    status: "completed",
  },
  {
    phase: "Date & Time Functions",
    duration: "20/05/2026 • 2hrs",
    icon: Calendar,
    skills: ["Mr. Jadons", "Dates", "Time calculations"],
    status: "current",
  },
  {
    phase: "SQL & Databases",
    duration: "Month 3",
    icon: Database,
    skills: ["SQL fundamentals", "JOINs", "Subqueries", "Window functions"],
    status: "upcoming",
  },
  {
    phase: "Python for Data Analysis",
    duration: "Month 4",
    icon: Code2,
    skills: ["Python basics", "NumPy", "Pandas", "Data cleaning"],
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
    skills: ["Power BI", "Portfolio", "LinkedIn", "Interview prep"],
    status: "upcoming",
  },
];

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
        duration: "Month 1 (Dec)",
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
        phase: "Checkmate & Opening Fundamentals",
        duration: "Month 2 (Jan)",
        icon: Target,
        skills: [
          "Checkmate Rules",
          "Bicycle Mater up",
          "5 steps in Chess Opening",
          "Lichess Practice",
        ],
        status: "completed",
      },
      {
        phase: "Advanced Checkmate & Tactical Foundation",
        duration: "Month 3 (Feb)",
        icon: GraduationCap,
        skills: [
          "Queen & Rook Checkmates",
          "Evaluating Checkmate",
          "Counting Captures",
          "Double Attacks & Forks",
          "Opening Principles",
          "En prise",
        ],
        status: "completed",
      },
      {
        phase: "Tactics Reinforcement & Strategy",
        duration: "Month 4 (Mar)",
        icon: Code2,
        skills: [
          "Pins & Piling up",
          "Skewing",
          "Assessment Test",
          "Physical Board Play",
          "Lichess Level 3 supervision",
        ],
        status: "completed",
      },
      {
        phase: "Game Analysis & Advanced Attacking",
        duration: "Month 5 (Apr)",
        icon: Rocket,
        skills: [
          "Level 3 supervision",
          "Game Analysis & Critics",
          "Attack & Protection Guide",
          "Lichess Match Play",
        ],
        status: "current",
      },
      {
        phase: "Middle Game Mastery",
        duration: "Month 6+",
        icon: Target,
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
      title: "Date & Time Functions",
      description:
        "Praise is currently learning Excel date and time functions, building on earlier text functions to clean datasets and generate accurate time-based insights.",
      project: "Excel Functions Practice Workbook",
    },
    dataAnalysisCurriculum: praiseDataAnalysisCurriculum,
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
