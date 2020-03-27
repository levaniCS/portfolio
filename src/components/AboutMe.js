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
          Hi, I'm levani, second year unuversity student. I study at Tbilisi
          state University - Computer science. I have almost One year working
          experience as front-end developer. I’m highly motivated and have
          willing to study modern technologyes and improve my skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
