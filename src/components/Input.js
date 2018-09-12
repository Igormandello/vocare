import React from 'react';
import '../css/Input.css';

function Input(props) {
  let inputObj = Object.assign({}, props);
  delete inputObj.label;
  delete inputObj.type;

  return (
    <div className="input">
      { 
        props.label &&
        <label>{props.label}</label>
      }
      {
        props.type === 'textarea' ? <textarea></textarea> : (
          <input {...inputObj} type={props.type ? props.type : 'text'}/>
        )
      }
    </div>
  );
}

export default Input;