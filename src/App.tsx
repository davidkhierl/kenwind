import { Route, Switch } from 'react-router-dom';

import ButtonPage from './pages/ButtonPage';
import NavigationPanel from './components/NavigationPanel';
import React from 'react';
import routes from './routes';

const App = () => {
  return (
    <div className='flex h-full'>
      <div className='w-96'>
        <NavigationPanel routes={routes} />
      </div>
      <div className='container px-4 pt-10 mx-auto'>
        <Switch>
          <Route path='/components/button' component={ButtonPage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
