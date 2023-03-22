import React, { useContext } from 'react';
import ProjectsContext from '../context/ProjectsContext';

function ProjectPresentation() {

  const { focusProject, handleDeleteProject } = useContext(ProjectsContext);

  const initialDate = new Date(focusProject.initialDate);
  const endDate = new Date(focusProject.endDate);
  const parsedInitialDate = `${initialDate.getDate()}/${initialDate.getMonth()}/${initialDate.getFullYear()}`;
  const parsedEndDate = `${endDate.getDate()}/${endDate.getMonth()}/${endDate.getFullYear()}`;
  const firstContact = new Date(focusProject.client.firstContact);
  const lastContact = new Date(focusProject.client.lastContact);
  const parsedFirstContact = `${firstContact.getDate()}/${firstContact.getMonth()}/${firstContact.getFullYear()}`;
  const parsedLastContact = `${lastContact.getDate()}/${lastContact.getMonth()}/${lastContact.getFullYear()}`;

  return (
    <div className="project-presentation">
      <div className="flex spaced">
        <div className="flex">
          <h1>{focusProject.name}</h1>

          <button
            type="button"
            className="button-icon">
            <i className="fa-solid fa-pencil fa-lg"  value={focusProject.id} />
          </button>

          <button
            onClick={() => handleDeleteProject(focusProject.id)}
            type="button"
            value={focusProject.id}
            className="button-icon">
            <i className="fa-solid fa-trash fa-lg" value={focusProject.id} />
          </button>

        </div>
        <div className="flex">
          {focusProject.tags.map((tag, index) => (
            <p className="presentation-tag" key={index}>{tag}</p>
          ))}
        </div>
        <span
          className={`presentation-category-card ${focusProject.category}`}
        >
          {focusProject.category}
        </span>
      </div>

      <h3>{focusProject.client.name} ( {focusProject.client.companyName} ) </h3>

      <p
        className={`presentation-status-card ${focusProject.status}`}
      >
        {focusProject.status}
      </p>

      <div className="flex spaced">
        <div>
          <p className={'presentation-date'}>Data de início:
            <span>{parsedInitialDate}</span>
          </p>
          <p className={'presentation-date'}>Data de entrega:
            <span>{parsedEndDate}</span>
          </p>
        </div>

        <div>
          <div>
            <p className="presentation-date">Primeiro contato com o cliente:
              <span>{parsedFirstContact}</span>
            </p>
            <p className="presentation-date">Último contato com o cliente:
              <span>{parsedLastContact}</span>
            </p>
          </div>
        </div>

        <div>
          <p className="presentation-project-value">
            {focusProject.value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </p>
        </div>
      </div>


    </div>
  );
}

export default ProjectPresentation;