import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

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
    <div className=" flex  ">
      <div className='uppercase z-10  w-[25%] bg-white shadow-black  fixed top-0 flex-col drop-shadow-xl shadow-xl  h-screen'>
      <div className="flex flex-col space-y-7 text-base 2xl:text-base spacing font-bold ml-[10%] mt-[30%]">
        <NavLink className='drop-shadow-xl shadow-xl py-4 px-2' to="/dashboard/edit">Edit Biodata</NavLink>
        <NavLink className='drop-shadow-xl shadow-xl py-4 px-2' to="/dashboard/view">View Biodata</NavLink>
        <NavLink className='drop-shadow-xl shadow-xl py-4 px-2' to="/dashboard/contactRequest">My Contact Request</NavLink>
        <NavLink className='drop-shadow-xl shadow-xl py-4 px-2' to="/dashboard/favorites">Favorites Biodata </NavLink>
        <Button
          onClick={handleLogout}
          sx={{
            fontSize:'16px',
            textAlign: 'left',
            textBase: '1rem',
            letterSpacing: '3px',
            fontWeight: '700',
            textTransform: 'uppercase',
            position:'relative',
            right:'37%',
            color:'black',
            '@media (max-width: 1700px)': {
              // Styles for screens with a maximum width of 1700px
              fontSize: '15px', 
              letterSpacing:'0px',
              fontWeight:'800',
              position:'relative',
              right:'39%',// Adjust as needed
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
  );
};

export default Dashboard;
