import { Route, RouteWithPrivateKey } from '../routes';

import { last } from 'lodash';

/**
 * A routes util to map a unique key for each route recursively
 * @param routes Array of route object
 * @param pathPrefix String to prefix path
 * @param parentUniquePrivateKey Array of string
 */
export const routesPrivateKeyMapper = (
  routes: Route[],
  pathPrefix = '',
  parentUniquePrivateKey: string[] = []
): RouteWithPrivateKey[] =>
  routes.map((route, key) => {
    const newRoutePath = `${pathPrefix}${route.path}`;

    const newUniquePrivateKey = [last(parentUniquePrivateKey), `.${key}`].join('');

    return {
      ...route,
      path: newRoutePath,
      uniquePrivateKey: newUniquePrivateKey,
      parentUniquePrivateKey,
      children: route.children
        ? routesPrivateKeyMapper(route.children, newRoutePath, [
            ...parentUniquePrivateKey,
            newUniquePrivateKey,
          ])
        : undefined,
    };
  });

/**
 * A function generator for flattening routes
 * @param routes Array of route object
 */
export function* flattenRoutes(
  routes: Route[] | RouteWithPrivateKey[]
): Generator<Omit<Route | RouteWithPrivateKey, 'children'>> {
  for (const routeEntry of routes) {
    const { children, ...route } = routeEntry;
    yield { ...route };
    if (children) yield* flattenRoutes(children);
  }
}
