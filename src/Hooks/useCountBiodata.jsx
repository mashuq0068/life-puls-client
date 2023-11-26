import { useState, useEffect } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useCountBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const [biodataCount, setBiodataCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCountBiodata = async () => {
      try {
        const response = await axiosPublic.get('/countBiodata');
        setBiodataCount(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching countBiodata:', error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchCountBiodata();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return 'Error fetching countBiodata';
  }

  return { biodataCount };
};

export default useCountBiodata;
