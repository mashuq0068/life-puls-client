

import AwesomeSlider from 'react-awesome-slider';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import useSuccessStories from '../../Hooks/useSuccessStories';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';





const SuccessStory = () => {
    // const AutoplaySlider = withAutoplay(AwesomeSlider);
    const { successStories} = useSuccessStories()
    console.log(successStories)
    
    
    return (
        <>
           <h3 className="md:mt-36 mt-[170vh] spacing text-center 2xl:text-3xl font-bold text-2xl">Success Story</h3>
       <p className=" bg-[#f06598]  mb-[3%] h-1 mt-[1vh] mx-auto w-[16%]"></p>
         
        
        <div className="flex drop-shadow-xl shadow-lg mb-[10vh] shadow-black flex-col w-[70%] mx-auto  lg:text-left text-center  lg:flex-row gap-20 mt-20 items-center px-[2%]">
        <AwesomeSlider 
        animation="fallAnimation"
    play={true}
    cancelOnInteraction={false} 
    interval={2000}
  >
        
       
    
          
       
      {successStories?.map(successStory => 
      <div className='h-full w-full flex flex-col items-center gap-[5%] 2xl:text-lg spacing  bg-white' key={successStory?._id}>
        <div className='details-picture drop-shadow-xl shadow-xl shadow-black'>
        <img className='details-profile drop-shadow-xl shadow-xl shadow-black' src={successStory?.image} alt="" />
        </div>
        <p>Marriage Date : {successStory?.marriageDate}</p>
        <p>{successStory?.reviewStars}</p>
        <p className='w-[60%] mx-auto text-center'><span className='font-semibold'>Story : </span> {successStory?.successStory}</p>
      </div>
      )}
        
        </AwesomeSlider>

      {/* </div> */}
        {/* div */}
        
        </div>
        
        {/* faltu */}
        
        </>
    );
};

export default SuccessStory;