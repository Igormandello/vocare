import React from 'react';
import UserHeader from '../components/UserHeader';
import UserSocialMedias from '../components/UserSocialMedias';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Settings.css';

function Settings() {
  return (
    <div className="dashboard">
      <UserHeader />
      <section>
        <h1>Configurações</h1>
        <div>
          <img src="profile.png" alt="profile"/>
          <Button>
            <img src="edit.svg" alt="edit" />
          </Button>
        </div>
        <p>conectado com:</p>
        <UserSocialMedias />
        <Input label="Nome"/>
        <Input label="E-mail" type="email"/>
        <Input label="Senha" type="password"/>
        <Input label="Confirmar senha" type="password"/>
        <Button text="Salvar"/>
        <Button text="Excluir conta"/>
      </section>
      <Footer fill />
    </div>
  );
}

export default Settings;