import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Home.jsx'
import Owner from './Owner.jsx'
import './styles.css'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/Owner",
    element:<Owner />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
