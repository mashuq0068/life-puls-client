import { useParams } from "react-router-dom";
import useOneBioData from "../../Hooks/useOneBiodata";
import { Elements } from "@stripe/react-stripe-js";

import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from "../PayemntForm/PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)


const CheckOut = () => {
    const params = useParams()
    const {data} = useOneBioData()
    if(data){
        const paymentInfo = {
            selfBiodataId : data?.biodataId,
            selfEmail: data?.email,
            requestedBiodataId : params?.id,
            status : "pending"
        }
    return (
        <div className="mt-[10%] w-max mx-auto">
           <div className=" flex flex-col  items-center">
           <h1 className="2xl:text-3xl text-2xl font-bold spacing">CheckOut</h1>
           <p className=" bg-[#f06598] mb-[5%]  h-1 mt-[1vh] mx-auto w-[10vw]"></p>
           </div>
           <form className="flex gap-[2%]">
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
 <Elements stripe={stripePromise} >
     <PaymentForm paymentInfo = {paymentInfo}></PaymentForm>
  </Elements>
        </div>
    )}
    else{
        return(
            <div>
                <p className="2xl:text-3xl text-2xl font-bold spacing text-center text-gray-600 mt-[20%]">May be You don not created any biodata.</p>
            </div>
        )
    }
};

export default CheckOut;