import NavigationPanel, { NavigationRoute } from './components/NavigationPanel';
import { Route, Switch } from 'react-router-dom';

import ButtonPage from './pages/ButtonPage';
import React from 'react';

const App = () => {
  const appRoutes: NavigationRoute[] = [
    { title: 'Kenwind', route: '/' },
    {
      title: 'Components',
      route: '/components',
      subRoutes: [
        { title: 'Buttons', route: '/button' },
        { title: 'Dropdowns', route: '/dropdown' },
      ],
    },
    { title: 'Usage', route: '/usage' },
    {
      title: 'Multi Nested',
      route: '/nested',
      subRoutes: [
        { title: 'Item 1', route: '/1' },
        { title: 'Item 2', route: '/2' },
        { title: 'Item 3', route: '/3' },
        {
          title: 'Item 4',
          route: '/4',
          subRoutes: [
            { title: 'Item 4.1', route: '/4.1' },
            { title: 'Item 4.2', route: '/4.2' },
            {
              title: 'Item 4.3',
              route: '/4.3',
              subRoutes: [
                { title: 'Item 5.1', route: '/5.1' },
                { title: 'Item 5.2', route: '/5.2' },
                { title: 'Item 5.2', route: '/5.3' },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className='flex h-full pt-10'>
      <div className='w-96'>
        <NavigationPanel routes={appRoutes} />
      </div>
      <div className='container px-4 mx-auto'>
        <Switch>
          <Route path='/components/button' component={ButtonPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
