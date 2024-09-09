
import useAllCounts from "../../Hooks/useAllCounts";
import useCheckAdmin from "../../Hooks/useCheckAdmin";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import UserActivities from "./UserActivities";
import Revenue from "./Revenue";
import SuccessRate from "./SuccessRate";





const AdminHome = () => {
   
    // const {customers , products , orders , revenue} = counts
const{allCounts} = useAllCounts()
console.log(allCounts)
const {isAdmin} = useCheckAdmin()
const { ref, inView } = useInView();
const [isVisible, setIsVisible] = useState(false);

    
useEffect(() => {
  if (inView) {
      setIsVisible(true);
      
  }
}, [inView]);



if(allCounts){
return (
  <div className="2xl:w-[85vw] lg:w-[80vw] mx-auto  px-[5%] py-[5%] ">
    <div  className=" justify-between flex  ">

        {/* one grid */}
        {/* <h3 className="md:mt-32 mt-[20vh] mb-[3%] spacing text-center 2xl:text-3xl font-bold text-2xl"><span className='text-[#f42a41] '>Success </span> Counter</h3>
  */}
   
       
        
         {/* female */}
         <div className=" flex items-center gap-[20px]">
          <img width={90} src="https://tse1.mm.bing.net/th?id=OIP.MVJcYEbxpX4e2MAmqWtXAwHaHa&pid=Api&P=0&h=220"/>
          <div className=" space-y-5">
          <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Female Biodata </h3>
         <div>
         {isVisible && <CountUp end={7000} duration={5}  className="2xl:text-3xl text-xl text-pink-500   spacing font-semibold"/> }
         <span className="2xl:text-3xl text-xl  text-pink-500   spacing font-semibold">+</span>
         </div>
          </div>
        </div>
        {/* male */}
    
        <div className=" flex items-center gap-[20px]">
          <img width={90} src="https://cdn-icons-png.flaticon.com/512/236/236831.png"/>
          <div className=" space-y-5">
          <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Male Biodata</h3>
         <div>
         {isVisible && <CountUp end={12000} duration={5}  className="2xl:text-3xl text-xl text-red-500   spacing font-semibold"/>}
         <span className="2xl:text-3xl text-xl  text-red-500   spacing font-semibold">+</span>
         </div>
          </div>
       
         
      
        
       
    </div>
  
    
   
         {/* total*/}
         <div className=" flex items-center gap-[20px]">
          <img width={90} src="https://cdn4.iconfinder.com/data/icons/seo-and-digital-marketing-8/128/392-1024.png"/>
          <div className=" space-y-5">
          <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Total Biodata</h3>
         <div>
         {isVisible && <CountUp end={17000} duration={5}  className="2xl:text-3xl text-xl   text-fuchsia-500 spacing font-semibold"/>}
         <span className="2xl:text-3xl text-xl text-fuchsia-500  spacing font-semibold">+</span>
         </div>
          </div>
        </div>
       
         {/*success*/}
         <div className=" flex items-center gap-[20px]">
          <img width={90} src="https://icon-library.com/images/revenue-icon/revenue-icon-0.jpg"/>
          <div className=" space-y-5">
          <h3 ref={ref}  className=" 2xl:text-2xl text-xl spacing font-semibold">Total Revenue</h3>
         <div>
         {isVisible && <CountUp end={800} duration={5}  className="2xl:text-3xl text-xl text-teal-500  spacing font-semibold"/>}
         <span className="2xl:text-3xl text-xl  text-teal-500   spacing font-semibold">k+</span>
         </div>
          </div>
        </div>
      
        
    
    </div>
    
    <div className=" mt-[5%] flex justify-between">
      <UserActivities/>
      <Revenue/>
    </div>
    <div>
    <SuccessRate/>
    </div>
    </div>
    
);
}};

export default AdminHome;
