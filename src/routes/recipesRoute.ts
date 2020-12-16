import { Route } from '.';
import { lazy } from 'react';

const DarkModePage = lazy(() => import('../pages/Recipes/DarkModePage'));

const recipesRoute: Route = {
  title: 'Recipes',
  path: '',
  children: [
    { title: 'Dark mode setup', path: '/recipes/dark-mode', component: DarkModePage },
    {
      title: 'Nested',
      path: '/nested',
      component: DarkModePage,
      children: [{ title: 'Nested 2', path: '/nested-2', component: DarkModePage }],
    },
  ],
};

export default recipesRoute;
