import ClientsContext from './ClientsContext';
import PropTypes from 'prop-types';
import UseClients from '../hooks/UseClients';
import React from 'react';


const ClientsProvider = ({ children }) => {


  const value = UseClients();

  return (
    <ClientsContext.Provider value={ value }>
      { children }
    </ClientsContext.Provider>
  );
};

ClientsProvider.propTypes = {
  children: PropTypes.array,
};

export default ClientsProvider;