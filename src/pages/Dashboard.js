import React from 'react';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import '../css/Contact.css';

function Contact() {
  return (
    <div className="about">
      <UserHeader />
      <section>
        <h1>Bem vindo, Igor</h1>
        <div>
          <span>Seu nível atual: 3</span>
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

export default Contact;