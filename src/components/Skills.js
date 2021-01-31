
import React, { Component } from 'react';
import SkillsItem from './Skills__item';
import { SKILLS } from '../data/data__skills';

class Skills extends Component {
  state = {
    current: 'react',
  };

  handlechange = (text) => {
    this.setState({ current: text });
  };

  checkColor = (text) => {
    if (this.state.current === text) return { color: '#8ab92d' };
    else return { color: '#000'};
  };

  render() {
    let data = SKILLS;
    if (this.state.current === 'react') {
      data = data.filter((item) => item.catId === 'react');
    } else if (this.state.current === 'markup') {
      data = data.filter((item) => item.catId === 'markup');
    } else if (this.state.current === 'back') {
      data = data.filter((item) => item.catId === 'back');
    }

    return (
      <main className='skills' id='skills'>
        <h4 className='heading-4'>My skills</h4>
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
            onClick={() => this.handlechange('back')}
            className='names__item'
            style={this.checkColor('back')}>
            Back end
          </li>
        </ul>
       
        <div className='skills__box'>
          {data.map((skill) => (
            <SkillsItem
              key={skill.id}
              name={skill.name}
              altName={skill.altName}
              imgPath={skill.imgPath}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Skills;
