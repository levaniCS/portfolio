import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <nav className={`header__navsection${isSticky ? ' sticky' : ''}`}>
      <h3 className='header-3'>Levani</h3>
      <ul className='header__nav' id='navbar'>
        <li className='item'>
          <a href='#home'>Home</a>
        </li>
        <li className='item'>
          <a href='#about'>About Me</a>
        </li>
        <li className='item'>
          <a href='#services'>Services</a>
        </li>
        <li className='item'>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li className='item'>
          <a href='#skills'>Skills</a>
        </li>
        <li className='item'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
