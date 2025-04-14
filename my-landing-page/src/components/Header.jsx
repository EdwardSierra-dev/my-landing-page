import React from 'react';
import '../styles/Header.css'

function Header () {
  return(
    <header className='header'>
      <nav className='navbar'>
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