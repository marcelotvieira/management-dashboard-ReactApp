import React from 'react';
import PropTypes from 'prop-types';


// import { Container } from './styles';

function ClientCard({ client }) {

  const firstContact = new Date(client.firstContact);
  const lastContact = new Date(client.lastContact);
  const parsedFirstContact = `${firstContact.getDate()}/${firstContact.getMonth()}/${firstContact.getFullYear()}`;
  const parsedLastContact = `${lastContact.getDate()}/${lastContact.getMonth()}/${lastContact.getFullYear()}`;

  return (
    <div className="client-card card">
        
      <div className="card-header">
        <h4>{ client.name}</h4>
        <p className="card-label" >{client.companyName}</p>
      </div>

      <div>
        <p className="card-label">Primeiro contato: <span>{parsedFirstContact}</span></p>
        <p className="card-label">Último contato: <span>{parsedLastContact}</span></p>
      </div>

    </div>
  );
}

ClientCard.propTypes = {
  client: PropTypes.shape(),
};

export default ClientCard;