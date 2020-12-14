import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';
import { useHistory, useLocation } from 'react-router-dom';

import React from 'react';

export interface NavigationRoute {
  id?: string;
  title: string;
  route: string;
  subRoutes?: NavigationRoute[];
}

export interface NavigationPanelProps {
  routes: NavigationRoute[];
}
const NavigationPanel: React.VFC<NavigationPanelProps> = (props) => {
  const location = useLocation();

  const history = useHistory();

  const panelBarItemGenerator = function* (
    routes: NavigationRoute[] = props.routes,
    routePrefix = ''
  ): Generator<React.ReactElement<typeof PanelBarItem>> {
    for (const { id, route, subRoutes, title } of routes) {
      const newRoute = `${routePrefix}${route}`;
      yield !subRoutes ? (
        <PanelBarItem id={id} title={title} route={newRoute} />
      ) : (
        <PanelBarItem id={id} title={title}>
          {[...panelBarItemGenerator(subRoutes, newRoute)]}
        </PanelBarItem>
      );
    }
  };

  const uniquePrivateKeyMapper = React.useCallback(
    function* (
      routes: NavigationRoute[] = props.routes,
      routePath = '',
      parentKey = ''
    ): Generator<Omit<NavigationRoute & { index: string }, 'subRoutes'>> {
      for (const [key, routeEntries] of routes.entries()) {
        const { subRoutes, ...route } = routeEntries;
        const newKey = `${parentKey}.${key}`;
        const newRoutePath = `${routePath}${route.route}`;
        yield { ...route, route: newRoutePath, index: newKey };
        if (subRoutes) yield* uniquePrivateKeyMapper(subRoutes, newRoutePath, newKey);
      }
    },
    [props.routes]
  );

  const routeIndex = [...uniquePrivateKeyMapper()].find(
    (route) => `${route.route}` === location.pathname
  );

  const [selected, setSelected] = React.useState(routeIndex?.index);

  const expandedMapper = (): string[] => {
    let mapped: string[] = [];
    let keyToMap = routeIndex?.index.substring(0, routeIndex.index.length - 2);
    if (keyToMap)
      for (; keyToMap?.length >= 2; ) {
        mapped.push(keyToMap);
        keyToMap = keyToMap.substring(0, keyToMap.length - 2);
      }
    return mapped;
  };

  React.useEffect(() => {
    const routes = [...uniquePrivateKeyMapper()];
    const routeIndex = routes.find((route) => route.route === location.pathname);
    setSelected(routeIndex ? routeIndex.index : '');
  }, [location.pathname, uniquePrivateKeyMapper]);

  const handleOnSelect = (event: PanelBarSelectEventArguments) => {
    const route = event.target.props.route;
    if (route) {
      route !== location.pathname && history.push(route);
    }
  };

  return (
    <PanelBar expanded={[...expandedMapper()]} selected={selected} onSelect={handleOnSelect}>
      {[...panelBarItemGenerator()]}
    </PanelBar>
  );
};

export default NavigationPanel;
