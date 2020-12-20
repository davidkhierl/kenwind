import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loader } from '@progress/kendo-react-indicators';
import NavigationPanel from './components/NavigationPanel';
import { remove } from 'lodash';
import useRouteStore from './store/useRouteStore';

const App = () => {
  const routes = useRouteStore((state) => state.flattenedRoutes);

  const pageRoutes = remove(
    routes.map(({ title, ...route }) => (route.path ? <Route {...route} /> : undefined)),
    (route) => route !== undefined
  );

  return (
    <div className='flex h-full bg-gray-100'>
      <div className='hidden h-full bg-white md:block w-96'>
        <NavigationPanel />
      </div>
      <div className='container px-4 pt-10 mx-auto overflow-y-auto'>
        <Suspense
          fallback={
            <div className='flex items-center justify-center h-full'>
              <Loader size='large' type='converging-spinner' />
            </div>
          }>
          <Switch>{pageRoutes}</Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
