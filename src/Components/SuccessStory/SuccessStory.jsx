

import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import useSuccessStories from '../../Hooks/useSuccessStories';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';





const SuccessStory = () => {
    // const AutoplaySlider = withAutoplay(AwesomeSlider);
    const { successStories} = useSuccessStories()
    console.log(successStories)
  
    const ascendingOrder = successStories?.sort((a, b) => {
        const dateA = new Date("20" + a.marriageDate.split('/').join('-'));
        const dateB = new Date("20" + b.marriageDate.split('/').join('-'));
        return dateB - dateA;
      });
    if(ascendingOrder){
    return (
        <>
           <h3 className="lg:mt-36 mt-[15vh] md:mt-[15vh] spacing text-center 2xl:text-3xl font-bold text-2xl">Success Story</h3>
       <p className=" bg-[#f06598]  mb-[3%] h-1 mt-[1vh] mx-auto w-[60%] md:w-[36%] lg:w-[18%]"></p>
         
        
        <div className="flex lg:mb-[10vh] mb-[40vh] drop-shadow-xl shadow-lg shadow-black flex-col lg:w-[70%] md:w-[90%] mx-auto md:h-auto   lg:text-left text-center  lg:flex-row gap-20 mt-20 items-center px-[2%]">
        <AwesomeSlider 
        animation="fallAnimation"
        className='lg:h-auto h-[125vh]'
    play={true}
    
    cancelOnInteraction={false} 
    interval={2000}
  >
        
       
    
          
       
      {ascendingOrder?.map(successStory => 
      <div className='h-full w-full flex flex-col items-center gap-[5%] 2xl:text-lg spacing  bg-white' key={successStory?._id}>
        <div className='details-picture drop-shadow-xl shadow-xl shadow-black'>
        <img className='details-profile drop-shadow-xl shadow-xl shadow-black' src={successStory?.image} alt="" />
        </div>
        <p>Marriage Date : {successStory?.marriageDate}</p>
        {/* <p>{successStory?.reviewStars}</p> */}
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      
      
      <Rating name="read-only" value={successStory?.reviewStars} readOnly />
     
    </Box>
        <p className='lg:w-[60%] md:w-[80%] w-[90%] mx-auto text-left md:text-center'><span className='font-semibold'>Story : </span> {successStory?.successStory}</p>
      </div>
      )}
        
        </AwesomeSlider>

      {/* </div> */}
        {/* div */}
        
        </div>
        
        {/* faltu */}
        
        </>
    );
}};

export default SuccessStory;