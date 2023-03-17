import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ProjectGraphics from '../components/ProjectGraphics';
import ProjectFormModal from '../components/ProjectFormModal';
import ProjectPresentation from '../components/ProjectPresentation';
import Projects from '../components/Projects';
import AppContext from '../context/AppContext';
import ProjectsContext from '../context/ProjectsContext';
import Header from '../components/Header';


// import { Container } from './styles';

function Home() {

  const { user } = useContext(AppContext);

  const { isActiveForm, focusProject } = useContext(ProjectsContext);


  if (!user) return <Redirect to="/" />;
  return (
    <div className="box">
      <Header />
      <div className='homepage page'>
        {isActiveForm && <ProjectFormModal />}
        <div>
          {focusProject && <ProjectPresentation />}
          <div className="flex not-aligned">

            <div>
              <h2 className="title">Projetos</h2>
              <Projects />
            </div>

            <div>
              <h2 className="title">Dados</h2>
              <ProjectGraphics />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;