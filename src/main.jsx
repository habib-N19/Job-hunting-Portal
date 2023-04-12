import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import AppliedJob from './components/AppliedJob/AppliedJob'
import Blog from './components/Blog/Blog'
import { featuredCardData } from './loaders/getFeaturedData'
import JobDetails from './components/JobDetails/JobDetails'
import ErrorPage from './components/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: featuredCardData,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => {
          const { jobId } = params
          return fetch('/featuredJobs.json')
            .then(response => response.json())
            .then(jobs => jobs.find(job => job.id === jobId))
        }
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJob',
        element: <AppliedJob></AppliedJob>,
        loader: featuredCardData
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
