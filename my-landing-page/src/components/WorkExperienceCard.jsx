import React from 'react';
import '../styles/WorkExperienceCard.css';

function WorkExperienceCard (props) {
  return (
    <div className='work-experience-card'>
      <div className='company-info'>
        <div className='position-company'>
          <h3>{props.position}</h3>
        </div>
        <div className='name-company'>
        <h4>{props.companyName}</h4>
        </div>
        <div className='date-work-experience'>
          <p>{props.dateWorkExperience}</p>
        </div>
      </div>
      <div className='description-work-experience'>
      <p>{props.descriptionWorkExperience}</p>
      </div>
    </div>
  );
}

export default WorkExperienceCard;