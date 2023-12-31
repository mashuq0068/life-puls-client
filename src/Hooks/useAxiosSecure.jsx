import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const useAxiosSecure = () => {
    const {logOutUser} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL:'https://life-puls-server.vercel.app'
    })
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        console.log("axios is intercepting")
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, function (error) {
        console.log(error)
       
        return Promise.reject(error);
      })
       
    axiosSecure.interceptors.response.use( function(response) {
        
        return response;
      }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOutUser();
            navigate('/login')
            // <p className=" text-center mt-[20%]">You are unAuthorized or forbidden</p>
        }
        return Promise.reject(error);
    
        
    })
    return axiosSecure;

     
};

export default useAxiosSecure;