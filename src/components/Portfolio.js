import React, { Component } from 'react';
import ProjectItem from '../components/ProjectItem';
import { PROJECTS } from '../data/data__projects';

class Portfolio extends Component {
  state = {
    current: 'markup',
  };

  handlechange = (text) => {
    this.setState({ current: text });
  };

  checkColor = (text) => {
    if (this.state.current === text) return { color: '#8ab92d' };
    else return null;
  };

  render() {
    let data = PROJECTS;
    if (this.state.current === 'markup') {
      data = data.filter((item) => item.catId === 'mu');
    } else if (this.state.current === 'react') {
      data = data.filter((item) => item.catId === 'react');
    } else if (this.state.current === 'rn') {
      data = data.filter((item) => item.catId === 'rn');
    } else {
      data = PROJECTS;
    }

    return (
      <main className='portfolio' id='portfolio'>
        <h4 className='heading-4'>My Works</h4>
        <ul className='names'>
          <li
            onClick={() => this.handlechange('all')}
            className='names__item '
            style={this.checkColor('all')}>
            All
          </li>
          <li
            onClick={() => this.handlechange('markup')}
            className='names__item'
            style={this.checkColor('markup')}>
            Mark up
          </li>
          <li
            onClick={() => this.handlechange('react')}
            className='names__item'
            style={this.checkColor('react')}>
            React
          </li>
          <li
            onClick={() => this.handlechange('rn')}
            className='names__item'
            style={this.checkColor('rn')}>
            React-native
          </li>
        </ul>
        <div className='projects'>
          {data.map((item) => {
            return (
              <ProjectItem
                key={item.id}
                title={item.title}
                pic={item.picture}
                url={item.Url}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Portfolio;
