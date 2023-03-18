import React, { useContext } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';


function DataPage() {

  const { user } = useContext(AppContext);
  
  if (!user) return <Redirect to="/" />;
  return (
    <div className="box">
      <Header />
      <div className="projects-page page">
        <h3>In progress</h3>
      </div>
    </div>
  );
}

export default DataPage;