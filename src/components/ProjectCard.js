import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

function ProjectCard({ project }) {

  const initialDate = new Date(project.initialDate);
  const endDate = new Date(project.endDate);

  const parsedInitialDate = `${initialDate.getDate()} / ${initialDate.getMonth()} / ${initialDate.getFullYear()}`;

  const parsedEndDate = `${endDate.getDate()} / ${endDate.getMonth()} / ${endDate.getFullYear()}`;

  return (
    <div className="project card" >
      <div className="card-header">
        <span>{ project.category }</span>
        <h4>{ project.name}</h4>
        <p className="client-name card-label">
          {project.client.name} <span>({project.client.companyName})</span>
        </p>
      </div>


      <div className="dates-box">
        <p className="project-dates card-label">
            Data de início: <span>{parsedInitialDate}</span>
        </p>
        <p className="project-dates card-label">
            Data de entrega: <span>{parsedEndDate}</span>
        </p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape(),
  name: PropTypes.string,
};

export default ProjectCard;