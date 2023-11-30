import {  useState } from "react";
import BioData from "../BioData/BioData";
import useCountBiodata from "../../Hooks/useCountBiodata";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";


const PaginationBioData = () => {
    const axiosPublic = useAxiosPublic()
   
    const [perPageData , setPerPageData] = useState(6)
    const [selectedPage , setSelectedPage] = useState(0)
  
    const {data  , isPending , isLoading} = useQuery({
        queryKey:['biodataCount', perPageData , selectedPage],
       queryFn  :async() => {
        const response = await axiosPublic.get(`/paginationBiodata?skipPages=${selectedPage}&pageData=${perPageData}`)
        return response?.data
       },
    
    
    })
     if(isPending || isLoading) {
        <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          top: '50%',
          left: '50%',
        }}
      >
        <CircularProgress
          sx={{
            color: '#fda3c4',
          }}
        />
      </Box>
     }
    const handlePageDataOptions =(e) => {
        setPerPageData(e.target.value)
        console.log(e.target.value)
        setSelectedPage(0)
        
    }
     
     const {biodataCount} = useCountBiodata()
     console.log(biodataCount)
  
   
     const totalPage = (biodataCount && biodataCount.count) ? Math.ceil(biodataCount.count / perPageData) : 0;
     const pages = [...Array(totalPage).keys()]
    return (
     <div className="">
        <h3 className=" text-center font-semibold pb-[1%] spacing text-3xl">All Biodata</h3>
        <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
       <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
        {data?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
        
       </div>
       <div className="fixed px-[1%] py-[1%] rounded-lg shadow-black bg-white drop-shadow-xl shadow-xl bottom-[5%] right-[5%] flex gap-1" >
       {pages?.map((page , i) => 
      
        <button onClick={()=>{setSelectedPage(page)}} className=" focus:border hover:border rounded-lg  bg-glass drop-shadow-xl focus:bg-[#f06598] shadow-xl border hover:bg-[#f06598] border-[#f06598]  px-4 py-2 mr-[2%]" key={i}>{page}</button>
       )}
       <select className="bg-glass"  value={perPageData}  onChange={handlePageDataOptions} name="" id="">
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="10">10</option>
               
            </select>
       </div>
      
     
    </div>
    );
};

export default PaginationBioData;