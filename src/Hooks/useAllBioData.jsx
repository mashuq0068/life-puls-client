// import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/system";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from '@mui/joy/CircularProgress';
import useAuth from "./useAuth";


const useAllBioData = () => {
  const axiosPublic = useAxiosPublic()
  const {loading} = useAuth()
   
    const { data , isPending , isLoading} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
            const response = await axiosPublic.get("/allBiodata")
            return response.data

        },
        enabled:!loading
      
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
    return {data , isPending , isLoading}
};

export default useAllBioData;