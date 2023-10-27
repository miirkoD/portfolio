import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/yourprofile">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/miirkoD"> 
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default SocialIcons;
