
// import useAllBioDataForDetails from "../../Hooks/useaAllBiodataForDeatils";
// import BioData from "../BioData/BioData";

import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BioData from "../BioData/BioData";


const BioDataDetailsSimilar = ({biodata}) => {
//   const {allBiodata}  =useAllBioDataForDetails()
const {biodataType} = biodata
const axiosPublic = useAxiosPublic()
const [allBioData , setAllBioData] = useState([])
useEffect(()=>{
    axiosPublic.get('/allBiodata')
    .then(res => {
       
        if(res.data){
            
            setAllBioData(res.data)
           
        }
    })
},[])
 
    return (
    <div>
        <h3 className=" text-center font-semibold pb-[1%] spacing text-3xl">Similar Biodata</h3>
        <p className=" bg-[#f06598] mt-[3%] mb-[10%] h-1 mx-auto w-[90%]"></p>
       <div className="grid grid-cols-1 2xl:grid-cols-1 gap-y-[1%] gap-x-[5%]">
        {allBioData?.filter(singleBioData => singleBioData?.biodataType === biodataType)?.map(biodata => <BioData key={biodata?._id} biodata={biodata}></BioData>)}
        
       </div> 
      </div> 
    );
};

export default BioDataDetailsSimilar;