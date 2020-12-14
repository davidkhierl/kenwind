import { NavigationRoute } from '../components/NavigationPanel';

interface RoutesProps extends NavigationRoute {
  component?: React.ReactElement;
}

const routes: RoutesProps[] = [
  { title: 'Kenwind', route: '/' },
  {
    title: 'Getting Started',
    route: '/getting-started',
    subRoutes: [
      { route: '/installation', title: 'Installation' },
      { route: '/setup', title: 'Setup' },
    ],
  },
  {
    title: 'Components',
    route: '/components',
    subRoutes: [
      { title: 'Buttons', route: '/button' },
      { title: 'Dropdowns', route: '/dropdown' },
    ],
  },
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

export default routes;
