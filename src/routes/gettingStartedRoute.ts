import { Route } from '.';
import { lazy } from 'react';

const IntroductionPage = lazy(() => import('../pages/GettingStarted/IntroductionPage'));
const InstallationPage = lazy(() => import('../pages/GettingStarted/InstallationPage'));
const SetupPage = lazy(() => import('../pages/GettingStarted/SetupPage'));

const gettingStartedRoute: Route = {
  title: 'Getting Started',
  path: '',
  children: [
    { title: 'Introduction', path: '/getting-started/introduction', component: IntroductionPage },
    { title: 'Installation', path: '/getting-started/installation', component: InstallationPage },
    { title: 'Setup', path: '/getting-started/setup', component: SetupPage },
  ],
};

export default gettingStartedRoute;
