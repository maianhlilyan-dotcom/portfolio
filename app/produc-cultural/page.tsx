import Image from "next/image";
import type { Metadata } from "next";
import { ContactFooter } from "@/components/contact-footer";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Cultural Honey Giftset",
  description: "A sustainable gift collection celebrating H’Mông beeswax batik and Vietnamese cultural craft.",
};

export default function Page() {
  const visuals = ["creative-01.png", "creative-03.png", "creative-05.png", "creative-08.png", "creative-10.png"];

  return (
    <main className="detail-page cultural-page">
      <SiteNav />
      <section className="detail-hero cultural-hero">
        <p className="detail-kicker">PACKAGING DESIGN / EVSD 2025</p>
        <h1>Cultural<br />Honey<br />Giftset</h1>
        <div className="detail-meta"><span>Lead Designer</span><span>Aug 2025 – Sep 2025</span><span>Packaging Design</span></div>
      </section>
      <section className="cultural-introduction">
        <p className="case-index">INTRODUCTION</p>
        <h2>The intersection of cultural heritage and environmental consciousness presents a compelling opportunity for modern product design.</h2>
        <div className="cultural-copy">
          <p>Our goal was to design a gift solution that honored cultural artistry while championing sustainability. Crafted predominantly from recycled resources, the Cultural Honey Gift Set redefines luxury as a blend of heritage, artistry and environmental responsibility.</p>
          <p>Every material was selected to tell a story of sustainability, reuse and Vietnamese cultural heritage. Upcycled denim is combined with details inspired by the H’Mông people’s traditional beeswax batik and indigo dyeing techniques.</p>
        </div>
      </section>
      <section className="cultural-grid">
        {visuals.map((src, index) => (
          <figure key={src} className={`cultural-image cultural-image-${index + 1}`}>
            <Image src={`/images/${src}`} alt="Cultural Honey Giftset visual study" fill sizes="(max-width: 767px) 100vw, 50vw" />
          </figure>
        ))}
      </section>
      <section className="cultural-story">
        <p className="case-index">PURPOSE / DEFINE</p>
        <h2>Beeswax Batik Brocade:<br />Where Nature Weaves Cultural Identity</h2>
        <div>
          <p>Beeswax becomes the pen, while linen serves as the canvas, allowing H’Mông women to create intricate patterns by hand. Indigo leaves gathered from the mountains produce their deep blue dye, preserving the spirit of the highlands within every thread.</p>
          <p>This natural cycle—bees producing honey and people transforming beeswax into art—has shaped a unique cultural tradition. Every piece of brocade embodies ancestry, spiritual belief and a way of life intertwined with nature.</p>
        </div>
      </section>
      <section className="cultural-materials">
        <p className="case-index">MATERIAL SELECTION / TIMELESS VALUE</p>
        <h2>Designed not only to be enjoyed, but to preserve and share enduring cultural values.</h2>
        <div>
          <p>The packaging is handcrafted from traditional dó paper and features H’Mông indigo-dyed beeswax batik patterns. Repeating geometric motifs symbolize harmony, community and the rhythm of nature.</p>
          <p>Beyond its aesthetic role, the gift box can be reused as a spacious storage bag. The denim pouch has a detachable strap, adapting from handbag to compact organizer.</p>
          <p>A metal charm inspired by H’Mông brocade incorporates the artistry of Huế Pháp Lam enamelwork, bringing two distinct regional cultural heritages together.</p>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
