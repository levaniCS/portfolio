import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <AboutMe />
      <Services />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
