

// import { TfiWallet } from "react-icons/tfi";
import useAllCounts from "../../Hooks/useAllCounts";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";





const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
      if (inView) {
          setIsVisible(true);
          
      }
  }, [inView]);
   
    // const {customers , products , orders , revenue} = counts
const{allCounts} = useAllCounts()

;
    
  if(allCounts){
    return (
        <div  className="lg:w-[75vw]  mx-auto  px-[10%] py-[5%] ">
            {/* one grid */}
            <h3 className="md:mt-32 mt-[20vh] mb-[3%] spacing text-center 2xl:text-3xl font-bold text-2xl"><span className='text-[#f42a41] '>Success </span> Counter</h3>
     
            <div className="w-[85%] relative mx-auto mt-[5%] gap-[5%] grid grid-cols-1 md:grid-cols-2">
           
            {/* first */}
          
             {/* female */}
             <div className=" flex items-center gap-[20px]">
              <img width={150} src="https://tse1.mm.bing.net/th?id=OIP.MVJcYEbxpX4e2MAmqWtXAwHaHa&pid=Api&P=0&h=220"/>
              <div className=" space-y-5">
              <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Female Biodata </h3>
             <div>
             {isVisible && <CountUp end={7000} duration={5}  className="2xl:text-3xl text-xl text-[#f42a41]   spacing font-semibold"/>}
             </div>
              </div>
            </div>
            {/* male */}
        
            <div className=" flex lg:absolute right-0 items-center gap-[20px]">
              <img width={150} src="https://cdn-icons-png.flaticon.com/512/236/236831.png"/>
              <div className=" space-y-5">
              <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Male Biodata</h3>
             <div>
             {isVisible && <CountUp end={12000} duration={5}  className="2xl:text-3xl text-xl   spacing font-semibold"/>}
             </div>
              </div>
            </div>
             
          
            
           
        </div>
      
        {/*second */}
        <div className="w-[85%] relative mx-auto mt-[5%] gap-[5%] justify-between grid grid-cols-1 md:grid-cols-2">
             {/* total*/}
             <div className=" flex items-center gap-[20px]">
              <img width={150} src="https://cdn4.iconfinder.com/data/icons/seo-and-digital-marketing-8/128/392-1024.png"/>
              <div className=" space-y-5">
              <h3  className=" 2xl:text-2xl text-xl spacing font-semibold">Total Biodata</h3>
             <div>
             {isVisible && <CountUp end={12000} duration={5}  className="2xl:text-3xl text-xl   spacing font-semibold"/>}
             </div>
              </div>
            </div>
           
             {/*success*/}
             <div className=" flex lg:absolute right-0 items-center gap-[20px]">
              <img width={150} src="https://www.publicdomainpictures.net/pictures/270000/velka/wedding-marriedicon-couple-br.jpg"/>
              <div className=" space-y-5">
              <h3 ref={ref}  className=" 2xl:text-2xl text-xl spacing font-semibold">Success Count</h3>
             <div>
             {isVisible && <CountUp end={12000} duration={5}  className="2xl:text-3xl text-xl   spacing font-semibold"/>}
             </div>
              </div>
            </div>
          
            
        </div>
        </div>
        
    );
}};

export default CounterSection;
