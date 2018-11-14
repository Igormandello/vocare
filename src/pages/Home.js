import React from 'react';
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Home.css';

import butterfly from '../imgs/butterfly.png';
import suit from '../imgs/suit.jpg';

function Home() {
  return (
    <div className="home">
      <Header />
      <section className="intro">
        <div>
          <h2>A melhor maneira de entrar no mercado de trabalho.</h2>
          <p>Seja guiado pelas melhores empresas e descubra sua vocação.</p>
        </div>
        <div>
          <img src={butterfly} alt=""/>
        </div>
        <Paper className="ellipse" elevation={8}/>
      </section>
      <section className="headline">
        <h2>Gostar do que faz é a chave para o sucesso</h2>
        <div className="row">
          <div>
            <p>
              Descubra como é a real experiência das diversas profissões com 
              profissionais do mercado de trabalho.
            </p>
            <p>
              Nossa plataforma foi desenvolvida para te guiar com foco e clareza 
              pelas diversas áreas e profissões, de modo que você possa escolher 
              aquilo que realmente tem a ver com você.
            </p>
          </div>
          <div>
            <img src={suit} alt=""/>
          </div>
        </div>
      </section>
      <section className="features">
        <h2>Por que Vocare?</h2>
        <div className="row">
          <Feature {...features.autoconhecimento} />
          <Feature {...features.ambienteDeDiscussao} />
          <Feature {...features.conhecimentoDeProfissoes} />
        </div>

        <span>Saiba mais sobre nossos</span>
        <Button variant="outlined" text="Diferenciais" href="/vocare/about" />
      </section>
      <section className="problem">
        <h2>Problema</h2>
        <div className="data row">
          <img src={require("../imgs/exclamation.svg")} alt="exclamation"/>
          <div>
            <p>
              <span>75%</span> 
              dos alunos do COTUCA não sabem qual carreira seguir.
            </p>
            <p>
              <span>50%</span> 
              dos alunos do ensino médio não sabem qual profissão escolher.
            </p>
          </div>
        </div>
        <div className="explanation row">
          <div>
            <h3>Por que é preocupante?</h3>
            <p>
              Trabalhar com o que você não gosta é chato e tedioso. Queremos
              jovens que se <b>reconheçam com o seu trabalho</b>, pois 
              entendemos que uma sociedade saudável é aquela em que as pessoas 
              se sintam bem com o que fazem
            </p>
          </div>
          <div>
            <h3>Como resolver esse problema?</h3>
            <p>
              Com a plataforma Vocare você poderá <b>explorar, discutir e aprender </b>
              com outras pessoas sobre diferentes profissões em um ambiente totalmente
              interativo. Tudo isso para você escolher sua carreira com segurança!
            </p>
          </div>
        </div>

        <span>Saiba mais sobre o</span>
        <Button variant="outlined" text="Problema" href="/vocare/about" />
      </section>
      <section className="price">
        <h2>E qual o preço disso?</h2>

        <span>Tudo isso de graça e para sempre!</span>
        <Button text="Cadastre-se" href="/vocare/signup" fill />
      </section>
      <Footer />
    </div>
  );
}

const features = {
  autoconhecimento: {
    icon: 'confident.svg',
    title: 'Autoconhecimento',
    description: 'Realize testes e descubra quais profissões tem a ver com seu estilo',
  },

  ambienteDeDiscussao: {
    icon: 'discussion.svg',
    title: 'Ambiente de Discussão',
    description: 'Descubra como é o dia a dia daquela profissão, quais os desafios da carreira e muito mais!'
  },

  conhecimentoDeProfissoes: {
    icon: 'sign.svg',
    title: 'Conhecimento de Profissões',
    description: 'Ainda em dúvida? Veja com o máximo de detalhes sobre determinados cursos e profissões. Nós te guiamos.'
  }
};

export default Home;