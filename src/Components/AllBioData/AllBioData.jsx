import { Box } from "@mui/system";
import useAllBioData from "../../Hooks/useAllBioData";
import BioData from "../BioData/BioData";

import { useEffect, useState } from "react";
import PaginationBioData from "../PaginationBiodata/PaginationBioData";
import useAuth from "../../Hooks/useAuth"
import CircularProgress from '@mui/joy/CircularProgress';





const AllBioData = () => {
    const {data , isPending , isLoading} = useAllBioData()
    console.log(data);
    const [filterSectionData, setFilterSectionData] = useState([]);
   const {loading} = useAuth()
   const [allowFilterPart , setAllowFilterPart] = useState(false)
   const [dataLoading , setDataLoading] = useState(true)
   console.log(filterSectionData);
   
   useEffect(()=>{
    setTimeout(()=>{
      setAllowFilterPart(true)

    } , 2000)
   },[data])
 
   useEffect(() => {
    const fetchData = async () => {
      setTimeout(()=>{
        if (data) {
            setFilterSectionData(data);
            setDataLoading(false);
        }
    }
   ), 1000};

    fetchData();

    // Cleanup function to prevent memory leaks
    return () => {
        // Any necessary cleanup code
    };
}, [data]);
    // const axiosPublic = useAxiosPublic()
    
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [division, setDivision] = useState('');
    const [biodataType , setBiodataType] = useState('')
    
    const handleMinAge = (e) => {
      console.log(e.target.value)
      setMinAge(e.target.value)
 
    }
    const handleMaxAge = (e) => {
      console.log(e.target.value)
      setMaxAge(e.target.value)

    }
    const handleDivision = (e) => {
      console.log(e.target.value)
      setDivision(e.target.value)

    }
    const handleBiodataType = (e) => {
      console.log(e.target.value)
      setBiodataType(e.target.value)

    }
    const handleFilterDivision = async () => {
      if (!division) {
         console.log("no data")
         return;
      }
   
      const filteredData = await data.filter((biodata) => 
         biodata?.division === division 
      );
   
      setFilterSectionData(filteredData);
   }
    const handleFilterAge = async () => {
      if (!minAge && !maxAge) {
         console.log("no data")
         return;
      }

      if(minAge && !maxAge){
        const filteredData = await data.filter((biodata) => 
       biodata?.age >= parseInt(minAge)
      )
      setFilterSectionData(filteredData)
      return
    
      }
      if(!minAge && maxAge){
        const filteredData = await data.filter((biodata) => 
         biodata?.age <= maxAge
      )
      setFilterSectionData(filteredData)
      return
      }
      
   
      const filteredData = await data.filter((biodata) => 
      biodata?.age >= minAge &&  biodata?.age <= maxAge 
      );
   
    return  setFilterSectionData(filteredData);
   }

   const handleFilterGender = async() => {
        if(!biodataType){
          return
        }
        const filteredData = await data.filter((biodata) => 
        biodata?.biodataType === biodataType
     );
  
     setFilterSectionData(filteredData);
   }
    
    if(isPending || isLoading || loading || dataLoading || !filterSectionData || !data){
        return(
             <Box
            sx={{
              display: 'flex',
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          >
           <CircularProgress color="danger" size="md" />
          </Box>
        )
    }
    return (
      
        <div className="flex justify-center gap-[5%]">
            <div className="  lg:p-0  ">
              {/* filter field */}
              <h3 className=" text-center lg:mt-0 mt-[10vh] mb-[3%] 2xl:font-semibold pb-[1%] spacing 2xl:text-3xl text-2xl"><span className='text-[#f42a41]'>Filter</span> Biodata </h3>
          
              <div>
                <form className="lg:px-[5%] md:mt-0 mt-[10vh] md:px-[10%] grid grid-cols-3 md:gap-0 gap-[5%]  justify-around md:flex">
                 <div className=" flex flex-col md:w-[25%]">
                 <label htmlFor="age" className="text-center 2xl:font-semibold spacing mb-[3%]">Age</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  <input onChange={handleMinAge} type="number" placeholder="min" className="focus:border-[#f06f9e] focus:border focus:outline-none md:pl-2 h-[4vh]  w-full border-none drop-shadow-xl  shadow-lg bg-blue-100 md:w-[40%] border border-[#f06f9e]" />
                 
                  <input onChange={handleMaxAge} type="number" placeholder="max" className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[4vh] border-none drop-shadow-xl  shadow-lg bg-blue-100 w-full md:w-[40%] border border-[#f06f9e]"  />
                
                 </div>
                 
                 </div>
                 {/* second */}
                 <div className=" flex flex-col  md:w-[25%]">
                 <label htmlFor="age" className="text-center 2xl:font-semibold spacing mb-[3%]">Division</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  
                  <select onChange={handleDivision} className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[4vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-full border border-[#f06f9e]">
                    <option></option>
                  <option value="Dhaka">Dhaka</option>
                   <option value="Khulna"> Khulna</option>
                   <option value="Rajshahi">Rajshahi</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Barisal">Barisal</option>
                   <option value="Maymansing">Maymansing</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rangpur">Rangpur</option>
                  </select>
                 </div>
                 
                 </div>
                 {/* second */}
                 <div className=" flex flex-col md:w-[25%]">
                 <label htmlFor="age" className="text-center 2xl:font-semibold spacing mb-[3%]">Biodata Type</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  
                  <select onChange={handleBiodataType} className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[4vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-full border border-[#f06f9e]">
                    <option></option>
                  <option value="Male">Male</option>
                   <option value="Female">Female</option>
                
                  </select>
                  {/* <Select   options={GenderOptions}></Select> */}
                 </div>
                 
                 </div>
                 {/* second */}
              
                </form>
                {/* laptob */}
                <div className=" hidden md:flex justify-around lg:mb-0 mb-[7vh] px-[2%]">
                <button onClick={handleFilterAge} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing  drop-shadow-xl mb-[5%] mt-[5%] rounded-lg text-white font-medium  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                  Filter By Age
                </button>
                <button onClick={handleFilterDivision} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing  drop-shadow-xl mb-[5%] mt-[5%] rounded-lg text-white font-medium  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                  Filter By Division
                </button>
                <button onClick={handleFilterGender} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing  drop-shadow-xl mb-[5%] mt-[5%] rounded-lg text-white font-medium  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                  Filter By Gender
                </button>
                
                </div>
                {/* mobile */}
                <div className="flex md:hidden justify-around lg:mb-0 mb-[7vh] px-[2%]">
                <button onClick={handleFilterAge} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-white font-medium  drop-shadow-xl mb-[5%] mt-[5%]  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                   Age
                </button>
                <button onClick={handleFilterDivision} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-white font-medium drop-shadow-xl mb-[5%] mt-[5%]  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                   Division
                </button>
                <button onClick={handleFilterGender} className="text-center 2xl:font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-white font-medium drop-shadow-xl mb-[5%] mt-[5%]  bg-gradient-to-r from-rose-500 to-rose-600 shadow-xl spacing">
                   Gender
                </button>
                
                </div>
              </div>
              {/* biodata */}
              <div>
              <div className="grid relative max-w-[50vw] md:grid-cols-2 grid-cols-1 lg:grid-cols-1 2xl:grid-cols-2 gap-y-[3vh] lg:gap-x-[5%]">
            {filterSectionData?.length === 0 ? 
            <div className="w-max mx-auto">
              <p className=" ">No Biodata Like that</p>
            </div> 
            :
            allowFilterPart ?
             filterSectionData?.slice(0, 6)?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)
             :
             <Box
             sx={{
               display: 'flex',
               position: 'absolute',
               top: '50%',
               left: '50%',
             }}
           >
            <CircularProgress color="danger" size="md" />
           </Box>
            }
           </div>
           
              </div>
              
            </div>
            
            
       
          <PaginationBioData></PaginationBioData>
      
        </div>
    );
};

export default AllBioData;