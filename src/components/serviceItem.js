import React from 'react';
import { FaHtml5, FaMobile, FaLaptop } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceItem = (props) => {
  let Icon = FaHtml5;
  if (props.icName === 'web') {
    Icon = FaLaptop;
  } else if (props.icName === 'mobile') {
    Icon = FaMobile;
  }

  const [prp, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      className='services-box'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: prp.xys.interpolate(trans) }}>
      <Icon className='services-box__icon' />
      <h3 className='services-box__name'>{props.name}</h3>
      <ul className='services-box__text'>
        {props.items.map((item, index) => (
          <li key={index} className='services-box__item'>
            {item}
          </li>
        ))}
      </ul>
    </animated.div>
  );
};
export default ServiceItem;
