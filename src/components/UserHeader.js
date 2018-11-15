import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import Popover from './Popover';
import logo from './assets/logo.svg';
import '../css/UserHeader.css';

class UserHeader extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="userHeader">
          <a href="/vocare/dashboard"> 
            <img src={logo} alt="logo" /> 
          </a>
          <div className="nav"> 
            <Popover ref="notificationsPop" target={this.notifications}
              items={[
                { text: 'Parabéns! Você atingiu o nível 3. Continue firme na sua jornada!' },
                { text: 'O usuário Vitor Bartier criou uma pergunta relacionada a você, que tal ajudá-lo?' },
                { text: '10 usuários gostaram de sua pergunta!' }
              ]}>
              <div>
                <Badge badgeContent={13} color="secondary">
                  <Icon>notifications</Icon>
                </Badge>
              </div>
            </Popover> 
            <span></span> 
            <a className="name" href="/vocare/dashboard">Igor</a> 
 
            <div> 
              <a href="/vocare/dashboard"> 
                <img src={require('./assets/igor.jpg')} alt="profile"/> 
              </a> 
              <Popover
                items={[
                  { onClick: () => console.log('To Do'), text: 'Alto Contraste' },
                  { href: '/vocare/settings', text: 'Configurações' },
                  { href: '/vocare/', text: 'Sair' }
                ]}>
                <Icon>settings</Icon>
              </Popover>
            </div> 
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default UserHeader;