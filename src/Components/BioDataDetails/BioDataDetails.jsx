
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/system";
import { Alert, CircularProgress, Stack } from "@mui/material";
import { MdAddIcCall, MdOutlineFavoriteBorder } from "react-icons/md";
import BioDataDetailsSimilar from "../BioDataDetailsSimilar/BioDataDetailsSimilar";
import {   Modal, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useState } from "react";

// import BioData from "../BioData/BioData";
// import useAllBioDataForDetails from "../../Hooks/useaAllBiodataForDeatils";

const BioDataDetails = () => {
  const {user} = useAuth()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bg , setBg] = useState('bg-[#f178a5]')
  const [hoverBg , setHoverBg] = useState('hover:bg-[#f06598]')
  const [isAlert , setIsAlert] = useState(false)
  const isPremium = true
  
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
    
    const axiosSecure = useAxiosSecure()
    // const {allBiodata} = useAllBioDataForDetails()
    const params = useParams()
    console.log(params)
    const { loading} = useAuth()
    const handleFavorite = (Name , id , address , Occupation) => {
      const allInfo = {
     userEmail : user?.email,
     name : Name,
     biodataId : id ,
     permanentAddress : address,
     occupation : Occupation
}
     axiosSecure.post('/favorite' , allInfo)
     .then(res => {
      console.log(res.data)
      if(res?.data?.insertedId){
        const favorite =  document.getElementById('favorite')
        if(!favorite.disabled) {
          handleOpen()
      }
     
      favorite.disabled = true
     setHoverBg("bg-rose-200")
     setBg("bg-rose-200")
      
      }
     else{
      setIsAlert(true)
     }
     })
   }
    
    
    const {isLoading , data , isPending} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
      
            const response = await axiosSecure.get(`/biodata/${params?.email}`)
            return response.data

        },
        enabled:!loading
    })
   
 
    if(isLoading || isPending){
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
   return(
    <>
    {isAlert ? 
  <Alert variant="filled" sx={{position:"fixed" , top:"10%"  , fontSize:'19px'}} severity="warning">
   This has been already included to favorites
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
            well!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This biodata added to your favorite list
          </Typography>
        </Box>
      </Modal>
    <div className="mt-[8%] px-[10%] flex justify-between ">
        {/* details */}
       
        <div className=" text-lg relative h-max space-y-3 drop-shadow-xl shadow-black shadow-xl px-[10%] mt-[10%] 2xl:mt-[5%] p-[5%] ">
      <div className="details-picture absolute -top-[10%] left-[20%] 2xl:left-[30%] drop-shadow-xl shadow-xl shadow-black">
      <img className="details-profile" src={data?.profileLink} alt="" />
     
     
      </div>
      <p className="absolute top-[17%]  bg-[#f06598] mb-5 h-1 mx-auto mt-[20vh] w-[20vw]"></p>
      <p className="text-center absolute spacing text-xl  text-black left-[37%] top-[13%] font-bold mb-[5%]">Profile-Info</p>
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
    { isPremium && <div>
     <p className="text-center spacing text-xl pt-[4%] text-black font-bold">Contact</p>
      <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
      <p className="spacing text-center text-gray-600 pt-[2%]">
        <span className="font-bold text-black">Email</span>: {data?.email}
      </p>
      <p className="spacing  text-gray-600 mt-3">
        <span className="font-bold text-black">Mobile Number</span>: {data?.mobileNumber}
      </p>
     </div>}
      <div className="flex flex-col pt-[10%] gap-5">
        <button id="favorite" onClick={()=>{
          handleFavorite(data?.name , data?.biodataId , data?.division , data?.occupation)
        }} className={` font-semibold ${hoverBg} px-4 py-2  spacing text-black drop-shadow-xl  flex items-center justify-center gap-2 ${bg} shadow-xl spacing`}><MdOutlineFavoriteBorder className="text-xl" /> Add to Favorite</button>
        { isPremium || <button className="font-semibold  px-4 py-2 hover:bg-[#f06598] spacing text-black drop-shadow-xl   bg-[#f178a5] flex  justify-center items-center gap-2 shadow-xl spacing"><MdAddIcCall className="text-xl" />  Request Contact Information</button>}
      </div>
        </div>
        {/* similar biodata */}
        {/* <div>
        <h3 className=" text-center font-semibold pb-[1%] spacing text-3xl">All Biodata</h3>
        <p className=" bg-[#f06598] mb-[5%] h-1 mx-auto w-[50%]"></p>
       <div className="grid grid-cols-1 2xl:grid-cols-2 gap-y-[1%] gap-x-[5%]">
        {allBiodata?.filter(singleBioData => singleBioData?.biodataType === data?.biodataType)?.map(biodata => <BioData key={biodata?._id} biodata={biodata}></BioData>)}
        
       </div> */}
        {/* </div> */}
        
        <div>
        <BioDataDetailsSimilar  biodata = {data}></BioDataDetailsSimilar>
        </div>
    </div>
    </>
   )
};

export default BioDataDetails;