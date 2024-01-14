import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import  './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import App from './App';
import Auth from './components/Auth/Auth';
import PersInfo from './components/PersInfo/PersInfo';



const router = createBrowserRouter([
  {
    path: "/BikeShop/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/BikeShop/auth',
    element: <Auth/>
  },
  {
    path: '/BikeShop/persInfo',
    element: <PersInfo/>
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


