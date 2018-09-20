import React from 'react';
import UserHeader from '../components/UserHeader';
import ComboBox from '../components/ComboBox';
import PostCard from '../components/PostCard';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Discussion.css';

function Discussion() {
  let postsElements = [];
  posts.forEach(post => postsElements.push(<PostCard {...post}/>));

  return (
    <div className="discussion">
      <UserHeader />
      <section className="info">
        <h1>Discussão</h1>
        <p>lorem lorem lorem lorem lorem lorem lorem</p>
      </section>
      <section className="filters">
        <ComboBox label="Filtrar por:" />
        <ComboBox label="Ordenar por:" />
      </section>
      <section className="posts">
        <div className="postCards">
          {postsElements}
          <span></span>
        </div>
        <div className="optionsColumn">
          <Button text="Criar novo post"/>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <Footer fill />
    </div>
  );
}

const posts = [
  {
    title: 'O que é melhor? Ciência da Computação ou Engenharia?',
    message: 'Lorem lorem lorem é ipsum dolor sit amet, lorem lorem lorem',
    image: 'bart.jpg',
    link: '/post'
  }, {
    title: 'O que é melhor? Ciência da Computação ou Engenharia?',
    message: 'Lorem lorem lorem é ipsum dolor sit amet, lorem lorem lorem',
    image: 'bart.jpg',
    link: '/post'
  }, {
    title: 'O que é melhor? Ciência da Computação ou Engenharia?',
    message: 'Lorem lorem lorem é ipsum dolor sit amet, lorem lorem lorem',
    image: 'bart.jpg',
    link: '/post'
  }
]

export default Discussion;