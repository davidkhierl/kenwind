import { flattenRoutes, routesPrivateKeyMapper } from '../utils/routeUtils';
import routes, { Route, RouteWithPrivateKey } from '../routes';

import create from 'zustand';

const flattenedRoutes = [...flattenRoutes(routes)] as Omit<Route, 'children'>[];

const routesWithPrivateKey = routesPrivateKeyMapper(routes);

const flattenedRoutesWithPrivateKey = [...flattenRoutes(routesWithPrivateKey)] as Omit<
  RouteWithPrivateKey,
  'children'
>[];

type RouteStore = {
  routes: Route[];
  flattenedRoutes: typeof flattenedRoutes;
  routesWithPrivateKey: RouteWithPrivateKey[];
  flattenedRoutesWithPrivateKey: typeof flattenedRoutesWithPrivateKey;
};

/**
 * Routes store
 */
const useRouteStore = create<RouteStore>((set) => ({
  routes,
  flattenedRoutes,
  routesWithPrivateKey,
  flattenedRoutesWithPrivateKey,
}));

export default useRouteStore;
