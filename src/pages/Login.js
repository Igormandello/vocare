import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/FormPages.css';

function Login() {
  return (
    <div className="login">
      <Header />
      <section className="row">
        <div>
          <h1>Login</h1>
          <form action="/vocare/dashboard">
            <Input label="Usuário"/>
            <Input label="Senha" type="password"/>
            <Input value="Entrar" type="submit" className="button"/>
          </form>
          <p className="divider">ou acesse com:</p>
          <UserSocialMedias />
        </div>
        <div>
          <h1>Não possui uma conta?</h1>
          <p>Se você não possui uma conta, basta se cadastrar gratuitamente!</p>
          <Button text="Cadastre-se" href="/vocare/signup" fill/>
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default Login;