import { useState } from 'react';
import { getUser, userLogin } from '../services/request';


const Uselogin = () => {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState({});

  const login = (payload) => {
    userLogin(payload)
      .then(res => {
        setUser(res.data.token);
        localStorage.setItem('user', res.data.token);
      })
      .catch(err => console.log(err.response.data));
  };

  const getUserData = (payload, user) => {
    getUser(payload, user)
      .then(res => {
        if (userData !== res.data) setUserData(res.data);
      })
      .catch(err => console.log(err.response.data));
  };


  return { user, login, setUser, getUserData, userData, setUserData };
};

export default Uselogin;