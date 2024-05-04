import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
// import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useSearchData = (name) => {
  const axiosSecure = useAxiosSecure()
  const {loading} = useAuth()
   
    const { data : searchData , isPending , isLoading} = useQuery({
        queryKey:["search"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/userByName/${name}`)
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
    return {searchData , isPending , isLoading}
};

export default useSearchData;