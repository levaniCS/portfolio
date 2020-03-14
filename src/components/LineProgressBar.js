import React from 'react';

const LineProgresBar = (props) => {
  return <ProgressBar percentage={props.percentage} />;
};

export default LineProgresBar;

const ProgressBar = (props) => {
  return (
    <div className='progress-bar'>
      <Filler percentage={props.percentage} />
    </div>
  );
};

const Filler = (props) => {
  return (
    <div className='filler' style={{ width: `${props.percentage}%` }}>
      <h1>{`${props.percentage}%`}</h1>
    </div>
  );
};
