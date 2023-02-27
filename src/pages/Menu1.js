import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Link } from "react-router-dom";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';



const Menu1 = () => {


 
  return (
    <>
      <Box sx={{display:'flex', justifyContent:'center'}}>
      
        <Link to='planilla'>
        <IconButton 
        size='large'
        sx={{display:'flex',
        flexDirection:'column'}}
        >
          <InsertDriveFileIcon></InsertDriveFileIcon>
          <Typography>Nueva planilla</Typography>
        </IconButton>
        </Link>
      </Box>
    
    </>
  )
}

export default Menu1
