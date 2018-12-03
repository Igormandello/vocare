import React, { Component } from 'react';
import '../css/Input.css';

class Input extends Component {
  getValue = () => {
    return this.refs.input.value;
  }

  render() {
    let inputObj = Object.assign({}, this.props);
    delete inputObj.label;
    delete inputObj.type;

    return (
      <div className="input">
        { 
          this.props.label &&
          <label>{this.props.label}</label>
        }
        {
          this.props.type === 'textarea' ? <textarea ref="input"></textarea> : (
            <input ref="input" {...inputObj} type={this.props.type ? this.props.type : 'text'}/>
          )
        }
      </div>
    );
  }
}

export default Input;