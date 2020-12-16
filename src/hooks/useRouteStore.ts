import { RouteWithPrivateKey, flattenRoutes, routesPrivateKeyMapper } from '../utils/routeUtils';
import routes, { Route } from '../routes';

import create from 'zustand';

type RouteStore = {
  routes: Route[];
  flattenedRoutes: Pick<Route, 'id' | 'title' | 'path' | 'component'>[];
  routesWithPrivateKey: RouteWithPrivateKey[];
  flattenedRoutesWithPrivateKey: Pick<Route, 'id' | 'title' | 'path' | 'component'>[];
};

const flattenedRoutes = [...flattenRoutes(routes)];

const routesWithPrivateKey = routesPrivateKeyMapper(routes);

const flattenedRoutesWithPrivateKey = [...flattenRoutes(routesWithPrivateKey)];

const useRouteStore = create<RouteStore>((set) => ({
  routes,
  flattenedRoutes,
  routesWithPrivateKey,
  flattenedRoutesWithPrivateKey,
}));

export default useRouteStore;
