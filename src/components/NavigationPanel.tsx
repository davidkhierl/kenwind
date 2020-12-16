import {
  PanelBar,
  PanelBarSelectEventArguments,
  PanelBarUtils,
} from '@progress/kendo-react-layout';
import { flattenRoutes, routesPrivateKeyMapper } from '../utils/routeUtils';
import { useHistory, useLocation } from 'react-router-dom';

import React from 'react';
import { Route } from '../routes';
import useRouteStore from '../hooks/useRouteStore';

export interface NavigationPanelProps {
  routes: Route[];
}
const NavigationPanel: React.VFC<NavigationPanelProps> = (props) => {
  const location = useLocation();

  const history = useHistory();

  const routes = useRouteStore((state) => state.routes);

  // const panelBarItemGenerator = function* (
  //   routes: Route[] = props.routes,
  //   pathPrefix = ''
  // ): Generator<React.ReactElement<typeof PanelBarItem>> {
  //   for (const { id, path, subRoutes, title } of routes) {
  //     const newRoute = `${pathPrefix}${path}`;
  //     yield !subRoutes ? (
  //       <PanelBarItem id={id} title={title} route={newRoute} />
  //     ) : (
  //       <PanelBarItem id={id} title={title}>
  //         {[...panelBarItemGenerator(subRoutes, newRoute)]}
  //       </PanelBarItem>
  //     );
  //   }
  // };

  // const uniquePrivateKeyMapper = React.useCallback(
  //   function* (
  //     routes: Route[] = props.routes,
  //     routePath = '',
  //     parentKey = ''
  //   ): Generator<Omit<Route & { index: string }, 'subRoutes'>> {
  //     for (const [key, routeEntries] of routes.entries()) {
  //       const { subRoutes, ...route } = routeEntries;
  //       const newKey = `${parentKey}.${key}`;
  //       const newRoutePath = `${routePath}${route.path}`;
  //       yield { ...route, path: newRoutePath, index: newKey };
  //       if (subRoutes) yield* uniquePrivateKeyMapper(subRoutes, newRoutePath, newKey);
  //     }
  //   },
  //   [props.routes]
  // );

  // const routeIndex = [...uniquePrivateKeyMapper()].find(
  //   (route) => `${route.path}` === location.pathname
  // );

  // const [selected, setSelected] = React.useState(routeIndex?.index);

  // const expandedMapper = (): string[] => {
  //   let mapped: string[] = [];
  //   let keyToMap = routeIndex?.index.substring(0, routeIndex.index.length - 2);
  //   if (keyToMap)
  //     for (; keyToMap?.length >= 2; ) {
  //       mapped.push(keyToMap);
  //       keyToMap = keyToMap.substring(0, keyToMap.length - 2);
  //     }
  //   return mapped;
  // };

  // React.useEffect(() => {
  //   const routes = [...uniquePrivateKeyMapper()];
  //   const routeIndex = routes.find((route) => route.path === location.pathname);
  //   setSelected(routeIndex ? routeIndex.index : '');
  // }, [location.pathname, uniquePrivateKeyMapper]);

  const handleOnSelect = (event: PanelBarSelectEventArguments) => {
    const path = event.target.props.path;
    if (path) {
      path !== location.pathname && history.push(path);
    }
    console.log(event.target.props.parentUniquePrivateKey);
    console.log(event.target.props.uniquePrivateKey);
  };

  // const sideBarItems = [...sideBarItemGenerator(props.routes)];

  const routesWithInitialSelected = routes.map((route) =>
    route.path === location.pathname ? { ...route, selected: true } : route
  );

  const panelBarItems = PanelBarUtils.mapItemsToComponents(routesWithInitialSelected);

  // console.log([...routePrivateKeyMapper(routes)]);
  // console.log(recursive(routes));
  return <PanelBar onSelect={handleOnSelect} children={panelBarItems} />;
};

export default NavigationPanel;
