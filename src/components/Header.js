import React from 'react';
import Paper from '@material-ui/core/Paper';
import SlideMenu from './SlideMenu';
import Button from './Button';
import '../css/Header.css';

function Header() {
  return (
    <Paper elevation={4}>
      <header className="header">
        <SlideMenu>
        </SlideMenu>
        <nav>
          <Button variant="text" color="secondary" href="/vocare/about" text="Sobre o projeto"/>
          <Button variant="text" color="secondary" href="/vocare/contact" text="Contato"/>
        </nav>
        <a href="/vocare/">
          VOcAre
        </a>
        <nav>
          <Button variant="text" color="secondary" href="/vocare/login" text="Login"/>
          <Button color="secondary" href="/vocare/signup" text="Cadastre-se" noShadow/>
        </nav>
      </header>
    </Paper>
  );
}

export default Header;