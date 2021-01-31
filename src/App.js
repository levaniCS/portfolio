import React, { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return (
    <div className='container'>
      {isScrolled ? (
        <a href='#home' className='upBtn upBtn--white'>
          <FaAngleDoubleUp className='upBtn__icon' />
        </a>
      ) : null}
      <Header />
      <Skills />
      <AboutMe />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
