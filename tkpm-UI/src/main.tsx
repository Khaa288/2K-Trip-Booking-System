import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import RegisterCustomer from './pages/RegisterCustomer'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import RegisterDriver from './pages/RegisterDriver';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { MapProvider } from 'react-map-gl';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <Error/>,
  },

  {
    path: "/customer/register",
    element: <RegisterCustomer/>,
  },

  {
    path: "/driver/register",
    element: <RegisterDriver/>,
  },

  {
    path: "/home",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </MapProvider>
  </React.StrictMode>,
)
