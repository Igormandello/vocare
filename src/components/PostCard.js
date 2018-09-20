import React from 'react';
import '../css/PostCard.css';

function PostCard(props) {
  return (
    <div className="postCard card">
      <div>
        <img src={require('./assets/' + props.image)} alt="user" className="card"/>
      </div>
      <div>
        <p className="title">
          {props.title}
        </p>
        <p>
          {props.message}
        </p>
      </div>
    </div>
  );
}

export default PostCard;