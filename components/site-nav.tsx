import Link from "next/link";

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link className="menu-chip" href="/work" aria-label="View work">
          <span>MENU</span>
          <span aria-hidden="true">↗</span>
        </Link>
        <Link className="practice-mark" href="/">
          <span>UX &amp; CREATIVE</span>
          <span className="practice-pill">DESIGN PRACTICE</span>
        </Link>
        <nav className="desktop-links" aria-label="Primary navigation">
          <Link href="/work">WORK</Link>
          <Link href="/about">ABOUT</Link>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}
