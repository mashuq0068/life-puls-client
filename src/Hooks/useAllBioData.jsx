import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAllBioData = () => {
  const axiosPublic = useAxiosPublic()
   
    const { data , isPending} = useQuery({
        queryKey:["biodata"],
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
                color: '#fda3c4',
              }}
            />
          </Box>
        )
    }
    return {data , isPending}
};

export default useAllBioData;