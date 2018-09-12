import React from 'react';
import Header from '../components/Header';
import Differential from '../components/Differential';
import Author from '../components/Author';
import Footer from '../components/Footer';
import '../css/About.css';

function About() {
  return (
    <div className="about">
      <Header />
      <h1>Sobre</h1>
      <section>
        <h2>Problema</h2>
        <div>
          <div>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making 
              it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
              College in Virginia, looked up one of the more obscure Latin words, consectetur, 
              from a Lorem Ipsum passage, and going through the cites of the word in classical 
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
              by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very 
              popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
              comes from a line in section 1.10.32.'
            </p>
          </div>
          <div>
            <img src="wrongway.png" alt="wrongway"/>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making 
              it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
              College in Virginia, looked up one of the more obscure Latin words, consectetur, 
              from a Lorem Ipsum passage, and going through the cites of the word in classical 
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
              by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very 
              popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
              comes from a line in section 1.10.32.'
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Diferenciais</h2>
        <Differential {...differentials.autoconhecimento}/>
        <Differential {...differentials.ambienteDeDiscussao}/>
        <Differential {...differentials.conhecimentoDeProfissoes}/>
      </section>
      <section>
        <h2>Sobre nós</h2>
        <Author {...authors.igor}/>
        <Author {...authors.bart}/>
      </section>
      <Footer />
    </div>
  );
}

const differentials = {
  autoconhecimento: {
    image: 'reading.png',
    title: 'Autoconhecimento',
    text: 'Lorem'
  },

  ambienteDeDiscussao: {
    image: 'discussion.png',
    title: 'Ambiente de Discussão',
    text: 'Lorem'
  },

  conhecimentoDeProfissoes: {
    image: 'computer.png',
    title: 'Conhecimento de Profissões',
    text: 'Lorem'
  }
}

const authors = {
  igor: {
    picture: 'igor.png',
    name: 'Igor Mandello',
    description: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed do eiusmod tempor',
    github: 'https://github.com/Igormandello'
  },

  bart: {
    picture: 'bart.png',
    name: 'Vitor Bartier',
    description: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed do eiusmod tempor',
    github: 'https://github.com/bartier'
  }
};

export default About;