import React from 'react';

const ProjectItem = (props) => {
  return (
    <div className='projects__item'>
      <h3 className='projects__name'>{props.title}</h3>
      <img src={props.pic} className='projects__img' alt={props.title} />
      <a
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'
        className='btn projects__link'>
        See here
      </a>
    </div>
  );
};

export default ProjectItem;
