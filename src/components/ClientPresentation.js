import React, { useContext } from 'react';
import ClientsContext from '../context/ClientsContext';

// import { Container } from './styles';

function ClientPresentation() {

  const { focusClient, handleDeleteClient } = useContext(ClientsContext);

  const firstContact = new Date(focusClient.firstContact);
  const lastContact = new Date(focusClient.lastContact);
  const parsedFirstContact = `${firstContact.getDate()}/${firstContact.getMonth()}/${firstContact.getFullYear()}`;
  const parsedLastContact = `${lastContact.getDate()}/${lastContact.getMonth()}/${lastContact.getFullYear()}`;


  return (
    <div className="project-presentation">
      <div className="flex">
        <h1>{focusClient.name}</h1>
        <div className="flex spaced">

          <div className="flex">
            <button
              type="button"
              className="button-icon">
              <i className="fa-solid fa-pencil fa-lg" />
            </button>
            <button
              onClick={() => handleDeleteClient(focusClient.id)}
              type="button"
              className="button-icon">
              <i className="fa-solid fa-trash fa-lg" />
            </button>
          </div>

          <h4>{focusClient.companyName}</h4>
        </div>
      </div>


      <div>
        <p className="text-label">E-mail: <span>{focusClient.email}</span></p>
        <p className="text-label">Contato: <span>{focusClient.contact}</span></p>
      </div>

      <div>
        <p className="presentation-date">Primeiro contato com o cliente:
          <span>{parsedFirstContact}</span>
        </p>
        <p className="presentation-date">Último contato com o cliente:
          <span>{parsedLastContact}</span>
        </p>

      </div>
    </div>
  );
}

export default ClientPresentation;