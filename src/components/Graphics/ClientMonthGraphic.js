import React, { useContext, useState, useEffect } from 'react';
import { CartesianGrid, XAxis, Tooltip, Legend, LineChart, Line, YAxis } from 'recharts';
import ClientsContext from '../../context/ClientsContext';

function ClientMonthGraphic() {
  const { userClients } = useContext(ClientsContext);
  const [monthData, setMonthData] = useState([]);

  useEffect(() => {
    const now = new Date();
    const data = [];

    for (let i = 0; i < 6; i++) {
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthName = lastMonth.toLocaleDateString('default', { month: 'long' });
      const numOfClients = userClients.filter(
        (client) => 
          new Date(client.firstContact).getFullYear() === lastMonth.getFullYear() &&
          new Date(client.firstContact).getMonth() === lastMonth.getMonth() 
      ).length;

      data.push({ name: monthName, 'Novos clientes': numOfClients });
    }

    setMonthData(data.reverse());
  }, [userClients]);

  return (
    <div>
      <LineChart
        width={460}
        height={250}
        data={monthData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone"  dataKey="Novos clientes" strokeWidth={3} stroke="rgb(212, 212, 50)" />
      </LineChart>
    </div>
  );
}

export default ClientMonthGraphic;
