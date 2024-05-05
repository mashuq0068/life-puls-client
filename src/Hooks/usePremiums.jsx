

import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePremiums = () => {
  const axiosSecure = useAxiosSecure()
  const { loading} = useAuth()
   
    const { data : premiumRequests , isPending , isLoading , refetch} = useQuery({
        queryKey:["premiumRequests"],
        queryFn : async()=>{
            const response = await axiosSecure.get("/premiums")
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
    return {premiumRequests , isPending , isLoading , refetch}
};

export default usePremiums;