import React from "react";
import {AppBar,Toolbar,Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
//import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Header =()=>{
    return(
       // <AppBar sx={{background:'#121148' , marginLeft: 'auto'}} >
        <AppBar sx={{ background: '#121148', marginLeft: 'auto', maxWidth: 'calc(100% - 185px)' }}>
  

            <Toolbar sx={{marginLeft:'auto'}}>
            {/* <Typography>Shoppee</Typography> */}
            <AccountCircleIcon/>
           

            </Toolbar>
            
        </AppBar>


        
 
    );
}

const Header2=()=>{
    return(
    <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
    </Button>
    );

}

export  default Header;
