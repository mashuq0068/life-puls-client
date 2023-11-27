import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import Dashboard from "../Roots/Dashboard";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import EditBioDataPage from "../Pages/EditBioDataPage/EditBioDataPage";
import BiodatasPage from "../Pages/BiodatasPage/BiodatasPage";
import BioDataDetailsPage from "../Pages/BiodataDetailsPage/BioDataDetailsPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "../Pages/ContactUsPage/ContactUsPage";
import ViewBioDataPage from "../Pages/ViewBiodataPage/ViewBiodataPage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritePage";


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
       },
       {
         path:'/biodatas',
         element:<BiodatasPage></BiodatasPage>
       },
       {
        path:'/biodata/:email',
        element : <PrivateRoute><BioDataDetailsPage></BioDataDetailsPage></PrivateRoute>
       },
      { 
        path:'/about',
        element:<AboutUsPage></AboutUsPage>
      },
      {
        path:'/contact',
        element:<ContactUsPage></ContactUsPage>
      }
     ]
   },
   {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      // user
       {
        path:'edit',
        element:<EditBioDataPage></EditBioDataPage>
       },
       {
        path:'view',
        element:<ViewBioDataPage></ViewBioDataPage>
       },
       {
        path:'favorites',
        element:<FavoritesPage></FavoritesPage>
       }
    ]
    
   }


])

export default Router