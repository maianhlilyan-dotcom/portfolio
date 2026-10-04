import Image from "next/image";
import Link from "next/link";

export function ContactFooter() {
  return (
    <footer className="contact-footer" id="contact">
      <Image className="contact-orbit" src="/images/contact-orbit.png" alt="" fill sizes="1284px" />
      <div className="contact-grid">
        <div className="contact-socials" aria-label="Contact channels">
          <span>EMAIL</span>
          <span>LINKEDIN</span>
        </div>
        <div className="contact-copy">
          <h2>Let&apos;s Imagine<br />Together!</h2>
          <p>And be friend after :D<br />jkjk…unless?</p>
        </div>
        <div className="contact-socials contact-socials-right">
          <span>INSTAGRAM</span>
          <span>BEHANCE</span>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="#contact">CONTACT</a>
        <Link href="/about">ABOUT</Link>
        <Link href="/work">ARCHIVES</Link>
      </nav>
    </footer>
  );
}
