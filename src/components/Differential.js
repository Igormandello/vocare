import React from 'react';
import '../css/Differential.css';

function Differential(props) {
  return (
    <div className="differential">
        <img src={props.image} alt={props.title} />
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    </div>
  );
}

export default Differential;