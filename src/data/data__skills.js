import Skill from '../models/Skills';

export const SKILLS = [
  new Skill('i1', 'html 5', require('../assets/html.png'), 'html-logo', 'markup'),
  new Skill('i2', 'css 3', require('../assets/css.png'), 'css-logo', 'markup'),
  new Skill('i3', 'sass', require('../assets/sass.png'), 'scss-logo', 'markup'),
  new Skill('i31', 'bootstrap', require('../assets/bootstrap.png'), 'bootstrap-logo', 'markup'),
  new Skill('i5', 'react', require('../assets/react.png'), 'react-logo', 'react'),
  new Skill('i4', 'javascript', require('../assets/js.png'), 'js-logo', 'react'),

  new Skill('i41', 'next js', require('../assets/next-js.png'), 'nextjs-logo', 'react'),
  new Skill('i42', 'gatsby', require('../assets/gatsby.png'), 'gatsby-logo', 'react'),
  new Skill(
    'i6',
    'react-native',
    require('../assets/react-native.png'),
    'react-native-logo',
    'react'
  ),
  new Skill(
    'i7',
    'Node Js',
    require('../assets/node.png'),
    'node-js-logo',
    'back'
  ),
  new Skill(
    'i8',
    'Express Js',
    require('../assets/express2.png'),
    'express-logo',
    'back'
  ),
  new Skill(
    'i9',
    'Mongo DB',
    require('../assets/mongo.png'),
    'mongodb-logo',
    'back'
  ),
  new Skill(
    'i10',
    'Postgress SQL',
    require('../assets/postgress.png'),
    'postgresssql-logo',
    'back'
  ),
  new Skill(
    'i11',
    'Rest Api',
    require('../assets/rest.jpg'),
    'restapi-logo',
    'back'
  ),
  new Skill(
    'i12',
    'GraphQL Api',
    require('../assets/graphql.png'),
    'graphql-logo',
    'back'
  )
];
