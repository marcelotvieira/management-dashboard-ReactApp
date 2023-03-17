import React, { useContext, useEffect, useCallback } from 'react';
import AppContext from '../context/AppContext';
import ClientsContext from '../context/ClientsContext';
import ProjectsContext from '../context/ProjectsContext';
import InputSelect from './inputSelect';
import ProjectCard from './ProjectCard';

function Projects() {

  const { user } = useContext(AppContext);
  const {
    userProjects,
    getUserProjects,
    filteredProjects,
    toggleProjectForm,
    handleChangeFilter,
    filterOptions,
    setFilteredProjects,
  } = useContext(ProjectsContext);

  const { getUserClients, userClients } = useContext(ClientsContext);

  const filterProjects = useCallback(() => {
    const filtered = userProjects.filter((project) => {
      return (
        project.status.includes(filterOptions.status) &&
        project.client.name.includes(filterOptions.client) &&
        (project.name).toLowerCase().includes((filterOptions.name).toLowerCase())
      );
    });
    setFilteredProjects(filtered);
  }, [filterOptions, userProjects]);

  useEffect(() => {
    getUserClients(user);
  }, [user]);

  useEffect(() => {
    filterProjects();
  }, [filterOptions, filterProjects, userProjects]);

  useEffect(() => {
    getUserProjects(user);
  }, [user]);

  const statusFilterOptions = [
    'Todos os Status',
    'Fechado',
    'Entregue',
    'Negociando'
  ];

  const clientFilterOptions = [
    'Todos os Clientes',
    ...userClients.map((i) => i.name)
  ];

  return (
    <div className="projects">
      {userProjects.length < 1 && <h3 className="input-success"> Você não possui nenhum projeto.</h3>}

      <div className="filter-options">
        <div className="flex">
          <InputSelect name="status" handleChange={handleChangeFilter} options={statusFilterOptions} />
          <InputSelect name="client" handleChange={handleChangeFilter} options={clientFilterOptions} />
        </div>

        <form name="name" onSubmit={(e) => {
          e.preventDefault();
          handleChangeFilter({
            target: {
              name: e.target.name,
              value: e.target[0].value,
            }
          });
        }}>
          <input />
        </form>
      </div>

      <div className="projects-container">
        <button
          type="button"
          onClick={toggleProjectForm}
          className="addProject-button card"
        >
          <i className="fa-solid fa-plus fa-5x" />
        </button>
        {filteredProjects ? filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        )) : userProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />))}
      </div>

    </div>
  );
}

export default Projects;