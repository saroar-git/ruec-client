import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import { HelmetProvider } from 'react-helmet-async';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
