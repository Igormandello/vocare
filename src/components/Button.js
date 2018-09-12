import React from 'react';
import '../css/Button.css';

function Button(props) {
  return (
    <a className={'button' + (props.fill ? ' btn-filled' : '')} 
      href={props.href}
      target={props.newTab ? '_blank' : '_self'}
      rel={props.newTab ? 'noopener noreferrer' : ''}>
      {props.text}
      {props.children}
    </a>
  );
}

export default Button;