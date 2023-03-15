import ProjectsContext from './ProjectsContext';
import React from 'react';
import PropTypes from 'prop-types';
import UseProject from '../hooks/UseProject';

const ProjectsProvider = ({ children }) => {

  const value = UseProject();
    
  return (
    <ProjectsContext.Provider value={ value }>
      { children }
    </ProjectsContext.Provider>
  );
};

ProjectsProvider.propTypes = {
  children: PropTypes.shape(),
};

export default ProjectsProvider;