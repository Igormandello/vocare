import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import UserHeader from '../components/UserHeader';
import UserSocialMedias from '../components/UserSocialMedias';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Settings.css';

const styles = theme => ({
  avatar: {
    backgroundColor: purple['A100']
  },
  bigAvatar: {
    width: 'inherit',
    height: 'inherit'
  },
  hiddenInput: {
    display: 'none'
  }
});

class Settings extends Component {
  componentDidMount() {
    document.querySelector('#uploadImage').addEventListener('change', function() {
      if (this.files && this.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onloadend = (event) => {
          console.log(event.target.result)
        };
      }
    });
  }

  render() {
    const { classes, user } = this.props;
    const { username, profile_picture, email } = user;

    let userPic;
    if (profile_picture)
      userPic = <Avatar src={profile_picture} className={classes.bigAvatar}/>;
    else
      userPic = <Avatar className={[classes.avatar, classes.bigAvatar]}>{username.split(' ')[0][0]}</Avatar>;

    return (
      <div className="settings">
        <UserHeader />
        <section>
          <h1>Configurações</h1>
          <div className="avatar">
            {userPic}
            <div className="edit">
              <Button onClick={() => document.querySelector('#uploadImage').click()} color="primary">
                <Icon>edit</Icon>
              </Button>
            </div>
          </div>
          <p className="divider">conectado com:</p>
          <UserSocialMedias actives={[true, true]}/>
          <div className={classes.hiddenInput}>
            <Input id="uploadImage" type="file"/>
          </div>
          <Input label="Nome" defaultValue={username}/>
          <Input label="E-mail" type="email" defaultValue={email}/>
          <Input label="Senha" type="password"/>
          <Input label="Confirmar senha" type="password"/>

          <div className="options">
            <Button text="Salvar" href="/vocare/dashboard" />
            <Button text="Excluir conta"/>
          </div>
        </section>
        <Footer fill />
      </div>
    );
  }
}

export default withStyles(styles)(connect(
  state => ({ user: state.auth.user })
)(Settings));