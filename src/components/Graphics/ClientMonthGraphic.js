import React, { useContext } from 'react';

import {
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  YAxis,
} from 'recharts';
import ClientsContext from '../../context/ClientsContext';


function ClientMonthGraphic() {

  const { userClients } = useContext(ClientsContext);

  const lastMonthCapture = (data, passedMonthNumber) => {
    let response = [];
    for (let i = 0; i < passedMonthNumber; i++) {
      let currMonth = data.getMonth();
      let lastMonth = currMonth - 1;
      if (lastMonth < 0) {
        lastMonth = 11;
      }
      response.push(lastMonth);
      data.setMonth(lastMonth);
    }
    return response.map((month) => {
      month += 1;
      if (month === 0) month = 12;
      return month;
    });
  };

  const now = new Date();
  const monthData = lastMonthCapture(now, 7);

  const data = [
    {
      'name': `Mês ${monthData[5]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[6]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[4]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[5]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[3]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[4]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[2]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[3]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[1]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[2]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[0]}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[1]) {
          return client;
        }
      }).length,
    },
    {
      'name': `Mês ${monthData[0] + 1}`,
      'Novos clientes': userClients.filter((client) => {
        const firstContact = new Date(client.firstContact);
        if (firstContact.getMonth() === monthData[0]) {
          console.log('março');
          return client;
        }
      }).length,
    },
  ];

  
  return (
    <div>    
      <LineChart width={795} height={250} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Novos clientes" stroke="#8884d8" />
      </LineChart>
    </div>
  );

}

export default ClientMonthGraphic;