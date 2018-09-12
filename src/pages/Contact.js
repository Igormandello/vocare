import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import SocialMedias from '../components/SocialMedias';
import Footer from '../components/Footer';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="about">
      <Header />
      <section>
        <div>
          <h1>Contato</h1>
          <Input label="Nome"/>
          <Input label="E-mail"/>
          <Input label="Mensagem" type="textarea"/>
          <Input value="Enviar" type="submit" />
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