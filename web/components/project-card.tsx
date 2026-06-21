import type { Project } from "@/lib/projects";
import { ArrowUpRightIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const isActive = project.status === "active";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          {isActive && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Aktif
            </span>
          )}
        </div>
        <ArrowUpRightIcon
          width={16}
          height={16}
          className="shrink-0 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      <p className="mt-1 font-mono text-xs text-faint">{project.domain}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}
