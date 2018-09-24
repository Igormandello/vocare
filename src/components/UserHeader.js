import React from 'react';
import Button from './Button';
import Popover from './Popover';
import logo from './assets/logo.svg';
import '../css/UserHeader.css';

class UserHeader extends React.Component {
  state = {
    settingsOpen: false,
    notificationsOpen: false
  };

  toggleNotifications = () => {
    this.setState((prev) => { 
      return { 
        settingsOpen: false,
        notificationsOpen: !prev.notificationsOpen
      }; 
    }, () => {
      if (this.state.notificationsOpen)
        this.refs.notificationsPop.openPopover();
      else 
        this.refs.notificationsPop.closePopover();

      this.refs.settingsPop.closePopover();
    });
  }

  toggleSettings = () => {
    this.setState((prev) => { 
      return { 
        settingsOpen: !prev.settingsOpen,
        notificationsOpen: false
      }; 
    }, () => {
      if (this.state.settingsOpen)
        this.refs.settingsPop.openPopover();
      else 
        this.refs.settingsPop.closePopover();

      this.refs.notificationsPop.closePopover();
    });
  }

  render() {
    return (
      <header className="userHeader">
        <a href="/vocare/dashboard">
          <img src={logo} alt="logo" />
        </a>
        <div>
          <Button onClick={this.toggleNotifications} className={this.state.notificationsOpen ? 'active' : ''}>
            <img src={require('./assets/notification.svg')} alt="notification" ref="notifications" />
          </Button>
          <Popover ref="notificationsPop" caret="center" target={this.refs.notifications}>
            <ul>
              <a>Parabéns! Você atingiu o nível 3. Continue firme na sua jornada!</a>
              <a>O usuário Vitor Bartier criou uma pergunta relacionada a você, que tal ajudá-lo?</a>
              <a>10 usuários gostaram de sua pergunta!</a>
            </ul>
          </Popover>

          <span></span>
          <a className="name" href="/vocare/dashboard">Igor</a>

          <div>
            <a href="/vocare/dashboard">
              <img src={require('./assets/igor.jpg')} alt="profile"/>
            </a>
            <Button onClick={this.toggleSettings} className={this.state.settingsOpen ? 'active' : ''}>
              <img src={require('./assets/config.svg')} alt="configuration" ref="settings" />
            </Button>

            <Popover ref="settingsPop" caret="right" target={this.refs.settings}>
              <ul>
                <a onClick={() => console.log('To Do')}>Alto Contraste</a>
                <a href="/vocare/settings">Configurações</a>
                <a href="/vocare/">Sair</a>
              </ul>
            </Popover>
          </div>
        </div>
      </header>
    )
  }
}

export default UserHeader;