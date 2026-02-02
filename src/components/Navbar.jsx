import { useState, useEffect } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
      setActive(sectionId);
    }
  };

  useEffect(() => {
    // Track scroll to update active link and subtle background change
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // Determine which section is in view (simple nearest-to-top heuristic)
      let current = active;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom > 80) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Close menu on Escape
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onNavKey = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="brand-link"
          >
            Sajid
          </a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'active' : ''}`} role="menubar">
          {sections.map((id) => (
            <li key={id} role="none">
              <button
                role="menuitem"
                className={`nav-btn ${active === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
                onKeyDown={(e) => onNavKey(e, id)}
                aria-current={active === id ? 'page' : undefined}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
