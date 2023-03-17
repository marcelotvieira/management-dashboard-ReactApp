import React, { useContext } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';


function DataPage() {

  const { user } = useContext(AppContext);
  
  if (!user) return <Redirect to="/" />;
  return <div>
    <Header />
  </div>;
}

export default DataPage;