import React from 'react';
import Paper from '@material-ui/core/Paper';
import '../css/Feature.css';

function Feature(props) {
  return (
    <Paper className="feature" elevation={4}>
      <div>
        <img src={require('./assets/' + props.icon)} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Paper>
  );
}

export default Feature;