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
export interface StudentLog {
  timestamp: string;
  sessionType: "Tech" | "Chess";
  duration: string;
  topicCovered: string;
  status: "Completed" | "Incomplete";
  whatLearned: string;
}

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
  logs?: StudentLog[];
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

export function formatTimestamp(timestampStr: string): string {
  const match = timestampStr.match(/^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/);
  if (!match) return timestampStr;
  
  const [_, day, month, year, hour, minute] = match;
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const mIndex = parseInt(month, 10) - 1;
  const monthName = monthNames[mIndex] || "Jan";
  
  const hInt = parseInt(hour, 10);
  const ampm = hInt >= 12 ? "PM" : "AM";
  const formattedHour = hInt % 12 === 0 ? 12 : hInt % 12;
  const formattedMinute = minute.padStart(2, "0");
  
  return `${monthName} ${parseInt(day, 10)}, ${year} • ${formattedHour}:${formattedMinute} ${ampm}`;
}

export const eloraLogs: StudentLog[] = [
  {
    timestamp: "26/05/2026 08:17:19",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Opening Study",
    status: "Completed",
    whatLearned: "We looked at different variations of the exchange slav with plans for both sides"
  },
  {
    timestamp: "28/05/2026 15:05:15",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Revision",
    status: "Completed",
    whatLearned: "We did a recollection of all the topics covered since we started our classes to make sure there are no gaps in my knowledge ahead of our next topic which is Data Visualization"
  },
  {
    timestamp: "01/06/2026 16:38:03",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Data Visualization",
    status: "Completed",
    whatLearned: "Meaning of data visualization, purpose and principles of data visualization, data visualization tools"
  },
  {
    timestamp: "01/06/2026 16:42:41",
    sessionType: "Chess",
    duration: "2 hrs",
    topicCovered: "Endgame study",
    status: "Completed",
    whatLearned: "revision on assignments from the previous class, rook and pawn endgame (the vancura position)"
  },
  {
    timestamp: "06/06/2026 13:08:17",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Assignment Review",
    status: "Completed",
    whatLearned: "We analyzed positions of games from the previous assignment given"
  },
  {
    timestamp: "10/06/2026 05:10:29",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Opening Study",
    status: "Completed",
    whatLearned: "Exchange Slav variation and the plans for both sides"
  },
  {
    timestamp: "14/06/2026 05:03:45",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Data Visualization with Seaborn",
    status: "Completed",
    whatLearned: "Installing seaborn, using pandas and seaborn, plotting charts with seaborn"
  },
  {
    timestamp: "14/06/2026 05:08:59",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Data Visualization with Matplotlib",
    status: "Completed",
    whatLearned: "Understand the various types of charts used in Matplotlib"
  },
  {
    timestamp: "14/06/2026 05:11:06",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Data Visualization with Seaborn",
    status: "Completed",
    whatLearned: "Understanding the various types of charts used in Seaborn"
  },
  {
    timestamp: "14/06/2026 05:13:30",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Middle Game Study",
    status: "Completed",
    whatLearned: "We looked at the Benoni pawn structure and understanding the plans for both sides"
  },
  {
    timestamp: "17/06/2026 06:39:24",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Endgame Study",
    status: "Completed",
    whatLearned: "Review of previous assignment, Rook and 2 pawns vs rook endgame"
  },
  {
    timestamp: "19/06/2026 16:57:05",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Introducing to Power Bi",
    status: "Completed",
    whatLearned: "Installed power bi, worked through the interface and understanding the terminologies, importing and analyzing data in power bi"
  },
  {
    timestamp: "19/06/2026 16:59:24",
    sessionType: "Chess",
    duration: "2 hrs",
    topicCovered: "Opening Study",
    status: "Completed",
    whatLearned: "Review of previous assignment, More variations in the exchange semi-slav and game review"
  },
  {
    timestamp: "21/06/2026 09:35:04",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Data Transformation",
    status: "Completed",
    whatLearned: "Transforming data gotten from real world datasets using power query, an interface in Power BI"
  },
  {
    timestamp: "26/06/2026 16:06:44",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Data Modeling and Visualization with Power Bi",
    status: "Completed",
    whatLearned: "Creating a dashboard with various visualization tools and an ER diagram to show the relationship between tables in our dataset"
  },
  {
    timestamp: "28/06/2026 13:37:44",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "introduction to Machine Learning",
    status: "Completed",
    whatLearned: "Steps in building a machine learning project"
  },
  {
    timestamp: "12/07/2026 16:02:41",
    sessionType: "Chess",
    duration: "2 hrs",
    topicCovered: "Endgame",
    status: "Completed",
    whatLearned: "Rook vs pawn endgames"
  },
  {
    timestamp: "16/07/2026 16:40:09",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Machine Learning Algorithms",
    status: "Completed",
    whatLearned: "Understanding the different machine learning algorithms used for classification and regression projects, as well as their different evaluation metrics"
  },
  {
    timestamp: "16/07/2026 16:41:21",
    sessionType: "Chess",
    duration: "2 hrs",
    topicCovered: "endgame study",
    status: "Completed",
    whatLearned: "schematic thinking in the endgame"
  },
  {
    timestamp: "23/07/2026 15:29:13",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Machine Learning Projects",
    status: "Completed",
    whatLearned: "We began the steps in building a machine learning model for a telecommunication company from scratch"
  },
  {
    timestamp: "23/07/2026 15:30:45",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Machine Learning Project",
    status: "Completed",
    whatLearned: "Final stages of building our machine learning model for a telecommunication company and testing the models"
  },
  {
    timestamp: "23/07/2026 15:34:03",
    sessionType: "Chess",
    duration: "2 hrs",
    topicCovered: "Opening Study",
    status: "Completed",
    whatLearned: "We looked at the Petroff defense, one of the responses to whites 1.e4 and the plans for both sides"
  },
  {
    timestamp: "01/08/2026 15:50:38",
    sessionType: "Chess",
    duration: "2 hours",
    topicCovered: "Middle Game",
    status: "Completed",
    whatLearned: "Exploring imbalances in the middlegame"
  },
  {
    timestamp: "01/08/2026 15:52:59",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Building Machine Learning Models",
    status: "Completed",
    whatLearned: "We built a machine learning model to predict employee attrition"
  },
  {
    timestamp: "01/08/2026 15:54:37",
    sessionType: "Tech",
    duration: "2 hours",
    topicCovered: "Introduction to Deployment",
    status: "Completed",
    whatLearned: "Understanding the steps involved in deploying a machine learning model"
  },
  {
    timestamp: "05/08/2026 16:57:06",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Deployment of machine learning models",
    status: "Completed",
    whatLearned: "We started the process of deploying our first machine learning project (customer churn prediction)"
  },
  {
    timestamp: "08/08/2026 16:43:20",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Deployment",
    status: "Completed",
    whatLearned: "Deployment of our telecom customer churn on streamlit"
  },
  {
    timestamp: "15/08/2026 07:59:45",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Deployment of machine learning model",
    status: "Completed",
    whatLearned: "We successfully deployed our machine learning model involving customer churn prediction on scikit-learn"
  },
  {
    timestamp: "19/08/2026 18:00:39",
    sessionType: "Tech",
    duration: "2 hrs",
    topicCovered: "Deployment of machine learning models",
    status: "Completed",
    whatLearned: "We explored other methods of deploying machine learning models"
  }
];

