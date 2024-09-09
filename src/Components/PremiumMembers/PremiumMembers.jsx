import { useEffect, useState } from 'react';
import useAllBioData from '../../Hooks/useAllBioData';
import BioData from "../BioData/BioData"
import Aos from 'aos';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/joy';

const PremiumMembers = () => {
  const {data}= useAllBioData()
  const [isHomePageLoaded , setIsHomePageLoaded] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{
            setIsHomePageLoaded(true)
            Aos.init()
        },2000)
    },[])
    if(!isHomePageLoaded){
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
  
 
 
  
  const filteredByPremium = data?.filter(biodata => biodata?.isPremium === true)
  console.log(filteredByPremium)
  if(filteredByPremium){
    return (
        <div data-aos-duration="1000" data-aos="fade-up" className='lg:mb-[15%] mb-[5vh]'>
        <h3 className="md:mt-36 mt-20 spacing  text-center 2xl:text-4xl mb-[3%] font-semibold  text-xl"><span className='text-[#f42a41]'>Top</span> Premium Members</h3>
       {/* <p className=" bg-[#f06598] mb-[3%] h-1 mt-[1vh] mx-auto w-[80%] md:w-[50%] lg:w-[23%]"></p> */}
       <div className='2xl:w-[75vw]  mt-[10vh] md:mt-[7%] lg:mt-[10vh] 2xl:mt-0  px-[3%] md:grid-cols-2 grid-cols-1 mx-auto grid lg:grid-cols-3 gap-[5vh] md:col-gap-[30%] lg:gap-[5%]'>
        {filteredByPremium.sort((a , b) => a.age - b.age)?.slice(0,6)?.map(biodata => <BioData key={biodata?._id} biodata = {biodata}></BioData>)}
       </div>
        </div>
    );
}};

export default PremiumMembers;