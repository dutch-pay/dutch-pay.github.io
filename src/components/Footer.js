import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import 'components/Footer.scss'

function Footer() {
  return (
    <footer>
    Designed and developed by Aree Oh, &nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aree-oh/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>&nbsp;&nbsp;
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/aria-grande">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    </footer>
  );
}

export default Footer;
