import {  Container, Table } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiDeleteBin6Line } from "react-icons/ri";
import {   Modal, Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from "react";
import CircularProgress from '@mui/joy/CircularProgress';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }



const Favorites = () => {
    const axiosSecure = useAxiosSecure()
    const {user , loading} = useAuth()
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
    
    
   

    const {isLoading , data , isPending , refetch} = useQuery({
        queryKey:["biodata"],
        queryFn : async()=>{
            const response = await axiosSecure.get(`/favorites/${user?.email}`)
            return response.data

        },
        enabled:!loading
    })
    const handleDelete = (id) => {
        axiosSecure.delete(`/favorite/${id}`)
        .then(res => {
            console.log(res?.data)
           if(res?.data?.deletedCount > 0){
             refetch()
             handleOpen()
           } 
        })
       }
    if(isLoading || loading || isPending){
        return(
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
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CheckCircleOutlineIcon color="success"  sx={{ fontSize: 50, mb: 2  }} />
          <Typography id="modal-modal-title" variant="h6" align="centers" component="h2">
            Deleted!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           You have deleted successfully.
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
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Permanent Address</TableCell>
          
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Occupation</TableCell>
           
         
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
             {data?.map((favorite) => 
              <TableRow
               key={favorite?._id}
               
              sx={ { '&:last-child td, &:last-child th': { border: 0  },fontSize:'19px' ,  
              '@media (min-width: 1700px)': {
                fontSize: '19px',
            },}
             
            
            }
            >  
             <TableCell sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{favorite?.name}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{favorite?.biodataId}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{favorite?.permanentAddress}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">{favorite?.occupation}</TableCell>
             <TableCell  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center"><button 
             onClick={()=>{handleDelete(favorite?._id)}}   className="bg-[#f06598] hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl shadow-xl text-black 2xl:text-xl"><RiDeleteBin6Line /></button></TableCell>
             </TableRow>
             )}
                
            
       
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
    )
};

export default Favorites;