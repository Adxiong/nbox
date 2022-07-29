/*
 * @Description:
 * @version:
 * @Author: Adxiong
 * @Date: 2022-07-29 22:58:41
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-07-29 23:29:57
 */
import { Children } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Default from '../layout/default';
import Favorites from '../pages/favorites';
import Todo from '../pages/todo';
import Tools from '../pages/tools';

const routes: RouteObject[] = [
  {
    path: '/home',
    children: [
      {
        path: '/home/favorites',
        element: <Favorites />,
      },
      {
        path: '/home/todo',
        element: <Todo />,
      },
      {
        path: '/home/tools',
        element: <Tools />,
      },
    ],
  },
  {
    path: '/',
    element: <Default />,
  },
];

const Routes = () => {
  return useRoutes(routes);
};
export default Routes;
