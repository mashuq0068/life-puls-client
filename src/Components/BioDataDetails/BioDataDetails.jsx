
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/system";
import { Alert } from "@mui/material";
import { MdAddIcCall, MdOutlineFavoriteBorder } from "react-icons/md";
import CircularProgress from '@mui/joy/CircularProgress';
import BioDataDetailsSimilar from "../BioDataDetailsSimilar/BioDataDetailsSimilar";
import { Modal, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React, { useState } from "react";
import useCheckPremium from "../../Hooks/useCheckpremium";
import bgBanner from "../../../public/images/bg-beautiful.png"
// import BioData from "../BioData/BioData";
// import useAllBioDataForDetails from "../../Hooks/useaAllBiodataForDeatils";

const BioDataDetails = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bg, setBg] = useState('bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium')
  const [hoverBg, setHoverBg] = useState('hover:bg-[#f06598]')
  const [isAlert, setIsAlert] = useState(false)
  const { premium } = useCheckPremium()
  const handleContactRequest = (id) => {

    navigate(`/checkOut/${id}`)



  }

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  const { loading } = useAuth()
  const handleFavorite = (Name, id, address, Occupation) => {
    const allInfo = {
      userEmail: user?.email,
      name: Name,
      biodataId: id,
      permanentAddress: address,
      occupation: Occupation
    }
    axiosSecure.post('/favorite', allInfo)
      .then(res => {

        if (res?.data?.insertedId) {
          console.log(res?.data?.insertedId);
          const favorite = document.getElementById('favorite')
          if (!favorite.disabled) {
            handleOpen()
          }

          favorite.disabled = true
          setHoverBg("bg-rose-200")
          setBg("bg-rose-200")

        }
        else {
          setIsAlert(true)
        }
      })
  }


  const { isLoading, data, isPending } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {

      const response = await axiosSecure.get(`/biodata/${params?.email}`)
      return response.data

    },
    enabled: !loading
  })


  if (isLoading || isPending) {
    return (
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          top: '50%',
          left: '50%',
        }}
      >
        <CircularProgress color="danger" size="md" />
      </Box>
    )
  }
  return (
    <>
      {isAlert ?
        <Alert variant="filled" sx={{ position: "fixed", top: "10%", right:"10%", fontSize: '19px' }} severity="warning">
          This has been already included to favorites
        </Alert> : ""}
      <Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 50, mb: 2 }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
            well!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This biodata added to your favorite list
          </Typography>
        </Box>
      </Modal>
      <div style={{
        backgroundImage: `url(${bgBanner})`
      }} className=" px-[3%] h-[100vh]   md:px-[10%]  ">
        {/* details */}
        <div className=" flex  justify-between">
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
         <div className="text-lg mt-[100px]  p-[2%]  space-y-3 drop-shadow-xl rounded-xl shadow-xl  ">
     
     
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
    { premium?.isPremium && <div>
    
      <p className="spacing text-center text-gray-600 pt-[2%]">
        <span className="lg:font-bold text-black">Email</span>: {data?.email}
      </p>
      <p className="spacing  text-gray-600 mt-3">
        <span className="lg:font-bold text-black">Mobile Number</span>: {data?.mobileNumber}
      </p>
     </div>}
      <div className="flex flex-col pt-[10%] gap-5">
        <button id="favorite" onClick={()=>{
          handleFavorite(data?.name , data?.biodataId , data?.division , data?.occupation)
        }} className={`  ${hoverBg} md:px-4 py-2  spacing text-black drop-shadow-xl  flex items-center justify-center gap-2 ${bg} rounded-lg shadow-xl spacing`}><MdOutlineFavoriteBorder className="text-xl" /> Add to Favorite</button>
        { premium?.isPremium || <button onClick={()=>{
          handleContactRequest(data?.biodataId)
        }} className="  md:px-4 py-2 hover:bg-[#f06598] bg-gradient-to-r from-teal-500 to-teal-700 text-white font-medium spacing  drop-shadow-xl rounded-lg   flex  justify-center items-center gap-2 shadow-xl spacing"><MdAddIcCall className="text-xl" />  Request Contact Information</button>}
      </div>
        </div> 
        </div>

       



      </div>
    </>
  )
};

export default BioDataDetails;