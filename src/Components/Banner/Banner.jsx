import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="bg-[#fda3c4] flex  justify-center  h-[120vh] w-full">
           <div  data-aos-duration="1500" data-aos="fade-left" className="h-[60%] relative mt-[10%] flex justify-center items-center  bg-[#ff9ec1]  w-[70%]  drop-shadow-xl shadow-black shadow-lg" >
             <img className="h-[115%] -mt-[8%]" src="https://i.ibb.co/yfdXV9Y/depositphotos-200340872-stock-photo-attractive-young-male-female-models-removebg-preview.png" alt="" />
             <div data-aos-duration="2500" data-aos="fade-left" className=" absolute  uppercase  right-[7%] top-[30%] font-bold 2xl:text-3xl lg:text-2xl spacing lg:block hidden ">
              <p className=" spacing">Find Your Life Partner</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
              <p>With Life Puls</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
           </div>
           <div className="absolute md:-left-[8%]   uppercase font-bold -left-[16%] rotate-90 lg:left-[1%] lg:top-[50%]   2xl:text-4xl lg:text-2xl spacing ">
            <p>Best Platform</p>
           </div>
           <div className="absolute lg:block hidden animate-height right-0 h-[145%] w-[50%] rotate-90">
            
          <hr  className="border border-white h-full w-full"/>
         

           </div>
         
           <div className="absolute -left-[19%] md:-left-[17%] md:w-[50%] md:h-[10%]  lg:-left-[5%] lg:h-[20%] w-[70%] h-[10%] lg:w-[40%] rotate-90">
            
          <hr  className="border border-white h-full w-full"/>

           </div>
           </div>
           <div data-aos-duration="2500" data-aos="fade-left" className=" lg:hidden block absolute -bottom-[10%] md:-bottom-[20%] uppercase pt-[50%] font-bold 2xl:text-3xl lg:text-2xl spacing  ">
              <p className=" spacing">Find Your Life Partner</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
              <p>With Life Puls</p>
              <hr className="mt-[5%] mb-[5%] border-2 border-black"/>
           </div>
        
        </div>
    );
};

export default Banner;
