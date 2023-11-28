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
import CheckOutPage from "../Pages/CheckOutPage/CheckOutPage";
import ContactRequestPage from "../Pages/ContactRequestPage/ContactRequestPage";
import AdminDashboardPage from "../Pages/AdminDashboardPage/AdminDashboardPage";
import ManageUsersPage from "../Pages/ManageusersPage/ManageUsersPage";


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
      },
      {
        path:'/checkOut/:id',
        element:<PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>
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
       },
       {
        path:'contactRequest',
        element:<ContactRequestPage></ContactRequestPage>
       },
      //  admin
      {
        path:'dashboardAdmin',
        element : <AdminDashboardPage></AdminDashboardPage>
      },
      {
        path:'manageUsers',
        element:<ManageUsersPage></ManageUsersPage>
      }
    ]
    
   }


])

export default Router