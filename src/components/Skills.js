import React from 'react';

import SkillsItem from './Skills__item';
import { SKILLS } from '../data/data__skills';

const Skills = () => {
  return (
    <main className='skills' id='skills'>
      <h4 className='heading-4'>My skills</h4>
      <div className='skills__box'>
        {SKILLS.map((skill) => (
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
};

export default Skills;
