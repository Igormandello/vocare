import React from 'react';
import Button from './Button';
import '../css/UserSocialMedias.css';

function UserSocialMedias(props) {
  return (
    <ul class="userSocialMedias">
      <Button>
        <img src="google.svg" alt="google plus"/>
      </Button>
      <Button>
        <img src="github.svg" alt="github"/>
      </Button>
      <Button>
        <img src="reddit.svg" alt="reddit"/>
      </Button>
      <Button>
        <img src="twitter.svg" alt="twitter"/>
      </Button>
      <Button>
        <img src="facebook.svg" alt="facebook"/>
      </Button>
    </ul>
  );
}

export default UserSocialMedias;