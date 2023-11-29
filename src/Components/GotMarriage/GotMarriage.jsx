import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Box, CircularProgress, Modal, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import useOneBioData from "../../Hooks/useOneBiodata";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";



const GotMarried = () => {
  const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    // const [loading , setLoading] = useState(true)
    // const {data , isLoading , isPending} = useOneBioData()
    // console.log(data)
    // console.log(data?.DateOfBirth)
    // const [data , setData] = useState([])
  
    // useEffect(()=>{
    //      axiosSecure.get(`/biodata/${user?.email}`)
    //      .then(res => {
    //       if(res?.data){
    //         setData(res.data)
    //         setLoading(false)
    //       }
    //       setLoading(false)
    //      })
    // },[])
    // const {
    //   DateOfBirth,
    //   age,
    //   biodataType,
    //   division,
    //   email,
    //   expectedPartnerAge,
    //   expectedPartnerHeight,
    //   expectedPartnerWeight,
    //   fathersName,
    //   height,
    //   mobileNumber,
    //   mothersName,
    //   name,
    //   occupation,
    //   profileLink,
    //   race,
    //   weight} = data
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
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        
      };

    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm({
        // defaultValues:{
        //   DateOfBirth : DateOfBirth,
        //   age: age,
        //   biodataType:biodataType,
        //   division:division,
        //   email: email,
        //   expectedPartnerAge:expectedPartnerAge,
        //   expectedPartnerHeight : expectedPartnerHeight,
        //   expectedPartnerWeight:expectedPartnerWeight,
        //   fathersName:fathersName,
        //   height:height,
        //   mobileNumber: mobileNumber,
        //   mothersName :mothersName,
        //   name:name,
        //   occupation: occupation,
        //   profileLink : profileLink,
        //   race: race,
        //   weight : weight

        // }
      
      })
      const onSubmit = (data) => {
       console.log(data)
       if(data){
        console.log(data)
        handleOpen()
       }
      }
//      
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
            Wow!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           You have successfully published your biodata
          </Typography>
        </Box>
      </Modal>
        <div className="w-[75vw]">
<div className="flex items-center w-full justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={
      handleSubmit(onSubmit)
     
      } className="mt-[10%]">
      <div className="mb-5">
        <label
         
          className="mb-3 block spacing  text-base 2xl:text-lg font-medium text-[#07074D]"
        >
          Self Biodata Number
        </label>
        <input
         {...register("selfBiodataNumber" , {required : true})}
          type="text"
          placeholder="Self Biodata Number"
          className="w-full rounded-md border spacing border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.selfBiodataNumber && <span className=" text-red-600 spacing"> Self Biodata Number is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block spacing  text-base 2xl:text-lg font-medium text-[#07074D]"
        >
          Partner Biodata Number
        </label>
        <input
         {...register("partnerBiodataNumber" , {required : true})}
          type="text"
          placeholder="Partner Biodata Number"
          className="w-full rounded-md border spacing border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.partnerBiodataNumber && <span className=" text-red-600 spacing"> Partner Biodata Number is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block spacing text-base 2xl:text-lg font-medium text-[#07074D]"
        >
         Couple or single Image Link
        </label>
        <input
         {...register("image" , {required : true})}
          type="text"
          placeholder="Couple or single Image Link"
          className="w-full rounded-md border spacing border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.image && <span className=" text-red-600 spacing"> image is required </span>}
      </div>
      
    
        <button
       
          className="hover:shadow-form rounded-md bg-[#ec6b9b] py-3 px-8 text-base font-semibold uppercase outline-none"
        >
         Save && publish biodata
        </button>
    
    </form>
  </div>
</div>
</div>
</>
    );
};

export default GotMarried;