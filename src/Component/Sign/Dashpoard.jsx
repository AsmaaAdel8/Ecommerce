import { ControlPointOutlined, LocalMallOutlined, SignalCellularAltOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Products from "../DashbordPages/Products";
import CreateProducts from "../DashbordPages/CreateProduct";
import Analys from "../DashbordPages/Analys";

export default function Dashpoard() {
  const [alignment, setAlignment] = useState("Create Products");
  const [Component,setComponent]=useState(<CreateProducts/>)
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (
   <Box sx={{
    marginLeft: "auto",
    marginRight: "auto",
    mt:2,
    width:"50%",
   }}>
     <ToggleButtonGroup
     sx={{width:'100%'}}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      // onClick={handleClick}   
       >
      <ToggleButton value="Create Products" sx={{bgcolor:"grey"}} onClick={()=>setComponent(<CreateProducts/>)}>
        <ControlPointOutlined/>
        Create Products
      </ToggleButton>
      <ToggleButton value="Products" onClick={()=>setComponent(<Products/>)}>
        <LocalMallOutlined/>
        Products
      </ToggleButton>
      <ToggleButton value="Analays" onClick={()=>setComponent(<Analys/>)}>
        <SignalCellularAltOutlined/>
        Analays
      </ToggleButton>
    </ToggleButtonGroup>
    {/* run component here by click on toggle buttons */}
    {Component}
   </Box>
  );
}
