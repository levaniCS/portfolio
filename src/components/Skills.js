import React, { Component } from 'react';
import LineProgresBar from './LineProgressBar';

class Skills extends Component {
  state = {
    html: 95,
    css: 87,
    sass: 80,
    js: 70,
    react: 76,
    rn: 65
  };

  render() {
    return (
      <main className='skills' id='skills'>
        <h4 className='heading-4'>My skills</h4>
        <div className='skills__box'>
          <div className='item'>
            <img
              src={require('../assets/html.png')}
              alt='html'
              className='item__img'
            />
            <p className='item__name'>html 5</p>
            <LineProgresBar percentage={this.state.html} />
          </div>
          <div className='item'>
            <img
              src={require('../assets/css.png')}
              alt='css'
              className='item__img'
            />
            <p className='item__name'>css 3</p>
            <LineProgresBar percentage={this.state.css} />
          </div>
          <div className='item'>
            <img
              src={require('../assets/sass.png')}
              alt='sass'
              className='item__img'
            />
            <p className='item__name'>sass</p>
            <LineProgresBar percentage={this.state.sass} />
          </div>
          <div className='item'>
            <img
              src={require('../assets/js.png')}
              alt='js'
              className='item__img'
            />
            <p className='item__name'>Javascript</p>
            <LineProgresBar percentage={this.state.js} />
          </div>
          <div className='item'>
            <img
              src={require('../assets/react.png')}
              alt='react'
              className='item__img'
            />
            <p className='item__name'>React</p>
            <LineProgresBar percentage={this.state.react} />
          </div>
          <div className='item'>
            <img
              src={require('../assets/rn2.png')}
              alt='rn'
              className='item__img'
            />
            <p className='item__name'>React-native</p>
            <LineProgresBar percentage={this.state.rn} />
          </div>
        </div>
      </main>
    );
  }
}

export default Skills;
