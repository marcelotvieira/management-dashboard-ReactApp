import React, { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import ProjectsContext from '../../context/ProjectsContext';

function ProjectCategoryGraphic() {
  const { userProjects } = useContext(ProjectsContext);

  const data = [
    { name: 'Projeto Estrutural', value: 0 },
    { name: 'Consultoria', value: 0 },
  ];

  userProjects.forEach((project) => {
    if (project.category === 'Projeto Estrutural') {
      data[0].value += 1;
    } else if (project.category === 'Consultoria') {
      data[1].value += 1;
    }
  });

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <PieChart width={400} height={250}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx={230}
        cy={125}

        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend verticalAlign="bottom" fill='white' align="right" layout="vertical" />
      <Tooltip />
    </PieChart>
  );
}

export default ProjectCategoryGraphic;
