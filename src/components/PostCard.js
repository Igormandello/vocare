import React from 'react';
import '../css/PostCard.css';

function PostCard(props) {
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

export default PostCard;