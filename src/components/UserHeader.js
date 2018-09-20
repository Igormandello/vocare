import React from 'react';
import Button from './Button';
import logo from './assets/logo.svg';
import '../css/UserHeader.css';

function UserHeader() {
  return (
    <header className="userHeader">
      <a href="/vocare/dashboard">
        <img src={logo} alt="logo" />
      </a>
      <div>
        <Button>
          <img src={require('./assets/notification.svg')} alt="notification" />
        </Button>
        <span></span>
        <a className="name" href="/vocare/dashboard">Igor</a>

        <div>
          <img src={require('./assets/igor.jpg')} alt="profile"/>
          <Button href="/vocare/settings">
            <img src={require('./assets/config.svg')} alt="configuration" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default UserHeader;