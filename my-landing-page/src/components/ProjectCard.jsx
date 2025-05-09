import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard (props) {
  return (
    <div className='project-card-container'>
      <div className='project-image-container'>
        <img src={props.projectPhoto} alt='Foto del proyecto' className='image-project'/>
      </div>
      <div className='project-info-container'>
        <h3 className='project-title'>{props.projectTitle}</h3>
        <p className='project-description'>{props.projectDescription}</p>
        <div className='project-technologies'>
          <span className='technology'><img className='tech-icon' src={props.toolOne} alt='Logo Tech' /></span>
          <span className='technology'><img className='tech-icon' src={props.toolTwo} alt='Logo Tech'/></span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;