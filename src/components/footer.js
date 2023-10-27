import React from 'react';
import './footer.css';
import SocialIcons from './SocialIcon'; // Import the SocialIcons component


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
          <SocialIcons /> 
        </div>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
