import React from 'react';
import Popover from 'react-popover';
import UserHeader from '../components/UserHeader';
import ComboBox from '../components/ComboBox';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Discover.css';

class Discover extends React.Component {
  state = {};

  popoverTrigger = (event) => {
    let id = event.currentTarget.id;

    this.setState((prev) => {
      let ret = { ...prev };
      ret[id] = !prev[id];

      return ret;
    })
  }

  render() {
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
          <ComboBox label="Área:" options={['Escolha uma área...', 'Exatas', 'Humanas', 'Biológicas']}/>
          <h2>Sua jornada começa aqui</h2>
          <div className="path">
            <div className="profession">
              <div>
                <span></span>
                <span></span>
              </div>
              <Popover isOpen={this.state.computerScience} place="right" body={popoversData.computerScience}>
                <a id="computerScience" onClick={this.popoverTrigger}>
                  <img src={require('../imgs/computerScienceThumb.jpg')} alt="computer science" />
                </a>
              </Popover>
            </div>
            <div className="profession">
              <div>
                <span></span>
                <span></span>
              </div>
              <Popover isOpen={this.state.mechanicalEngineering} place="left" body={popoversData.mechanicalEngineering}>
                <a id="mechanicalEngineering" onClick={this.popoverTrigger}>
                  <img src={require('../imgs/mechanicalEngineering.jpg')} alt="mechanical engineering" />
                </a>
              </Popover>
            </div>
            <div className="profession">
              <div>
                <span></span>
                <span></span>
              </div>
              <Popover isOpen={this.state.medicine} place="right" body={popoversData.medicine}>
                <a id="medicine" onClick={this.popoverTrigger}>
                  <img src={require('../imgs/medicine.jpg')} alt="medicine" />
                </a>
              </Popover>
            </div>
          </div>
        </section>
        <Footer fill />
      </div>
    );
  }
}

const popoversData = {
  computerScience: [
    <h3>Ciência da Computação</h3>,
    <p>
      O estudante de <b>Ciência da Computação</b> trabalha principalmente com 
      o desenvolvimento de programas para as mais diversas plataformas, como 
      celulares, tablets e computadores.
    </p>,
    <Button text="Saiba mais" href="/vocare/aboutCourse/" fill/>
  ],

  mechanicalEngineering: [
    <h3>Engenharia Mecânica</h3>,
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s.
    </p>,
    <Button text="Saiba mais" fill/>
  ],

  medicine: [
    <h3>Medicina</h3>,
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s.
    </p>,
    <Button text="Saiba mais" fill/>
  ]
}

export default Discover;