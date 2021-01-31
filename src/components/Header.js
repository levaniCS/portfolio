import React from 'react';
import Typed from 'react-typed'
import Navigation from './Navigation';

const roles = [
  'Front end Developer', 
  'Creative thinker',
  'Back end Developer',
  'Tech Lover',
  'Mobile app Developer',
  'Team Player'
]

const Header = () => {
  return (
    <header className='header' id='home'>
      <Navigation />
      <div className='header__text'>
        <p className='paragraph'>Hi, I'm Levan Sarishvili</p>
        <Typed
          loop
          typeSpeed={60}
          backSpeed={60}
          strings={roles}
          backDelay={1000}
          loopCount={0}
          showCursor
          className="self-typed heading-4"
          cursorChar="|"
        />
        <a className='btn' href='#portfolio'>
          See My Works
        </a>
      </div>
    </header>
  );
};

export default Header;
