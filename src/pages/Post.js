import React from 'react';
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
      <section>
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
          <Button text="Voltar para a discussão" href="/discussion" />
          <div></div>
          <div></div>
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
    level: 4,
    messages: 333,
    image: 'igor.jpg'
  }
};

const post = {
  question: {
    title: 'Eu tenho uma dúvida: o que é melhor entre a e b?',
    date: '04/09/2018',
    time: '19h00',
    message: `Lorem Ipsum is simply dummy text of the printing and typesetting 
      industry. Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type and 
      scrambled it to make a type specimen book. It has survived not only 
      five centuries, but also the leap into electronic typesetting, remaining 
      essentially unchanged. It was popularised in the 1960s with the release 
      of Letraset sheets containing Lorem Ipsum passages, and more recently 
      with desktop publishing software like Aldus PageMaker including versions 
      of Lorem Ipsum.
    `,
    user: users.bart
  },
  answers: [
    {
      date: '04/09/2018',
      time: '19h00',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only 
        five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release 
        of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions 
        of Lorem Ipsum.
      `,
      user: users.igor
    }, {
      date: '04/09/2018',
      time: '19h00',
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and 
        scrambled it to make a type specimen book. It has survived not only 
        five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release 
        of Letraset sheets containing Lorem Ipsum passages, and more recently 
        with desktop publishing software like Aldus PageMaker including versions 
        of Lorem Ipsum.
      `,
      user: users.bart
    }
  ]
}

export default Post;