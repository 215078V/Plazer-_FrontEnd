import * as React from 'react';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
//import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import List from '@mui/material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

import { ListItemDecorator } from '@mui/joy';
import { Typography } from '@mui/material';



export default function SelectedList() {
  return (
    <List
      sx={{
        maxWidth: 280,
        background:'#121148',
       // maxHeigh:'10%',
       
        color: 'white',
        alignSelf:'end'

      }}
    >
      
      <ListItem>
        <ListItemButton>
          <ListItemDecorator>
            <Apps />
          </ListItemDecorator>
          <Typography sx={{marginLeft:'10px'}}>
          P L A Z E R
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemDecorator >
            <Home />
          </ListItemDecorator>
          <Typography sx={{marginLeft:'10px'}}>
          Dashboard
          </Typography>
        </ListItemButton>
      </ListItem>
      {/* <ListItem> */}
     
      <ListItem>
        <ListItemButton selected>
          <ListItemDecorator>
            < TipsAndUpdatesIcon/>
          </ListItemDecorator>
          <Typography sx={{marginLeft:'10px'}}>
          My Projects
          </Typography>
         
        </ListItemButton> 
      </ListItem>
      <ListItem sx={{marginTop:'280%'}}>
        <ListItemButton>
          <ListItemDecorator>
            <LogoutIcon />
          </ListItemDecorator>
          Logout
        </ListItemButton>
      </ListItem>
    </List>

    
  );
}



// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

// export default function Area() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//     </Stack>
//   );
// }

// //export default VerticalNav;