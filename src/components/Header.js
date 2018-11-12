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
        <Button variant="flat" color="secondary" href="/vocare/about" text="Sobre o projeto"/>
        <Button variant="flat" color="secondary" href="/vocare/contact" text="Contato"/>
      </nav>
      <a href="/vocare/">
        VOcAre
      </a>
      <nav>
        <Button variant="flat" color="secondary" href="/vocare/login" text="Login"/>
        <Button color="secondary" href="/vocare/signup" text="Cadastre-se" noShadow/>
      </nav>
    </header>
  );
}

export default Header;