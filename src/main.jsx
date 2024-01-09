import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeNormal from './component/Home-Normal.jsx';
import Owner from './component/Owner.jsx';
import HomeUser from './component/Home-User.jsx';
import HomeAdmin from './component/Home-Admin.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeNormal />
  },
  {
    path:'/owner',
    element: <Owner />
  },
  {
    path:'/homeuser',
    element: <HomeUser />
  },
  {
    path:'/homeadmin',
    element: <HomeAdmin />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //in react dom
  <RouterProvider router={router}/>
  
)