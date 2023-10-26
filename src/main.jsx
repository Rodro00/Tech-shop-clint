import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home/Home.jsx';
import Login from './Login-Register/Login';
import Register from './Login-Register/Register';
import ErrorPage from './ErrorPage';
import AuthProvider from './AuthProvider';
import AddProduct from './Login-Register/AddProduct';
import SingleBrandData from './SingleBrandData/SingleBrandData';
import OneCard from './SingleBrandData/OneCard';
import Update from './Update/Update';
import Mycart from './Mycart';
import NewBanner from './Home/NewBanner';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/products/:brand',
        element: <PrivateRoute><SingleBrandData></SingleBrandData></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/product/${params.brand}`)
      },
      {
        path: '/details/:id',
        element: <OneCard></OneCard>,
        loader: ({ params }) => fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/details/${params.id}`)
      },
      {
        path: '/mycart',
        element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
        loader: () => fetch('https://tech-shop-ax1justgo-rodros-projects.vercel.app/carts')
      },
      {
        path: '/product/:brand',
        element: <NewBanner></NewBanner>,
        loader: ({ params }) => fetch(`https://tech-shop-ax1justgo-rodros-projects.vercel.app/product/${params.brand}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
