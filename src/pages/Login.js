import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/FormPages.css';

function Login(props) {
  return (
    <div className="login">
      <Header />
      <section className="row">
        <div>
          <h1>Login</h1>
          <form>
            <Input id="email" label="Usuário"/>
            <Input id="pass" label="Senha" type="password"/>
            <Button onClick={() => props.loginUser(document.querySelector('#email').value, document.querySelector('#pass').value)} text="Entrar"/>
          </form>
          <p className="divider">ou acesse com:</p>
          <UserSocialMedias />
        </div>
        <div>
          <h1>Não possui uma conta?</h1>
          <p>Se você não possui uma conta, basta se cadastrar gratuitamente!</p>
          <Button variant="contained" text="Cadastre-se" href="/vocare/signup"/>
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default connect(
  (state) => ({ login: state.auth.login }),
  { loginUser }
)(Login);