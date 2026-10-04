import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link className="project-media" href={project.legacyPath}>
        <Image
          className="project-image project-image-default"
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          loading={project.slug === "dynatax" ? "eager" : "lazy"}
          sizes="(max-width: 767px) 360px, (max-width: 1199px) 46vw, 652px"
        />
        <Image
          className="project-image project-image-hover"
          src={project.hoverImage}
          alt=""
          fill
          sizes="(max-width: 767px) 360px, (max-width: 1199px) 46vw, 652px"
        />
        <span className="project-open" aria-hidden="true">OPEN ↗</span>
      </Link>
      <div className="project-meta">
        <h3><Link href={project.legacyPath}>{project.title}</Link></h3>
        <p>{project.discipline} <span>•</span> {project.platform} <span>•</span> {project.year}</p>
      </div>
    </article>
  );
}
