import { FaUserGraduate } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";


const AdminHome = () => {
   
    // const {customers , products , orders , revenue} = counts

    
  
    return (
        <div className="w-[75vw] px-[10%] py-[5%] ">
            {/* one grid */}
            <div className="grid grid-cols-3 gap-[5%]">
           
            {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Total Biodata</h3>
            <p className=" bg-[#f06598] mb-[20%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaUserGraduate className=" text-3xl 2xl:text-4xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+100</p>

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
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+100</p>

           </div>

           </div>
            {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Female Biodata</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <FaFemale className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+100</p>

           </div>

           </div>
          
            
           
        </div>
        {/* firend */}
        {/* two grid */}
        <div className="w-[70%] mx-auto mt-[5%] gap-[5%] grid grid-cols-2">
             {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Premium Biodata</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <MdOutlineWorkspacePremium className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+100</p>

           </div>

           </div>
             {/* first */}
           <div className="px-[3%] spacing py-[15%] drop-shadow-xl  shadow-2xl">
           <div className="w-max mx-auto">
           <h3 className=" 2xl:text-2xl text-xl spacing font-semibold">Total Revenue</h3>
            <p className=" bg-[#f06598] mb-[15%]  h-1 mt-[1vh] w-[100%]"></p>
           </div>
           <div className="flex  justify-center items-center gap-[20%] ">
           <TfiWallet className=" text-4xl 2xl:text-5xl" />
           <p className="2xl:text-2xl text-xl  spacing font-semibold">+100</p>

           </div>

           </div>
          
            
        </div>
        </div>
    );
};

export default AdminHome;
