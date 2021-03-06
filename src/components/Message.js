import React from 'react';
import '../css/Message.css';

function Message(props) {
  return (
    <div className="message">
      <div className="userProfile">
        <div className="avatar">
          <img src={require('./assets/' + props.user.image)} alt="user"/>
          <span>{props.user.level}</span>
        </div>
        <p className="username">{props.user.name}</p>
        <p>{props.user.messages} mensagens</p>
      </div>
      <div className="messageData">
        {props.title && <h1>{props.title}</h1>}
        <label>{props.date} - {props.time}</label>
        <p>{props.message}</p>
        {props.children}
      </div>
    </div>
  );
}

export default Message;