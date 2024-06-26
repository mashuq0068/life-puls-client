import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from "@mui/system";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUsers = () => {
       const axiosSecure = useAxiosSecure()
     const {loading} = useAuth()
    const { data:users , isPending , isLoading , refetch} = useQuery({
        queryKey:["users"],
        queryFn : async()=>{
            const response = await axiosSecure.get("/users")
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
    return {users , isPending , isLoading , refetch}
};

export default useUsers;