import React from 'react';
import '../css/Post.css';

function Post(props) {
  return (
    <div className="post">
      <img src={props.image} alt="user"/>
      <div>
        <p>
          {props.title}
        </p>
        <p>
          {props.message}
        </p>
      </div>
    </div>
  );
}

export default Post;