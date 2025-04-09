import React from 'react';
import '../styles/Main.css';
//import Foto from '../images/Foto_my_web.jpg';
//import Foto from '../images/img2.png';
import Foto from '../images/ghibli-style-photo.jpg';
import WorkExperienceCard from './WorkExperienceCard';

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
            <p>
              Hola, soy Edward Sierra, <strong>desarrollador web junior y analista QA</strong>, con más de 6 años de
              experiencia en infraestructura y mesa de ayuda, y más de 3 años como analista de pruebas.
            </p>
            <p>
              Uno de mis logros más significativos fue <strong>la implentación de mi primera página web</strong> para la empresa de 
              Alumbrado Público de mi ciudad. La desarrollé utilizando <strong>Dreamweaver, VanillaJS</strong> y la publiqué en un servidor 
              <strong>Apache2</strong> en Linux. ¡Una experiencia que marcó mi camino como desarrollador web! 🥹
            </p>
            <p>
              En el área de QA, he trabajado como outsourcing, ejecutando pruebas funcionales y no funcionales en empresas del sector 
              retail y bancario, aportando a la calidad y mejora continua de sus sistemas.
            </p>
          </div>
        </div>
      </section>
      <section id='work-experience-section'>
        <h1>Experiencia laboral</h1>
        <div className='work-experience-container'>
          <WorkExperienceCard 
            position={'Analista QA'}
            companyName={'Rhiscom'}
            dateWorkExperience={'2024 - Actualidad'}
            descriptionWorkExperience={
              '... ahi miramos la parlaneta de los sistemas, y la calidad de los mismos. '
            }
          />
          <WorkExperienceCard
            position={'Analista QA'}
            companyName={'Choucair Testing'}
            dateWorkExperience={'2022 - 2024'}
            descriptionWorkExperience={
              'de aqui me sali porque no me gustaba el ambiente de trabajo, y la calidad de los sistemas. '
            }
          />
          <WorkExperienceCard
            position={'Ingeniero de Sistemas'}
            companyName={'Alubaq'}
            dateWorkExperience={'2017 - 2022'}
            descriptionWorkExperience={
              'Aqui hice de todo un poquito, domicilio de meriendas y almuerzos a la ventana al mundo '
            }
          />
        </div>
      </section>
      <section id='projects-section'>
        <h1>Proyectos</h1>
      </section>

    </main>
  );
}

export default Main;