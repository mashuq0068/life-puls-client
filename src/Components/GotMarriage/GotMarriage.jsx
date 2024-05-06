import { useForm } from "react-hook-form";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Box,  Modal, Typography } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";



const GotMarried = () => {
  const axiosSecure = useAxiosSecure()
  
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
        const storyInfo = {
          selfBiodataId : data?.selfBiodataNumber,
          partnerBiodataId : data?.partnerBiodataNumber,
          image : data?.image,
          marriageDate: data?.marriageDate,
          reviewStars : data?.rating,
          successStory: data?.story,
          gender:data?.gender
             
         }
        console.log(storyInfo)
        axiosSecure.post('/successStory' , storyInfo)
        .then(res => {
          if(res?.data?.insertedId){
            handleOpen()
          }
        })
        
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
           You have successfully published your story
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
         
          className="mb-3 block   text-base 2xl:text-lg font-medium text-[#07074D]"
        >
          Self Biodata Number
        </label>
        <input
         {...register("selfBiodataNumber" , {required : true})}
          type="text"
          placeholder="Self Biodata Number"
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.selfBiodataNumber && <span className=" text-red-600 "> Self Biodata Number is required </span>}
      </div>
      
      <div className="mb-5">
        <label
         
          className="mb-3 block   text-base 2xl:text-lg font-medium text-[#07074D]"
        >
          Partner Biodata Number
        </label>
        <input
         {...register("partnerBiodataNumber" , {required : true})}
          type="text"
          placeholder="Partner Biodata Number"
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.partnerBiodataNumber && <span className=" text-red-600 "> Partner Biodata Number is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block   text-base 2xl:text-lg font-medium text-[#07074D]"
        >
          Marriage Date
        </label>
        <input
         {...register("marriageDate" , {required : true})}
          type="date"
          placeholder="Marriage Date"
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.marriageDate && <span className=" text-red-600 "> Marriage Date Number is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block   text-base 2xl:text-lg font-medium text-[#07074D]"
        >
         Rating
        </label>
        <input
         {...register("rating" , {required : true})}
          type="number"
          placeholder="Rating"
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.rating && <span className=" text-red-600 "> Rating is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block   text-base 2xl:text-lg font-medium text-[#07074D]"
        >
        Self Gender
        </label>
        <select {...register("gender" , {required : true})}
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md" name="" id="">
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && <span className=" text-red-600 "> Gender is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block  text-base 2xl:text-lg font-medium text-[#07074D]"
        >
         Couple or single Image Link
        </label>
        <input
         {...register("image" , {required : true})}
          type="text"
          placeholder="Couple or single Image Link"
          className="w-full rounded-md border  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.image && <span className=" text-red-600 "> image is required </span>}
      </div>
      <div className="mb-5">
        <label
         
          className="mb-3 block  text-base 2xl:text-lg font-medium text-[#07074D]"
        >
         Success Story
        </label>
        <textarea
         {...register("story" , {required : true})}

          type="text"
          placeholder="Success Story"
          className="w-full rounded-md border h-[30vh]  border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        {errors.story && <span className=" text-red-600 "> story is required </span>}
      </div>
      
    
        <button
       
       className="hover:shadow-form  bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl shadow-xl rounded-lg outline-none"
       
        >
        Submit
        </button>
    
    </form>
  </div>
</div>
</div>
</>
    );
};

export default GotMarried;