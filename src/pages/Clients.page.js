import React, { useContext } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Clients from '../components/Clients';
import ClientGraphics from '../components/ClientGraphics';

function ClientPage() {

  const { user } = useContext(AppContext);
  
  if (!user) return <Redirect to="/" />;
  return (
    <div className="box">
      <Header />
      <div className="projects-page page">
        <div className="flex not-aligned">
          <div>
            <h2 className="title">Clientes</h2>
            <Clients />
          </div>
          
          <div>
            <h2 className="title">Dados</h2>
            <ClientGraphics />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClientPage;