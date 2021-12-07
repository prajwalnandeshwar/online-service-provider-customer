import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer class='footer-Bg  fixed-bottom '>
      <div
        className='container-fluid px-0
       px-md-5'
      >
        <div class='d-flex justify-content-between align-items-center'>
          <div className=''>
            <a class='navbar-brand text-light fs-4 ps-3 ps-md-0' href='#'>
              Contact With Us
            </a>
          </div>
          <div className='fs-1 text-light'>
            <FontAwesomeIcon className='mx-2 px-1' icon={faFacebook} />
            <FontAwesomeIcon className='mx-2 px-1' icon={faTwitter} />
            <FontAwesomeIcon className='mx-2 px-1' icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
