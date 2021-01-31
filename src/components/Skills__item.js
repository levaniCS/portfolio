import React from 'react';
// import LineProgresBar from './LineProgressBar';

const SkillsItem = (props) => {
  return (
    <div className='item'>
      <img src={props.imgPath} alt={props.altName} className='item__img' />
      <p className='item__name'>{props.name}</p>
    </div>
  );
};

export default SkillsItem;
