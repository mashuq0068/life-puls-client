
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';

const useCountBiodata = () => {
  const axiosPublic = useAxiosPublic();
 
  const {data : biodataCount  , isPending , isLoading} = useQuery({
    queryKey:['biodataCount'],
   queryFn  :async() => {
    const response = await axiosPublic.get('/countBiodata')
    return response?.data
   }
})
 if(isPending || isLoading) {
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
 }

  return { biodataCount };
};

export default useCountBiodata;
