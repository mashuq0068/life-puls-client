import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import Dashboard from "../Roots/Dashboard";
import ErrorPage from "../Pages/errorPage/ErrorPage";


const Router = createBrowserRouter([
    {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children : [
        {
        path:'/',
        element:<HomePage></HomePage>
       },
        {
        path:'/login',
        element:<LoginPage></LoginPage>
       },
       {
        path:'/signUp',
        element:<SignUpPage></SignUpPage>
       }
     ]
   },
   {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      
    ]
    
   }


])

export default Router