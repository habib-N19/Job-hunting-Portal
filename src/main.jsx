import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <p>404 not found</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
