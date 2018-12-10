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
  const complete = (i) => i < 10 ? '0' + i : i;

  if (String(post.id) !== requested && !error)
    props.viewPost(requested, access_token);

  let ids = new Set();
  for (let comment of post.comments)
    if (!users[comment.user_id])
      ids.add(comment.user_id);

  let postComponent;
  if (post.user_id)
    if (!users[post.user_id])
      ids.add(post.user_id);
    else {
      const { posted_on, message, user_id, title } = post;
      const { username, profile_picture, level, messages } = users[user_id];
      const date = new Date(posted_on);

      postComponent = <Message
        message={message}
        title={title}
        date={[complete(date.getDate()), complete(date.getMonth() + 1), date.getFullYear()].join('/')}
        time={complete(date.getHours()) + 'h' + complete(date.getMinutes())}
        user={{
          name: username,
          level: level,
          messages: messages,
          image: profile_picture
        }}
      >
        <Button text="Responder"/>
      </Message>;
    }

  let comments = [];
  if (ids.size !== 0)
    props.fetchUsers(Array.from(ids));
  else
    post.comments.forEach(comment => {
      const { id, commented_on, message, user_id } = comment;
      const { username, profile_picture, level, messages } = users[user_id];
      const date = new Date(commented_on);

      comments.push(<Message key={id}
        message={message}
        date={[complete(date.getDate()), complete(date.getMonth() + 1), date.getFullYear()].join('/')}
        time={complete(date.getHours()) + 'h' + complete(date.getMinutes())}
        user={{
          name: username,
          level: level,
          messages: messages,
          image: profile_picture
        }}
      />);
    });

  return (
    <div className="post">
      <UserHeader />
      <section className="row">
        <div className="messages">
          {postComponent}
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
    users: state.users.users
  }),
  { viewPost, fetchUsers }
)(Post);