export const praiseLogs: StudentLog[] = [
  {
    timestamp: "25/05/2026 20:30:00",
    sessionType: "Tech",
    duration: "2hrs",
    topicCovered: "Continued functions and formula",
    status: "Incomplete",
    whatLearned: "I learnt how to use the text, date and function"
  },
  {
    timestamp: "31/05/2026 23:49:08",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "Date and Time Function",
    status: "Incomplete",
    whatLearned: "I learnt how to use the day, days and Week Day Function to Format Data"
  },
  {
    timestamp: "31/05/2026 23:52:56",
    sessionType: "Tech",
    duration: "90mins",
    topicCovered: "Date&Time Function",
    status: "Incomplete",
    whatLearned: "I Learnt how to use the Networkdays, Weeknum, and Year function"
  },
  {
    timestamp: "31/05/2026 23:55:53",
    sessionType: "Tech",
    duration: "90mins",
    topicCovered: "Date & Time Function",
    status: "Completed",
    whatLearned: "Revised and Practiced the use of all the Date & Time Functions"
  },
  {
    timestamp: "05/06/2026 16:42:28",
    sessionType: "Tech",
    duration: "2hrs",
    topicCovered: "Math & Trig and Some Statistical",
    status: "Incomplete",
    whatLearned: "SUMIF FUNCTION- I learnt that in Microsoft Excel, the SUMIF function is used to sum the values in a range that meet the criteria that you specify."
  },
  {
    timestamp: "05/06/2026 17:02:36",
    sessionType: "Tech",
    duration: "1hr 30mins",
    topicCovered: "DATA EXPLORATION- SUMIFS",
    status: "Completed",
    whatLearned: "SUMIFS- SUMIFS function is a premade function in Excel, which calculates the sum of a range based on one or more true or false condition."
  },
  {
    timestamp: "05/06/2026 17:15:59",
    sessionType: "Chess",
    duration: "1hr30min",
    topicCovered: "Pin, Skewer, Sacrifice",
    status: "Completed",
    whatLearned: "Pins is an attack on a chess piece that forces it to remain there. And Skewer on the other hand is an attack on a piece of a higher value that forces it to move away in other to get advantage,. Sacrifice involves giving out one of the chess piece in other t gain a more superior advantage e.g winning a higher piece or checkmate."
  },
  {
    timestamp: "05/06/2026 17:29:05",
    sessionType: "Chess",
    duration: "1hr 30mins",
    topicCovered: "Introduction to Tactical Ideas in Chess",
    status: "Incomplete",
    whatLearned: "Win a piece and draw,  Foot race, An agressive king, Vulnerable Piece, King Power,King Power,Royal invasion. Overextended Piece get in trouble, Salad Time, FRONT AND CENTRE\nKNIGHT MARE, ROOKEY LOOKEY ETC"
  },
  {
    timestamp: "09/06/2026 06:36:01",
    sessionType: "Tech",
    duration: "80mins",
    topicCovered: "Math & Trig & Some Statistical Functions (sub topic-Averaif)",
    status: "Incomplete",
    whatLearned: "The use the Averageif function"
  },
  {
    timestamp: "15/06/2026 08:06:34",
    sessionType: "Chess",
    duration: "Play on chess.com",
    topicCovered: "Playing play with developing ideas",
    status: "Completed",
    whatLearned: "Learnt to not allow my opp"
  },
  {
    timestamp: "15/06/2026 08:11:19",
    sessionType: "Chess",
    duration: "2hrs",
    topicCovered: "Practical Play with Developing Ideas",
    status: "Completed",
    whatLearned: "I learnt not to allow opponents pieces build around my home."
  },
  {
    timestamp: "16/06/2026 08:30:46",
    sessionType: "Tech",
    duration: "2hrs",
    topicCovered: "COUNT, COUNTIF & COUNTIFS Functions.",
    status: "Completed",
    whatLearned: "How this functions work and practiced how to use them"
  },
  {
    timestamp: "17/06/2026 06:53:22",
    sessionType: "Tech",
    duration: "90mins",
    topicCovered: "COUNTA & COUNTBLANK (FUNCTIONS & FORMULAS)",
    status: "Completed",
    whatLearned: "Learnt the COUNTA & COUNTBLANK functions and practiced how to use it."
  },
  {
    timestamp: "17/06/2026 07:06:23",
    sessionType: "Chess",
    duration: "120mins",
    topicCovered: "FOOL'S MATE & BACK MATE (CHECKMATE)",
    status: "Completed",
    whatLearned: "Learnt ways to checkmate the king using the fool's mate and backrank mate tactics"
  },
  {
    timestamp: "18/06/2026 18:22:22",
    sessionType: "Chess",
    duration: "130mins",
    topicCovered: "Played live game on Liches",
    status: "Completed",
    whatLearned: "Practiced playing an opponent on Lichess and  learnt that one mistake in chess can cost me the game."
  },
  {
    timestamp: "23/06/2026 13:46:47",
    sessionType: "Tech",
    duration: "1hr 30mins",
    topicCovered: "Revised the IF function",
    status: "Completed",
    whatLearned: "Mr.Jadons explained the IF function further for a better understanding"
  },
  {
    timestamp: "23/06/2026 20:18:24",
    sessionType: "Tech",
    duration: "1hr 30mins",
    topicCovered: "Continued IF Function",
    status: "Completed",
    whatLearned: "I learnt that the Major reason we use the IF function is to categorize."
  },
  {
    timestamp: "23/06/2026 20:25:47",
    sessionType: "Chess",
    duration: "1hr 3mins",
    topicCovered: "Tactics Continued",
    status: "Incomplete",
    whatLearned: "I learnt that learning tactics on the board can be easier than implementing it in life. but overtime consistent practice, can help both synchronize."
  },
  {
    timestamp: "24/06/2026 18:46:11",
    sessionType: "Tech",
    duration: "90mins",
    topicCovered: "IFS, COUNTIFS, AND",
    status: "Completed",
    whatLearned: "The Use of this Functions to analyse Data"
  },
  {
    timestamp: "25/06/2026 17:18:39",
    sessionType: "Chess",
    duration: "75mins",
    topicCovered: "Chess.com   practice",
    status: "Completed",
    whatLearned: "Practiced playing on chess.com"
  },
  {
    timestamp: "01/07/2026 12:47:23",
    sessionType: "Tech",
    duration: "1hr",
    topicCovered: "Lookup & Reference Function",
    status: "Incomplete",
    whatLearned: "I practiced the use of OR & AND function"
  },
  {
    timestamp: "01/07/2026 12:53:20",
    sessionType: "Tech",
    duration: "150mins",
    topicCovered: "Functions & Formula (Vlookup)",
    status: "Completed",
    whatLearned: "Practiced the use of Vlookup function"
  },
  {
    timestamp: "08/07/2026 00:01:44",
    sessionType: "Chess",
    duration: "2hrs",
    topicCovered: "Tactics",
    status: "Incomplete",
    whatLearned: "I learnt how to use some tactics to win a game"
  },
  {
    timestamp: "08/07/2026 00:03:53",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "Lookup and reference function",
    status: "Incomplete",
    whatLearned: "Revised the use of VLOOKUP & XLOOKUP"
  },
  {
    timestamp: "08/07/2026 00:05:57",
    sessionType: "Chess",
    duration: "120mins",
    topicCovered: "Tactics",
    status: "Incomplete",
    whatLearned: "Continued learning how to use tactics to win a game"
  },
  {
    timestamp: "16/07/2026 18:32:30",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "Github Complete Setup",
    status: "Completed",
    whatLearned: "I was able to complete the setup of my Github account"
  },
  {
    timestamp: "16/07/2026 18:35:57",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "INDEX, MATCH, INDEX+MATCH",
    status: "Completed",
    whatLearned: "Learnt how to use the index, Match & Index+Match Functions"
  },
  {
    timestamp: "16/07/2026 18:40:48",
    sessionType: "Chess",
    duration: "120mins",
    topicCovered: "Played Chess on lichess",
    status: "Completed",
    whatLearned: "Practiced playing with an opponent online"
  },
  {
    timestamp: "24/07/2026 12:00:09",
    sessionType: "Tech",
    duration: "2hrs",
    topicCovered: "Data cleaning Exercise",
    status: "Completed",
    whatLearned: "We practiced cleaning data like Analysts"
  },
  {
    timestamp: "24/07/2026 12:04:00",
    sessionType: "Tech",
    duration: "90minutes",
    topicCovered: "Data cleaning 2",
    status: "Completed",
    whatLearned: "Continued data cleaning"
  },
  {
    timestamp: "24/07/2026 12:16:59",
    sessionType: "Chess",
    duration: "90mins",
    topicCovered: "Played chess on lichess and my old games where reviewed",
    status: "Completed",
    whatLearned: "I learnt to think critically before I play"
  },
  {
    timestamp: "28/07/2026 10:25:33",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "Conditional Formatting",
    status: "Incomplete",
    whatLearned: "I learnt that Conditional formatting is used to highlight and spot trends."
  },
  {
    timestamp: "09/08/2026 16:31:10",
    sessionType: "Chess",
    duration: "120min",
    topicCovered: "Chess practice on Lichess",
    status: "Completed",
    whatLearned: "To Always look out for checks, captures and threats"
  },
  {
    timestamp: "13/08/2026 17:56:24",
    sessionType: "Chess",
    duration: "120mins",
    topicCovered: "Making the most out of your pieces",
    status: "Incomplete",
    whatLearned: "Learnt how to create connected pawn structures"
  },
  {
    timestamp: "15/08/2026 14:05:56",
    sessionType: "Tech",
    duration: "120mins",
    topicCovered: "Data Validation",
    status: "Completed",
    whatLearned: "How to validate data in Data Analytics"
  },
  {
    timestamp: "22/08/2026 21:35:27",
    sessionType: "Chess",
    duration: "120mins",
    topicCovered: "Reading the board",
    status: "Incomplete",
    whatLearned: "Learning to understand the middle game"
  }
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
    logs: eloraLogs,
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
    logs: praiseLogs,
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
