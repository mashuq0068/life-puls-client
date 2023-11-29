import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useSuccessStories = () => {
  const axiosPublic = useAxiosPublic()
   
    const { data : successStories , isPending , isLoading} = useQuery({
        queryKey:["successStories"],
        queryFn : async()=>{
            const response = await axiosPublic.get("/successStories")
            return response.data

        },
      
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
    return {successStories , isPending , isLoading}
};

export default useSuccessStories;