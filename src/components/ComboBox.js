import React from 'react';
import '../css/ComboBox.css';

function ComboBox(props) {
  let selectOptions = []
  if (props.options && Array.isArray(props.options))
    props.options.forEach(option => selectOptions.push(<option>{option}</option>));

  return (
    <div className="comboBox">
      <label>{props.label}</label>
      <select>
        {selectOptions}
      </select>
    </div>
  );
}

export default ComboBox;