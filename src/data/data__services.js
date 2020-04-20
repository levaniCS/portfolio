import Service from '../models/service';

export const SERVICES = [
  new Service('c1', 'Front-end development', 'html5', [
    'Modern CSS technologies',
    'Highly responsive layout',
    'Reusable and Maintainable code',
    'Clear and Modern Animations',
  ]),
  new Service('c2', 'Web Applications', 'web', [
    'Develop new user-facing features',
    'Optimize application for maximum speed and scalability',
    'Maintainable and Reusable code',
    'Plan and accommodate all mediums, screen sizes and device types',
  ]),
  new Service('c3', 'Mobile Applications', 'mobile', [
    'React Native development for iPhones, Tablets, and Android',
    'Diagnose and fix bugs and performance issues',
    'Experience integrating with third-party libraries, frameworks, and API',
    'Publishing Your app',
  ]),
];
