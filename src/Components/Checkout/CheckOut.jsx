import { useParams } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";

import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PayemntForm/PaymentForm";

import useOneBioData from "../../Hooks/useOneBiodata";
import useAllBioDataTwo from "../../Hooks/useAllBiodataTwo";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)


const CheckOut = () => {
    const params = useParams()
    const {data} = useOneBioData()
    const {allBiodata} = useAllBioDataTwo()
    console.log(allBiodata)

    const requested = allBiodata?.filter(biodata => biodata?.biodataId === parseInt(params?.id))
    if(!data && !requested){
    
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
   
    }
  
    
       

      if(data && requested){
        const paymentInfo = {
            selfBiodataId : data?.biodataId,
            selfEmail: data?.email,
            biodataId : params?.id,
            name : requested[0]?.name,
            mobileNumber : requested[0]?.mobileNumber,
            email : requested[0]?.email,
            payment:500,
            status : "pending"

        }
   
        if(paymentInfo){
    return (
        <div className="mt-[10%] w-max mx-auto">
           <div className=" flex flex-col  items-center">
           <h1 className="2xl:text-3xl text-2xl font-bold spacing">CheckOut-500 TK</h1>
           <p className=" bg-[#f06598] mb-[5%]  h-1 mt-[1vh] mx-auto w-[18vw]"></p>
           </div>
           <form className="flex ml-[10%] gap-[2%]">
           <div>
           <label className="2xl:text-lg spacing text-gray-600 font-bold" htmlFor="biodataId">
                Biodata Id
            </label>
            
              <input
         
          type="text"
          value={params?.id}
          readOnly
          placeholder="Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
           </div>
           <div>
           <label className="2xl:text-lg spacing text-gray-600 font-bold" htmlFor="biodataId">
              Self Biodata Id
            </label>
            
              <input
         
          type="text"
          value={data?.biodataId}
          readOnly
          placeholder="Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
           </div>
           <div>
           <label className="2xl:text-lg spacing text-gray-600 font-bold" htmlFor="biodataId">
           Self Email
            </label>
            
              <input
         
          type="text"
          value={data?.email}
          readOnly
          placeholder="Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
           </div>
           </form>
 <div className="mt-[4%]">
 <Elements stripe={stripePromise} >
     <PaymentForm paymentInfo = {paymentInfo}></PaymentForm>
  </Elements>
 </div>
        </div>
    )}
    
}
else{
  return(
      <div>
          <p className="2xl:text-3xl text-2xl font-bold spacing text-center text-gray-600 mt-[20%]">May be You did not created any biodata.And We need your biodata Id</p>
      </div>
  )
}
};

export default CheckOut;