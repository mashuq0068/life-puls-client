import {  useParams } from "react-router-dom";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";

import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PayemntForm/PaymentForm";

import useOneBioData from "../../Hooks/useOneBiodata";
import useAllBioDataTwo from "../../Hooks/useAllBiodataTwo";
import { Box } from "@mui/system";
import CircularProgress from '@mui/material/CircularProgress';
import CardForm from "../CardForm/CardForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)


const CheckOut = () => {
    const params = useParams()
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const {data} = useOneBioData()
    const {allBiodata} = useAllBioDataTwo()


    const requested = allBiodata?.filter(biodata => biodata?.biodataId === parseInt(params?.id))
    useEffect(()=>{
   
      axiosSecure.post('/create-payment-intent',{ price:500})
      .then(res => {
        console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
    },[])
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
            color: '#f06598',
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
      <>
      <div className=" font-medium px-[5%] text-center text-xl mt-[30vh] lg:hidden block">
            You can not checkout from your mobile or tablet
            
           </div>
        <div className="mt-[10%] lg:block hidden  w-max mx-auto">
           <div className=" flex flex-col  items-center">
           <h1 className="2xl:text-3xl text-2xl font-semibold mb-[4%]">Payment (<span className='text-[#f42a41]'>500</span> TK)</h1>
           </div>
           <form className="flex ml-[10%] mb-[5%] flex-wrap gap-[2%]">
           <div className=" space-y-5">
           <label className="2xl:text-lg  text-gray-600 font-semibold" htmlFor="biodataId">
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
           <div className=" space-y-5">
           <label className="2xl:text-lg  text-gray-600 font-semibold" htmlFor="biodataId">
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
           <div className=" space-y-5">
           <label className="2xl:text-lg  text-gray-600 font-semibold" htmlFor="biodataId">
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
           
            {/* <PaymentElement/> */}
 <div className="mt-[4%]">
 <Elements stripe={stripePromise} clientSecret={clientSecret} >
     <PaymentForm paymentInfo = {paymentInfo}></PaymentForm>
  </Elements>
 </div>
        </div>
        </>
    )}
    
}
else{
  return(
      <div>
          <p className="2xl:text-3xl text-2xl font-bold  text-center text-gray-600 mt-[20%]">May be You did not created any biodata.And We need your biodata Id</p>
      </div>
  )
}
};

export default CheckOut;