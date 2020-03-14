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
          Nature, in the broadest sense, is the natural, physical, or material
          world or universe. "Nature" can refer to the phenomena of the physical
          world, and also to life in general "Nature" can refer to the phenomena
          of the physical world, and also to life.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
