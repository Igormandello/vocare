import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import UserHeader from '../components/UserHeader';
import UserSocialMedias from '../components/UserSocialMedias';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Settings.css';

function Settings() {
  return (
    <div className="settings">
      <UserHeader />
      <section>
        <h1>Configurações</h1>
        <div className="avatar">
          <img src={require('../components/assets/igor.jpg')} alt="profile"/>
          <div>
            <IconButton color="primary">
              <Icon>edit</Icon>
            </IconButton>
          </div>
        </div>
        <p className="divider">conectado com:</p>
        <UserSocialMedias actives={[true, true]}/>
        <Input label="Nome"/>
        <Input label="E-mail" type="email"/>
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

export default Settings;