import {
  Code2,
  Brain,
  Rocket,
  Palette,
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  School,
  Banknote,
  Workflow,
  FileQuestion,
  Handshake,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";

export interface FloatingElement {
  id: number;
  icon: React.ComponentType<any>;
  x: number;
  y: number;
  delay: number;
}

export interface Interest {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  description: string;
  gradient: string;
}

export const floatingElements: FloatingElement[] = [
  { id: 1, icon: Code2, x: 10, y: 20, delay: 0 },
  { id: 2, icon: Code2, x: 85, y: 15, delay: 1 },
  { id: 3, icon: Brain, x: 25, y: 80, delay: 2 },
  { id: 4, icon: Rocket, x: 75, y: 70, delay: 1.5 },
  { id: 5, icon: Palette, x: 45, y: 40, delay: 0.5 },
  { id: 6, icon: Shield, x: 60, y: 90, delay: 2.5 },
];

export const interests: Interest[] = [
  {
    id: "coding",
    label: "Coding Courses",
    icon: Code2,
    color: "var(--success)",
  },
  {
    id: "consulting",
    label: "Tech Consulting",
    icon: Shield,
    color: "var(--info)",
  },
  {
    id: "sponsor",
    label: "Sponsorship",
    icon: School,
    color: "var(--brand-primary)",
  },
  {
    id: "inquiry",
    label: "Inquiry",
    icon: FileQuestion,
    color: "var(--brand-primary-dark)",
  },
  {
    id: "partnership",
    label: "Partnership",
    icon: Handshake,
    color: "var(--warning)",
  },
  { id: "donate", label: "Donation", icon: Banknote, color: "var(--success)" },
  {
    id: "volunteer",
    label: "Volunteer",
    icon: Workflow,
    color: "var(--warning)",
  },
  { id: "design", label: "UI/UX Design", icon: Palette, color: "var(--error)" },
  {
    id: "other",
    label: "Other Collaboration",
    icon: Rocket,
    color: "var(--brand-primary-light)",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "info@chessncode.com",
    description: "Our main communication channel",
    gradient: "from-blue-500 to-cyan-500",
    url: "mailto:info@chessncode.com",
    external: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@chessncode",
    description: "Follow for updates & behind-the-scenes",
    gradient: "from-purple-500 to-pink-500",
    url: "https://instagram.com/chessncode",
    external: true,
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    content: "@chessncode",
    description: "Join the conversation",
    gradient: "from-black to-gray-700",
    url: "https://twitter.com/TheChessNcode",
    external: true,
  },
  {
    icon: Youtube,
    title: "YouTube",
    content: "Chess & Code",
    description: "Tutorials & content",
    gradient: "from-red-500 to-red-700",
    url: "https://youtube.com/@chessncode",
    external: true,
  },
];
