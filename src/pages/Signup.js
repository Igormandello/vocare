import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/usersActions';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import UserSocialMedias from '../components/UserSocialMedias';
import Footer from '../components/Footer';
import '../css/FormPages.css';

class Signup extends Component {
  registerUser = () => {
    const username = this.refs.username.getValue(),
          email = this.refs.email.getValue(),
          password = this.refs.password.getValue();
          
    this.props.dispatch(registerUser(username, email, password));
  }

  render() {
    return (
      <div className="signup">
        <Header />
        <section className="row">
          <div>
            <h1>Cadastro</h1>
            <form>
              <Input ref="username" label="Usuário"/>
              <Input ref="email" label="E-mail" type="email"/>
              <Input ref="password" label="Senha" type="password"/>
              <Input ref="confirmPassword" label="Confirmar senha" type="password"/>
              <Button onClick={this.registerUser} text="Cadastrar-se"/>
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
}

export default connect()(Signup);