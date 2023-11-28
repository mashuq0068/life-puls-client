import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import toast from 'react-hot-toast';
// import { useState } from 'react';
import { useEffect } from 'react';


const drawerWidth = 240;
// const navItems = ['home', 'about', 'contact'];

const Navbar = (props) => {
  const {user , logOutUser} = useAuth()
  const [bgColor , setBgColor] = React.useState("transparent")
  const handleReload = () => {
    window.location.reload(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined' && window.scrollY) {
        if (window.scrollY > 100) {
          setBgColor('white');
        } else {
          setBgColor('transparent');
        }
      }
    };
  
    // Add the event listener when the component mounts
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
  
    // Clean up the event listener when the component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Empty dependency array means this effect will run once when the component mounts
  
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
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
      })
      // swal.fire({
      //   title: "Are you sure?",
      //   text: "You won't be able to revert this!",
      //   icon: "warning",
      //   showCancelButton: true,
      //   confirmButtonColor: "#3085d6",
      //   cancelButtonColor: "#d33",
      //   confirmButtonText: "Yes, delete it!"
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     swal.fire({
      //       title: "Deleted!",
      //       text: "Your file has been deleted.",
      //       icon: "success"
      //     });
      //   }
      // });
  }
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              display: 'flex',
              flexDirection: 'column',
            //   justifyContent: 'center',
              alignItems: 'center',
            //   backgroundColor: 'transparent',
              color: 'black',
              height: '100%',
            },
          }}
        >
          <Box onClick={handleDrawerToggle}>
         
        
            <Typography variant="h6" sx={{ my: 2 , display:'flex' , justifyContent:'left' , marginLeft:'10%' }}>
            {/* <img
        src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
        alt=""
        style={{ width: '5%', position:'absolute',  height: 'auto' , left:'-5%' }}
      /> */}
             Life Puls
            </Typography>
            <Divider />
            <List sx={{ display: 'flex', marginTop:'-10%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            { user && <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/dashboard'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', color: 'black' }} primary={"dashboard"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>}
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', color: 'black' }} primary={"Home"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/biodatas'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', color: 'black' , textAlign:'center' }} primary={"Biodatas"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/about'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', color: 'black' }} primary={"About Us"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/contact'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', color: 'black' }} primary={"Contact Us"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
              {/* login */}
              {!user ? <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/login'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', textAlign: 'center', color: 'black' }} primary={"Login"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            
              :
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                
                    <ListItemText onClick={handleLogOut} sx={{ backgroundColor: 'transparent', textAlign: 'center', color: 'black' }} primary={"Logout"} />
                
                </ListItemButton>
              </ListItem>}
            </List>
          </Box>
        </Drawer>
      );
      
  
   
  
    return (
      <>  
       {/* <Toaster position='top-center' />     */}
      <Box    sx={{ display: 'flex',   backgroundColor: "white",   zIndex:'2' }}>
        <CssBaseline/>
        <AppBar sx={{backgroundColor: bgColor ,  marginLeft:'auto', boxShadow:'none', color:'black' }} component="nav">
          <Toolbar sx={{
    backgroundColor: 'transparent',
    width: '100%', 
    maxWidth: '100%', 
    margin: '0 auto', 
    boxShadow: 'none',
    color: 'black',
    '@media (min-width: 960px)': {
      width: '70%', 
    },
   
  }}>
            <IconButton
              color='white'
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
           
              variant="h6"
              component="div"
              sx={{ flexGrow: 1,backgroundColor:'transparent' ,  fontWeight:'bold', color:'black', display: { xs: 'none', sm: 'block' },
              '@media (min-width: 1660px)': {
               
                fontSize:'30px' 
              },
            
            }}
            >
        <img
        src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
        alt=""
        style={{ width: '5%', position:'absolute',  height: 'auto' , left:'-5%' }}
      />
          <p>Life Puls</p>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block', backgroundColor: bgColor, color: 'white' },
            
          
          }}>

{
  user &&
  <Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px',

  '@media (min-width: 1660px)': {
    fontSize:'16px',
    margin:'0 20px',
    letterSpacing:'3px',
  fontWeight:"bold",
  
   

  },
  '@media (min-width: 660px) and (max-width: 900px)': {
    position : 'absolute',
     top:'40px',
     left:'0px'
  
   

  }
}
 }
>
  <NavLink

   to={'/dashboard'}>
    dashboard
  </NavLink>
</Button>}
<Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px',

  '@media (min-width: 1660px)': {
    fontSize:'16px',
    margin:'0 20px',
    letterSpacing:'3px',
  fontWeight:"bold"
   

  }
}
 }
>
  <NavLink

   to={'/'}>
    home
  </NavLink>
</Button>

<Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px',
 '@media (min-width: 1660px)': {
  fontSize:'16px',
  margin:'0 20px',
  letterSpacing:'3px',
  fontWeight:"bolder"
 
}
}}>
  <NavLink onClick={handleReload} to={'/biodatas'}>
    biodatas
  </NavLink>
</Button>

<Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px' ,
 '@media (min-width: 1660px)': {
  fontSize:'16px',
  margin:'0 20px',
  letterSpacing:'3px',
  fontWeight:"bolder"
 
  
}
}}>
  <NavLink to={'/about'}>
    about us
  </NavLink>
</Button>

<Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px',
 '@media (min-width: 1660px)': {
  fontSize:'16px',
  margin:'0 20px',
  letterSpacing:'3px',
  fontWeight:"bolder"
 
 
}
}}>
  <NavLink to={'/contact'}>
    contact us
  </NavLink>
</Button>
<Button
      sx={{
        color: 'black',
        fontWeight: 'bold',
        margin: '0 10px',
        '@media (min-width: 1660px)': {
          fontSize: '16px',
          margin: '0 20px',
          letterSpacing: '3px',
          fontWeight: 'bolder'
        },
      }}
    >
      {user ? (
       
        <p onClick={handleLogOut}>Logout</p>
      ) : (
        
        <NavLink to="/login">Login</NavLink>
      )}
    </Button>


{/* <Button sx={{ color: 'black', fontWeight: 'bold', margin: '0 10px',
 '@media (min-width: 1660px)': {
  fontSize:'17px',
  margin:'0 20px',
  letterSpacing:'3px',
  fontWeight:"bolder"
 
  // Override width to 60% for screens wider than 960px (laptops and desktops)
}
}}>
  <NavLink to={'/login'}>
    login
  </NavLink>
</Button> */}

</Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              backgroundColor:'transparent',
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        </Box>
       
       </>
    
   ) }
   Navbar.propTypes = {
   
    window: PropTypes.func,
  };
        


export default Navbar;