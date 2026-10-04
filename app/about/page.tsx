import type { Metadata } from "next";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteNav />
      <section className="about-hero">
        <p className="about-label">ABOUT / INSIGHT</p>
        <h1>Insight</h1>
        <div className="about-manifesto">
          <p>Design has always more than a passion for me,</p>
          <p>it is an essential of how I understand the world</p>
          <p>My work emphasized human-centered design,</p>
          <p>grounded in research and cultural sensitivity,</p>
          <p>blending heritage with technology in order to</p>
          <p>craft meaningful &amp; resonant experiences.</p>
        </div>
      </section>
      <section className="about-process">
        <div><h2>Every project starts with curiosity</h2><p>Mai works begin with research, strategy &amp; creativity to uncover insights, then iterate through exploration &amp; collaboration to create experiences that are purposeful</p></div>
        <article><span>01</span><h3>DEFINE &amp; IDEATE</h3><p>From underserved needs to solution opportunities.</p></article>
        <article><span>02</span><h3>DESIGN &amp; TEST</h3><p>Transform an idea into a real product</p></article>
        <article><span>03</span><h3>DELIVER &amp; ITERATE</h3><p>Incorporate feedback for continuous improvement</p></article>
      </section>
      <ContactFooter />
    </main>
  );
}
