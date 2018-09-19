import React from 'react';
import UserHeader from '../components/UserHeader';
import ComboBox from '../components/ComboBox';
import Footer from '../components/Footer';
import '../css/Discover.css';

function Discover() {
  return (
    <div className="discover">
      <UserHeader />
      <section className="info">
        <h1>Conhecendo profissões</h1>
        <p>
          Nessa seção você poderá descobrir áreas que nunca imaginou 
          que existiam, quem sabe não acaba achando uma que gosta?
        </p>
      </section>
      <section className="professions">
        <ComboBox label="Área:" options={['a', 'b']}/>
        <h2>Sua jornada começa aqui</h2>
        <div>
          <span></span>
          <span></span>
        </div>
        <img src="computingEngineering.png" alt="computing engineering" />
        <div>
          <span></span>
          <span></span>
        </div>
        <img src="mechanicalEngineering.png" alt="mechanical engineering" />
        <div>
          <span></span>
          <span></span>
        </div>
        <img src="medicine.png" alt="medicine" />
      </section>
      <Footer fill />
    </div>
  );
}

export default Discover;