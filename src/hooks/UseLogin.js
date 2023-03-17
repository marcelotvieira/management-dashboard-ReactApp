import { useState } from 'react';
import { getUser, userLogin, userRegister } from '../services/request';


const Uselogin = () => {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});
  const [registerSucces, setRegisterSucces] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [currAction, setCurrAction] = useState('login');


  const login = (payload) => {
    userLogin(payload)
      .then(res => {
        setUser(res.data.token);
        localStorage.setItem('user', res.data.token);
      })
      .catch(err => setInputError(err.response.data.message));
  };

  const register = (payload) => {
    userRegister(payload)
      .then(() => {
        setRegisterSucces(true);
        setCurrAction('login');
      })
      .catch(err => setInputError(err.response.data.message));
  };

  const getUserData = (payload, user) => {
    getUser(payload, user)
      .then(res => {
        if (userData !== res.data) setUserData(res.data);
      })
      .catch(err => console.log(err.response.data));
  };


  return { setCurrAction, currAction, user, login, setUser, getUserData, userData, setUserData, register, registerSucces, inputError };
};

export default Uselogin;