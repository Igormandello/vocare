import React from 'react';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <section>
        <h1>VOcAre</h1>
        <blockquote>
          <p>"Não haverá borboletas se a vida não passar por longas e silenciosas metamorfoses."</p>
          <cite>Rubem Alves</cite>
        </blockquote>
      </section>
      <section>
        <h2>Por que Vocare?</h2>
        <Feature {...features.autoconhecimento} />
        <Feature {...features.ambienteDeDiscussao} />
        <Feature {...features.conhecimentoDeProfissoes} />

        <span>Saiba mais sobre nossos</span>
        <Button text="Diferenciais" />
      </section>
      <section>
        <h2>Problema</h2>
        <div>
          <img src="exclamation.svg" alt="exclamation"/>
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
        <div>
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
              Com a plataforma Vocare você poderá <b>explorar, discutir e aprender</b> 
              com outras pessoas sobre diferentes profissões em um ambiente totalmente
              interativo. Tudo isso para você escolher sua carreira com segurança!
            </p>
          </div>
        </div>

        <span>Saiba mais sobre o</span>
        <Button text="Problema" />
      </section>
      <section>
        <h2>E qual o preço disso?</h2>

        <span>Tudo isso de graça e para sempre!</span>
        <Button text="Cadastre-se" fill />
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