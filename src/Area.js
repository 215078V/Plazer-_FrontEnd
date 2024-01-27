import * as React from 'react';
import Button from '@mui/material/Button';
//import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TaskIcon from '@mui/icons-material/Task';


export default function Area() {
  return (
    <Stack direction="row" spacing={2}>
        <div style={{margin:'20px 20px 20px 20px'}}>
        <Button variant="outlined" startIcon={< TaskIcon  />}>
            Project 1
        </Button>
        </div>
        <div style={{margin:'20px 20px 20px 20px'}}>
        <Button variant="outlined" startIcon={< TaskIcon  />}>
            Project 2
        </Button>
        </div>
        <div style={{margin:'20px 20px 20px 20px'}}>
        <Button variant="outlined" startIcon={< TaskIcon />}>
            Project 3
        </Button>
        </div>
        
    </Stack>
  );
}
