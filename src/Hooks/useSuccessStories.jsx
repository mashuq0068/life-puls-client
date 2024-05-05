import CircularProgress from '@mui/joy/CircularProgress';
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
           <CircularProgress color="danger" size="md" />
          </Box>
        )
    }
    return {successStories , isPending , isLoading}
};

export default useSuccessStories;