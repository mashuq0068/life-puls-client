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
const drawerWidth = 240;
// const navItems = ['home', 'about', 'contact'];

const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
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
          {/* <img
        src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
        alt=""
        style={{ width: '100%', height: 'auto' }}
      /> */}
            <Typography variant="h6" sx={{ my: 2 , display:'flex' , justifyContent:'left' , marginLeft:'10%' }}>
              MUI
            </Typography>
            <Divider />
            <List sx={{ display: 'flex', marginTop:'-10%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
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
              <ListItem sx={{ backgroundColor: 'transparent', color: 'black', width: '100%' }} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', backgroundColor: 'transparent', color: 'black', width: '100%' }}>
                  <NavLink to={'/login'}>
                    <ListItemText sx={{ backgroundColor: 'transparent', textAlign: 'center', color: 'black' }} primary={"Login"} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      );
      
  
   
  
    return (
      <Box sx={{ display: 'flex',   backgroundColor:'transparent' }}>
        <CssBaseline/>
        <AppBar sx={{backgroundColor:'transparent' ,  marginLeft:'auto', width:'70%', boxShadow:'none', color:'white' }} component="nav">
          <Toolbar sx={{backgroundColor:'transparent' , width:'60%', boxShadow:'none', color:'white' }}>
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
              sx={{ flexGrow: 1,backgroundColor:'transparent' , color:'white', display: { xs: 'none', sm: 'block' } }}
            >
                   {/* <img
        src="https://i.ibb.co/5R6pwng/th-removebg-preview-5.png"
        alt=""
        style={{ width: '10%', height: 'auto' }}
      /> */}
              MUI
            </Typography>
            <Box  sx={{ display: { xs: 'none', sm: 'block',backgroundColor:'transparent' , color:'white'  } }}>
            
                <Button  sx={{ color: 'white' }}>
                <NavLink to={'/'}>
                 home
                </NavLink>
                </Button>
                <Button  sx={{ color: 'white' }}>
                <NavLink to={'/biodatas'}>
                 biodatas
                </NavLink>
                </Button>
                <Button  sx={{ color: 'white' }}>
                <NavLink to={'about'}>
                 about us
                </NavLink>
                </Button>
                <Button  sx={{ color: 'white' }}>
                <NavLink to={'/contact'}>
                 contact us
                </NavLink>
                </Button>
                <Button  sx={{ color: 'white' }}>
                <NavLink to={'/login'}>
                  login
                </NavLink>
                </Button>
                {/* <Button  sx={{ color: 'black' }}>
                <NavLink>
                  rome
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
       
    
   ) }
   Navbar.propTypes = {
   
    window: PropTypes.func,
  };
        


export default Navbar;