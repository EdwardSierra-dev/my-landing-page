import React from 'react';
import '../styles/Header.css'

function Header () {
  return(
    <header className='header'>
      <nav className='navbar'>
        <ul className='option-list'>
          <li className='navbar-element'><a href=''>Sobre mi</a></li>
          <li className='navbar-element'><a href=''>Experiencia</a></li>
          <li className='navbar-element'><a href=''>Proyectos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;