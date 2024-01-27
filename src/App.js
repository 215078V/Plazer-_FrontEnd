
import { Box } from '@mui/material';
import Area from './Area';
//import { Header, Header2 } from './Header';
// import Header, { Header2 } from './Header';


import Header from './Header';
// import Header2  from './Header';
import VerticalNav from './VerticalNav';
// import Area from './Area';




function App() {
  return (
    <div>
      <Box>
      <Header/>
      
      <div style={{ display: 'flex'}} > 
          <VerticalNav/>
          <div style={{ display: 'flex',margin:'100px 20px 20px 20px' ,marginTop: 'calc(100% - 200px)'}} > 
          <Area/> 
        </div>
      </div>
      
      </Box>
    </div>
  );
}

export default App;
