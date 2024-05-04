

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
    
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
      return children
    }
    else if (loading){
  return (
    <Box
    sx={{
      display: 'flex',
      position: 'fixed',
      top: '50%',
      left: '50%',
    }}
  >
    <CircularProgress
      sx={{
        color: '#f06598',
      }}
    />
  </Box>
      );
    }
   return( 
    <Navigate state={location?.pathname} to='/login'></Navigate>
   

    )
    
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;