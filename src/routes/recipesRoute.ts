import { Route } from '.';
import { lazy } from 'react';

const DarkModePage = lazy(() => import('../pages/Recipes/DarkModePage'));

const recipesRoute: Route = {
  title: 'Recipes',
  path: '',
  children: [{ title: 'Dark mode setup', path: '/recipes/dark-mode', component: DarkModePage }],
};

export default recipesRoute;
