import React, { useContext } from 'react';
import Header from '../components/Header';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Clients from '../components/Clients';
import ClientGraphics from '../components/ClientGraphics';
import ClientsContext from '../context/ClientsContext';
import ClientFormModal from '../components/ClientFormModal';
import ClientPresentation from '../components/ClientPresentation';

function ClientPage() {

  const { user } = useContext(AppContext);
  const { isActiveForm, focusClient } = useContext(ClientsContext);
  
  if (!user) return <Redirect to="/" />;
  return (
    <div className="box">
      <Header />
      <div className="projects-page page">
        {focusClient && <ClientPresentation />}

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