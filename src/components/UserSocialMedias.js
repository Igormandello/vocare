import React from 'react';
import Button from './Button';
import '../css/UserSocialMedias.css';

function UserSocialMedias(props) {
  return (
    <ul className="userSocialMedias">
      <Button>
        <img src={require('./assets/google.svg')} alt="google plus"/>
      </Button>
      <Button>
        <img src={require('./assets/github.svg')} alt="github"/>
      </Button>
      <Button>
        <img src={require('./assets/reddit.svg')} alt="reddit"/>
      </Button>
      <Button>
        <img src={require('./assets/twitter.svg')} alt="twitter"/>
      </Button>
      <Button>
        <img src={require('./assets/facebook.svg')} alt="facebook"/>
      </Button>
    </ul>
  );
}

export default UserSocialMedias;