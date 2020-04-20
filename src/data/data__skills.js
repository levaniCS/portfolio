import Skill from '../models/Skills';

export const SKILLS = [
  new Skill('i1', 'html 5', require('../assets/html.png'), 'html-logo', 95),
  new Skill('i2', 'css 3', require('../assets/css.png'), 'css-logo', 85),
  new Skill('i3', 'sass', require('../assets/sass.png'), 'scss-logo', 80),
  new Skill('i4', 'javascript', require('../assets/js.png'), 'js-logo', 75),
  new Skill('i5', 'react', require('../assets/react.png'), 'react-logo', 78),
  new Skill(
    'i6',
    'react-native',
    require('../assets/react-native.png'),
    'react-native-logo',
    70
  ),
];
