import React, { useContext, useEffect, useState } from 'react';
import ClientsContext from '../context/ClientsContext';
import AppContext from '../context/AppContext';
import ClientCard from './ClientCard';

// import { Container } from './styles';

function Clients() {
  const { user } = useContext(AppContext);
  const [matchClients, setMatchClients] = useState([]);
  const { getUserClients, toggleClientForm, userClients, searchValue, handleChangeFilter } = useContext(ClientsContext);


  useEffect(() => {
    getUserClients(user);
  }, [user]);

  useEffect(() => {
    if (searchValue) {
      setMatchClients(userClients.filter((client) => client.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
  }, [searchValue]);

  return (
    <div className="clients">
      <div className="filter-options">
        
        <form name="name" onSubmit={(e) => {
          e.preventDefault();
          handleChangeFilter({
            target: {
              value: e.target[0].value,
            }
          });
        }}>
          <input />
        </form>
      </div>
      <div className="clients-container">
        <button
          type="button"
          onClick={toggleClientForm}
          className="addProject-button card"
        >
          <i className="fa-solid fa-plus fa-5x" />
        </button>
        {
          !searchValue ? userClients.map((client, index) => (
            <ClientCard key={index} client={client} />
          )) : matchClients.map((client, index) => (
            <ClientCard key={index} client={client} />
          ))

        }
      </div>
    </div>
  );
}

export default Clients;