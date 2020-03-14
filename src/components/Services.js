import React from 'react';
import { FaHtml5, FaMobile, FaLaptop } from 'react-icons/fa';

const Services = () => {
  return (
    <section className='services' id='services'>
      <h4 className='heading-4'>This is what i can to do for you</h4>
      <div className='boxes'>
        <div className='services-box'>
          <FaHtml5 className='services-box__icon' />
          <h3 className='services-box__name'>Mark Up</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>Modern CSS technologies</li>
            <li className='services-box__item'>Highly responsive layout</li>
            <li className='services-box__item'>Reusable code</li>
            <li className='services-box__item'>Easy project architecture</li>
          </ul>
        </div>
        <div className='services-box'>
          <FaLaptop className='services-box__icon' />
          <h3 className='services-box__name'>Web Applications</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>
              Maintainable and Reusable code
            </li>
            <li className='services-box__item'>1 reason</li>
            <li className='services-box__item'>1 reason</li>
          </ul>
        </div>
        <div className='services-box'>
          <FaMobile className='services-box__icon' />
          <h3 className='services-box__name'>Mobile Applications</h3>
          <ul className='services-box__text'>
            <li className='services-box__item'>Android Applications</li>
            <li className='services-box__item'>IOS Applications</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
