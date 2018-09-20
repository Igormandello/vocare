import React from 'react';
import logo from './assets/logo.svg';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo"/>
      </a>
      <nav>
        <span></span>
        <a href="/login">Login</a>
        <a href="/signup">Cadastro</a>
      </nav>
    </header>
  )
}

export default Header;