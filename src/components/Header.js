import React from 'react';
import SlideMenu from './SlideMenu';
import logo from './assets/logo.svg';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <SlideMenu>
      </SlideMenu>
      <a href="/vocare/">
        <img src={logo} alt="logo"/>
      </a>
      <nav>
        <span></span>
        <a href="/vocare/login">Login</a>
        <a href="/vocare/signup">Cadastro</a>
      </nav>
    </header>
  );
}

export default Header;