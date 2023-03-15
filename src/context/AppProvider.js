import AppContext from './AppContext';
import React from 'react';
import PropTypes from 'prop-types';
import UseLogin from '../hooks/UseLogin';

const AppProvider = ({ children }) => {

  const value = UseLogin();

  return (
    <AppContext.Provider value={ value } >
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.shape({
    isLogged: PropTypes.bool,
  }),
};

export default AppProvider;
