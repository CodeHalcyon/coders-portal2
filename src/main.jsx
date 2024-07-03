import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Communities from './pages/Communities.jsx'
import LoginPage from './pages/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:'/authorize',
        element:<LoginPage/>
      },
      {
        path:'/home',
        element:<Home/>
      },
      {
        path: "/blogs",
        element:<Blogs />
      },
      {
        path: '/events',
        element: <Events/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/communities',
        element: <Communities/>
      }
    ]
  },
  
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}>
    <App/>  
    </RouterProvider>
  /* </React.StrictMode>, */
)
