import React from 'react'

import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import {Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAlertIcon from '@mui/icons-material/AddAlert';


const Menu2 = () => {
  
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
        <Link to='alarmas'>
        <IconButton 
        size='large'
        sx={{display:'flex',
        flexDirection:'column'}}
        >
          <AddAlertIcon></AddAlertIcon>
          <Typography>Nueva Alarma</Typography>
        </IconButton>
        </Link>
        <Link to='nuevoUsuario'>
        <IconButton 
        size='large'
        sx={{display:'flex',
        flexDirection:'column'}}
        >
          <AddCircleIcon></AddCircleIcon>
          <Typography>Generar nuevo usuario</Typography>
        </IconButton>
        </Link>
        

      </Box>
  )
}

export default Menu2
