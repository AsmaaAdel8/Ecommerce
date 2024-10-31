import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import Productes from './HomeProductes';

export default function MainContent() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize:"1.5em"}}>
          Filter Catigories
        </FormLabel>
        <Divider />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel
            value="children"
            control={<Radio />}
            label="children"
          />
          <FormControlLabel value="Home" control={<Radio />} label="Home" />
          <FormControlLabel
            value="electrones"
            control={<Radio />}
            label="electrones"
          />
        </RadioGroup>
      </FormControl>  

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
       <Productes/>
      </Box>
    </Box>
  );
}
