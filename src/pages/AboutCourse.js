import React from 'react';
import UserHeader from '../components/UserHeader';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import '../css/AboutCourse.css';

class AboutCourse extends React.Component {
  constructor(props) {
    super(props);

    this.cardsLeft = this.cardsRight = [];
    cardsLeft.forEach(card => this.cardsLeft.push(<CourseCard {...card} />));
    cardsRight.forEach(card => this.cardsRight.push(<CourseCard {...card} />));
  }

  render () {
    return (
      <div className="aboutCourse">
        <UserHeader />
        <section>
          <h1>Ciência da Computação</h1>
          <img src="computerScience.png" alt="course"/>
        </section>
        <section>
          <div>
            {this.cardsLeft}
          </div>
          <div>
            {this.cardsRight}
          </div>
        </section>
        <Footer fill />
      </div>
    );
  }
}

const cardsLeft = [
  {
    title: 'Uma pergunta aqui?',
    text: [
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`
    ]
  }, {
    title: 'Uma pergunta aqui?',
    text: `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
  }, {
    title: 'Uma pergunta aqui?',
    text: [
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`
    ]
  }
];

const cardsRight = [
  {
    title: 'Onde posso trabalhar?',
    text: `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
  }, {
    title: 'O que é o curso?',
    text: `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
  }, {
    title: 'Uma pergunta aqui?',
    text: [
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
      `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`,
    ]
  }, {
    title: 'Uma pergunta aqui?',
    text: `No entanto, não podemos esquecer que a crescente influência da mídia 
      faz parte de um processo de gerenciamento das diretrizes de desenvolvimento 
      para o futuro.`
  }
]

export default AboutCourse;