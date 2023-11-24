import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";


const Router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
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

}])

export default Router