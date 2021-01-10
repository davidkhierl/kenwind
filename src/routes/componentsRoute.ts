import { Route } from '.';
import { lazy } from 'react';

const ButtonPage = lazy(() => import('../pages/Components/ButtonPage'));
const DropDownPage = lazy(() => import('../pages/Components/DropDownPage'));
const UploadPage = lazy(() => import('../pages/Components/UploadPage'));

const componentsRoute: Route = {
  title: 'Components',
  path: '',
  children: [
    { title: 'Buttons', path: '/components/button', component: ButtonPage },
    { title: 'Dropdowns', path: '/components/dropdown', component: DropDownPage },
    { title: 'Upload', path: '/components/upload', component: UploadPage },
  ],
};

export default componentsRoute;
