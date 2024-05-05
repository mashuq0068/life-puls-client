

import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAllCounts = () => {
  const axiosSecure = useAxiosSecure()
  const { loading} = useAuth()
   
    const { data : allCounts , isPending , isLoading} = useQuery({
        queryKey:["allCounts"],
        queryFn : async()=>{
            const response = await axiosSecure.get("/allCounts")
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
    return {allCounts , isPending , isLoading}
};

export default useAllCounts;