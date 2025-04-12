import React from 'react';
import '../styles/Footer.css';

function Footer (){
  return (
    <footer>
      <div className='footer-container'>
        <div className='links'>
          <ul>
            <li><a className='links-footer' href='' target=''>Sobre mi</a></li>
            <li><a className='links-footer' href='' target=''>Proyectos</a></li>
            <li><a className='links-footer' href='' target=''>Contacto</a></li>
          </ul>
        </div>
        <div className='rights'>
          <p>© 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;