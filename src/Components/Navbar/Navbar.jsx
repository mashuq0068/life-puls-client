
import PropTypes from 'prop-types';

import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import toast from 'react-hot-toast';

// import { useState } from 'react';




// const navItems = ['home', 'about', 'contact'];

const Navbar = () => {
  // home an dbiodatas should be handle reload
  const {user , logOutUser} = useAuth()
  const navigate = useNavigate()
  // const [bgColor , setBgColor] = React.useState("transparent")
  const handleReloadHome = () => {
    navigate('/')
    window.location.reload(false);
  }
  const handleReloadBiodatas = () => {
    navigate('/biodatas')
    window.location.reload(false);
  }
  const handleLogOut = () => {
    logOutUser()
    .then(res => {
      if(res)
      {
      toast.success("You has been logged out")
      }
    })
    .catch(error => {
      console.error(error.message)
    })}

  const links = 
  
  <>
   <ul className='flex lg:gap-[15%] gap-[4vh] lg:flex-row flex-col 2xl:font-bold 2xl:uppercase  text-base spacing'>
   <NavLink className={`${user ? "block" : "hidden"}`} to={'/dashboard'}> Dashboard</NavLink>
   <NavLink onClick={handleReloadHome} to={'/'}>Home</NavLink>
   <NavLink onClick={handleReloadBiodatas}  to={'/biodatas'}>Biodatas</NavLink>
   <NavLink to={'/about'}>About</NavLink>
   <NavLink to={'/contact'}>Contact</NavLink>
 { user?  <button onClick={handleLogOut} className='-ml-[63%] spacing 2xl:uppercase lg:-ml-0 lg:spacing text-base 2xl:text-lg'>Logout</button> : 
 <NavLink to='/login' className='-ml-[63%] spacing 2xl:uppercase lg:-ml-0 lg:spacing text-base 2xl:text-lg'>Login</NavLink>
 }
       
  
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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box h-[60vh] w-36">
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
  <div className="-ml-[20%] hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   <div>
   {links}
   </div>
    
    </ul>
  </div>
  <div className="navbar-end">
  
  </div>
</div>
       
       </>
    
   ) }
   Navbar.propTypes = {
   
    window: PropTypes.func,
  };
        


export default Navbar;