import { useEffect } from 'react';
import useAllBioData from '../../Hooks/useAllBioData';
import BioData from "../BioData/BioData"
import Aos from 'aos';

const PremiumMembers = () => {
  const {data}= useAllBioData()
  console.log(data)
  useEffect(()=>{
    Aos.init();
  },[])
  const filteredByPremium = data?.filter(biodata => biodata?.isPremium === true)
  console.log(filteredByPremium)
  if(filteredByPremium){
    return (
        <div data-aos-duration="1000" data-aos="fade-up" className='mb-[15%]'>
        <h3 className="mt-36 spacing text-center 2xl:text-3xl font-bold text-2xl">Top Premium Members</h3>
       <p className=" bg-[#f06598] mb-[3%] h-1 mt-[1vh] mx-auto w-[23%]"></p>
       <div className='lg:w-[75vw] lg:px-0 mt-[20%] md:mt-[15%] 2xl:mt-0 md:px-[10%] px-[3%] md:grid-cols-2 grid-cols-1 mx-auto grid lg:grid-cols-3 gap-[5%] md:col-gap-[30%] lg:gap-[5%]'>
        {filteredByPremium.sort((a , b) => a.age - b.age)?.slice(0,6)?.map(biodata => <BioData key={biodata?._id} biodata = {biodata}></BioData>)}
       </div>
        </div>
    );
}};

export default PremiumMembers;