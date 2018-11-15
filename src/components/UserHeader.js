import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
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
      <AppBar position="static">
        <Toolbar className="userHeader">
          <a href="/vocare/dashboard"> 
            <img src={logo} alt="logo" /> 
          </a>
          <div className="nav"> 
            <div>
              <IconButton color="inherit">
                <Badge badgeContent={13} color="secondary">
                  <Icon>notifications</Icon>
                </Badge>
              </IconButton>
            </div>
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
              <IconButton nClick={this.toggleNotifications} color="secondary" className={this.state.settingsOpen ? 'active' : ''}>
                <Icon>settings</Icon>
              </IconButton>
 
              <Popover ref="settingsPop" caret="right" target={this.refs.settings}> 
                <ul> 
                  <a onClick={() => console.log('To Do')}>Alto Contraste</a> 
                  <a href="/vocare/settings">Configurações</a> 
                  <a href="/vocare/">Sair</a> 
                </ul> 
              </Popover> 
            </div> 
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default UserHeader;