import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProjectsContext from '../context/ProjectsContext';

// import { Container } from './styles';

function ProjectCard({ project }) {

  const initialDate = new Date(project.initialDate);
  const endDate = new Date(project.endDate);

  const parsedInitialDate = `${initialDate.getDate()}/${initialDate.getMonth()}/${initialDate.getFullYear()}`;
  const parsedEndDate = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`;

  const { setFocusProject } = useContext(ProjectsContext);

  return (
    <div
      onClick={() => {
        setFocusProject(project);
      } }
      className="project card" >
      <div className="card-header">
        { project.category !== '' && <span className={`category ${project.category}`}
        >{ project.category }</span>}
        <h4>{ project.name}</h4>
        <p className="client-name card-label">
          {project.client.name} <span>({project.client.companyName})</span>
        </p>
      </div>

      <div className="card-status-box" >
        <p className={project.status}>{ project.status }</p>
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