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
import Login from './pages/Membership/Login';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Events from './pages/Events/Events';
import Community from './pages/Community/Community';
import Features from './pages/Features/Features';
import AuthProvider from './context/AuthProvider';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Admin from './layout/Admin';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import President from './pages/Home/Statements/President';
import Secretary from './pages/Home/Statements/Secretary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/events', element: <Events /> },
      { path: '/community', element: <Community /> },
      { path: '/features', element: <Features /> },
      { path: '/about', element: <About /> },
      { path: '/president', element: <President /> },
      { path: '/secretary', element: <Secretary /> },
      
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Admin /></PrivateRoute>,
    errorElement: <Error />,
    children: [
      { path: '/dashboard', element: <PrivateRoute><Dashboard /></PrivateRoute> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
