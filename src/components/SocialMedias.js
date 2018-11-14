import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import '../css/SocialMedias.css';

function SocialMedias(props) {
  return (
    <ul className={'socialMedias' + (props.invert ? ' inverse' : '')}>
      <IconButton color={props.invert ? 'secondary' : 'primary'} target="_blank" href="https://twitter.com/vocare8" aria-label="Access our Twitter">
        <img src={require('./assets/twitter.svg')} alt="twitter"/>
      </IconButton>
      <IconButton color={props.invert ? 'secondary' : 'primary'} target="_blank" href="https://facebook.com/vocarectc" aria-label="Access our Facebook">
        <img src={require('./assets/facebook.svg')} alt="facebook"/>
      </IconButton>
    </ul>
  );
}

export default SocialMedias;