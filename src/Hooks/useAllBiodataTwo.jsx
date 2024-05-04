import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAllBioDataTwo = () => {
  const axiosPublic = useAxiosPublic()
   
    const { data : allBiodata , isPending , isLoading} = useQuery({
        queryKey:["allBiodata"],
        queryFn : async()=>{
            const response = await axiosPublic.get("/allBiodata")
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
                color: '#f06598',
              }}
            />
          </Box>
        )
    }
    return {allBiodata, isPending , isLoading}
};

export default useAllBioDataTwo;