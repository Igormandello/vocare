import React from 'react';
import '../css/Feature.css';

function Feature(props) {
  return (
    <div className="feature">
      <div>
        <img src={require('./assets/' + props.icon)} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Feature;