import React from 'react';
import { connect } from 'react-redux';
import { viewPost } from '../actions/postsActions';
import { fetchUsers } from '../actions/usersActions';
import Paper from '@material-ui/core/Paper';
import UserHeader from '../components/UserHeader';
import Message from '../components/Message';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/Post.css';

function Post(props) {
  const { post, error, access_token, users } = props;
  const requested = props.match.params.id;
  if (String(post.id) !== requested && !error)
    props.viewPost(requested, access_token);

  let ids = new Set();
  for (let comment of post.comments)
    if (!users[comment.user_id])
      ids.add(comment.user_id);

  let comments = [];
  console.log(ids);
  if (ids.size !== 0)
    props.fetchUsers(Array.from(ids));
  else
    post.comments.forEach(comment => {
      const { id, commented_on, message, user_id } = comment;
      console.log(users, user_id);
      const { username, profile_picture, level } = users[user_id];

      const complete = (i) => i < 10 ? '0' + i : i;
      const date = new Date(commented_on);

      comments.push(<Message key={id}
        message={message}
        date={[complete(date.getDate()), complete(date.getMonth() + 1), date.getFullYear()].join('/')}
        time={complete(date.getHours()) + 'h' + complete(date.getMinutes())}
        user={{
          name: username,
          level: level,
          messages: 0,
          image: profile_picture
        }}
      />);
    });

  return (
    <div className="post">
      <UserHeader />
      <section className="row">
        <div className="messages">
          {/*<Message {...post.question}>
            <Button text="Responder"/>
          </Message>*/}
          <h1>Respostas</h1>
          <div className="answers">
            {comments}
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

export default connect(
  (state) => ({ 
    post: state.posts.loadedPost,
    error: state.posts.error,
    access_token: state.auth.user.access_token,
    users: state.users
  }),
  { viewPost, fetchUsers }
)(Post);