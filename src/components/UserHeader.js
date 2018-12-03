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
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import { unreaden, fetchNotifications } from '../actions/notificationsActions';
import SlideMenu from './SlideMenu';
import Popover from './Popover';
import '../css/Header.css';
import '../css/UserHeader.css';

const styles = theme => ({
  avatar: {
    backgroundColor: purple['A100']
  },
  bigAvatar: {
    width: 50,
    height: 50
  }
});

class UserHeader extends React.Component {
  constructor(props) {
    super(props);

    const { user } = this.props.auth;
    this.props.unreaden(user.id, user.access_token);
    this.fetchUnreaden = setInterval(() => {
      this.props.unreaden(user.id, user.access_token);
    }, 5000);

    this.state = {
      showMore: false,
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.fetchUnreaden);
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
    const { classes } = this.props;
    const { unreaden, notifications, loaded } = this.props.notifications;
    const { user } = this.props.auth;

    let userName = user.username.split(' ')[0];
    let userPic;
    if (user.profile_picture)
      userPic = <Avatar src={user.profile_picture}/>;
    else
      userPic = <Avatar className={classes.avatar}>{userName[0]}</Avatar>;

    return (
      <AppBar position="static">
        <Toolbar className="header userHeader">
          <SlideMenu>
            <List>
              <ListItem button onClick={this.handleExpand}>
                {userPic}
                <ListItemText primary={userName}/>
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
            <Popover
              width='500px'
              onOpen={() => this.props.fetchNotifications(this.props.auth.user.id, this.props.auth.user.access_token, unreaden)}
              items={
                loaded ?
                notifications.map(obj => {
                  return {
                    text: obj.message,
                    key: obj.number
                  }
                })
                :
                [{ key: 1, text: 'Não há notificações!'}]
              }
            >
              <Badge badgeContent={unreaden ? unreaden : ''} invisible={!unreaden} color="secondary">
                <Icon>notifications</Icon>
              </Badge>
            </Popover>
            <Link className="name" to="/vocare/dashboard">{userName}</Link> 
 
            <div> 
              <Link to="/vocare/dashboard"> 
                {
                  React.cloneElement(
                    userPic,
                    { className: [(!user.profile_picture ? classes.avatar : {}), classes.bigAvatar].join(' ') }
                  )
                }
              </Link> 
              <Popover
                items={[
                  { key: 1, onClick: this.handleContrast, text: 'Alto Contraste' },
                  { key: 2, href: '/vocare/settings', text: 'Configurações' },
                  { key: 3, onClick: this.handleLogout, href: '/vocare/', text: 'Sair' }
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

export default withStyles(styles)(connect(
  (state) => ({ auth: state.auth, notifications: state.notifications }),
  { logout, unreaden, fetchNotifications }
)(UserHeader));