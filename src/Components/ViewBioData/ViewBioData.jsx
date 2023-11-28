

import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useOneBioData from "../../Hooks/useOneBiodata";
import { TbPremiumRights } from "react-icons/tb";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Alert, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";


const ViewBioData = () => {
  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isAlert , setIsAlert]  =useState(false)
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
  
    const {user} = useAuth()
    const {data} = useOneBioData()
    const axiosSecure = useAxiosSecure()
    console.log(data)
    const handlePremium = (id) => {
       const userInfo = {
        name : user?.displayName ,
        email : user?.email,
        biodataId : id
       }
       axiosSecure.post(`/premium` , userInfo)
       .then(res => {
        console.log(res.data)
        if(res?.data?.insertedId){
          handleOpen()
        } 
        else{
          setIsAlert(true)
        }

       })
       
    }
  if(data){
    return (
      <>
      {isAlert ? 
  <Alert variant="filled" sx={{position:"fixed" , top:"5%"  ,right:'0%', zIndex:50, fontSize:'19px'}} severity="warning">
   You already made a request for premium
</Alert> : ""}
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
          You successfully made a premium request
          </Typography>
        </Box>
      </Modal>
       <div>
    <div className="mt-[12%] px-[10%] w-[80vw] flex justify-between  ">
        {/* details */}
       
        <div className=" text-lg relative h-max space-y-3 drop-shadow-xl shadow-black shadow-xl px-[10%] mt-[10%] 2xl:mt-[5%] p-[5%] ">
      <div className="details-picture absolute -top-[10%] left-[23%] 2xl:left-[30%] drop-shadow-xl shadow-xl shadow-black">
      <img className="details-profile" src={data?.profileLink} alt="" />
     
     
      </div>
      <p className="absolute top-[19%]   bg-[#f06598] mb-5 h-1 mx-auto mt-[20vh] w-[20vw]"></p>
      <p className="text-center absolute  pt-[5%] spacing text-xl  text-black left-[37%] top-[13%] font-bold mb-[5%]">Profile-Info</p>
        <p className="spacing text-gray-600 pt-[25vh]"><span className="font-bold text-black">Biodata Type</span> : {data?.biodataType}</p>
        <p className="spacing text-gray-600"><span className="font-bold text-black">Biodata Name</span> : {data?.name}</p>
        <p className="spacing text-gray-600">
        <span className="font-bold text-black">Date of Birth</span>: {data?.DateOfBirth}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Age</span>: {data?.age}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Biodata ID</span>: {data?.biodataId}
      </p>
    
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Permanent Division</span>: {data?.division}
      </p>
    
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Present Division</span>: {data?.division}
      </p>
    
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Expected Partner Age</span>: {data?.expectedPartnerAge}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Expected Partner Height</span>: {data?.expectedPartnerHeight}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Expected Partner Weight</span>: {data?.expectedPartnerWeight}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Fathers Name</span>: {data?.fathersName}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Height</span>: {data?.height}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Mothers Name</span>: {data?.mothersName}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Occupation</span>: {data?.occupation}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Race</span>: {data?.race}
      </p>
      <p className="spacing text-gray-600">
        <span className="font-bold text-black">Weight</span>: {data?.weight}
      </p>
  <div>
     <p className="text-center spacing text-xl pt-[4%] text-black font-bold">Contact</p>
      <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
      <p className="spacing  text-gray-600 pt-[2%]">
        <span className="font-bold text-black">Email</span>: {data?.email}
      </p>
      <p className="spacing  text-gray-600 mt-3">
        <span className="font-bold text-black">Mobile Number</span>: {data?.mobileNumber}
      </p>
     </div>
        </div>
        </div>
        <div className="fixed top-[15%] right-[4%] w-[15%] shadow-black drop-shadow-xl shadow-lg h-[17%]">
       <div className=" text-center flex justify-center -mt-[5%] ">
       <TbPremiumRights className="text-7xl  text-center" />
       </div>
       <div className=" flex flex-col justify-center">
        <p className="text-center 2xl:block hidden text-2xl spacing w-max mx-auto">premium</p>
        <p className="bg-[#f06598] 2xl:block hidden mb-5 h-1 mx-auto mt-[2%] w-[80%]"></p>
        <button onClick={()=>{handlePremium(data?.biodataId)}} className="w-[120%] -left-[10%] rounded-md mr-[10%] spacing bg-[#f06598] drop-shadow-xl shadow-xl fixed -bottom-[10%] hover:bg-[#e25488] py-2">Make Biodata to premium</button>
       </div>
        </div>
        </div>
        </>
    );
}};

export default ViewBioData;