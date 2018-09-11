import React from 'react';
import logo from './assets/logo.svg';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header class="Header">
        <img src={logo} alt="logo" />
        <h1>Welcome to React</h1>
      </header>
    )
  }
}

export default Header;