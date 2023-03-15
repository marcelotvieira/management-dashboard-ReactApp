import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import ProjectsContext from '../context/ProjectsContext';
import ProjectCard from './ProjectCard';

// import { Container } from './styles';

function Projects() {

  const { user } = useContext(AppContext);
  const { userProjects, getUserProjects } = useContext(ProjectsContext);


  useEffect(() => {
    getUserProjects(user);
  }, [userProjects]);

  return <div className="projects">
    { userProjects.length < 1 && <h3> Você não possui nenhum projeto.</h3>}

    <div className="projects-container">
      <button className="addProject-button card">
        <i className="fa-solid fa-plus fa-5x" />
      </button>
      { userProjects.length > 0 && userProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>;
}

export default Projects;