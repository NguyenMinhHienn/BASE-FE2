import React from 'react';
import { useRoutes } from 'react-router-dom';
import ClientLayout from './layout/client';
import ListProduct from './components/product/list';
import AddProduct from './components/product/add';
import EditProduct from './components/product/edit';
import Login from './components/auth/login';
import Register from './components/auth/register';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        { path: '/list', element: <ListProduct /> }, 
        { path: '/add', element: <AddProduct /> },
        { path: '/edit/:id', element: <EditProduct /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
  ]);
  return routes;
};

export default App;