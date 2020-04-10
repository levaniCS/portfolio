import Project from '../models/project';
import Service from '../models/service';

export const PROJECTS = [
  new Project(
    'c1',
    'mu',
    'Natour',
    'https://scx1.b-cdn.net/csz/news/800/2019/1-nature.jpg',
    'https://levanics.github.io/natour/'
  ),
  new Project(
    'c2',
    'mu',
    'Trillo',
    'https://cache.marriott.com/marriottassets/marriott/HNLWS/hnlws-exterior-6020-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*',
    'https://levanics.github.io/trillo/'
  ),
  new Project(
    'c3',
    'mu',
    'Nexter',
    'https://img1.goodfon.com/wallpaper/nbig/1/ea/exterior-houses-luxory-home.jpg',
    'https://levanics.github.io/nexter/'
  ),
  new Project(
    'c4',
    'mu',
    'Insure',
    'https://crotricks.com/wp-content/uploads/2015/10/cro-trick-of-the-trade-750x500.png',
    'https://levanics.github.io/insure-landing/'
  ),
  new Project(
    'c5',
    'mu',
    'Fylo',
    'https://cdn.wallpapersafari.com/91/94/PmdesY.png',
    'https://levanics.github.io/fylo/'
  ),
  new Project(
    'c6',
    'react',
    'Burger',
    'https://cdn1.iconfinder.com/data/icons/usa-cartoon-2/512/g16066-512.png',
    'https://burgerapp-67571.firebaseapp.com/'
  ),
  new Project(
    'c7',
    'react',
    'blog',
    'https://vloggerfaire.com/wp-content/uploads/2017/07/blog-laptop-copy-2-1.jpg',
    'https://levanics.github.io/blogapp/'
  ),
  new Project(
    'c8',
    'react',
    'Match',
    'https://store-images.s-microsoft.com/image/apps.54588.14352762657499021.bcf94466-da7b-4b88-bb7e-60467547a219.80c0934e-f2b4-4618-ba4f-913c326019f6?mode=scale&q=90&h=1080&w=1920',
    'https://levanics.github.io/matching-game/'
  ),
  new Project(
    'c9',
    'react',
    'Tic-tac-toe',
    'https://img1.goodfon.com/wallpaper/nbig/b/c8/krestiki-noliki-oranzhevyy.jpg',
    'https://levanics.github.io/tic-tac-toe/'
  ),
  new Project(
    'c10',
    'react',
    'COVID-19',
    'https://media1.s-nbcnews.com/j/newscms/2020_10/3257296/200305-china-coronavirus-mc-1506_9e40e4e88e1b8a2ed94c1da773f33b62.fit-760w.JPG',
    'https://levanics.github.io/covid-dashboard/'
  ),
  new Project(
    'c101',
    'react',
    'Pig-Game',
    'https://cdn.wallpapersafari.com/30/43/Q6x0UJ.jpg',
    'https://levanics.github.io/pig-game/'
  ),
  new Project(
    'c11',
    'rn',
    'Meals',
    'https://content.fortune.com/wp-content/uploads/2019/10/Kettleball-Kitchen-Keto-Meals.jpg',
    'https://expo.io/@levanisar/mealsApp'
  ),
  new Project(
    'c12',
    'rn',
    'Movies',
    'https://www.abajournal.com/images/mag_images/0818_FMOVIES_BACKGROUND.jpg',
    'https://expo.io/@levanisar/movies'
  ),
  new Project(
    'c13',
    'rn',
    'Shop',
    'https://online-shop.ge/wp-content/uploads/2019/08/cropped-online-shop.ge-logo.png',
    'https://expo.io/@levanisar/shopapp'
  ),
  new Project(
    'c14',
    'rn',
    'Places',
    'https://travel.usnews.com/dims4/USNEWS/82cdc34/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/static-travel/images/destinations/288/tahiti_main_getty_samantha_t_photography_edited_445x280.jpg',
    'https://expo.io/@levanisar/great-places-app'
  ),
  new Project(
    'c15',
    'rn',
    'Guess',
    'https://www.funbrain.com/assets/img/content-cards/F2qRmLhRnmebc8jJAUjr_GuessTheNumber%403x.png',
    'https://expo.io/@levanisar/GuessNumberApp'
  ),
  new Project(
    'c16',
    'rn',
    'Books',
    'https://i.pinimg.com/originals/4e/a9/2f/4ea92f247d44204977bf9a95ab34cb02.jpg',
    'https://exp.host/@levanisar/books-app'
  ),
];

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
