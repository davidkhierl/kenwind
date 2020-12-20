import {
  PanelBar,
  PanelBarSelectEventArguments,
  PanelBarUtils,
} from '@progress/kendo-react-layout';
import { Route, RouteWithPrivateKey } from '../routes';
import { find, includes } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';

import React from 'react';
import useRouteStore from '../store/useRouteStore';

export interface NavigationPanelProps {
  routes: Route[];
}

const NavigationPanel: React.VFC = () => {
  const location = useLocation();

  const history = useHistory();

  const routesWithPrivateKey = useRouteStore((state) => state.routesWithPrivateKey);
  const flattenedRoutesWithPrivateKey = useRouteStore(
    (state) => state.flattenedRoutesWithPrivateKey
  );

  const handleOnSelect = (event: PanelBarSelectEventArguments) => {
    const path = event.target.props.path;
    if (path) {
      path !== location.pathname && history.push(path);
    }
  };

  const currentRoute = find(flattenedRoutesWithPrivateKey, { path: location.pathname });

  const initialRoutesState = (routes: typeof routesWithPrivateKey): RouteWithPrivateKey[] =>
    routes.map((route) => {
      return {
        ...route,
        expanded: includes(
          currentRoute && currentRoute.parentUniquePrivateKey,
          route.uniquePrivateKey
        ),
        selected: route.path === location.pathname,
        children: route.children && initialRoutesState(route.children),
      };
    });

  const panelBarItems = PanelBarUtils.mapItemsToComponents(
    initialRoutesState(routesWithPrivateKey)
  );

  return <PanelBar onSelect={handleOnSelect} children={panelBarItems} />;
};

export default NavigationPanel;
