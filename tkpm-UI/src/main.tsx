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
import TripDriverDetail from './components/Customer/TripDriverDetail';
import CustomerHome from './pages/CustomerHome';
import DriverHome from './pages/DriverHome';
import AdminHome from './pages/AdminHome';
import OperatorHome from './pages/OperatorHome';
import DriverPickUp from './components/Driver/DriverPickUp';
import TripPayment from './components/Driver/TripPayment';
import OperatedTrip from './pages/OperatedTrip';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OperatedTrip/>,
    errorElement: <Error/>,
  },

  {
    path: "/login",
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

  {
    path: "/customer/home",
    element: <CustomerHome/>,
  },

  {
    path: "/customer/trip",
    element: <TripDriverDetail/>
  },

  {
    path: "/driver/home",
    element: <DriverHome/>,
  },

  {
    path: "/driver/trip",
    element: <DriverPickUp/>,
  },

  {
    path: "/driver/payment",
    element: <TripPayment/>,
  },

  {
    path: "/admin/home",
    element: <AdminHome/>,
  },

  {
    path: "/operator/home",
    element: <OperatorHome/>,
  }
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
