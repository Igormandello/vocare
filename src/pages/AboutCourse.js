import React from 'react';
import UserHeader from '../components/UserHeader';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';
import '../css/AboutCourse.css';

class AboutCourse extends React.Component {
  constructor(props) {
    super(props);

    this.cardsLeft = [];
    this.cardsRight = [];
    cardsLeft.forEach(card => this.cardsLeft.push(<CourseCard {...card} />));
    cardsRight.forEach(card => this.cardsRight.push(<CourseCard {...card} />));
  }

  render () {
    return (
      <div className="aboutCourse">
        <UserHeader />
        <section className="intro">
          <h1>Ciência da Computação</h1>
          <img src={require('../imgs/computerScience.jpg')} alt="course"/>
        </section>
        <section>
          <div className="cards row">
            <div className="left">
              {this.cardsLeft}
            </div>
            <div className="right">
              {this.cardsRight}
            </div>
          </div>

          <Button text="Voltar para Conhecendo Profissões" href="/vocare/discover"/>
        </section>
        <Footer fill />
      </div>
    );
  }
}

const cardsLeft = [
  {
    title: 'Sobre o curso',
    text: [
      `O bacharel da Ciência da Computação trabalha, fundamentalmente, na 
      elaboração de programas de informática, para computadores ou 
      dispositivos móveis, como celulares e tablets.`,
      `Analisa as necessidades dos usuários, desenvolve softwares e 
      aplicativos, gerencia equipes de criação e instala sistemas de 
      computação. Cria ferramentas de informática, dos softwares mais 
      básicos, como os usados para controle de estoques, até os mais complexos 
      sistemas de processamento de informações.`,
      `Também dá assistência aos usuários, manutenção a redes de computadores 
      e a conexões com a internet. Pode, ainda, implantar e gerenciar bancos 
      de dados e instalar sistemas de segurança para as operações de compra e 
      venda pela rede.`,
      <Button 
        variant="contained"
        color="secondary"
        text="Fonte"
        href="https://guiadoestudante.abril.com.br/profissoes/ciencia-da-computacao/"
        noShadow newTab
      />
    ]
  }, {
    title: 'Qual é o salário?',
    text: [
      `Todos os salários são médias mensais, podendo variar para baixo ou para cima`,
      <div>
        <b>Ganho no início</b>
        <ul>
          <li>Em pequenas ou médias empresas: de R$ 2 mil a R$ 4 mil.</li>
          <li>Em grandes empresas: de R$ 2 mil a R$ 4,5 mil. </li>
        </ul>
      </div>,
      <div>
        <b>Ganho escalão intermediário </b>
        <ul>
          <li>Em pequenas ou médias empresas: de R$ 5 mil a R$ 9 mil. </li>
          <li>Em grandes empresas: de R$ 6 mil a R$ 11 mil.</li>
        </ul>
      </div>,
      <div>
        <b>Ganho no auge</b>
        <ul>
          <li>Em pequenas ou médias empresas: de R$ 9 mil a R$ 14 mil.</li>
          <li>Em grandes empresas: de R$ 10 mil a R$ 15 mil. </li>
        </ul>
      </div>,
      <Button 
        variant="contained"
        color="secondary"
        text="Fonte"
        href="https://ultimosegundo.ig.com.br/educacao/guia-de-profissoes/ciencia-da-computacao/4edd0d5a51881c5a34000001.html"
        noShadow newTab
      />
    ],
  }
];

const cardsRight = [
  {
    title: 'Com o que posso trabalhar?',
    text: [
      `Existem diversos setores possíveis para trabalho dentro da ciência da
      computação, alguns deles são:`,
      <ul>
        <li><b>Banco de Dados</b></li>
        <li><b>Desenvolvimento de Sistemas</b></li>
        <li><b>Desenvolvimento mobile</b></li>
        <li><b>Manutenção de redes</b></li>
        <li><b>Marketing</b></li>
      </ul>
    ]
  }, {
    title: 'Veja o que estão discutindo!',
    text:
      <p style={{ color: 'gray' }}>
        <PostCard
          title='Eu tenho uma dúvida: o que é melhor entre ciência da computação e engenharia da computação?'
          message='Então gente, acho que bastantes usuários tem essa mesma dúvida então estou lançando aqui
            (claro que para me ajudar também 😅), quais são as diferenças entre os cursos, qual é melhor,
            qual eu...'
          user={{
            name: 'Vitor Bartier',
            image: 'bart.jpg'
          }}
          data='07 de Setembro de 2018'
          link='/vocare/post'
        />
      </p>
  }, {
    title: 'Quer saber mais sobre?',
    text: 'Abaixo temos um vídeo do Guia de Profissões sobre Ciência da Computação!',
    video: 'https://www.youtube.com/embed/e0mqSm6XKrI'
  }
]

export default AboutCourse;