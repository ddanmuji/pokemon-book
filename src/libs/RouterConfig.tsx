import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { PathTo } from './staticData';

const Home = lazy(() => import('@pages/HomePage'));
const Detail = lazy(() => import('@pages/DetailPage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: PathTo.Home, element: <Home /> },
    { path: PathTo.Detail, element: <Detail /> },
  ]);

  return routes;
};

export default RouterConfig;
