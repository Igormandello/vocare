import React from 'react';
import Button from './Button';
import '../css/UserSocialMedias.css';

function UserSocialMedias(props) {
  let actives = [];
  if (!props.actives || !Array.isArray(props.actives))
    for (let n = 0; n < 5; n++)
      actives.push({ variant: 'outlined' });
  else
    for (let n = 0; n < 5; n++)
      if (props.actives[n])
        actives.push({ variant: 'contained', className: 'active' });
      else
        actives.push({ variant: 'outlined' });

  return (
    <ul className="userSocialMedias">
      <Button {...actives[0]}>
        <img src={require('./assets/google.svg')} alt="google plus"/>
      </Button>
      <Button {...actives[1]}>
        <img src={require('./assets/github.svg')} alt="github" />
      </Button>
      <Button {...actives[2]}>
        <img src={require('./assets/reddit.svg')} alt="reddit" />
      </Button>
      <Button {...actives[3]}>
        <img src={require('./assets/twitter.svg')} alt="twitter" />
      </Button>
      <Button {...actives[4]}>
        <img src={require('./assets/facebook.svg')} alt="facebook" />
      </Button>
    </ul>
  );
}

export default UserSocialMedias;