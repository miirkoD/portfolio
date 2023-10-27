import React from 'react';
import './footer.css';
import SocialIcons from './SocialIcons'; // Import the SocialIcons component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import the GitHub icon

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Your Name</h4>
          <p>Email: your.email@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className="footer-links">
          <a href="https://www.yourportfoliowebsite.com">Portfolio</a>
          <SocialIcons /> 
          <a href="https://github.com/yourusername">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
