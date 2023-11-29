import useContactRequests from "../../Hooks/useContactRequests";


// const ApprovedContact = () => {
//     const {contactRequests} = useContactRequests()
//     console.log(contactRequests)
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ApprovedContact;
import { Alert, Container, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';



import React, { useEffect } from "react";
import { Box } from "@mui/system";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import { useState } from "react";




const ApprovedContact = () => {
    const axiosSecure = useAxiosSecure()
    // const{user} = useAuth()
    const {contactRequests , refetch} = useContactRequests()
    // const [isButtonDisabled , setIsButtonDisabled] = useState(false)
    const [alert , setAlert] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        if (alert) {
          const timeoutId = setTimeout(() => {
            setAlert(false);
          }, 2000); 
    
          return () => clearTimeout(timeoutId); 
        }
      }, [alert]);
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
   
    
      const handleApprovedRequest = (id) => {
        console.log("hitted for premium")
        axiosSecure.patch(`/contactRequest/${id}`)
        .then(res => {
            if(res?.data?.modifiedCount > 0){
            handleOpen()
            // setIsButtonDisabled(true)
            refetch()
            return
            }
         
        })

        
      } 
  
   
   
 
   
    if(contactRequests){
    return (
        <>
{alert && <Alert variant="filled" sx={{position:"fixed" , top:"5%"  , right:'3%', fontSize:'19px'}} severity="warning">
   Already a premium member
</Alert>}
       <Modal
       open={open}
     onClose={handleClose}
   aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
           Successfully approved!
         </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       You  successfully approved this premium request
     </Typography>
    </Box>
  </Modal>
        <Container sx={{display:'flex' , justifyContent:'center' , marginLeft:'10%'}}>
        <TableContainer sx={{width:'max-content' , marginLeft:'auto', marginRight:'auto' }} component={Paper}>
      <Table sx={{ minWidth: 650,fontSize:'20px',width:'60vw', marginTop:'10%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Name</TableCell>
        
           
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Email</TableCell>
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>
          
          
           
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell>
       
          
          
          </TableRow>
        </TableHead>
        <TableBody>
          
        {/* <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >   */}
             {contactRequests?.map((request) => 
              <TableRow
               key={request?._id}
               
              sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
              '@media (min-width: 1700px)': {
                fontSize: '19px',
            },}
             
            
            }
            >  
             <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.name}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.email}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{request?.biodataId}</TableCell>
            
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'14px' } , color:'gray', letterSpacing:'1px' , fontSize : '14px'}} align="center">
             {  request?.status === "pending" ? <button onClick={()=>{handleApprovedRequest(request?._id)}} 
               
               className={`bg-[#f06598]   hover:bg-[#d34478] px-3 py-2 rounded-md spacing drop-shadow-xl shadow-xl text-black 2xl:text-xl`}>
                Approved contact request
                
                </button> : <p className=" text-center 2xl:text-lg spacing">Approved</p>}
               </TableCell>
             </TableRow>
             )}
                
            
       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
    );
}};

export default ApprovedContact;