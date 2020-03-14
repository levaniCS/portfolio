import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
      <div className='footer__connect'>
        <div className='follow'>
          <h3 className='section-header'>Follow me</h3>
          <p>let us be social</p>
          <div className='follow__icons'>
            <FaFacebookF className='follow__icon' />
            <FaGithub className='follow__icon' />
            <FaLinkedinIn className='follow__icon' />
            <FaTwitter className='follow__icon' />
          </div>
        </div>
        <div className='contacts'>
          <h3 className='section-header'>Contacts</h3>
          <div className='contacts__details'>
            <div className='contacts__detail'>
              <FaPhone className='contacts__icon' />
              <a className='contacts__link' href='tel:598-16-05-32'>
                598-16-05-32
              </a>
            </div>
            <div className='contacts__detail'>
              <FaEnvelope className='contacts__icon' />
              <a
                className='contacts__link'
                href='mailto:levanisarishvili3105@gmail.com'>
                levanisarishvili3105@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className='footer__copy'>
        Copyright &copy; All rights reserved | This website is made by{' '}
        <span>Levan Sarishvili</span>
      </p>
    </footer>
  );
};

export default Footer;
