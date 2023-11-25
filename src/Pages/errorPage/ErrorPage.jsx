

import PropTypes from 'prop-types';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const { status , statusText } = error;
  console.log(status)

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-[80%] lg:w-[50%] text-center text-base  lg:text-xl space-y-5'>
            <div className='text-center flex justify-center'>
            {/* <a href="https://imgbb.com/"><img className='w-[300px] mx-auto' src="https://i.ibb.co/HqYb9x2/girl-dropping-food-on-the-floor-vector-removebg-preview.png" alt="girl-dropping-food-on-the-floor-vector-removebg-preview" border="0"/></a> */}
            <iframe
        src="https://giphy.com/embed/54oiNFBlb1F7Yqv3SA"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
            </div>
            <p className='text-[#f380aa] pt-[6vh] font-bold 2xl:text-5xl lg:text-3xl font bold text-xl'>{status} {statusText}</p>
            <p className='2xl:text-2xl mt-5 mb-5 pb-5 md:text-xl text-base '>
                {error?.error?.message}
            </p>
            <Link to='/' className='px-4 py-2 rounded-lg mt-5 bg-[#f380aa] drop-shadow-xl  2xl:text-xl lg:text-lg text-base'>Back To Home</Link>
        </div>
    </div>
  );
};


ErrorPage.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.number.isRequired,
    statusText: PropTypes.string.isRequired,
  }),
}
export default ErrorPage