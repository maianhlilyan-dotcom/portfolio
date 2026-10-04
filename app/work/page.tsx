import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "Creative Archives",
  description: "Projects, design explorations and creative wanderings by Mai Anh.",
};

const archivePieces = [
  { src: "/images/ahn.png", alt: "AHN Group digital experience", className: "archive-piece-1" },
  { src: "/images/archive-interface.png", alt: "Desktop product interface exploration", className: "archive-piece-2" },
  { src: "/images/archive-screen.png", alt: "Digital product screen exploration", className: "archive-piece-3" },
  { src: "/images/archive-mobile.png", alt: "Mobile wallet interface exploration", className: "archive-piece-4" },
  { src: "/images/archive-wallet.png", alt: "Mobile application screens", className: "archive-piece-5" },
  { src: "/images/archive-yacht.png", alt: "Luxury travel website exploration", className: "archive-piece-6" },
  { src: "/images/archive-think.png", alt: "Think therefore I am typographic study", className: "archive-piece-7" },
  { src: "/images/creative-10.png", alt: "Editorial website exploration", className: "archive-piece-8" },
  { src: "/images/creative-01.png", alt: "Editorial art direction study", className: "archive-piece-9" },
  { src: "/images/archive-editorial.jpg", alt: "Editorial photography study", className: "archive-piece-10" },
  { src: "/images/creative-03.png", alt: "Visual identity exploration", className: "archive-piece-11" },
  { src: "/images/archive-collage.png", alt: "Creative collage exploration", className: "archive-piece-12" },
  { src: "/images/creative-08.png", alt: "Interface concept exploration", className: "archive-piece-13" },
] as const;

export default function WorkPage() {
  return (
    <main className="archive-page archive-dark">
      <SiteNav />
      <section className="archive-canvas" aria-labelledby="archive-title">
        <h1 id="archive-title">My experiment space for projects, design exploration &amp; creative wanderings!</h1>
        <div className="archive-pieces">
          {archivePieces.map((piece, index) => (
            <figure className={`archive-piece ${piece.className}`} key={piece.src}>
              <Image src={piece.src} alt={piece.alt} fill loading={index < 4 ? "eager" : "lazy"} sizes="(max-width: 640px) 46vw, 32vw" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
