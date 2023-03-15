import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Projects from '../components/Projects';
// import Uselogin from '../hooks/UseLogin';
import AppContext from '../context/AppContext';

// import { Container } from './styles';

function Home() {

  const { user, setUser, getUserData } = useContext(AppContext);


  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(user);
    }
    getUserData({}, user);
  });


  if (!user) return <Redirect to="/login" />;
  return <div className='homepage page'>
    <div className="project-presentation">
      <Projects />
    </div>
  </div>;
}

export default Home;