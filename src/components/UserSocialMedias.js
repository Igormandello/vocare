import React from 'react';
import Button from './Button';
import '../css/UserSocialMedias.css';

function UserSocialMedias(props) {
  let actives = [];
  if (!props.actives || !Array.isArray(props.actives))
    for (let n = 0; n < 5; n++)
      actives.push(false);
  else
    for (let n = 0; n < 5; n++)
      if (props.actives[n])
        actives.push(true);
      else
        actives.push(false);

  return (
    <ul className="userSocialMedias">
      <Button className={actives[0] ? 'active' : ''} >
        <img src={require('./assets/google.svg')} alt="google plus"/>
      </Button>
      <Button className={actives[1] ? 'active' : ''}>
        <img src={require('./assets/github.svg')} alt="github" />
      </Button>
      <Button className={actives[2] ? 'active' : ''}>
        <img src={require('./assets/reddit.svg')} alt="reddit" />
      </Button>
      <Button className={actives[3] ? 'active' : ''}>
        <img src={require('./assets/twitter.svg')} alt="twitter" />
      </Button>
      <Button className={actives[4] ? 'active' : ''}>
        <img src={require('./assets/facebook.svg')} alt="facebook" />
      </Button>
    </ul>
  );
}

export default UserSocialMedias;