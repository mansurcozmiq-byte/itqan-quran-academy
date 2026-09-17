import { useState, useEffect } from "react";
import { academyImages } from "../data/images";
import { siteInfo, getWhatsAppLink, whatsappMessage } from "../data/content";
import "./Header.css";

const navLinks = [
  { href: "#home", label: "হোম" },
  { href: "#about", label: "আমাদের সম্পর্কে" },
  { href: "#programs", label: "কোর্সসমূহ" },
  { href: "#journey", label: "শেখার পথ" },
  { href: "#faq", label: "প্রশ্নোত্তর" },
  { href: "#contact", label: "যোগাযোগ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={handleNav}>
          <img src={academyImages.logo} alt="ইতকান কুরআন একাডেমি" width="48" height="48" />
          <span className="header__logo-text">ইতকান কুরআন একাডেমি</span>
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`} aria-label="মূল নেভিগেশন">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNav}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsAppLink(whatsappMessage())}
            className="btn btn-primary header__cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNav}
          >
            ভর্তির জন্য যোগাযোগ
          </a>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? "header__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
