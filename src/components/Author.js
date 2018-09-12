import React from 'react';
import Button from './Button';
import '../css/Author.css';

function Author(props) {
  return (
    <div className="author">
        <img src={props.picture} alt={props.name} />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Button text="Sobre mim" href={props.github} newTab />
    </div>
  );
}

export default Author;