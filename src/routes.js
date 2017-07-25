import App from './app';
import NotFound from './components/notFound.react';
import Home from './components/home.react';

export default {
  path : '/',
  component : App,
  indexRoute : {
    component: Home
  },
  childRoutes : [
    {
      path: '404',
      component: NotFound
    }, {
      path: '*',
      onEnter: (_, replaceState) => replaceState('/404')
    }
  ]
};
