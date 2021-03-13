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
          <p>let me be social</p>
          <div className='follow__icons'>
            <a
              href='https://www.facebook.com/levani.sarishvili.96'
              target='_blank'
              rel='noopener noreferrer'>
              <FaFacebookF className='follow__icon' />
            </a>
            <a
              href='https://github.com/levaniCS'
              target='_blank'
              rel='noopener noreferrer'>
              <FaGithub className='follow__icon' />
            </a>
            <a
              href='https://www.linkedin.com/in/levani-sarishvili-632747199/'
              target='_blank'
              rel='noopener noreferrer'>
              <FaLinkedinIn className='follow__icon' />
            </a>
            <a
              href='https://twitter.com/levani3105'
              target='_blank'
              rel='noopener noreferrer'>
              <FaTwitter className='follow__icon' />
            </a>
          </div>
        </div>
        <div className='contacts'>
          <h3 className='section-header'>Contacts</h3>
          <div className='contacts__details'>
            <div className='contacts__detail'>
              <FaPhone className='contacts__icon' />
              <a className='contacts__link' href='tel:571-19-90-69'>
                571-19-90-69
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
        <a href='#home'>Levan Sarishvili</a>
      </p>
    </footer>
  );
};

export default Footer;
