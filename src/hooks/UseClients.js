import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { deleteClient, getClients, insertClient } from '../services/request';

const UseClients = () => {

  const [ userClients, setUserClients ] = useState([]);
  const { user } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState();
  const [isActiveForm, toggleClientForm] = useState(false);
  const [inputError, setInputError] = useState();
  const [focusClient, setFocusClient] = useState();

  const clientSubmit = (e) => {
    e.preventDefault();
    const fieldCount = e.target.length -3;
    const fields = {};
    for (let i = 0; i <= fieldCount ; i+= 1) {
      fields[e.target[i].name]= (e.target[i].value);
    }
    
    insertClient(fields, user)
      .then((res) => {
        console.log(res);
        toggleClientForm(false);
      })
      .catch(err => {
        setInputError(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const handleDeleteClient = (id) => {
    deleteClient(id, user)
      .then(() => {
        setFocusClient();
      })
      .catch(err => {
        setInputError(err.response.data.message);
        console.log(err.response.data);
      });
  };


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

  return { handleDeleteClient, getUserClients, searchValue, focusClient, setFocusClient, handleChangeFilter, userClients, clientSubmit, isActiveForm, toggleClientForm, inputError, setInputError };
};


export default UseClients;