import React from 'react';
import '../styles/WorkExperienceCard.css';

function WorkExperienceCard (props) {
  return (
    <div className='work-experience-card'>
      <div className='company-info'>
        <div className='position-company'>
          {props.position}
        </div>
        <div className='name-company'>
          {props.companyName}
        </div>
        <div className='date-work-experience'>
          {props.dateWorkExperience}
        </div>
      </div>
      <div className='description-work-experience'>
        {props.descriptionWorkExperience}
      </div>
    </div>
  );
}

export default WorkExperienceCard;