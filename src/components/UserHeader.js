import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { unreaden } from '../actions/notificationsActions';
import SlideMenu from './SlideMenu';
import Popover from './Popover';
import '../css/Header.css';
import '../css/UserHeader.css';

class UserHeader extends React.Component {
  state = {
    showMore: false
  }

  componentDidMount = () => {
    this.props.unreaden(this.props.auth.user.id, this.props.auth.user.access_token);
  }
  
  handleContrast = () => {
    console.log('To Do');
  }

  handleExpand = () => {
    this.setState({ showMore: !this.state.showMore });
  }

  handleLogout = () => {
    this.props.logout(this.props.auth.user.id, this.props.auth.user.access_token);
  }

  render() {
    console.log(this.props.notifications);
    return (
      <AppBar position="static">
        <Toolbar className="header userHeader">
          <SlideMenu>
            <List>
              <ListItem button onClick={this.handleExpand}>
                <Avatar sizes="width:10px; height:10px;" src={require('./assets/igor.jpg')}/>
                <ListItemText primary="Igor"/>
                {this.state.showMore ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
              </ListItem>
              <Collapse in={this.state.showMore} timeout="auto" unmountOnExit>
                <List disablePadding>
                  <Link to="/vocare/dashboard">
                    <ListItem button>
                      <ListItemIcon>
                        <Icon>account_circle</Icon>
                      </ListItemIcon>
                      <ListItemText primary="Perfil"/>
                    </ListItem>
                  </Link>
                  <Link to="/vocare/settings">
                    <ListItem button>
                      <ListItemIcon>
                        <Icon>settings</Icon>
                      </ListItemIcon>
                      <ListItemText primary="Configurações"/>
                    </ListItem>
                  </Link>
                  <ListItem button onClick={this.handleContrast}>
                    <ListItemIcon>
                      <Icon>invert_colors</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Alto contraste"/>
                  </ListItem>
                </List>
              </Collapse>
              <Divider />
              <Link to="/vocare/discussion">
                <ListItem button>
                  <ListItemIcon>
                    <Icon>forum</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Área de discussão"/>
                </ListItem>
              </Link>
              <Link to="/vocare/discover">
                <ListItem button>
                  <ListItemIcon>
                    <Icon>swap_calls</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Conhecendo profissões"/>
                </ListItem>
              </Link>
              <Divider />
              <ListItem button onClick={this.handleLogout}>
                <ListItemIcon>
                  <Icon>logout</Icon>
                </ListItemIcon>
                <ListItemText primary="Sair"/>
              </ListItem>
            </List>
          </SlideMenu>
          <Link to="/vocare/dashboard"> 
            VOcAre
          </Link>
          <div className="nav">
            <Popover ref="notificationsPop" target={this.notifications}
              items={[
                { text: 'Parabéns! Você atingiu o nível 3. Continue firme na sua jornada!' },
                { text: 'O usuário Vitor Bartier criou uma pergunta relacionada a você, que tal ajudá-lo?' },
                { text: '10 usuários gostaram de sua pergunta!' }
              ]}>
              <Badge badgeContent={this.props.notifications.unreaden} invisible={!this.props.notifications.unreaden} color="secondary">
                <Icon>notifications</Icon>
              </Badge>
            </Popover>
            <Link className="name" to="/vocare/dashboard">Igor</Link> 
 
            <div> 
              <Link to="/vocare/dashboard"> 
                <img src={require('./assets/igor.jpg')} alt="profile"/> 
              </Link> 
              <Popover
                items={[
                  { onClick: this.handleContrast, text: 'Alto Contraste' },
                  { href: '/vocare/settings', text: 'Configurações' },
                  { onClick: this.handleLogout, href: '/vocare/', text: 'Sair' }
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

export default connect(
  (state) => ({ auth: state.auth, notifications: state.notifications }),
  { logout, unreaden }
)(UserHeader);