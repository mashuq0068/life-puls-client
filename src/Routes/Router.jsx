import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import HomePage from "../Pages/HomePage/HomePage";


const Router = createBrowserRouter([{
    path:'/',
    element:<Root></Root>,
    children : [{
        path:'/',
        element:<HomePage></HomePage>
    }]

}])

export default Router