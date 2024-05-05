// import CircularProgress from '@mui/material/CircularProgress';
import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllBioDataForDetails = () => {
    const axiosPublic = useAxiosPublic()
   
    const { data:allBiodata , isPending , isLoading} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
            const response = await axiosPublic.get("/allBiodata")
            return response.data

        },
      
    })
    if( isPending){
        return(
             <Box
            sx={{
              display: 'flex',
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          >
           <CircularProgress color="danger" size="md" />
          </Box>
        )
    }
    return {allBiodata , isPending , isLoading}
};

export default useAllBioDataForDetails;