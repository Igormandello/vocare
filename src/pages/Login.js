import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/Login.css';

function Login() {
  return (
    <div className="login">
      <Header />
      <section>
        <div>
          <h1>Login</h1>
          <Input label="Usuário"/>
          <Input label="Senha"/>
          <Input value="Entrar" type="submit" className="button"/>
          <p class="divider">ou acesse com:</p>
          <UserSocialMedias />
        </div>
        <div>
          <h1>Não possui uma conta?</h1>
          <p>Se você não possui uma conta, basta se cadastrar gratuitamente!</p>
          <Button text="Cadastre-se" fill/>
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default Login;