import React from 'react';
import Button from './Button';
import '../css/Author.css';

function Author(props) {
  return (
    <div className="author">
        <img src={props.content.picture} alt={props.content.name} />
        <h3>{props.content.name}</h3>
        <p>{props.content.description}</p>
        <Button text="Sobre mim" href={props.content.github} newTab />
    </div>
  );
}

export default Author;