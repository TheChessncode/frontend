import { Student } from "@/constants/studentsData";
import { CheckCircle2, GraduationCap, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function GraduateLinks({ student }: { student: Student }) {
  const links = [
    { href: student.graduation?.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: student.graduation?.github, label: "GitHub", Icon: Github },
  ].filter((link) => link.href);

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-5">
      {links.map(({ href, label, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          aria-label={`${student.name} on ${label} (opens in a new tab)`}
          className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)] transition-colors">
          <Icon aria-hidden="true" className="h-5 w-5" />{label}<ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export default function GraduateSummary({ student, detailed = false }: { student: Student; detailed?: boolean }) {
  if (!student.graduation) return null;
  const phases = [...student.curriculum, ...(student.dataAnalysisCurriculum || [])];
  const completed = phases.filter((phase) => phase.status === "completed").length;
  const certificates = student.certifications.filter((certificate) => certificate.status === "achieved").length;

  return (
    <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] p-6 md:p-8 shadow-lg">
      <div className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-white">
        <GraduationCap aria-hidden="true" className="h-5 w-5" /> ChessNcode Graduate
      </div>
      <h2 className="mt-5 text-2xl md:text-3xl font-bold text-[var(--text-primary)]">A journey worth celebrating</h2>
      {student.graduation.date && <p className="mt-2 font-semibold text-[var(--brand-primary)]">Graduated {student.graduation.date}</p>}
      <p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{student.graduation.summary}</p>
      <dl className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[{ value: `${Math.round(completed / phases.length * 100)}%`, label: "Curriculum completed" }, { value: completed, label: "Modules completed" }, { value: certificates, label: "Certificates earned" }].map(({ value, label }) => (
          <div key={label} className="rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] p-4">
            <dt className="text-xs text-[var(--text-secondary)]">{label}</dt>
            <dd className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{value}</dd>
          </div>
        ))}
      </dl>
      <GraduateLinks student={student} />
      {detailed && <div className="mt-8 border-t border-[var(--border-primary)] pt-6">
        <h3 className="text-xl font-bold text-[var(--text-primary)]">Completed curriculum</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">Explore the modules and skills covered during {student.name}’s program.</p>
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          {phases.map((phase, index) => (
            <div key={`${phase.phase}-${index}`} className="rounded-xl border border-[var(--border-primary)] bg-[var(--bg-primary)] p-5">
              <div className="flex items-start gap-3">
                <phase.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--brand-primary)]" />
                <h4 className="font-semibold text-[var(--text-primary)]">{phase.phase}</h4>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]"><CheckCircle2 aria-hidden="true" className="h-4 w-4 text-green-500" />Completed</span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {phase.skills.filter((skill) => !skill.startsWith("Mr.")).map((skill) => <li key={skill} className="rounded-lg bg-[var(--bg-tertiary)] px-2.5 py-1 text-xs text-[var(--text-secondary)]">{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
}
