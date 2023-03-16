import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import ClientsContext from '../context/ClientsContext';
import ProjectsContext from '../context/ProjectsContext';
import InputSelect from './inputSelect';
import ProjectCard from './ProjectCard';

// import { Container } from './styles';

function Projects() {

  const { user } = useContext(AppContext);
  const { userProjects, getUserProjects, toggleProjectForm } = useContext(ProjectsContext);
  const { getUserClients, userClients } = useContext(ClientsContext);


  useEffect(() => {
    getUserProjects(user);
    getUserClients(user);
  }, [userProjects]);

  const statusFilterOptions = [
    'Todos os Projetos',
    'Projetos em andamento',
    'Projetos entregues',
    'Projetos em negociação'
  ];
  

  return <div className="projects">
    { userProjects.length < 1 && <h3> Você não possui nenhum projeto.</h3>}

    <InputSelect options={statusFilterOptions} />
    <InputSelect options={userClients.map((i) => i.name)} />


    <div className="projects-container">

      <button
        type="button"
        onClick={toggleProjectForm}
        className="addProject-button card"
      >
        <i className="fa-solid fa-plus fa-5x" />
      </button>

      { userProjects.length > 0 && userProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  </div>;
}

export default Projects;