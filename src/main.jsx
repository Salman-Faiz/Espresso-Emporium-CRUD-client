import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layouts/Root';
import Home from './Pages/Home/Home';
import AddCoffee from './Pages/AddCoffee/AddCoffee';
import Update from './Pages/Update/Update';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Users from './Pages/Users/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffee')
      },
      {
        path:'/addcoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'/updateCoffee/:id',
        element:<Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/users',
        element:<Users></Users>
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
