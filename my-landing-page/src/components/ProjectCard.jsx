import React from 'react';
import '../styles/ProjectCard.css';

function ProjectCard () {
  return (
    <div className='project-card-container'>
      <div className='project-image-container'>
        <img src="" alt="" className='image-project'/>
      </div>
      <div className='project-info-container'>
        <h3 className='project-title'>Project Title</h3>
        <p className='project-description'>Project description goes here. This is a brief summary of the project.</p>
        <div className='project-technologies'>
          <span className='technology'>React</span>
          <span className='technology'>JavaScript</span>
          <span className='technology'>CSS</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;