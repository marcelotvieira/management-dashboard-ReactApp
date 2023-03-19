import React, { useContext, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ClientsContext from '../../context/ClientsContext';

function getElapsedDays(lastContact) {
  const oneDay = 24 * 60 * 60 * 1000; // miliseconds in one day
  const lastDate = new Date(lastContact);
  const currentDate = new Date();
  const diffDays = Math.round(Math.abs((currentDate - lastDate) / oneDay));
  return diffDays;
}

function ClientContactGraphic() {
  const { userClients } = useContext(ClientsContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = userClients.map((client) => ({
      name: client.name,
      elapsedDays: getElapsedDays(client.lastContact),
    })).sort((a, b) => b.elapsedDays - a.elapsedDays).slice(0, 6);
    setData(newData);
  }, [userClients]);

  return (
    <BarChart width={460} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" fontSize={10} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="elapsedDays" name="Dias Ausente" fill="rgb(208, 75, 75)" />
    </BarChart>
  );
}

export default ClientContactGraphic;
