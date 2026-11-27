import type { Student } from "@/constants/studentsData";
import { ArrowUpRight, Github } from "lucide-react";

export default function StudentProjects({ student }: { student: Student }) {
  if (!student.projects?.length) return null;

  return (
    <section
      aria-labelledby="student-projects-heading"
      className="bg-[var(--bg-secondary)] px-4 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)]">
          Project portfolio
        </p>
        <h2
          id="student-projects-heading"
          className="text-3xl font-bold text-[var(--text-primary)]"
        >
          {student.name}&rsquo;s projects
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {student.projects.map((project, index) => (
            <article
              key={project.github}
              className="group flex flex-col rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-primary)] p-6 transition-colors hover:border-[var(--brand-primary)] md:p-7"
            >
              <span aria-hidden="true" className="mb-5 text-sm font-semibold tabular-nums text-[var(--brand-primary)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold leading-snug text-[var(--text-primary)]">
                {project.name}
              </h3>
              <p className="mt-3 mb-6 leading-relaxed text-[var(--text-secondary)]">
                {project.description}
              </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub (opens in a new tab)`}
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--brand-primary)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-primary-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-primary)]"
              >
                <Github aria-hidden="true" className="h-4 w-4" />
                View on GitHub
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
