import { LazyExoticComponent, lazy } from 'react';

import { RouteProps } from 'react-router-dom';
import componentsRoute from './componentsRoute';
import contributorsRoute from './contributorsRoute';
import gettingStartedRoute from './gettingStartedRoute';
import recipesRoute from './recipesRoute';

const LandingPage = lazy(() => import('../pages/LandingPage'));

export interface Route extends RouteProps {
  title: string;
  children?: Route[];
}

export interface RouteWithPrivateKey extends Route {
  children?: RouteWithPrivateKey[];
  uniquePrivateKey: string;
  parentUniquePrivateKey: string[];
}

const routes: Route[] = [
  { title: 'Kenwind', path: '/', component: LandingPage, exact: true },
  gettingStartedRoute,
  componentsRoute,
  recipesRoute,
  contributorsRoute,
];

export default routes;
