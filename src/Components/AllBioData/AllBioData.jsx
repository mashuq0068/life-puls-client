import { Box } from "@mui/system";
import useAllBioData from "../../Hooks/useAllBioData";
import BioData from "../BioData/BioData";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";




const AllBioData = () => {
    const {data , isPending} = useAllBioData()
    const [filterSectionData, setFilterSectionData] = useState([]);
   
   const totalBiodata = data?.length
   const perPageData = 6
   const totalPage = Math.ceil(totalBiodata /perPageData)
   const pages = [...Array(totalPage).keys()]

   console.log(pages)
    useEffect(() => {
      setFilterSectionData(data);
    }, [data]);
    // const axiosPublic = useAxiosPublic()
    console.log(filterSectionData)
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
    console.log(data)
    if(isPending){
        return(
            <Box
            sx={{
              display: 'flex',
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
          >
            <CircularProgress
              sx={{
                color: '#fda3c4',
              }}
            />
          </Box>
        )
    }
    return (
      
        <div className="flex gap-[5%]">
            <div className="w-[50vw]">
              {/* filter field */}
              <h3 className=" text-center  font-semibold pb-[1%] spacing 2xl:text-3xl text-2xl">Filter Biodata Section</h3>
            <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
              <div>
                <form className="px-[5%]  justify-around flex">
                 <div className=" flex flex-col w-[25%]">
                 <label htmlFor="age" className="text-center font-semibold spacing mb-[3%]">Age</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  <input onChange={handleMinAge} type="number" placeholder="min Age" className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[5vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-[40%] border border-[#f06f9e]" />
                 
                  <input onChange={handleMaxAge} type="number" placeholder="max Age" className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[5vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-[40%] border border-[#f06f9e]"  />
                
                 </div>
                 
                 </div>
                 {/* second */}
                 <div className=" flex flex-col w-[25%]">
                 <label htmlFor="age" className="text-center font-semibold spacing mb-[3%]">Division</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  
                  <select onChange={handleDivision} className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[5vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-full border border-[#f06f9e]">
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
                 <div className=" flex flex-col w-[25%]">
                 <label htmlFor="age" className="text-center font-semibold spacing mb-[3%]">Biodata Type</label>
                 <div className=" flex gap-[4%] mb-[3%]">
                  
                  <select onChange={handleBiodataType} className="focus:border-[#f06f9e] focus:border focus:outline-none pl-2 h-[5vh] border-none drop-shadow-xl  shadow-lg bg-blue-100  w-full border border-[#f06f9e]">
                    <option></option>
                  <option value="Male">Male</option>
                   <option value="Female">Female</option>
                
                  </select>
                  {/* <Select   options={GenderOptions}></Select> */}
                 </div>
                 
                 </div>
                 {/* second */}
              
                </form>
                <div className="flex justify-around px-[2%]">
                <button onClick={handleFilterAge} className="text-center font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl mb-[5%] mt-[5%]  bg-[#f178a5] shadow-xl spacing">
                  Filter By Age
                </button>
                <button onClick={handleFilterDivision} className="text-center font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl mb-[5%] mt-[5%]  bg-[#f178a5] shadow-xl spacing">
                  Filter By Division
                </button>
                <button onClick={handleFilterGender} className="text-center font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl mb-[5%] mt-[5%]  bg-[#f178a5] shadow-xl spacing">
                  Filter By Gender
                </button>
                
                </div>
              </div>
              {/* biodata */}
              <div>
              <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {filterSectionData?.length === 0 ? 
            <div>
              <p>No Biodata Like that</p>
            </div> 
            :

            filterSectionData?.map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
           </div>
              </div>
            </div>
            {/* all bio */}
           
            <div>
            <h3 className=" text-center font-semibold pb-[1%] spacing text-3xl">All Biodata</h3>
            <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
           <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
            {data?.slice(0,10).map(biodata => <BioData key={biodata._id} biodata={biodata}></BioData>)}
            
           </div>
           <div className="relative top-[3%]" >
           {pages?.map((page , i) => 
          
            <button className=" drop-shadow-xl hover:border border-[#f06598] shadow-lg px-8 py-2 mr-[2%]" key={i}>{page}</button>
           )}
           </div>
          
         
        </div>
        </div>
    );
};

export default AllBioData;