import React from 'react';
import SlideMenu from './SlideMenu';
import Button from './Button';
import '../css/Header.css';

function Header() {
  return (
    <header className="header">
      <SlideMenu>
      </SlideMenu>
      <nav>
        <a href="/vocare/about">Sobre o projeto</a>
        <a href="/vocare/contact">Contato</a>
      </nav>
      <a href="/vocare/">
        VOcAre
      </a>
      <nav>
        <a href="/vocare/login">Login</a>
        <Button color="secondary" href="/vocare/signup" text="Cadastro"/>
      </nav>
    </header>
  );
}

export default Header;