import React from 'react';

const AboutMe = () => {
  return (
    <section className='about' id='about'>
      <figure className='about__figure'>
        <img
          src={require('../assets/me.jpg')}
          alt='Person'
          className='about__img'
        />
      </figure>
      <div className='about__text'>
        <h3 className='heading-4'>About Me</h3>
        <p className='paragraph'>
          Hi, I'm levani, Web and Mobile applications developer. I have 2.5 years working experience.
          Keep working and lerning some amazing stuffs. Currently i'm Working as Web developer in <a className='paragraph' rel="noopener noreferrer" target="_blank" href="https://vobi.io/">VOBI</a>
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
