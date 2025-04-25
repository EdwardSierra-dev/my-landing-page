import React from 'react';
//import '../styles/Footer.css';

function Footer (){
  return (
    <footer className=''>
      <div className='footer-container text-center'>
        <div className='links pb-4'>
          <ul>
            <li><a className='links-footer' href='#about-me-section' target=''>Sobre mi</a></li>
            <li><a className='links-footer' href='#projects-section' target=''>Proyectos</a></li>
            <li><a className='links-footer' href='mailto:edward.sierrac@gmail.com' target=''>Contacto</a></li>
          </ul>
        </div>
        <div className='rights'>
          <p className='text-gray-600'>© 2025 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;