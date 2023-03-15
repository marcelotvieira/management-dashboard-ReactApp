import axios from 'axios';
import { useState } from 'react';


const Uselogin = () => {
  const [user, setUser] = useState(false);


  const login = (payload) => {
    axios.post(
      'http://localhost:3001/user/login',
      payload
    )
      .then(res => {
        setUser(true);
        localStorage.setItem('user', res.data.token);
      })
      .catch(err => console.log(err.response.data));
  };


  return { user, login, setUser };
};

export default Uselogin;