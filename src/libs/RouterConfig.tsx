import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import PATH_TO from '@constants/router';

const Home = lazy(() => import('@pages/HomePage'));
const Detail = lazy(() => import('@pages/DetailPage'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: PATH_TO.HOME, element: <Home /> },
    { path: PATH_TO.DETAIL, element: <Detail /> },
  ]);

  return routes;
};

export default RouterConfig;
