import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


const useAxiosSecure = () => {
    const {logOutUser} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL:'http://localhost:5000'
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
        }
        return Promise.reject(error);
    
        
    })
    return axiosSecure;

     
};

export default useAxiosSecure;