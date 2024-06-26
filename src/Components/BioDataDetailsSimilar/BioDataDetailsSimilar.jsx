
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BioData from "../BioData/BioData";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';


const BioDataDetailsSimilar = ({biodata}) => {

const {biodataType} = biodata
const axiosPublic = useAxiosPublic()

const {data , isPending , isLoading} = useQuery({
    queryKey:['biodataDetails'],
   queryFn  :async() => {
    const response =await axiosPublic.get('/allBiodata')
    return response?.data?.filter(biodata => biodata?.biodataType === biodataType)
   }
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
        color: '#f06598',
      }}
    />
  </Box>
 }
    return (
    <div>
        <h3 className=" text-center lg:font-semibold pb-[1%] spacing text-2xl lg:text-3xl">Similar Biodata</h3>
        <p className=" bg-[#f06598] mt-[3%] mb-[10%] h-1 mx-auto w-[50%] lg:w-[90%]"></p>
       <div className="grid grid-cols-1   lg:grid-cols-1 gap-y-[1%] gap-x-[5%]">
        {data?.map(biodata => <BioData key={biodata?._id} biodata={biodata}></BioData>)}
        
       </div> 
      </div> 
    );
};

export default BioDataDetailsSimilar;