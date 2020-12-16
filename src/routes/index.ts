import { LazyExoticComponent, lazy } from 'react';

import componentsRoute from './componentsRoute';
import contributorsRoute from './contributorsRoute';
import gettingStartedRoute from './gettingStartedRoute';
import recipesRoute from './recipesRoute';

const LandingPage = lazy(() => import('../pages/LandingPage'));
export interface Route {
  id?: string;
  title: string;
  path: string;
  children?: Route[];
  component?: React.ReactElement | LazyExoticComponent<() => React.ReactElement>;
}

const routes: Route[] = [
  { title: 'Kenwind', path: '/', component: LandingPage },
  gettingStartedRoute,
  componentsRoute,
  recipesRoute,
  contributorsRoute,
];

export default routes;
