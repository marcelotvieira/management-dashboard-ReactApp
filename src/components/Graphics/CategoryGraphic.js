import React, { useContext } from 'react';

import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import ProjectsContext from '../../context/ProjectsContext';



function CategoryGraphic() {

  const { userProjects } = useContext(ProjectsContext);

  const data = [
    {
      'name': 'Categoria de Projetos',
      'Projeto': userProjects.filter((project) => project.category === 'Projeto Estrutural').length,
      'Consultoria': userProjects.filter((project) => project.category === 'Consultoria').length,
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
        <Bar dataKey="Projeto" fill="rgb(161, 154, 241)" />
        <Bar dataKey="Consultoria" fill="rgb(116, 165, 96)" />
      </BarChart>
    </div>
  );
}

export default CategoryGraphic;