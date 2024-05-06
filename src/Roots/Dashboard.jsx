import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import useCheckAdmin from '../Hooks/useCheckAdmin';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUsersCog } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { LiaHistorySolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { GiWineGlass } from "react-icons/gi";

const AlertDialog = ({ open, handleClose }) => {
  const {logOutUser}  = useAuth()
  
  const goForLogout = () => {
    logOutUser()
      .then((res) => {
        if (res) {
          handleClose(); // Close the logout confirmation dialog
          toast.success("You logged out successfully");
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        handleClose() // Ensure the dialog is closed in the finally block
      });
  };
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Logout Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to logout?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={goForLogout} autoFocus>
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// const SuccessDialog = ({ open, handleClose }) => {
//   return (
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="success-dialog-title"
//       aria-describedby="success-dialog-description"
//     >
//       <DialogTitle id="success-dialog-title">Logout Successful</DialogTitle>
//       <DialogContent>
//         <DialogContentText id="success-dialog-description">
//           You have been successfully logged out.
//         </DialogContentText>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose} autoFocus>
//           OK
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

const Dashboard = () => {
  
  const {isAdmin} = useCheckAdmin()
  console.log(isAdmin)
  const navigate = useNavigate()
  const handleReload = () => {
    navigate('/dashboard/favorites')
    window.location.reload(false)
  }

  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);
  // const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const handleLogout = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    // goForLogout();
    setOpenLogoutDialog(false);
  };

  

  // const handleCloseSuccessDialog = () => {
  //   setOpenSuccessDialog(false);
  // };

  // // Mock logOutUser function for illustration
  // const logoutUser = () => {
    
  //   return new Promise((resolve) => {
  //     // Simulate a logout request
     
  //     logOutUser()
  //     setTimeout(() => {
  //       resolve(true); // Resolve with true for a successful logout
  //     }, 1000);
  //   });
  // };

  return (
    <div className=' overflow-hidden'>
         {/* user */}
   { !isAdmin?.admin ? <div className=" flex  ">
   
     <div style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
         }} className=' z-10  overflow-hidden w-[15%] bg-white shadow-black  fixed top-0 flex-col drop-shadow-xl shadow-xl  h-screen'>
     <div className=' w-full h-screen bg-black pt-[25%] bg-opacity-50 backdrop-blur'>
      <div id='dashboard' className="flex flex-col text-white    2xl:text-md  space-y-7  2xl:space-y-12 text-base spacing  ml-[10%] ">
       
       <NavLink className='flex gap-2 items-center' to="/dashboard/edit"><FaRegEdit className='2xl:text-lg' />Edit Biodata</NavLink>
        <NavLink className='flex gap-2 items-center' to="/dashboard/view"><GrView />View Biodata</NavLink>
        <NavLink className='flex gap-2 items-center' to="/dashboard/contactRequest"><MdOutlineContactSupport className='2xl:text-lg'/>My Contact Request</NavLink>
        <NavLink onClick={handleReload} className='flex gap-2 items-center' to="/dashboard/favorites"><MdFavoriteBorder />My Favorite Biodata </NavLink>
        <NavLink  className='flex gap-2 items-center' to="/dashboard/gotMarried"><GiWineGlass className='2xl:text-lg'/>Got Married</NavLink>
        <button className='flex gap-2 items-center w-max'   onClick={handleLogout}><CiLogout className='2xl:text-lg font-bold'/>Logout</button>

      </div>
      </div>
     
      
      
      {/* Logout Confirmation Dialog */}
      <AlertDialog open={openLogoutDialog} handleClose={handleCloseLogoutDialog} />
    </div>
    
{/* outlet */}
    <div className='relative left-[15%] w-[85%]'>
    <Outlet></Outlet>
    </div>
    </div>




        //  {/* admin*/}
    :<div className=" flex  overflow-hidden ">
   
     <div   style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
         }} className=' z-10 overflow-hidden w-[15%]    fixed  flex-col drop-shadow-xl shadow-xl  h-screen'>
     <div className=' w-full h-screen bg-black pt-[25%] bg-opacity-50 backdrop-blur'>
     <div id='dashboard' className="flex flex-col   text-white    2xl:text-md space-y-7  2xl:space-y-12 text-base  ml-[10%] ">
       
       <NavLink className='flex gap-2 items-center' to="/dashboard/admin"><LuLayoutDashboard className='2xl:text-lg'/> Admin Dashboard</NavLink>
        <NavLink className='flex gap-2 items-center' to="/dashboard/manageUsers"><FaUsersCog  className='2xl:text-lg'/> Manage Users</NavLink>
        <NavLink className='flex gap-2 items-center' to="/dashboard/approvedPremium"><MdOutlineWorkspacePremium className='2xl:text-lg'/> Premium Requests</NavLink>
        <NavLink  className='flex gap-2 items-center' to="/dashboard/approvedContactRequest"><MdOutlineContactSupport className='2xl:text-lg'/>Contact Request</NavLink>
        <NavLink  className='flex gap-2 items-center' to="/dashboard/successStories"><LiaHistorySolid className='2xl:text-lg'/>Success Stories</NavLink>
        <button className='flex gap-2 items-center w-max'   onClick={handleLogout}><CiLogout className='2xl:text-lg font-bold'/>Logout</button>
      
        

      </div>
     </div>
     
     
      
      
      {/* Logout Confirmation Dialog */}
      <AlertDialog open={openLogoutDialog} handleClose={handleCloseLogoutDialog} />
    </div>
    
{/* outlet */}
    <div className='relative left-[15%]'>
    <Outlet></Outlet>
    </div>
    </div>}
    </div>
  );
};

export default Dashboard;
