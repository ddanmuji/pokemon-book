import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH_TO } from '@constants/path';

const Home = lazy(() => import('@pages/HomePage'));
const Detail = lazy(() => import('@pages/DetailPage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: PATH_TO.Home, element: <Home /> },
    { path: PATH_TO.Detail, element: <Detail /> },
  ]);

  return routes;
};

export default RouterConfig;
