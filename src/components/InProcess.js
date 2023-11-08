import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './InProgress.css';

const InProgress = () => {
  return (
    <div className="in-progress-container">
      <div className="in-progress-content">
        <h2>Portfolio in Progress</h2>
        <p>
          My portfolio is currently under construction. Please check back later to see my work and projects. <br/>
          Until then, follow me on{' '}
          <a href="https://www.instagram.com/dabarcic_m/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default InProgress;
