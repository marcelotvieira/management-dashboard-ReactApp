import React from 'react';
import ClientMonthGraphic from './Graphics/ClientMonthGraphic';
import ClientContactGraphic from './Graphics/ClientContactGraphic';

function ClientGraphics() {
  return (
    <div className="graphics-container">
      <div>
        <h4 className="text-center" >Captura de Novos Clientes por mês</h4>
        <ClientMonthGraphic />
      </div>
      <div>
        <h4 className="text-center" >Clientes a mais tempo sem retorno</h4>
        <ClientContactGraphic />
      </div>
    </div>
  );
}

export default ClientGraphics;