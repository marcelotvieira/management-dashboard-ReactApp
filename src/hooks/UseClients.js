import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { getClients } from '../services/request';

const UseClients = () => {

  const [ userClients, setUserClients ] = useState([]);
  const { user } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState();


  const getUserClients = () => {
    getClients(user)
      .then(res => {
        if (userClients !== res.data) setUserClients(res.data);
      })
      .catch(err => console.log(err.response.data));
  };

  const handleChangeFilter = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return { getUserClients, searchValue, handleChangeFilter, userClients };
};


export default UseClients;