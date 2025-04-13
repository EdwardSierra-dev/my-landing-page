import React from 'react';
import '../styles/Main.css';
import { FaUserAlt, FaBriefcase } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import Foto from '../images/ghibli-style-photo.jpg';
import WorkExperienceCard from './WorkExperienceCard';
import ProjectCard from './ProjectCard';
import Soliwel from '../images/soliwel-foto.png';
import Alubaq from '../images/alubaq-foto.png';

function Main () {
  return (
    <main className='main-container'>
      <section id='about-me-section' className='about-container'>
        <div className='title-section'>
          <span className='logo-section'>
            <FaUserAlt />
          </span>
          <h1>Sobre mi</h1>
        </div>
        <div className='about-me-container' id='about-me'>
          <div className='image-container'>
            <img src={Foto} className='profile-img' alt='imagen de perfil edward sierra'/>
          </div>
          <div className='text-about-me'>
            <p className='paragraph-about-me'>
              Hola, soy Edward Sierra, <strong>Desarrollador Web Junior y Analista QA</strong>, con más de 6 años de
              experiencia en infraestructura y mesa de ayuda, y más de 3 años como analista de pruebas.
            </p>
            <p className='paragraph-about-me'>
              Uno de mis logros más significativos fue <strong>la implentación de mi primera página web</strong> para la empresa de 
              Alumbrado Público de mi ciudad. La desarrollé utilizando <strong>Dreamweaver, VanillaJS</strong> y la publiqué en un servidor
              <strong> Apache</strong> en Linux. ¡Una experiencia que marcó mi camino como desarrollador web! 🥹
            </p>
            <p className='paragraph-about-me'>
              En el área de QA, he trabajado como outsourcing, ejecutando pruebas funcionales y no funcionales en empresas del sector 
              retail y bancario, aportando a la calidad y mejora continua de sus sistemas.
            </p>
          </div>
        </div>
      </section>
      <section id='work-experience-section'>
      <div className='title-section'>
          <span className='logo-section'>
            <FaBriefcase />
          </span>
          <h1>Experiencia laboral</h1>
      </div>
        <div className='work-experience-container'>
          <WorkExperienceCard 
            position={'Analista QA'}
            companyName={'Rhiscom'}
            dateWorkExperience={'2024 - Actualmente'}
            descriptionWorkExperience={
              'Soy Analista de Pruebas en modalidad outsourcing para una importante empresa del sector retail en Colombia. Ejecuto pruebas manuales y automatizadas, aplicando diversas técnicas de diseño de casos de prueba como valores límite, tablas de decisión, entre otras. He implementado y ejecutado más de 200 casos de prueba, asegurando una alta cobertura y calidad.'
            }
          />
          <WorkExperienceCard
            position={'Analista QA'}
            companyName={'Choucair Testing'}
            dateWorkExperience={'2022 - 2024'}
            descriptionWorkExperience={
              'Realicé pruebas manuales validando funcionalidades críticas y automatizando el MVP utilizando Selenium y Java, aplicando el patrón de diseño Screenplay, para una empresa del sector financiero y bancario en Brasil.'
            }
          />
          <WorkExperienceCard
            position={'Ingeniero de Sistemas'}
            companyName={'Alubaq'}
            dateWorkExperience={'2017 - 2022'}
            descriptionWorkExperience={
              'Encargado de instalar, mantener y optimizar la infraestructura TI, asegurando que todo funcione de forma estable y segura. Implementé soluciones como Windows Server 2016, FreeNAS y Pfsense, además del desarrollo de la página web. Siempre en busca de mejorar la seguridad, rendimiento y disponibilidad de los sistemas.'
            }
          />
        </div>
      </section>
      <section id='projects-section'>
      <div className='title-section'>
          <span className='logo-section'>
            <PiBracketsCurly />
          </span>
          <h1>Proyectos</h1>
      </div>
        <ProjectCard 
          projectTitle={'CV / Landing Page Edward Sierra'}
          projectDescription={'Curriculum de Edward Sierra'}
          toolOne={'React'}
          toolTwo={'Vite'}
          toolThree={'JS'}
        />
        <ProjectCard 
          projectTitle={'Web de Rick y Morty'}
          projectDescription={'Clon de la web/api de rick y morty usando datos estáticos almacenados en un JSON de manera local'}
          toolOne={'React'}
          toolTwo={'Vite'}
          toolThree={'JSON'}
        />
        <ProjectCard
          projectPhoto={Soliwel} 
          projectTitle={'Página web Soliwe LTDA'}
          projectDescription={'Página web con la información importante de la empresa...'}
          toolOne={'WordPress'}
        />
        <ProjectCard 
          projectTitle={'BioExtint'}
          projectDescription={'Página web con la información importante de la empresa...'}
          toolOne={'WordPress'}
        />
        <ProjectCard
          projectPhoto={Alubaq}  
          projectTitle={'Alubaq'}
          projectDescription={'Empresa de alumbrado público de Barranquilla'}
          toolOne={'DreamWeaver'}
          toolTwo={'Vanilla JS'}
          toolThree={'Apache2'}
        />
      </section>
    </main>
  );
}

export default Main;