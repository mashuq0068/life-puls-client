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
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";

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
       console.log(data);
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
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer sx={{ width: 'max-content', marginLeft: 'auto', marginRight: 'auto', fontFamily: '"Work Sans", sans-serif' }} component={Paper}>
            <Table sx={{ minWidth: 650, fontSize: '16px', width: '60vw', marginTop: '2%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Name</TableCell>
        
           
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Permanent Address</TableCell>
          
          
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Occupation</TableCell>
           
         
           <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'16px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell>
       
          
            {/* <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Biodata Id</TableCell>

            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Permanent Address</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Occupation</TableCell>
            <TableCell sx={{ '@media (min-width: 1700px)': {fontSize:'20px' , fontWeight:'bold'},fontWeight:'bold'}} align="center">Action</TableCell> */}
          </TableRow>
        </TableHead>
        {data?.length === 0 ?
              <div>
                <p className="fixed left-[48vw] top-[46vh] text-xl text-gray-400 font-medium">You did not add any biodata in your favorite list</p>
                  <img width={300}  className=" fixed left-[50vw] top-[12vh]" src="https://cdn3d.iconscout.com/3d/premium/thumb/search-not-found-5342748-4468820.png" alt="" />
                  {/* <img  className=" fixed left-[45vw] top-[6vh]" src="https://cdn3d.iconscout.com/3d/premium/thumb/no-data-found-4810740-4009512.png" alt="" /> */}
              </div>
                :
        <TableBody>
          
        {/* <TableRow
             
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >   */}
          
             {data && data?.map((favorite) => 
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
             <TableCell className="flex items-center gap-3"  sx={{'@media (min-width: 1700px)': {fontSize:'17px' } , color:'gray', letterSpacing:'1px'}} align="center">
             <div className=" flex gap-3 items-center justify-center">
             <Link to={`/biodata/${favorite?.userEmail}`}  className="bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl flex items-center gap-2 shadow-xl  "><GrView/>View Profile</Link>
             <button 
             onClick={()=>{handleDelete(favorite?._id)}}    className="bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium hover:bg-[#d34478] px-3 py-2 rounded-md drop-shadow-xl shadow-xl  2xl:text-xl"><RiDeleteBin6Line /></button>
              
             </div>
             </TableCell>
             </TableRow>
             )}
                
            
       
        </TableBody>
            }
      </Table>
    </TableContainer>
    </Container>
    </>
    )
};

export default Favorites;