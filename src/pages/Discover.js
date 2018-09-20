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
        <div className="path">
          <div className="profession">
            <div>
              <span></span>
              <span></span>
            </div>
            <a href="/vocare/aboutCourse">
              <img src={require('../imgs/computerEngineering.jpg')} alt="computer engineering" />
            </a>
          </div>
          <div className="profession">
            <div>
              <span></span>
              <span></span>
            </div>
            <img src={require('../imgs/mechanicalEngineering.jpg')} alt="mechanical engineering" />
          </div>
          <div className="profession">
            <div>
              <span></span>
              <span></span>
            </div>
            <img src={require('../imgs/medicine.jpg')} alt="medicine" />
          </div>
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

export default Discover;