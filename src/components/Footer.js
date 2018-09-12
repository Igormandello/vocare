import React from 'react';
import SocialMedias from './SocialMedias';
import '../css/Footer.css';

function Footer(props) {
  return (
    <footer className={'footer' + (props.fill ? ' footer-filled' : '')}>
      <p>© Vocare 2018. Alguns direitos reservados.</p>
      <SocialMedias />
    </footer>
  );
}

export default Footer;