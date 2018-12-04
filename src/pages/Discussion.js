import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions';
import { fetchUsers } from '../actions/usersActions';
import Paper from '@material-ui/core/Paper';
import UserHeader from '../components/UserHeader';
import ComboBox from '../components/ComboBox';
import PostCard from '../components/PostCard';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Discussion.css';

class Discussion extends Component {
  constructor(props) {
    super(props);
    props.fetchPosts();
  }

  render() {
    const { posts, users } = this.props;
    let ids = new Set();
    for (let post of posts.posts)
      if (!users[post.user_id])
        ids.add(post.user_id);

    let postsElements = [];
    if (ids.size !== 0)
      this.props.fetchUsers(Array.from(ids));
    else {
      const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];

      posts.posts.forEach((post, i) => {
        const { posted_on, message, title, user_id } = post;
        const { username, profile_picture } = users[user_id];

        let data = new Date(posted_on);
        let d = data.getDay();
        let dataString = (d < 10 ? '0' : '') + d + ' de ' + months[data.getMonth()] + ' de ' + data.getFullYear();

        postsElements.push(
          <PostCard key={i} 
            title={title}
            message={message}
            data={dataString}
            user={{           
              name: username,
              image: profile_picture
            }}
            link='/vocare/post'
          />
        )}
      );
    }

    return (
      <div className="discussion">
        <UserHeader />
        <section className="info">
          <h1>Discussão</h1>
          <p>Aqui você pode discutir com outros usuários e finalmente decidir o que você mais gosta de fazer!</p>
        </section>
        <section className="filters">
          <ComboBox label="Filtrar por:" options={['Áreas de interesse', 'Exatas', 'Humanas', 'Biológicas']}/>
          <ComboBox label="Ordenar por:" options={['Mais recente', 'Mais antigo']}/>
        </section>
        <section className="posts row">
          <div className="postCards">
            {postsElements}
            <span></span>
          </div>
          <div className="optionsColumn">
            <Button text="Criar novo post"/>
            <Paper/>
            <Paper/>
          </div>
        </section>
        <Footer fill />
      </div>
    );
  }
}

const posts = [
  {
    key: 1,
    title: 'Eu tenho uma dúvida: o que é melhor entre ciência da computação e engenharia da computação?',
    message: `Então gente, acho que bastantes usuários tem essa mesma dúvida então estou lançando aqui
      (claro que para me ajudar também 😅), quais são as diferenças entre os cursos, qual é melhor,
      qual eu...`,
    data: '07 de Setembro de 2018',
    user: {
      name: 'Vitor Bartier',
      image: 'bart.jpg'
    },
    link: '/vocare/post'
  }, {
    key: 2,
    title: 'Análise e Desenvolvimento de Sistemas vale a pena?',
    message: `Galera, tava bem em dúvida entre ela, ciência da computação e engenharia da computação,
      hoje em dia ainda vale a pena fazer esse curso? Se sim, por quê? Obrigado.`,
    data: '03 de Setembro de 2018',
    user: {
      name: 'Igor Mandello',
      image: 'igor.jpg'
    },
    link: '/vocare/post'
  }, {
    key: 3,
    title: 'Engenharia da Computação é muito corrido?',
    message: `Eu estou terminando meu técnico e provavelmente vou estagiar, será que se eu escolher
      cursar Engenharia, eu vou acabar não dando conta do trabalho?`,
    data: '28 de Agosto de 2018',
    user: {
      name: 'Lucas Valente',
      image: 'valente.jpg'
    },
    link: '/vocare/post'
  }
]

export default connect(
  (state) => ({ users: state.users, posts: state.posts }),
  { fetchPosts, fetchUsers }
)(Discussion);