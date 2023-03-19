import React, { useContext, useEffect, useCallback, useMemo } from 'react';
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
    const filtered = userProjects.filter(({ status, client, name }) => {
      return (
        status.includes(filterOptions.status) &&
        client.name.includes(filterOptions.client) &&
        name.toLowerCase().includes(filterOptions.name.toLowerCase())
      );
    });
    setFilteredProjects(filtered);
  }, [filterOptions, userProjects, setFilteredProjects]);

  useEffect(() => {

    getUserProjects(user);
  }, [user, getUserProjects]);

  useEffect(() => {
    getUserClients(user);
  }, [getUserClients, user]);

  useEffect(() => {
    filterProjects();
  }, [filterOptions, filterProjects]);

  const statusFilterOptions = useMemo(
    () => ['Todos os Status', 'Fechado', 'Entregue', 'Negociando'],
    []
  );
  const clientFilterOptions = useMemo(
    () => ['Todos os Clientes', ...userClients.map(({ name }) => name)],
    [userClients]
  );

  return (
    <div className="projects">
      {userProjects.length < 1 && (
        <h3 className="input-success">Você não possui nenhum projeto.</h3>
      )}

      <div className="filter-options">
        <div className="flex">
          <InputSelect
            name="status"
            handleChange={handleChangeFilter}
            options={statusFilterOptions}
          />
          <InputSelect
            name="client"
            handleChange={handleChangeFilter}
            options={clientFilterOptions}
          />
        </div>

        <form
          name="name"
          onSubmit={(e) => {
            e.preventDefault();
            handleChangeFilter({
              target: {
                name: e.target.name,
                value: e.target[0].value,
              },
            });
          }}
        >
          <input placeholder="Filtrar por nome" />
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
        {(filteredProjects || userProjects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
