import React from 'react';
import ClientMonthGraphic from './Graphics/ClientMonthGraphic';



function ClientGraphics() {
  return <div className="graphics-container">
    

    <div>
      <h4 className="text-center" >Captura de Novos Clientes</h4>
      <ClientMonthGraphic />
    </div>
  </div>;
}

export default ClientGraphics;