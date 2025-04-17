import React from 'react';
import '../styles/Header.css'
import { useState, useEffect } from 'react';

function Header () {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return(
    <header className='header'>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <ul className='option-list'>
          <li className='navbar-element'><a href='#about-me-section'>Sobre mi</a></li>
          <li className='navbar-element'><a href='#work-experience-section'>Experiencia</a></li>
          <li className='navbar-element'><a href='#projects-section'>Proyectos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;