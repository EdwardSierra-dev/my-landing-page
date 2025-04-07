import React from 'react';
import '../styles/Main.css';
//import Foto from '../images/Foto_my_web.jpg';
//import Foto from '../images/img2.png';
import Foto from '../images/ghibli-style-photo.jpg'

function Main () {
  return (
    <main className='main-container'>
      <section id='about-me-section' className='about-container'>
        <span></span>
        <h1>Sobre mi</h1>
        <div className='about-me-container'>
          <div className='image-container'>
            <img src={Foto} className='profile-img' alt='imagen de perfil edward sierra' />
          </div>
          <div className='text-about-me'>
            <p>Me llamo <strong>Edward Sierra</strong> +9 años de experiencia. <strong>Desarrollador Web Junior y Analista QA</strong> Colombiano 🇨🇴</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </section>
      <section id='work-experience-section'>
        <h1>Experiencia laboral</h1>
      </section>
      <section id='projects-section'>
        <h1>Proyectos</h1>
      </section>

    </main>
  );
}

export default Main;