import { Route } from '../routes';
import { last } from 'lodash';

// export function* sideBarItemGenerator(
//   routes: Route[],
//   pathPrefix = ''
// ): Generator<any> {
//   for (const { id, path, subRoutes, title } of routes) {
//     const newPath = `${pathPrefix}${path}`;
//     //   yield !subRoutes ? (
//     //     <PanelBarItem id={id} title={title} route={newRoute} />
//     //   ) : (
//     //     <PanelBarItem id={id} title={title}>
//     //       {[...panelBarItemGenerator(subRoutes, newRoute)]}
//     //     </PanelBarItem>
//     //   );

//     yield !subRoutes
//       ? createElement(PanelBarItem, { id, title, path: newPath })
//       : createElement(PanelBarItem, { id, title, path: newPath }, [
//           ...sideBarItemGenerator(subRoutes, newPath),
//         ]);
//   }
// }

// export const routePrivateKeyMapper = function* (
//   routes: Route[],
//   routePath = '',
//   parentUniquePrivateKey: string[] = []
// ): Generator<Route & { uniquePrivateKey: string; parentUniquePrivateKey: string[] }> {
//   for (const [key, routeEntries] of routes.entries()) {
//     const { children, ...route } = routeEntries;

//     const newRoutePath = `${routePath}${route.path}`;

//     const newUniquePrivateKey = [last(parentUniquePrivateKey), `.${key}`].join('');

//     yield {
//       ...route,
//       path: newRoutePath,
//       uniquePrivateKey: newUniquePrivateKey,
//       parentUniquePrivateKey,
//       children: children
//         ? yield* routePrivateKeyMapper(children, newRoutePath, [
//             ...parentUniquePrivateKey,
//             newUniquePrivateKey,
//           ])
//         : [],
//     };

//     if (children)
//       yield* routePrivateKeyMapper(children, newRoutePath, [
//         ...parentUniquePrivateKey,
//         newUniquePrivateKey,
//       ]);
//   }
// };

export type RouteWithPrivateKey = Route & {
  uniquePrivateKey: string;
  parentUniquePrivateKey: string[];
};

export const routesPrivateKeyMapper = (
  routes: Route[],
  routePath = '',
  parentUniquePrivateKey: string[] = []
): RouteWithPrivateKey[] =>
  routes.map((route, key) => {
    const newRoutePath = `${routePath}${route.path}`;

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
        : [],
    };
  });

export function* flattenRoutes(routes: Route[]): Generator<Omit<Route, 'children'>> {
  for (const routeEntry of routes) {
    const { children, ...route } = routeEntry;
    yield { ...route };
    if (children) yield* flattenRoutes(children);
  }
}
