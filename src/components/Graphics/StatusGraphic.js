import React, { useContext } from 'react';

import {
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  YAxis,
} from 'recharts';
import ProjectsContext from '../../context/ProjectsContext';


function StatusGraphic() {

  const { userProjects } = useContext(ProjectsContext);



  const data = [
    {
      'name': 'Status de Projetos',
      'Entregue': userProjects.filter((project) => project.status === 'Entregue').length,
      'Fechado': userProjects.filter((project) => project.status === 'Fechado').length,
      'Negociando': userProjects.filter((project) => project.status === 'Negociando').length,
    },
  ];

  
  return (
    <div>    
      <BarChart className="bar-chart" width={460} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Entregue" fill="rgb(212, 153, 50)" />
        <Bar dataKey="Fechado" fill="rgb(212, 212, 50)" />
        <Bar dataKey="Negociando" fill="rgb(208, 75, 75)" />
      </BarChart>
    </div>
  );

}

export default StatusGraphic;