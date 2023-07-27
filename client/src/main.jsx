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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Membership/Login';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Blogs from './pages/Blogs/Blogs';
import Events from './pages/Events/Events';
import Features from './pages/Features/Features';
import AuthProvider from './context/AuthProvider';
import Profile from './pages/Profile/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Admin from './layout/Admin';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import President from './pages/Home/Statements/President';
import Secretary from './pages/Home/Statements/Secretary';
import Advisories from './pages/Community/Advisories';
import Committee from './pages/Community/Committee';
import AddCommittee from './pages/Admin/Community/AddCommittee';
import AddAdvisory from './pages/Admin/Community/AddAdvisory';
import AddEvents from './pages/Admin/Events/AddEvents';
import AddGallery from './pages/Admin/Gallery/AddGallery';
import Members from './pages/Members/Members';
import Member from './pages/Admin/Member/Member';
import AdminRoute from './routes/AdminRoute';
import AddFeatures from './pages/Admin/AddFeatures/AddFeatures';
import AddBlogs from './pages/Admin/AddBlogs/AddBlogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/events', element: <Events /> },
      { path: '/community/advisories', element: <Advisories /> },
      { path: '/community/executive-committee', element: <Committee /> },
      { path: '/features', element: <Features /> },
      { path: '/about', element: <About /> },
      { path: '/president', element: <President /> },
      { path: '/secretary', element: <Secretary /> },
      { path: '/member', element: <Members /> },

      { path: '/login', element: <Login /> },
      { path: '/profile', element: <PrivateRoute><Profile /></PrivateRoute> }
    ]
  },
  {
    path: '/dashboard',
    element: <AdminRoute><Admin /></AdminRoute>,
    errorElement: <Error />,
    children: [
      { path: '/dashboard', element: <AdminRoute><Dashboard /></AdminRoute> },
      { path: '/dashboard/members', element: <AdminRoute><Member /></AdminRoute> },
      { path: '/dashboard/addBlogs', element: <AdminRoute><AddBlogs /></AdminRoute> },
      { path: '/dashboard/addCommittee', element: <AdminRoute><AddCommittee /></AdminRoute> },
      { path: '/dashboard/addAdvisory', element: <AdminRoute><AddAdvisory /></AdminRoute> },
      { path: '/dashboard/addEvents', element: <AdminRoute><AddEvents /></AdminRoute> },
      { path: '/dashboard/addGallery', element: <AdminRoute><AddGallery /></AdminRoute> },
      { path: '/dashboard/addFeatures', element: <AdminRoute><AddFeatures /></AdminRoute> },
    ]
  }
]);


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
