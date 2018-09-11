import React from 'react';
import '../css/Feature.css';

function Feature(props) {
  return (
    <div className="feature">
      <img src={props.content.icon} alt={props.content.title}/>
      <h3>{props.content.title}</h3>
      <p>{props.content.description}</p>
    </div>
  );
}

export default Feature;