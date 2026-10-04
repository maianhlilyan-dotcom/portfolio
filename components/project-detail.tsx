import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";
import type { Project } from "@/lib/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="detail-page" style={{ "--project-accent": project.accent } as CSSProperties}>
      <SiteNav />
      <section className="detail-hero">
        <p className="detail-kicker">{project.discipline.toUpperCase()} / {project.year}</p>
        <h1>{project.title}</h1>
        <div className="detail-meta">
          <span>{project.discipline}</span><span>{project.platform}</span><span>{project.year}</span>
        </div>
      </section>
      <section className="detail-artwork">
        <Image src={project.image} alt={`${project.title} presentation`} fill priority sizes="100vw" />
      </section>
      <section className="case-overview" aria-labelledby="overview-heading">
        <p className="case-index">OVERVIEW</p>
        <h2 id="overview-heading">{project.overview}</h2>
        <dl className="case-facts">
          <div><dt>TIMELINE</dt><dd>{project.timeline}</dd></div>
          <div><dt>ROLE</dt><dd>{project.role}</dd></div>
          <div><dt>CATEGORY</dt><dd>{project.category}</dd></div>
          <div><dt>DISCIPLINES</dt><dd>Interaction Design<br />UX Design<br />Prototyping</dd></div>
        </dl>
      </section>
      <section className="case-narrative">
        <article>
          <p className="case-index">BACKGROUND</p>
          <h2>{project.background}</h2>
        </article>
        <article className="case-definition">
          <p className="case-index">DEFINE</p>
          <h2>{project.definition}</h2>
        </article>
        <Link href="/work">VIEW ALL WORK ↗</Link>
      </section>
      <ContactFooter />
    </main>
  );
}
