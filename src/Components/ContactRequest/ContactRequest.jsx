import { Container, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

import { RiDeleteBin6Line } from "react-icons/ri";
import useContactRequestsByEmail from "../../Hooks/useRequestsByEmail";
import React from "react";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";




const ContactRequest = () => {
    const axiosSecure = useAxiosSecure()
    const{user} = useAuth()
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
   
    const {contactRequestsByEmail , refetch} = useContactRequestsByEmail()
    const handleDelete = () => {
   axiosSecure.delete(`/contactRequest/${user?.email}`)
   .then(res => {
      console.log(res.data)
      if(res?.data?.deletedCount > 0){
        handleOpen()
        refetch()
      }
   })

    }
  
   
   
 
   
    if(contactRequestsByEmail ){
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
            deleted request!
         </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       You have successfully canceled this request
     </Typography>
    </Box>
  </Modal>
        <Container sx={{display:'flex' , justifyContent:'center' , marginLeft:'10%'}}>
        <TableContainer sx={{width:'max-content' , marginLeft:'auto', marginRight:'auto' }} component={Paper}>
      <Table sx={{ minWidth: 650,fontSize:'20px',width:'60vw', marginTop:'10%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Name</TableCell>
        
           
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Status</TableCell>
          
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Mobile No</TableCell>
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Email</TableCell>
           
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell>
       
          
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
             {contactRequestsByEmail?.map((request) => 
              <TableRow
               key={request?._id}
               
              sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
              '@media (min-width: 1700px)': {
                fontSize: '19px',
            },}
             
            
            }
            >  
             <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.name}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.
biodataId}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.status}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.status === "pending"?"pending":request?.mobileNumber}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.status === "pending"?"pending":request?.email}</TableCell>
            
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center"><button 
          
             onClick={()=>{handleDelete(request?._id)}}   className="bg-[#f06598] hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl shadow-xl text-black 2xl:text-xl"><RiDeleteBin6Line /></button></TableCell>
             </TableRow>
             )}
                
            
       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
    );
}};

export default ContactRequest;