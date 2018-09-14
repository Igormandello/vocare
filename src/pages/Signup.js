import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/Signup.css';

function Signup() {
  return (
    <div className="signup">
      <Header />
      <section>
        <div>
          <h1>Cadastro</h1>
          <Input label="Usuário"/>
          <Input label="E-mail" type="email"/>
          <Input label="Senha"/>
          <Input label="Confirmar senha"/>
          <Input value="Cadastrar-se" type="submit" />
          <p>ou cadastre-se com:</p>
          <UserSocialMedias />
        </div>
        <div>
          <h1>Já possui uma conta?</h1>
          <p>Se você já possui uma conta, basta fazer login.</p>
          <Button text="Entrar" fill/>
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default Signup;