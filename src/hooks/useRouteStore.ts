import { RouteWithPrivateKey, flattenRoutes, routesPrivateKeyMapper } from '../utils/routeUtils';

import create from 'zustand';
import routes from '../routes';

type RouteStore = {
  routes: typeof routes;
  // flattenedRoutes: Omit<typeof routes, 'children'>[]
  routesWithPrivateKey: RouteWithPrivateKey[];
  // flattenedRoutesWithPrivateKey: Omit<RouteWithPrivateKey, 'children'>[]
};

const flattenedRoutes = [...flattenRoutes(routes)];

const routesWithPrivateKey = routesPrivateKeyMapper(routes);

const flattenedRoutesWithPrivateKey = [...flattenRoutes(routesWithPrivateKey)];

const useRouteStore = create<RouteStore>((set) => ({
  routes,
  routesWithPrivateKey,
}));

export default useRouteStore;
