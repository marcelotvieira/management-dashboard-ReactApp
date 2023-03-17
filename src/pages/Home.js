import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ProjectGraphics from '../components/ProjectGraphics';
import ProjectFormModal from '../components/ProjectFormModal';
import ProjectPresentation from '../components/ProjectPresentation';
import Projects from '../components/Projects';
import AppContext from '../context/AppContext';
import ProjectsContext from '../context/ProjectsContext';

// import { Container } from './styles';

function Home() {

  const { user, setUser, getUserData } = useContext(AppContext);

  const { isActiveForm, focusProject } = useContext(ProjectsContext);


  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    if (currentUser) {
      setUser(currentUser);
    }
    getUserData({}, currentUser);
  }, []);

  if (!user) return <Redirect to="/login" />;
  return (
    <div className='homepage page'>
      { isActiveForm && <ProjectFormModal /> }
      <div>
        { focusProject && <ProjectPresentation /> }
        <div className="flex not-aligned">
          <Projects />
          <ProjectGraphics />
        </div>
      </div>
    </div>
  );
}

export default Home;