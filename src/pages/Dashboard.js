import React from 'react';
import UserHeader from '../components/UserHeader';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <UserHeader />
      <section>
        <h1>Bem vindo, Igor</h1>
        <div>
          <span>Seu nível atual: 3</span>
          <div>
            <span></span>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section>
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
          <Button text="Ciência da Computação" />
          <Button text="Engenharia da Computação" />
          <Button text="Análise e Desenvolvimento" />

          <p>
            Também é possível debater com os outros usuários do site para decidir 
            qual a profissão que mais combina com você em nosso espaço de discussão.
          </p>
          <Button text="Acessar Fórum" />
        </div>
        <div>
          <h2>O que estão debatendo...</h2>
          <div>
            <div>
              <img src="bart.png" alt="user" />
              <h3>O que é melhor? Ciência da Computação ou Engengaria?</h3>
              <p>
                Lorem ipsum dolor site amet, consectetur adipiscing elit, sed 
                do elusmod tempor incididunt ut labore et dolore magna...
              </p>
            </div>
            <Button text="Acesse essa discussão" fill/>
          </div>
          <Button text="Veja outras discussões" />
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

export default Dashboard;