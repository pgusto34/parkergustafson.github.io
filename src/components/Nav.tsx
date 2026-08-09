import { useState } from "react";

interface NavProps {
  pathname: string;
}

interface NavLink {
  href: string;
  label: string;
}

const primaryLinks: NavLink[] = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/research/", label: "Research" },
  { href: "/blog/", label: "Writing" },
  { href: "/resume/", label: "Résumé" },
];

const secondaryLinks: NavLink[] = [
  { href: "/travel/", label: "Travel" },
  { href: "/books/", label: "Books" },
  { href: "/movies/", label: "Movies" },
];

export default function Nav({ pathname }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href);

  const renderLink = (link: NavLink) => (
    <a
      key={link.href}
      href={link.href}
      aria-current={isActive(link.href) ? "page" : undefined}
      onClick={() => setIsOpen(false)}
    >
      {link.label}
    </a>
  );

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="wordmark" href="/home/" aria-label="Parker Gustafson, portfolio home">
          <span className="wordmark-mark" aria-hidden="true">PG</span>
          <span>Parker Gustafson</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryLinks.map(renderLink)}
        </nav>
        <div className={`mobile-nav${isOpen ? " is-open" : ""}`}>
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
          <nav id="mobile-navigation" className="mobile-nav-panel" aria-label="Mobile navigation" hidden={!isOpen}>
            {primaryLinks.map(renderLink)}
            <div className="mobile-secondary">{secondaryLinks.map(renderLink)}</div>
          </nav>
        </div>
      </div>
    </header>
  );
}
