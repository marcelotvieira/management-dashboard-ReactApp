import React, { useContext, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ProjectsContext from '../../context/ProjectsContext';

function getMonthYear(date) {
  const [year, month] = date.split('-');
  return `${month}/${year}`;
}

function ProjectEarnings() {
  const { userProjects } = useContext(ProjectsContext);


  const filteredProjects = useMemo(
    () =>
      userProjects.filter((project) => {
        const endDate = new Date(project.endDate);
        return project.status === 'Entregue' && endDate >= new Date('2022-10-01');
      }),
    [userProjects]
  );

  const earningsData = useMemo(() => {
    const data = [];
    const months = {};

    for (let i = 0; i < 6; i++) {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      const monthYear = getMonthYear(date.toISOString().slice(0, 7));
      months[monthYear] = 0;
      data.push({ monthYear, earnings: 0 });
    }

    filteredProjects.forEach((project) => {
      const monthYear = getMonthYear(project.endDate);
      months[monthYear] += project.value;
    });

    data.forEach((monthData) => {
      monthData.earnings = months[monthData.monthYear];
    });

    return data;
  }, [filteredProjects]);
  
  return (
    <BarChart width={460} fontSize={12} height={250} data={earningsData.reverse()}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="monthYear" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="earnings" fill="rgb(51, 153, 255)" />
    </BarChart>
  );
}

export default ProjectEarnings;
