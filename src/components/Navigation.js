import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navigation = () => {
  const [isSticky, setSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className={`header__navsection${isSticky ? ' sticky' : ''}`}>
      <h3 className='header-3'>Levani</h3>
      <nav className='navigation'>
        <FaBars className='icon' size={25} onClick={handleToggle} />
        <ul
          className={`header__nav ${isExpanded ? 'is-expanded' : ''}`}
          id='navbar'>
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
          <li className='item close' onClick={handleToggle}>
            Close
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
