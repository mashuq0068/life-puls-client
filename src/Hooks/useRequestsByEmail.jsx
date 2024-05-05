import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useContactRequestsByEmail = () => {
  const axiosSecure = useAxiosSecure()
  const { loading , user} = useAuth()
  
   
    const { data : contactRequestsByEmail , isPending , isLoading , refetch} = useQuery({
        queryKey:["contactRequestsByEmail"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/contactRequests/${user?.email}`)
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
    return {contactRequestsByEmail , isPending , isLoading , refetch}
};

export default useContactRequestsByEmail;