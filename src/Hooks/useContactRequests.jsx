import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useContactRequests = () => {
  const axiosSecure = useAxiosSecure()
  const { loading} = useAuth()
   
    const { data : contactRequests , isPending , isLoading} = useQuery({
        queryKey:["contactRequests"],
        queryFn : async()=>{
            const response = await axiosSecure.get("/contactRequests")
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
            <CircularProgress
              sx={{
                color: '#f06598',
              }}
            />
          </Box>
        )
    }
    return {contactRequests , isPending , isLoading}
};

export default useContactRequests;