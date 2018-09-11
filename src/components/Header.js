import React from 'react';
import logo from './assets/logo.svg';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo"/>
      <nav>
        <a>Login</a>
        <a>Cadastro</a>
      </nav>
    </header>
  )
}

export default Header;