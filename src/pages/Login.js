import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';

// import { Container } from './styles';

function Login() {
    
  const { currAction, setCurrAction, login, user, register, inputError, registerSucces } = useContext(AppContext);


  const loginSubmit = (e) => {
    const payload = {
      email: e.target[0].value,
      password: e.target[1].value
    };
    login(payload);
  };

  const registerSubmit = (e) => {
    const payload = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    register(payload);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    currAction === 'login' ? loginSubmit(e) : registerSubmit(e);
  };

  if (user) return <Redirect to="/" />;

  if (currAction === 'register') {
    return (
      <div className="register">
        <div className="formBox">
          { inputError && <p className="input-error">{inputError}</p>}
          <form
            onSubmit={handleSubmit}
          >
            <label htmlFor="firstName">
              <input placeholder='Nome' name="firstName" id="firstName" type="text"/>
            </label>
            <label htmlFor="lastName">
              <input placeholder='Sobrenome' name="lastName" id="lastName" type="text"/>
            </label>
            <label htmlFor="email">
              <input placeholder='Email' name="email" id="email" type="text"/>
            </label>
            <label htmlFor="password">
              <input placeholder='Senha' name="password" id="password" type="password"/>
            </label>
            <button type="submit">
            Registrar
            </button>
          </form>
          <p>Já possui uma conta?
            <button onClick={() => setCurrAction('login')}>Login</button>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="login">
      <div className="formBox">
        { registerSucces && <p className="input-success">Registro realizado com sucesso.</p>}
        { inputError && <p className="input-error">{inputError}</p>}
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
        <p>Não possui uma conta?
          <button onClick={() => setCurrAction('register')}>Registrar</button>
        </p>
      </div>
    </div>
  );
}

export default Login;