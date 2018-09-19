import React from 'react';
import Button from './Button';
import logo from './assets/logo.svg';
import '../css/UserHeader.css';

function UserHeader() {
  return (
    <header className="userHeader">
      <img src={logo} alt="logo" />
      <div>
        <Button>
          <img src={require('./assets/notification.svg')} alt="notification" />
        </Button>
        <span></span>
        <a className="name">Igor</a>

        <div>
          <img src={require('./assets/igor.jpg')} alt="profile"/>
          <Button>
            <img src={require('./assets/config.svg')} alt="configuration" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default UserHeader;