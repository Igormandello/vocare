import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialMedias from '../components/SocialMedias';
import Footer from '../components/Footer';
import '../css/FormPages.css';

function Contact() {
  return (
    <div className="contact">
      <Header />
      <section className="row">
        <div>
          <form>
            <h1>Contato</h1>
            <Input label="Nome"/>
            <Input label="E-mail"/>
            <Input label="Mensagem" type="textarea"/>
            <Button text="Enviar" href="/vocare/"/>
          </form>
        </div>
        <div>
          <h1>Também estamos em...</h1>
          <SocialMedias />
        </div>
      </section>
      <Footer fill/>
    </div>
  );
}

export default Contact;