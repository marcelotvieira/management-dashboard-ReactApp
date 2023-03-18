import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Header() {

  const { userData } = useContext(AppContext);

  return (
    <aside className="header">
      <h3>{ userData.firstName }</h3>
      <p className="user-email">{userData.email}</p>

      <ul className="menu-tabs">
        <li><Link className="link"  to="/" >Home</Link></li>
        <li><Link className="link" to="/projects" >Projetos</Link></li>
        <li><Link className="link"  to="/clients" >Clientes</Link></li>
        <li><Link className="link"  to="/data" >Dados</Link></li>

      </ul>
    </aside>
  );
}

export default Header;