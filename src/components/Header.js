import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Header() {

  const { userData } = useContext(AppContext);

  return (
    <aside className="header">
      <h3>{ userData.firstName }</h3>
      <p className="user-email">{userData.email}</p>
    </aside>
  );
}

export default Header;