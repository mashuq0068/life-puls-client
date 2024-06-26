import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useOneBioData from "../../Hooks/useOneBiodata";
import { TbPremiumRights } from "react-icons/tb";
import bgBanner from "../../../public/images/bg-beautiful.png"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Alert, Modal, Typography } from "@mui/material";
// import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";
import React, { useState } from "react";
import { Box } from '@mui/system';
import { MdAddIcCall, MdOutlineFavoriteBorder, MdOutlineWorkspacePremium } from 'react-icons/md';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ViewBioData = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
    const handleOpenSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = () => setOpenSuccess(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [isAlert , setIsAlert]  = useState(false)
    const style = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
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
          handleOpenSuccess()
          handleClose()
        } 
        else{
          setIsAlert(true)
          handleClose()
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
<React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Premium confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you surely, want to make your biodata premium
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No,thanks</Button>
          <Button  onClick={()=>{handlePremium(data?.biodataId)}}>Yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
       <Modal
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />  <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
         Great!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      You successfully requested for make your biodata premium.
          </Typography>
          
        </Box>
      </Modal> 
       {/* <div>
    <div className="mt-[12%] px-[10%] w-[80vw] flex justify-between  ">
      
       
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
        <button onClick={handleClickOpen} className="w-[120%] -left-[10%] rounded-md mr-[10%] spacing bg-[#f06598] drop-shadow-xl shadow-xl fixed -bottom-[10%] hover:bg-[#e25488] py-2">Make Biodata to premium</button>
       </div>
        </div>
        </div> */}<div style={{
        backgroundImage: `url(${bgBanner})`
      }} className=" px-[3%] h-[100vh]    md:px-[10%]  ">
        {/* details */}
        <div className=" flex gap-[10%]  justify-between">
          {/* left */}
        <div className="">
        <div className="mt-36 mb-12 max-w-[200px] rounded-lg max-h-[200px] overflow-hidden">
            <img className="w-[100%] h-[100%] object-cover" src={data?.profileLink} alt="" />

           </div>
          <div className=" space-y-7">
          <p className="lg:max-w-[50vw]">
              Hey there,

              I'm someone who finds beauty in simplicity and treasures authentic connections. With a warm smile and compassionate eyes, I stand tall, embracing life with an optimistic spirit. Passionate about literature and music, I seek solace in the pages of a good book and find joy in discovering new melodies.Professionally, I'm driven and strive for success while maintaining a balance between work and life. Integrity and kindness are at the core of everything I do, and I believe in the power of empathy and understanding.

              In relationships, I'm fiercely loyal and supportive, valuing open communication and mutual respect. I cherish the bonds I share with loved ones and am always ready to embark on new adventures and create lasting memories together.
            </p>
           <p className="lg:max-w-[50vw]">

              In relationships, I'm fiercely loyal and supportive, valuing open communication and mutual respect. I cherish the bonds I share with loved ones and am always ready to embark on new adventures and create lasting memories together.
            </p>
           <p className="lg:max-w-[50vw]">
             

              I'm someone who finds beauty in simplicity and treasures authentic connections. With a warm smile and compassionate eyes, I stand tall, embracing life with an optimistic spirit. Passionate about literature and music, I seek solace in the pages of a good book and find joy in discovering new melodies.Professionally, I'm driven and strive for success while maintaining a balance between work and life. 
            </p>
          </div>
        </div>
        {/* right */}
         <div className="text-lg  mt-[100px] w-[40%] p-[3%] h-max space-y-3  rounded-xl shadow-xl  ">
     
     
         <p className="spacing text-gray-600">
          <span className="lg:font-bold text-black">Name</span> : {data?.name}
          </p>
        <p className="spacing text-gray-600 ">
          <span className="lg:font-bold text-black">Gender</span> : {data?.biodataType}
        </p>
        
        <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Date of Birth</span>: {data?.DateOfBirth}
      </p>
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Age</span>: {data?.age}
      </p>
      {/* <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Biodata ID</span>: {data?.biodataId}
      </p> */}
    
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Permanent Division</span>: {data?.division}
      </p>
    
      {/* <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Expected Partner Age</span>: {data?.expectedPartnerAge}
      </p>
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Expected Partner Height</span>: {data?.expectedPartnerHeight}
      </p>
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Expected Partner Weight</span>: {data?.expectedPartnerWeight}
      </p> */}
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Fathers Name</span>: {data?.fathersName}
      </p>
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Height</span>: {data?.height}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Mothers Name</span>: {data?.mothersName}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Occupation</span>: {data?.occupation}
      </p>
      
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Race</span>: {data?.race}
      </p>
      <p className="spacing text-gray-600">
        <span className="lg:font-bold text-black">Weight</span>: {data?.weight}
      </p>
    <div>
    
      <p className="spacing  text-gray-600 pt-[2%]">
        <span className="lg:font-bold text-black">Email</span>: {data?.email}
      </p>
      <p className="spacing  text-gray-600 mt-3">
        <span className="lg:font-bold text-black">Mobile Number</span>: {data?.mobileNumber}
      </p>
     </div>
      <div className="flex flex-col pt-[10%] gap-5">
        <button id="favorite" onClick={()=>{
          handleClickOpen()
         
        }} className={`  md:px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white  font-medium  drop-shadow-xl  flex items-center justify-center gap-2 $ rounded-lg shadow-xl spacing`}><MdOutlineWorkspacePremium /> Request premium</button>
       
      </div>
        </div> 
        </div>

       



      </div>
        </>
    );
}};

export default ViewBioData;