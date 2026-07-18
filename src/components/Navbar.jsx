import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      let current = '';
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse && navCollapse.classList.contains('show')) {
        navCollapse.classList.remove('show');
      }
    }
  };

  const navLinks = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

  return (
    <nav id="navbar" className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>MN.</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon nav-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-1">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link"
                  href={`#${link}`}
                  onClick={(e) => handleNavClick(e, `#${link}`)}
                  style={{ color: activeSection === link ? '#f0f0ff' : '' }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
