import App from './app';
import NotFound from './components/notFound.react';
import Home from './components/home.react';

export default[
  {
    path : '/',
    components : App
  }, {
    path : '/a',
    exact : true,
    components : NotFound
  }, {
    path : '/b',
    exact : true,
    components : Home
  }
];
