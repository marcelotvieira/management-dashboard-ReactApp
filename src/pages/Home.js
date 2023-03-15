import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

// import { Container } from './styles';

function Home() {

  const { user, setUser } = useContext(AppContext);
  

  useEffect(() => {
    const user = localStorage.getItem('user');
    console.log(user);
    if (user) {
      console.log(user);
      setUser(true);
    }
  });


  if (!user) return <Redirect to="/login" />;
  return <div>
    <h1>HOMEPAGE</h1>
  </div>;
}

export default Home;