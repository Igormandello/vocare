import React from 'react';
import '../css/ComboBox.css';

function ComboBox(props) {
  let selectOptions = []
  if (props.options && Array.isArray(props.options))
    props.options.forEach((option, i) => selectOptions.push(<option key={i}>{option}</option>));

  return (
    <div className="comboBox">
      <label>{props.label}</label>
      <select>
        {selectOptions}
      </select>
      <img src={require('./assets/downarrow.svg')} alt="down arrow"/>
    </div>
  );
}

export default ComboBox;