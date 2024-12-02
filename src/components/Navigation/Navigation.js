import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navigation.scss';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const navLinks = document.querySelectorAll("nav ul li a");
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={isMenuOpen ? 'open' : ''}>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <li onClick={toggleMenu}>
          <a href="#home">Accueil</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#about">À propos</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#skills">Mes compétences</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#projects">Projets</a>
        </li>
        <li onClick={toggleMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
