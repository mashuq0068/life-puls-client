import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const BioDataDetails = () => {
    const [data , setData] = useState()
    const axiosSecure = useAxiosSecure()
    const params = useParams()
    console.log(params)
    useEffect(()=>{
    axiosSecure.get(`/biodata/${params?.email}`)
    .then(res => {
        console.log(res.data)
        if(res.data){
            setData(res.data)
        }
    })
    },[])
    return (
        <div className="mt-[7%]">
            <img src={data?.profileLink} alt="" />
        </div>
    );
};

export default BioDataDetails;