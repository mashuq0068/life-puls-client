

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, {  useEffect, useState } from "react";


import { GiConfirmed } from "react-icons/gi";
// import moment from "moment/moment";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import {  Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';



const PaymentForm = ({paymentInfo}) => {
    const stripe = useStripe();
    const {user} = useAuth()
    const elements = useElements()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
        
      };
    const [clientSecret , setClientSecret] = useState(null)
    const [transactionId , setTransactionId] = useState(null)
    // const {data} = useCartData()
    const axiosSecure = useAxiosSecure()
    
  
    const [error , setError]  =useState(null)
    useEffect(()=>{
   
      axiosSecure.post('/create-payment-intent',{ price:500})
      .then(res => {
        console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setError(error.message)
            console.log('[error]', error);
          } 
          else {
            setError(null)
            console.log('[PaymentMethod]', paymentMethod);
          }

        //   differnet
          const {paymentIntent , error: confirmError} = await stripe.confirmCardPayment(clientSecret,  {
            payment_method: {
              card: card,
              billing_details: {
                email:user?.email || 'anonymous',
                name: user?.displayName || 'anonymous',
            

              },
            },
          },)
          if(confirmError){
            console.log(confirmError)
          }
          else{
            console.log('payment Intent' , paymentIntent)
            if(paymentIntent.status === 'succeeded'){
              console.log('transaction id' , paymentIntent.id)
              setTransactionId(paymentIntent.id)

           const res =await axiosSecure.post('/contactRequest', paymentInfo)
          
          console.log('payment stored successfully' , res.data)
          if(res?.data?.paymentResult?.insertedId){
            
            handleOpen()
          }
          

            }
          }
      
    }
    return (
        <>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
            Great!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Your payment is success full for contact request
          </Typography>
        </Box>
      </Modal>
      
        <form onSubmit={handleSubmit} className=" 2xl:text-2xl w-[75vw] mx-auto px-[20%]">
        <CardElement
      
      options={{
        style: {
          base: {
            fontSize: '19px',
            color: '#424770',
           
            
            '::placeholder': {
              color: 'black',
            },
          },
          invalid: {
            color: 'black',
          },
        },
      }}
        />
        <button className=" mt-[4%] bg-[#e782a7] rounded-md px-3 py-2 drop-shadow-xl shadow-xl w-max mx-auto 2xl:text-xl text-lg spacing text-center relative left-[40%]" type="submit" disabled={!stripe || !clientSecret}>
         CheckOut
        </button>
        <p className="text-red-500 text-base mt-5">{error}</p>
      {transactionId && 
     <div>
         <p className="text-gray-800 w-[70%] text-base px-5 py-3 drop-shadow-xl shadow-xl mt-5 flex items-center  mx-auto">
      <GiConfirmed className="text-green-500 mr-3 " /> You have successfully paid for your contact request.
        </p>
      <p className="text-gray-800 w-[70%] text-base px-5 py-3 drop-shadow-xl shadow-xl mt-5 flex items-center  mx-auto">
      <GiConfirmed className="text-green-500 mr-3 " />   Your transaction id is :  {   transactionId}
        </p>
     </div>
        }
      </form>
      </>
)};

export default PaymentForm;