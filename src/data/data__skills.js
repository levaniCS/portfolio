import Skill from '../models/Skills';

export const SKILLS = [
  new Skill('i1', 'html 5', require('../assets/html.png'), 'html-logo', 95),
  new Skill('i2', 'css 3', require('../assets/css.png'), 'css-logo', 90),
  new Skill('i3', 'sass', require('../assets/sass.png'), 'scss-logo', 90),
  new Skill('i31', 'bootstrap', require('../assets/bootstrap.png'), 'bootstrap-logo', 80),
  new Skill('i4', 'javascript', require('../assets/js.png'), 'js-logo', 87),
  new Skill('i5', 'react', require('../assets/react.png'), 'react-logo', 85),
  new Skill(
    'i6',
    'react-native',
    require('../assets/react-native.png'),
    'react-native-logo',
    70
  ),
  new Skill(
    'i7',
    'Node Js',
    require('../assets/node.png'),
    'node-js-logo',
    75
  ),
  new Skill(
    'i8',
    'Express Js',
    require('../assets/express2.png'),
    'express-logo',
    80
  ),
  new Skill(
    'i9',
    'Mongo DB',
    require('../assets/mongo.png'),
    'mongodb-logo',
    75
  ),
  new Skill(
    'i10',
    'Postgress SQL',
    require('../assets/postgress.png'),
    'postgresssql-logo',
    65
  ),
  new Skill(
    'i11',
    'Rest Api',
    require('../assets/rest.jpg'),
    'restapi-logo',
    80
  ),
  new Skill(
    'i12',
    'GraphQL Api',
    require('../assets/graphql.png'),
    'graphql-logo',
    65
  )
];
