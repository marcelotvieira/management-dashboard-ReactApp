import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { getClients } from '../services/request';

const UseClients = () => {

  const [ userClients, setUserClients ] = useState([]);
  const { user } = useContext(AppContext);

  const getUserClients = () => {
    getClients(user)
      .then(res => {
        if (userClients !== res.data) setUserClients(res.data);
      })
      .catch(err => console.log(err.response.data));
  };

  return { getUserClients, userClients };
};


export default UseClients;