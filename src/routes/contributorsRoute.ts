import { Route } from '.';
import { lazy } from 'react';

const ContributorsPage = lazy(() => import('../pages/Contributors/ContributorsPage'));

const contributorsRoute: Route = {
  title: 'Contributors',
  path: '/contributors',
  component: ContributorsPage,
};

export default contributorsRoute;
