import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header' id='home'>
      <Navigation />
      <div className='header__text'>
        <p className='paragraph'>Hi, I'm Levan Sarishvili</p>
        <h4 className='heading-4'>Web and Mobile app developer</h4>
        <a className='btn' href='#portfolio'>
          See My Works
        </a>
      </div>
    </header>
  );
};

export default Header;
