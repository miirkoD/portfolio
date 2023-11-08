import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <a href="https://www.linkedin.com">  {/*adding link to icon  */}
        <FontAwesomeIcon icon={faLinkedin} />  {/*  the icon*/}
      </a>
      <a href="https://github.com/miirkoD"> {/*adding link to icon  */}
        <FontAwesomeIcon icon={faGithub} />{/*  the icon*/}
      </a>
    </div>
  );
};

export default SocialIcons;
