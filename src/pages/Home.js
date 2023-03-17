import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Home() {

  const { user, setUser, getUserData } = useContext(AppContext);

  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    if (currentUser)  setUser(currentUser);
    getUserData({}, currentUser);
  }, []);

  if (!user) return <Redirect to="/login" />;

  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;