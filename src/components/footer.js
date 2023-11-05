import React from 'react';
import './footer.css';
import SocialIcons from './SocialIcon'; // Import the SocialIcons component


const Footer = () => {
  return (
    <footer>
       <div className="footer-links">
          <SocialIcons /> 
        </div>
      <div className="footer-content">
        <div className="footer-contact">
          <p>Email: mirkodwork@gmail.com</p>
          <p>Phone: +381 65-591-2434</p>
        </div>
       
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Mirko Dabarčić. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
