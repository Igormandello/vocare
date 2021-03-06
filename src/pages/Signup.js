import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/FormPages.css';

function Signup() {
  return (
    <div className="signup">
      <Header />
      <section className="row">
        <div>
          <h1>Cadastro</h1>
          <form action="/vocare/dashboard">
            <Input label="Usuário"/>
            <Input label="E-mail" type="email"/>
            <Input label="Senha" type="password"/>
            <Input label="Confirmar senha" type="password"/>
            <Button href="/vocare/login" text="Cadastrar-se"/>
          </form>
          <p className="divider">ou cadastre-se com:</p>
          <UserSocialMedias />
        </div>
        <div>
          <h1>Já possui uma conta?</h1>
          <p>Se você já possui uma conta, basta fazer login.</p>
          <Button variant="contained" text="Entrar" href="/vocare/login" fill/>
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default Signup;