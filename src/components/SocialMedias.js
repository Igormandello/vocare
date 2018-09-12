import React from 'react';
import Button from './Button';
import '../css/SocialMedias.css';

function SocialMedias(props) {
  return (
    <ul class="socialMedias">
      <Button href="https://twitter.com" newTab>
        <img src="twitter.svg" alt="twitter"/>
      </Button>
      <Button href="https://facebook.com" newTab>
        <img src="facebook.svg" alt="facebook"/>
      </Button>
    </ul>
  );
}

export default SocialMedias;