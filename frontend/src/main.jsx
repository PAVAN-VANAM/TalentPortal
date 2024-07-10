import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './components/LandingPage'
import Dashboard from './components/dashboard'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/Login'

const r=createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path:'/profile-form',
    element:<App/>
  },
  {
    path: '/login',
    element: <LoginPage/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={r} />
  </React.StrictMode>,
)
