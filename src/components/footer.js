import React from 'react';
import './footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn icon from Font Awesome

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
          <a href="https://www.linkedin.com/yourprofile">
            <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
          </a>
          <a href="https://www.github.com/yourusername">GitHub</a>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
