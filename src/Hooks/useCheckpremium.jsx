

import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCheckPremium = () => {
  const axiosSecure  = useAxiosSecure()
  const {user , loading} = useAuth()
   
    const { data : premium , isPending , isLoading} = useQuery({
        queryKey:["premium"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/checkPremium/${user?.email}`)
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
                color: '#fda3c4',
              }}
            />
          </Box>
        )
    }
    return {premium , isPending , isLoading}
};

export default useCheckPremium;