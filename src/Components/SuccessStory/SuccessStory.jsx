import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import useSuccessStories from '../../Hooks/useSuccessStories';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const SuccessStory = () => {
  const { successStories } = useSuccessStories();
  

  const ascendingOrder = successStories?.sort((a, b) => {
    const dateA = new Date("20" + a.marriageDate.split('/').join('-'));
    const dateB = new Date("20" + b.marriageDate.split('/').join('-'));
    return dateB - dateA;
  });

  if (ascendingOrder) {
    return (
      <>
        <h3 className="lg:mt-36 mt-[15vh] md:mt-[15vh] spacing text-center mb-[3%] 2xl:text-4xl font-semibold text-2xl"><span className='text-[#f42a41]'>Success </span> Story</h3>
       

        <div className="flex lg:mb-[10vh]  mb-[40vh] lg:w-[60vw] md:w-[90vw] drop-shadow-lg shadow-lg shadow-black flex-col  mx-auto md:h-auto lg:text-left text-center lg:flex-row gap-20 mt-20 items-center ">
          <AwesomeSlider
            animation="fallAnimation"
            className='lg:h-auto h-[550px] '
            play={true}
            cancelOnInteraction={false}
            interval={2000}
          >
            {ascendingOrder?.map(successStory =>
              <div className='lg:h-full h-[550px]  w-full flex flex-col items-center gap-[5%] 2xl:text-lg spacing  bg-white' key={successStory?._id}>
                <div className='details-picture drop-shadow-xl shadow-xl shadow-black'>
                  <img className='details-profile drop-shadow-xl shadow-xl shadow-black' src={successStory?.image} alt="" />
                </div>
                <p>Marriage Date : {successStory?.marriageDate}</p>
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
        </div>
      </>
    );
  }
};

export default SuccessStory;
