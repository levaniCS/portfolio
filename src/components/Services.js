import React from 'react';
import { FaHtml5, FaMobile, FaLaptop } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='services' id='services'>
      <h4 className='heading-4'>This is what i can to do for you</h4>
      <div className='boxes'>
        <div className='services-box'>
          <FaHtml5 className='services-box__icon' />
          <h3 className='services-box__name'>Front-end development</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>Modern CSS technologies</li>
            <li className='services-box__item'>Highly responsive layout</li>
            <li className='services-box__item'>
              Reusable and Maintainable code
            </li>
            <li className='services-box__item'>Clear and Modern Animations</li>
          </ul>
        </div>
        <div className='services-box'>
          <FaLaptop className='services-box__icon' />
          <h3 className='services-box__name'>Web Applications</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>
              Develop new user-facing features
            </li>
            <li className='services-box__item'>
              Optimize application for maximum speed and scalability
            </li>
            <li className='services-box__item'>
              Maintainable and Reusable code
            </li>
            <li className='services-box__item'>
              Plan and accommodate all mediums, screen sizes and device types
            </li>
          </ul>
        </div>
        <div className='services-box'>
          <FaMobile className='services-box__icon' />
          <h3 className='services-box__name'>Mobile Applications</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>
              React Native development for iPhones, Tablets, and Android
            </li>
            <li className='services-box__item'>
              Diagnose and fix bugs and performance issues
            </li>
            <li className='services-box__item'>
              Experience integrating with third-party libraries, frameworks, and
              API
            </li>
            <li className='services-box__item'>Publishing Your app</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
