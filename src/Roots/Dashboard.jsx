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
   
     <div className=' z-10  overflow-hidden w-[25%] bg-white shadow-black  fixed top-0 flex-col drop-shadow-xl shadow-xl  h-screen'>
      <div id='dashboard' className="flex flex-col 2xl:text-lg space-y-7  2xl:space-y-12 text-base spacing font-bold ml-[10%] mt-[30%]">
       
       <NavLink className='' to="/dashboard/edit">Edit Biodata</NavLink>
        <NavLink className='' to="/dashboard/view">View Biodata</NavLink>
        <NavLink className='' to="/dashboard/contactRequest">My Contact Request</NavLink>
        <NavLink onClick={handleReload} className='' to="/dashboard/favorites">My Favorites Biodata </NavLink>
        <NavLink  className='' to="/dashboard/gotMarried">Got Married</NavLink>
        <Button
          onClick={handleLogout}
          sx={{
            fontSize:'18px',
            textAlign: 'left',
            textBase: '1rem',
            letterSpacing: '3px',
            fontWeight: '700',
            position:'relative',
            right:'40%',
           
            color:'black',
            textTransform:'capitalize',
            filter:' drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))',
            // boxShadow : '0px 0px 1px 1px',
            '@media (max-width: 1700px)': {
              // Styles for screens with a maximum width of 1700px
              fontSize: '15px', 
              letterSpacing:'0px',
              fontWeight:'800',
              position:'relative',
              right:'40%',// Adjust as needed
            },
          }}
        >
          Logout
        </Button>

      </div>
     
      
      
      {/* Logout Confirmation Dialog */}
      <AlertDialog open={openLogoutDialog} handleClose={handleCloseLogoutDialog} />
    </div>
    
{/* outlet */}
    <div className='relative left-[25%]'>
    <Outlet></Outlet>
    </div>
    </div>




        //  {/* admin*/}
    :<div className=" flex  overflow-hidden ">
   
     <div className=' z-10  overflow-hidden w-[25%] bg-white shadow-black  fixed top-0 flex-col drop-shadow-xl shadow-xl  h-screen'>
      <div id='dashboard' className="flex flex-col 2xl:text-lg space-y-7  2xl:space-y-12 text-base spacing font-bold ml-[10%] mt-[30%]">
       
       <NavLink className='' to="/dashboard/admin">Admin Dashboard</NavLink>
        <NavLink className='' to="/dashboard/manageUsers">Manage Users</NavLink>
        <NavLink className='' to="/dashboard/approvedPremium"> Premium Requests</NavLink>
        <NavLink  className='' to="/dashboard/approvedContactRequest">Contact Request</NavLink>
        <NavLink  className='' to="/dashboard/successStories">Success Stories</NavLink>
        <Button
          onClick={handleLogout}
          sx={{
            fontSize:'18px',
            textAlign: 'left',
            textBase: '1rem',
            letterSpacing: '3px',
            fontWeight: '700',
            position:'relative',
            right:'40%',
           
            color:'black',
            textTransform:'capitalize',
            filter:' drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))',
            // boxShadow : '0px 0px 1px 1px',
            '@media (max-width: 1700px)': {
              // Styles for screens with a maximum width of 1700px
              fontSize: '15px', 
              letterSpacing:'0px',
              fontWeight:'800',
              position:'relative',
              right:'40%',// Adjust as needed
            },
          }}
        >
          Logout
        </Button>

      </div>
      {/* <div className='w-[30vw] custom-rotation h-[20vh] absolute -bottom-[10vh]  bg-[#f06598] '>

      </div> */}
     
      
      
      {/* Logout Confirmation Dialog */}
      <AlertDialog open={openLogoutDialog} handleClose={handleCloseLogoutDialog} />
    </div>
    
{/* outlet */}
    <div className='relative left-[25%]'>
    <Outlet></Outlet>
    </div>
    </div>}
    </div>
  );
};

export default Dashboard;
