import React from 'react';
import Button from './Button';
import '../css/SocialMedias.css';

function SocialMedias(props) {
  return (
    <ul className={'socialMedias' + (props.invert ? ' inverse' : '')}>
      <Button href="https://twitter.com/vocare8" newTab>
        <img src={require('./assets/twitter.svg')} alt="twitter"/>
      </Button>
      <Button href="https://facebook.com/vocarectc" newTab>
        <img src={require('./assets/facebook.svg')} alt="facebook"/>
      </Button>
    </ul>
  );
}

export default SocialMedias;