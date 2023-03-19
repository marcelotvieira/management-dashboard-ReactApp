import React, { useContext } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Clients from '../components/Clients';
import ClientGraphics from '../components/ClientGraphics';
import ClientsContext from '../context/ClientsContext';
import ClientFormModal from '../components/ClientFormModal';

function ClientPage() {

  const { user } = useContext(AppContext);
  const { isActiveForm } = useContext(ClientsContext);
  
  if (!user) return <Redirect to="/" />;
  return (
    <div className="box">
      <Header />
      <div className="projects-page page">
        {isActiveForm && <ClientFormModal />}

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