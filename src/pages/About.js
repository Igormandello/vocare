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
      <section className="problem">
        <h1>Sobre</h1>
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
            <img src={require('../imgs/wrongway.jpg')} alt="wrongway"/>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. 
              It has roots in a piece of classical Latin literature from 45 BC, making 
              it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
              College in Virginia, looked up one of the more obscure Latin words, consectetur, 
              from a Lorem Ipsum passage, and going through the cites of the word in classical 
              literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
              1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            </p>
          </div>
        </div>
      </section>
      <section className="differentials">
        <h2>Diferenciais</h2>
        <Differential {...differentials.autoconhecimento}/>
        <Differential {...differentials.ambienteDeDiscussao}/>
        <Differential {...differentials.conhecimentoDeProfissoes}/>
      </section>
      <section className="aboutUs">
        <h2>Sobre nós</h2>
        <div>
          <Author {...authors.igor}/>
          <Author {...authors.bart}/>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const differentials = {
  autoconhecimento: {
    image: 'reading.jpg',
    title: 'Autoconhecimento',
    text: `It is a long established fact that a reader will be distracted by the 
      readable content of a page when looking at its layout. The point of using 
      Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
      as opposed to using 'Content here, content here', making it look like readable 
      English. Many desktop publishing packages and web page editors now use Lorem 
      Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
      many web sites still in their infancy. Various versions have evolved over 
      the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  },

  ambienteDeDiscussao: {
    image: 'discussion.jpg',
    title: 'Ambiente de Discussão',
    text: `It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of using 
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
    as opposed to using 'Content here, content here', making it look like readable 
    English. Many desktop publishing packages and web page editors now use Lorem 
    Ipsum as their default model text, and a search for 'lorem ipsum'`
  },

  conhecimentoDeProfissoes: {
    image: 'computer.jpg',
    title: 'Conhecimento de Profissões',
    text: `It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of using 
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
    as opposed to using 'Content here, content here', making it look like readable 
    English. Many desktop publishing packages and web page editors now use Lorem 
    Ipsum as their default model text, and a search for 'lorem ipsum' will uncover 
    many web sites still in their infancy. Various versions have evolved over 
    the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
  }
}

const authors = {
  igor: {
    picture: 'igor.jpg',
    name: 'Igor Mandello',
    description: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed do eiusmod tempor',
    github: 'https://github.com/Igormandello'
  },

  bart: {
    picture: 'bart.jpg',
    name: 'Vitor Bartier',
    description: 'Lorem ipsum dolor sit amet, cosectetur adipisicing elit, sed do eiusmod tempor',
    github: 'https://github.com/bartier'
  }
};

export default About;