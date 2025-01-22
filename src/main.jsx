import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Communities from './pages/Communities.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This will render the App component which contains Navbar and Footer
    children: [
      {
        path: '/',  // This renders Home when you visit the root path
        element: <Home />,
      },
      {
        path: '/home',  // Also renders Home when you visit the /home path
        element: <Home />,
      },
      {
        path: '/authorize',
        element: <LoginPage />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/communities',
        element: <Communities />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
