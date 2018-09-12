import React from 'react';
import '../css/Feature.css';

function Feature(props) {
  return (
    <div className="feature">
      <img src={props.icon} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Feature;