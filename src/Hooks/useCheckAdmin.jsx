import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useCheckAdmin = () => {
  const axiosSecure  = useAxiosSecure()
  const {user , loading} = useAuth()
   
    const { data : isAdmin , isPending , isLoading} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/checkAdmin/${user?.email}`)
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
    return {isAdmin , isPending , isLoading}
};

export default useCheckAdmin;