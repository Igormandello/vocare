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
          <img src="notification.svg" alt="notification" />
        </Button>
        <div />
        <a>Igor</a>

        <div>
          <img src="profile.png" alt="profile"/>
          <Button>
            <img src="config.svg" alt="configuration" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default UserHeader;