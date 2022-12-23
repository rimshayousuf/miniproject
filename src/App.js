import { Box,Grid } from '@mui/material';
import './App.css';
import ApiCall from './View/Task/ApiCall';
import MarksList from './View/Task/MarksList';
import MUI from './View/Task/PracticeMUI';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={5}>
        {/* <Item>xs=8</Item> */}
        <ApiCall/>
      </Grid>
      <Grid item xs={2}>
        {/* <Item>xs=8</Item> */}
        <MarksList/>
      </Grid>  
      <Grid item xs={5}>
      <MUI/>
      </Grid>    
</Grid>
</Box>   
      
  );
  

}

export default App;
