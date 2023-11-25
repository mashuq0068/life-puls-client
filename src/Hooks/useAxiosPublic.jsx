import axios from "axios";


const useAxiosPublic = () => {
    const useAxiosPublic = axios.create({
        baseURL:'http://localhost:5000'
    })
    return (
        useAxiosPublic
    );
};

export default useAxiosPublic;