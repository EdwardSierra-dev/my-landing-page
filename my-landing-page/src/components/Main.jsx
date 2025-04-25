import React from 'react';
import '../styles/Main.css';
import { FaUserAlt, FaBriefcase } from 'react-icons/fa';
import { PiBracketsCurly } from 'react-icons/pi';
import Foto from '../images/ghibli-style-photo.jpg';
import WorkExperienceCard from './WorkExperienceCard';
import ProjectCard from './ProjectCard';
import Soliwel from '../images/soliwel-foto.png';
import Alubaq from '../images/alubaq-foto.png';
import BioExtint from '../images/bioextint.png';
import BlueTrans from '../images/blue-foto.png';
import RickMorty from '../images/rick-morty.png';
import LogoReact from '../assets/icons/react_wordmark_dark.svg';
import LogoVite from '../assets/icons/vitejs.svg';
import LogoWordpress from '../assets/icons/wordpress.svg';
import LogoElementor from '../assets/icons/elementor.svg';
import LogoDreamweaver from '../assets/icons/dw.svg';
import LogoJS from '../assets/icons/javascript.svg';

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
          <h1>Proyectos Web</h1>
      </div>
        <ProjectCard
          projectPhoto={RickMorty} 
          projectTitle={'Web de Rick y Morty'}
          projectDescription={'En este proyecto utilicé datos estáticos tomados de la API de Rick y Morty y los almacené en un archivo JSON para representar personajes de la serie. Los datos fueron renderizados mediante props en componentes reutilizables, permitiendo practicar el manejo de estructuras de datos, props, y renderizado dinámico en React.'}
          toolOne={LogoReact}
          toolTwo={LogoVite}
        />
        <ProjectCard
          projectPhoto={BlueTrans} 
          projectTitle={'Página web Transportes Blue Trans S.A.S'}
          projectDescription={'Diseño e implementación de una página web corporativa utilizando WordPress con el constructor Kubio. Como parte del proyecto, desarrollé una intranet personalizada con control de acceso mediante registro de usuarios, inicio de sesión y recuperación de contraseña. Esta intranet permite a los colaboradores acceder de forma segura a toda la información relacionada con el Sistema Integrado de Gestión (SIG) de la empresa.'}
          toolOne={LogoWordpress}
          toolTwo={LogoElementor}
        />
        <ProjectCard
          projectPhoto={Soliwel} 
          projectTitle={'Página web Soliwel LTDA'}
          projectDescription={'Finalicé la implementación de la página web de la organización y optimicé el uso de la base de datos, permitiendo la actualización dinámica del contenido con los nuevos cursos y capacitaciones ofrecidos.'}
          toolOne={LogoWordpress}
          toolTwo={LogoElementor}
        />
        <ProjectCard
          projectPhoto={BioExtint} 
          projectTitle={'BioExtint'}
          projectDescription={'Se implementó la página web de la organización, integrando el portafolio de productos y servicios para mejorar la visibilidad y el alcance de la empresa.'}
          toolOne={LogoWordpress}
          toolTwo={LogoElementor}
        />
        <ProjectCard
          projectPhoto={Alubaq}  
          projectTitle={'Alubaq'}
          projectDescription={'Desarrollé y publiqué la página web corporativa de la organización, lo que contribuyó a aumentar en un 15% el índice de daños reparados en menos de 48 horas.'}
          toolOne={LogoDreamweaver}
          toolTwo={LogoJS}
        />
      </section>
      <div className='mx-32'>
        <h2 className='frase italic text-xs'>
          "Odié cada minuto del entrenamiento, pero me dije: 'No te rindas. Sufre ahora y vive el resto de tu vida como un campeón"
          </h2>
        <h3 className='author font-bold text-sm'>Muhammad Ali</h3>
      </div>
    </main>
  );
}

export default Main;