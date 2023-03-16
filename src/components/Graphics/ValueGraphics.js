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



function ValueGraphic() {

  const { userProjects } = useContext(ProjectsContext);

  const data = userProjects.filter(({status, name, value}) => {
    if (status === 'Entregue') {
      return {
        name,
        value,
      };
    }
  });
  return (
    <BarChart className="bar-chart" width={460} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar barSize={20} name="Valor" dataKey="value" fill="rgb(161, 154, 241)" />

    </BarChart>
  );
}

export default ValueGraphic;