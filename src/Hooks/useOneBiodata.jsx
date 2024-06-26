import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { Box } from "@mui/material";
import CircularProgress from '@mui/joy/CircularProgress';


const useOneBioData = () => {
    const axiosSecure = useAxiosSecure()
    const {user , loading} = useAuth()
    const {isLoading , data , isPending} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/biodata/${user?.email}`)
            return response.data

        },
        enabled:!loading
    })
    if(isLoading || loading || isPending){
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
    return {data , isLoading , isPending }
    
};

export default useOneBioData;