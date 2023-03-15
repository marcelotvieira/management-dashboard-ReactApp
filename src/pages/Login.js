import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

// import { Container } from './styles';

function Login() {
    
  const { login, user } = useContext(AppContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: e.target[0].value,
      password: e.target[1].value
    };
    login(payload);
  };

  if (user) return <Redirect to="/" />;


  return (
    <div className="login">
      <div className="formBox">
        <form
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">
            <input placeholder='Email' name="email" id="email" type="text"/>
          </label>
          <label htmlFor="email">
            <input placeholder='Senha' name="password" id="password" type="password"/>
          </label>
          <button type="submit">
            Login
          </button>
        </form>
      </div>

    </div>
  );
}

export default Login;