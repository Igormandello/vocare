import React from 'react';
import '../css/Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <p>© Vocare 2018. Alguns direitos reservados.</p>
      <ul>
        <a href="https://twitter.com" rel="noopener noreferrer" target="_blank">
          <img src="twitter.svg" alt="twitter"/>
        </a>
        <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
          <img src="facebook.svg" alt="facebook"/>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;