import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import UserHeader from '../components/UserHeader';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Dashboard.css';

class Dashboard extends Component {
  state = {
    elevation: 1
  }

  render() {
    let { level } = this.props.user;

    let levelDivs = [];
    for (let i = 1; i < 6; i++)
      if (i <= level)
        levelDivs.push(<div key={i} className="active"/>);
      else
        levelDivs.push(<div key={i}/>);

    return (
      <div className="dashboard">
        <UserHeader />
        <section className="userData">
          <h1>Bem vindo, Igor</h1>
          <div>
            <span>Seu nível atual: {level}</span>
            <div className="level">
              <span></span>
              {levelDivs}
            </div>
          </div>
        </section>
        <section className="objectives row">
          <div>
            <div>
              <h2>Objetivo atual</h2>
              <p>
                Você está em dúvida entre algumas profissões, seu objetivo agora
                é decidir entre essas qual você quer que seja sua área profissional, 
                essa é uma decisão bem importante e difícil, então tome seu tempo e 
                não se apresse, para que faça a melhor decisão possível.
              </p>
              <p>
                Você pode saber mais sobre cada área que está em dúvida acessando as 
                páginas respectivas a elas:
              </p>
            </div>
  
            <div className="courses">
              <Button text="Engenharia da Computação" />
              <Button text="Ciência da Computação" href="/vocare/aboutCourse" />
              <Button text="Análise e Desenvolvimento de Sistemas" />
            </div>
  
            <div>
              <p>
                Também é possível debater com os outros usuários do site para decidir 
                qual a profissão que mais combina com você em nosso espaço de discussão.
              </p>
              <Button text="Acessar Fórum" href="/vocare/discussion" />
            </div>
          </div>
          <div>
            <h2>O que estão debatendo...</h2>
            <Link to="/vocare/post">
              <Card 
                className="post" 
                elevation={this.state.elevation}
                onMouseEnter={() => this.setState({ elevation: 12 })}
                onMouseLeave={() => this.setState({ elevation: 1 })}>
                <div>
                  <div>
                    <img src={require('../components/assets/bart.jpg')} alt="user" className="card"/>
                  </div>
                  <div>
                    <h3>Eu tenho uma dúvida: o que é melhor entre ciência da computação e engenharia da computação?</h3>
                    <p>
                      Então gente, acho que bastantes usuários tem essa mesma dúvida então estou lançando aqui...
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
            <Button text="Veja outras discussões" href="/vocare/discussion"/>
          </div>
        </section>
        <Footer fill />
      </div>
    );
  }
}

export default connect(
  (state) => ({ user: state.auth.user }),
)(Dashboard);