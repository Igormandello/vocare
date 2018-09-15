import React from 'react';
import '../css/Card.css';

function Card(props) {
  let textArr = [];
  if (!Array.isArray(props.text))
    textArr.push(<p>{props.text}</p>);
  else
    props.text.forEach(element => textArr.push(<p>{element}</p>));

  return (
    <div className='card'>
      <h2>{props.title}</h2>
      {textArr}
    </div>
  );
}

export default Card;