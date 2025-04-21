import React from 'react';
import { useRoutes } from 'react-router-dom';
import ClientLayout from './layout/client';
import List from './components/product/list';
import Add from './components/product/add';
import Edit from './components/product/edit';
import Login from './components/auth/login';
import Register from './components/auth/register';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        { path: '/', element: <List /> }, 
        { path: '/add', element: <Add /> },
        { path: '/edit/:id', element: <Edit /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
  ]);
  return routes;
};

export default App;