import { FaUserGraduate } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

import { TfiWallet } from "react-icons/tfi";
import useAllCounts from "../../Hooks/useAllCounts";



const CounterSection = () => {
   
    // const {customers , products , orders , revenue} = counts
const{allCounts} = useAllCounts()
console.log(allCounts)
    
  if(allCounts){
    return (
        <div className="w-[75vw] mx-auto px-[10%] py-[5%] ">
            {/* one grid */}
            <h3 className="md:mt-36 mt-[170vh] spacing text-center 2xl:text-3xl font-bold text-2xl">Success Counter</h3>
       <p className=" bg-[#f06598]  mb-[3%] h-1 mt-[1vh] mx-auto w-[32%]"></p>
            <div className="grid grid-cols-2 w-[70%] mx-auto gap-[5%]">
           
            {/* first */}
           <div className="px-[3%]  spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Total Biodata</h3>
            <p className=" bg-[#f06598] mb-[20%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaUserGraduate className=" text-3xl 2xl:text-4xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+{allCounts?.totalBiodata}</p>

           </div>

           </div>
            {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Male Biodata</h3>
            <p className=" bg-[#f06598] mb-[17%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaMale className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+{allCounts?.maleBiodata}</p>

           </div>

           {/* </div>
            {/* first */}
           {/* <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Female Biodata</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaFemale className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+{allCounts?.femaleBiodata}</p>

           </div>  */}

           </div>
          
            
           
        </div>
        {/* firend */}
        {/* two grid */}
        <div className="w-[70%] mx-auto mt-[5%] gap-[5%] grid grid-cols-2">
             {/* first */}
             <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Female Biodata</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaFemale className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+{allCounts?.femaleBiodata}</p>

           </div>
           </div>
           
             {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Total Marriage</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <TfiWallet className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">${allCounts?.contactRequests*500}</p>

           </div>

           </div>
          
            
        </div>
        </div>
    );
}};

export default CounterSection;
