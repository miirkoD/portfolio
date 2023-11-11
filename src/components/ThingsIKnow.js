import React, { useEffect } from 'react';
import './ThingsIKnow.css';

const ThingsIKnow = () => {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const rowOne = document.querySelector('.row-one');

        if (entry.isIntersecting) {
          rowOne.classList.add('visible');
        } else {
          rowOne.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, 
    });

    const rowOne = document.querySelector('.row-one');
    observer.observe(rowOne);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="two-row-content">
      <div className="row-one">
        <h1>Graficki dizajn</h1>
        <p>Ovo su neki od mojih radova</p>

        <div className="gallery">
          <div className="gallery-item">
            <a href="https://www.instagram.com/takomotorsdoo/">
              <img src="/work1.png" alt="Design 1" id='image1'/>
            </a>
          </div>
          <div className="gallery-item">
            <a href="https://www.instagram.com/tutacop/">
              <img src="/work2.png" alt="Design 2" id='image2'/>
            </a>
          </div>
          <div className="gallery-item">
            <img src="/work3.png" alt="Design 3" />
          </div>
        </div>
      </div>

      <div className="row-two">
        <h1>Ovo su neki od mojih dosadasnjih radova</h1>
        <p></p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default ThingsIKnow;
