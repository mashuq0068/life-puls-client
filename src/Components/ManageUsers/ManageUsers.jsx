import { Container, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


import React from "react";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
import useUsers from "../../Hooks/useUsers";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useSearchData from "../../Hooks/useSearchData";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
// import { useQuery } from "@tanstack/react-query";




const ManageUsers = () => {
    // const axiosSecure = useAxiosSecure()
    // const{user} = useAuth()
    const [searchName , setSearchName] = useState("")
    const {users , refetch} = useUsers()
    const axiosSecure  =useAxiosSecure()
    // const {searchData} = useSearchData(searchName)
    // const axiosSecure = useAxiosSecure()
        const {loading} = useAuth()
         
          const { data : searchData } = useQuery({
              queryKey:["search"],
              queryFn : async()=>{
                  const response = await axiosSecure.get(`/userByName/${searchName}`)
                  return response.data
      
              },
              enabled:!loading
            
          })
          console.log(searchData)
    
    console.log(users)
  
    const [open, setOpen] = React.useState(false);
    const [openPremium, setOpenPremium] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpenPremium = () => setOpenPremium(true);
    const handleClosePremium = () => setOpenPremium(false);
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
   
 
  const handleAdmin = (id) => {
 axiosSecure.patch(`/makeAdmin/${id}`)
 .then(res => {
    if(res?.data?.modifiedCount > 0){
        handleOpen()
        refetch()
    }
 })
  }
   
  const handlePremium = (email , id) => {
    axiosSecure.patch(`/biodata/premium/${email}`)
    .then(res => {
        if(res?.data?.modifiedCount > 0){
           axiosSecure.patch(`/user/${id}`)
           .then(res => {
            if(res?.data?.modifiedCount > 0){
                handleOpenPremium()
                refetch()
            }
           })
        }
    })
  } 
 const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    console.log(name)
    if(name){
        
       setSearchName(name)
    }


 }
//    if(isLoading || isPending){
//     return <p>loading...</p>
//    }
    if(users ){
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
            A new Admin!
         </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        you successfully made the user admin
     </Typography>
    </Box>
  </Modal>
       <Modal
       open={openPremium}
     onClose={handleClosePremium}
   aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
           successful!
         </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        you successfully made the user Premium
     </Typography>
    </Box>
  </Modal>
  <form onSubmit={handleSubmit} className="sticky w-[50vw] drop-shadow-xl shadow-xl mx-auto left-[30vw] top-0">
           <div className=" flex">
           {/* <label className="2xl:text-lg spacing text-gray-600 font-bold" htmlFor="biodataId">
               Search
            </label> */}
            
              <input
         
          type="text"
          name="name"
          placeholder="Search By Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[black] 2xl:text-lg spacing outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        <button className="bg-[#fc7aaa]  text-black spacing hover:bg-[#d34478] px-3 py-2 rounded-md">Search</button>
           </div>
           </form>
        <Container sx={{display:'flex' , justifyContent:'center' , marginLeft:'10%'}}>
        <TableContainer sx={{width:'max-content' , marginLeft:'auto', marginRight:'auto' }} component={Paper}>
      <Table sx={{ minWidth: 650,fontSize:'20px',width:'60vw', marginTop:'10%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">User Name</TableCell>
        
           
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">User Email</TableCell>
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Actions</TableCell>
          
          
          
       
          
            {/* <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>

            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Permanent Address</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Occupation</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
        {/* <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >   */}
             {users?.map((user) => 
              <TableRow
               key={user?._id}
               
              sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
              '@media (min-width: 1700px)': {
                fontSize: '19px',
            },}
             
            
            }
            >  
             <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.name}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.email}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px' , display:'flex' , justifyContent:'space-between' , alignItems:'center'}} align="center">
            {user?.role === "admin" ? <p className="text-center w-max ml-[10%] spacing text-black font-bold">Admin</p> : 
            <button onClick={()=>{handleAdmin(user?._id)}}
          className="bg-[#fc7aaa] text-black spacing hover:bg-[#d34478] px-3 py-2 rounded-md">Make Admin</button>
          }
             {user?.isPremium ? <p className="text-center w-max mr-[10%] spacing text-black font-bold">Premium</p> : <button onClick={()=>{handlePremium(user?.email , user?._id)}}
          
          className="bg-[#fc7aaa] ml-[5%] text-black spacing hover:bg-[#d34478] px-3 py-2 rounded-md">Make Premium</button>}
             </TableCell>
             {/* <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.status === "pending"?"pending":user?.mobileNumber}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.status === "pending"?"pending":user?.email}</TableCell>
            
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center"><button 
          
               className="bg-[#f06598] hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl shadow-xl text-black 2xl:text-xl"><RiDeleteBin6Line /></button></TableCell> */}
             </TableRow>
             )}
                
            
       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
    );
}};

export default ManageUsers;