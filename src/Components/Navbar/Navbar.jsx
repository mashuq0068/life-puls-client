
import PropTypes from 'prop-types';

import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import toast from 'react-hot-toast';
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const AlertDialog = ({ open, handleClose }) => {
  const { logOutUser } = useAuth()

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

const Navbar = () => {
  const { user, setDashboardAccessType, dashboardAccessType } = useAuth()
  const [openLogoutDialog, setOpenLogoutDialog] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    // goForLogout();
    setOpenLogoutDialog(false);
  };

  // home an dbiodatas should be handle reload

  const navigate = useNavigate()
  // const [bgColor , setBgColor] = React.useState("transparent")
  const handleReloadHome = () => {
    navigate('/')
    window.location.reload(false);
  }

  const handleReloadBiodatas = () => {

    navigate('/biodatas')



    // window.location.reload(false);
  }
  const handleDashboard = () => {
    handleClickOpen()

  }
  const handleAdminDashboard = () => {
    setDashboardAccessType("admin")
    
      navigate('/dashboard/admin')
    
  }
  const handleUserDashboard = () => {
    setDashboardAccessType("user")
      navigate('/dashboard/edit')
  
  }

  const links =

    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you like to see the dashboard as an admin or as an user?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            As it is a demo project, The admin dashboard is not protected. it is open for all. So you see the user dashboard and the admin dashboard together. Choose under here.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAdminDashboard} sx={{ textTransform: 'none' }} >As an Admin</Button>
          <Button onClick={handleUserDashboard} sx={{ textTransform: 'none' }} autoFocus>
            As an user
          </Button>
        </DialogActions>
      </Dialog>
      <ul className='flex lg:gap-[15%] gap-[4vh] lg:flex-row flex-col items-center   text-base spacing'>
        <NavLink onClick={handleDashboard} className="lg:block hidden"> Dashboard</NavLink>
        <NavLink onClick={handleReloadHome} to={'/'}>Home</NavLink>
        <NavLink onClick={handleReloadBiodatas} to={'/biodatas'}>Biodatas</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>

        {user ? <button onClick={handleLogout} className=' spacing  lg:-ml-0 lg:spacing text-base btn hover:bg-[rgb(178,63,76)] btn-primary bg-gradient-to-r from-rose-500 to-rose-600 border-[#f42a41] hover:border-none'>Logout</button> :

          <NavLink to='/login' className=' btn btn-primary hover:border-none bg-gradient-to-r from-rose-500 to-rose-600 border-[#f42a41] hover:bg-[rgb(178,63,76)] spacing  lg:-ml-0 lg:spacing text-base '>Login</NavLink>}




      </ul>

    </>









  return (
    <>
      <div className="navbar fixed   backdrop-blur-3xl top-0 z-50  bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box h-auto backdrop-blur-3xl pl-[7vw] w-44">
              <div>
                {links}
              </div>

            </ul>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <img className='w-[16%]'
              src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
              alt=""

            />
            <p className=' 2xl:text-2xl text-xl  font-semibold'>Life Puls</p>
          </div>
        </div>
        <div className={`${user ? "-ml-[20%]" : "-ml-[5%]"}  hidden lg:flex`}>
          <ul className="menu menu-horizontal px-1">
            <div>
              {links}
            </div>

          </ul>
        </div>
        <div className="navbar-end">

        </div>
      </div>
      <AlertDialog open={openLogoutDialog} handleClose={handleCloseLogoutDialog} />
    </>

  )
}
Navbar.propTypes = {

  window: PropTypes.func,
};



export default Navbar;