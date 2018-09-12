import React from 'react';
import '../css/Differential.css';

function Differential(props) {
  return (
    <div className="differential">
        <img src={props.content.image} alt={props.content.title} />
        <div>
            <h3>{props.content.title}</h3>
            <p>{props.content.text}</p>
        </div>
    </div>
  );
}

export default Differential;