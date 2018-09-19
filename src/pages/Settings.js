import React from 'react';
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
        <div className="avatar card">
          <img src={require('../components/assets/igor.jpg')} alt="profile"/>
          <Button>
            <img src={require('../components/assets/edit.svg')} alt="edit" />
          </Button>
        </div>
        <p className="divider">conectado com:</p>
        <UserSocialMedias actives={[true, true]}/>
        <Input label="Nome"/>
        <Input label="E-mail" type="email"/>
        <Input label="Senha" type="password"/>
        <Input label="Confirmar senha" type="password"/>

        <div className="options">
          <Button text="Salvar"/>
          <Button text="Excluir conta"/>
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

export default Settings;