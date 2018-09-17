import React from 'react';
import '../css/Differential.css';

function Differential(props) {
  return (
    <div className="differential">
      <div>
        <img src={require('./assets/' + props.image)} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Differential;