import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { getClients } from '../services/request';

const UseClients = () => {

  const [ userClients, setUserClients ] = useState([]);
  const { user } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState();
  const [isActiveForm, toggleClientForm] = useState(false);
  const [inputError, setInputError] = useState();

  const clientSubmit = (e) => {
    e.preventDefault();
    const fieldCount = e.target.length -3;
    const fields = {};
    for (let i = 0; i <= fieldCount ; i+= 1) {
      fields[e.target[i].name]= (e.target[i].value);
    }

    // insertProject(data, user)
    //   .then(res => {
    //     console.log(res);
    //     toggleActiveForm(false);
    //   })
    //   .catch(err => {
    //     setInputError(err.response.data.message);
    //     console.log(err.response.data);
    //   });
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

  return { getUserClients, searchValue, handleChangeFilter, userClients, clientSubmit, isActiveForm, toggleClientForm, inputError, setInputError };
};


export default UseClients;