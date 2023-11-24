import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="bg-[#fda3c4] flex justify-center  h-[120vh] w-full">
           <div  data-aos-duration="1500" data-aos="fade-left" className="h-[60%] relative mt-[10%] flex justify-center items-center  bg-[#ff9ec1]  w-[70%]  drop-shadow-xl shadow-black shadow-lg" >
             <img className="h-[115%] -mt-[8%]" src="https://i.ibb.co/yfdXV9Y/depositphotos-200340872-stock-photo-attractive-young-male-female-models-removebg-preview.png" alt="" />
             <div data-aos-duration="2500" data-aos="fade-left" className=" absolute  uppercase  right-[7%] top-[30%] font-bold 2xl:text-3xl lg:text-2xl spacing ">
              <p className=" spacing">Find Your Life Partner</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
              <p>With Life Puls</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
           </div>
           <div className="absolute  uppercase font-bold  text-white rotate-90 left-[1%] top-[50%]  2xl:text-4xl lg:text-2xl spacing ">
            <p>Best Platform</p>
           </div>
           </div>
        
        </div>
    );
};

export default Banner;