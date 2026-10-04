import { ContactFooter } from "@/components/contact-footer";
import { ProjectCard } from "@/components/project-card";
import { SiteNav } from "@/components/site-nav";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <SiteNav />
        <div className="hero-header">
          <div className="hero-wordmark" aria-label="Break Out The Square Space">
            <span className="break-out">Break Out</span>
            <span className="the-square">The Square</span>
            <span className="space">Space</span>
          </div>
          <p className="hero-intro">Mai Anh | Lilyan is a UX designer crafting creative digital experiences through curiosity and Iterate relentlessly. Explore freely to uncover unexpected solutions</p>
          <div className="design-human" aria-hidden="true"><span>Design</span><span>Human</span></div>
        </div>
        <div className="hero-preview">
          <div className="scroll-cue"><span>SEE MAI&apos;S WORS</span><span>(SCROLL)</span></div>
          <h1><span>FEATURED</span><span>WORKS</span></h1>
          <p>PRODUCT DESIGN • UX STRATEGY • BRAND IDENTITY • CREATIVE DIRECTION<br />• VISUAL STORYTELLING • HUMAN-CENTERED DESIGN</p>
        </div>
      </section>

      <section className="projects-section" id="work" aria-labelledby="work-heading">
        <h2 id="work-heading" className="sr-only">Featured work</h2>
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <div className="creative-shadow" aria-hidden="true">Creative</div>
      </section>

      <section className="process-section" id="about">
        <div className="process-copy">
          <p>Mai works begin with research, strategy &amp; creativity to uncover insights, then iterate through exploration &amp; collaboration to create experiences that are purposeful</p>
          <h2>Every project starts with curiosity</h2>
          <a href="#process-cards">Insights behind the Blueprint ↘</a>
        </div>
        <div className="process-cards" id="process-cards">
          <article><span>01</span><div><h3>DEFINE &amp; IDEATE</h3><p>From underserved needs to solution opportunities.</p></div></article>
          <article><span>02</span><div><h3>DESIGN &amp; TEST</h3><p>Transform an idea into a real product</p></div></article>
          <article><span>03</span><div><h3>DELIVER &amp; ITERATE</h3><p>Incorporate feedback for continuous improvement</p></div></article>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
