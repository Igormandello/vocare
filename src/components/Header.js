import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import SlideMenu from './SlideMenu';
import Button from './Button';
import '../css/Header.css';

function Header() {
  return (
    <Paper elevation={4}>
      <header className="header">
        <SlideMenu>
          <List>
            <Link to="/vocare/about">
              <ListItem button>
                  <ListItemIcon>
                    <Icon>info</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Sobre o projeto"/>
              </ListItem>
            </Link>
            <Link to="/vocare/contact">
              <ListItem button>
                <ListItemIcon>
                  <Icon>email</Icon>
                </ListItemIcon>
                <ListItemText primary="Contato"/>
              </ListItem>
            </Link>
            <Divider />
            <Link to="/vocare/login">
              <ListItem button>
                <ListItemIcon>
                  <Icon>account_circle</Icon>
                </ListItemIcon>
                <ListItemText primary="Login"/>
              </ListItem>
            </Link>
            <Link to="/vocare/signup">
              <ListItem button>
                <ListItemIcon>
                  <Icon>person_add</Icon>
                </ListItemIcon>
                <ListItemText primary="Cadastro"/>
              </ListItem>
            </Link>
          </List>
        </SlideMenu>
        <nav>
          <Button variant="text" color="secondary" href="/vocare/about" text="Sobre o projeto"/>
          <Button variant="text" color="secondary" href="/vocare/contact" text="Contato"/>
        </nav>
        <Link to="/vocare/">
          VOcAre
        </Link>
        <nav>
          <Button variant="text" color="secondary" href="/vocare/login" text="Login"/>
          <Button color="secondary" href="/vocare/signup" text="Cadastre-se" noShadow thickBorder/>
        </nav>
      </header>
    </Paper>
  );
}

export default Header;