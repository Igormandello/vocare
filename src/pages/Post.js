import React from 'react';
import Paper from '@material-ui/core/Paper';
import UserHeader from '../components/UserHeader';
import Message from '../components/Message';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Post.css';

function Post() {
  let answers = [];
  post.answers.forEach(answer => answers.push(<Message {...answer} />))

  return (
    <div className="post">
      <UserHeader />
      <section className="row">
        <div className="messages">
          <Message {...post.question}>
            <Button text="Responder"/>
          </Message>
          <h1>Respostas</h1>
          <div className="answers">
            {answers}
          </div>
        </div>
        <div className="optionsColumn">
          <Button text="Voltar para a discussão" href="/vocare/discussion" />
          <Paper/>
          <Paper/>
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

const users = {
  bart: {
    name: 'Vitor Bartier',
    level: 3,
    messages: 666,
    image: 'bart.jpg'
  },

  igor: {
    name: 'Igor Mandello',
    level: 3,
    messages: 333,
    image: 'igor.jpg'
  },

  hideki: {
    name: 'Lucas Hideki',
    level: 4,
    messages: 757,
    image: 'hideki.jpg'
  },
};

const post = {
  question: {
    title: 'Eu tenho uma dúvida: o que é melhor entre ciência da computação e engenharia da computação?',
    date: '04/09/2018',
    time: '19h02',
    message: `Então gente, acho que bastantes usuários tem essa mesma dúvida então estou lançando aqui
      (claro que para me ajudar também 😅), quais são as diferenças entre os cursos, qual é melhor,
      qual eu deveria cursar? Se alguém conseguir ajudar ficaria bem feliz!! `,
    user: users.bart
  },
  answers: [
    {
      date: '04/09/2018',
      time: '19h32',
      message: `Olha cara, eu to com a mesma dúvida que você, e sinceramente, eu
        estou indo mais para o lado da ciência, estou fazendo isso porque a carga
        horária, além de ser menor, é mais viável para mim, pois fiz técnico e 
        gostaria de estagiar também... Outro motivo também é o currículo, já que
        em engenharia, acabamos tendo matérias que eu não gostaria de fazer, como
        física e química.`,
      user: users.igor
    }, {
      date: '04/09/2018',
      time: '20h17',
      message: `Oi galera! Estou cursando o bacharel em ciência da computação e estou
        gostando bastante da decisão que fiz. Quando precisei acatar qual curso eu iria
        escolher, fui bastante pelo ponto do Igor, por isso estou fazendo esse. Mas na
        faculdade tenho amigos que fazem engenharia também, e eles dizem que não é tão ruim,
        apenas mais puxado.`,
      user: users.hideki
    }, {
      date: '05/09/2018',
      time: '12h45',
      message: `Obrigado gente 😄! As respostas ajudaram bastante, agora vou dar uma pensada
        melhor e ver se eu chego em uma conclusão, qualquer coisa, vou reabrir essa discussão.`,
      user: users.bart
    }
  ]
}

export default Post;