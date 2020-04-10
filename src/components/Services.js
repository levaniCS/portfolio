import React from 'react';

import { SERVICES } from '../data/data';
import ServiceItem from './serviceItem';

const Services = () => {
  return (
    <section className='services' id='services'>
      <h4 className='heading-4'>This is what i can to do for you</h4>
      <div className='boxes'>
        {SERVICES.map((item) => (
          <ServiceItem
            key={item.id}
            name={item.name}
            icName={item.icName}
            items={item.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
