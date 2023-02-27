import React from 'react'
import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import {Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AssignmentIcon from '@mui/icons-material/Assignment';


const Menu3 = () => {
  return (
    <Box sx={{display:'flex'}}>
      
        <Link to='/menu/consultas'>
        <IconButton 
        size='large'
        sx={{display:'flex',
        flexDirection:'column',
        }}
        >
          <AssignmentIcon></AssignmentIcon>
          <Typography>Reportes</Typography>
        </IconButton>
        </Link>      
      </Box>
  )
}

export default Menu3
