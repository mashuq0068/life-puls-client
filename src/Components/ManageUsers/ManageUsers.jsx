import { Container, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


import React from "react";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
import useUsers from "../../Hooks/useUsers";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import CircularProgress from '@mui/joy/CircularProgress';
// import useSearchData from "../../Hooks/useSearchData";

// import { useQuery } from "@tanstack/react-query";




const ManageUsers = () => {
    
   const [searchName ,setSearchName ] = useState("")
    const {users , refetch} = useUsers()
    const [Search , setSearch] = useState(false)
    const axiosSecure  =useAxiosSecure()
    const {loading} = useAuth()
  
    console.log(users)
    
  const {data : searchedUser  , isLoading , refetch : refetchSearch} = useQuery({
    queryKey:['searchedUser' , searchName],
  
    queryFn:async()=>{
      const res = await  axiosSecure.get(`/user/${searchName}`)
      return res?.data
   
  },
    enabled : !loading && Search
  })
  console.log(searchedUser)
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
  console.log(searchName)
  console.log(Search)
   
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
  // setSearch(false)
  // setSearch("")
 const handleSearch = (e) => {
    
    e.preventDefault()
    const name = e.target.name.value
    
    if(name){
      console.log(name)
     setSearchName(name)
     setSearch(true)
    

    }
  

 }

if(isLoading ){
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
  <form onSubmit={handleSearch} className="fixed top-0 left-[22.3vw] z-20 w-[60.7%] shadow-md drop-shadow-md    ">
           <div className=" flex">
           {/* <label className="2xl:text-lg spacing text-gray-600 font-bold" htmlFor="biodataId">
               Search
            </label> */}
            
              <input
         
          type="text"
          name="name"
          placeholder="Search By Name"
          className="w-full rounded-md rounded-r-none border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[black]   outline-none focus:border-[#e75e91] focus:shadow-md"
        />
        <button  className="hover:shadow-form  bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl shadow-xl rounded-l-none rounded-lg flex items-center gap-2 outline-none"><BsSearch/> Search</button>
           </div>
           </form>
        <Container sx={{display:'flex' , justifyContent:'center' , marginLeft:'10%'}}>
        <TableContainer sx={{width:'max-content' , marginLeft:'auto', marginRight:'auto' }} component={Paper}>
      <Table sx={{ minWidth: 650,fontSize:'16px',width:'60vw', marginTop:'5%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">User Name</TableCell>
        
           
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">User Email</TableCell>
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Actions</TableCell>
          
          
          
       
          
            {/* <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>

            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Permanent Address</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Occupation</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
        {/* <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >   */}
          {     
          Search && searchedUser ? 
       
          searchedUser?.map((user) => 
          <TableRow
           key={user?._id}
           
          sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
          '@media (min-width: 1700px)': {
            fontSize: '19px',
        },}
         
        
        }
        >  
         <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.name}</TableCell>
         <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.email}</TableCell>
         <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray', letterSpacing:'1px' , display:'flex' , justifyContent:'center' , alignItems:'center'}} align="center">
       <div className="flex gap-12 items-center justify-center">
       {user?.role === "admin" ? <p className="text-center flex items-center gap-2 w-max ml-[10%] spacing  text-green-500 font-semibold"><GrUserAdmin/>Admin</p> : 
        <button onClick={()=>{handleAdmin(user?._id)}}
        className="hover:shadow-form  bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl flex items-center gap-2 shadow-xl rounded-lg outline-none"
        ><GrUserAdmin />Make Admin</button>}
      
         {user?.isPremium ? <p className=" text-green-500 flex items-center gap-2 font-semibold mr-[3vw]"><MdOutlineWorkspacePremium className=" text-lg" />Premium</p> : <button onClick={()=>{handlePremium(user?.email , user?._id)}}
      
      
      className="hover:shadow-form  whitespace-nowrap  bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 text-base font-medium flex items-center gap-2 drop-shadow-xl shadow-xl rounded-lg outline-none"
      ><MdOutlineWorkspacePremium className=" text-lg"/> Make Premium</button>}
      </div>
         </TableCell>
         {/* <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.status === "pending"?"pending":user?.mobileNumber}</TableCell>
         <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{user?.status === "pending"?"pending":user?.email}</TableCell>
        
         <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center"><button 
      
           className="bg-[#f06598] hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl shadow-xl text-black 2xl:text-xl"><RiDeleteBin6Line /></button></TableCell> */}
         </TableRow>
         )
          
          
          
          
          
          : 
          
          users?.map((user) => 
              <TableRow
               key={user?._id}
               
              sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
              '@media (min-width: 1700px)': {
                fontSize: '19px',
            },}
             
            
            }
            >  
             <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray'}} align="center">{user?.name}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray'}} align="center">{user?.email}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'16px' } , color:'gray' , display:'flex' , justifyContent:'space-between' , alignItems:'center'}} align="center">
            {user?.role === "admin" ? <p className="text-center w-max ml-[10%] text-green-500  spacing  font-semibold flex items-center gap-2"><GrUserAdmin/> Admin</p> : 
            <button  className="hover:shadow-form  bg-gradient-to-r from-rose-500 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl flex items-center gap-2 shadow-xl rounded-lg outline-none" onClick={()=>{handleAdmin(user?._id)}}
        ><GrUserAdmin />Make Admin</button>
          }
             {user?.isPremium ? <p className=" text-green-500 flex items-center gap-2 font-semibold mr-[3vw]"><MdOutlineWorkspacePremium className=" text-lg" />Premium</p> : <button onClick={()=>{handlePremium(user?.email , user?._id)}}
          
          className="hover:shadow-form  bg-gradient-to-r from-rose-500 flex items-center gap-2 to-rose-600 text-white py-3 px-8 text-base font-medium drop-shadow-xl shadow-xl rounded-lg outline-none"><MdOutlineWorkspacePremium className=" text-lg" /> Make Premium</button>}
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