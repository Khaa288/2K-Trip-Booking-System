import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Register from './pages/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <Error/>,
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/home",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
