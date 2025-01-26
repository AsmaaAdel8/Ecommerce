import { ControlPointOutlined, LocalMallOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Products from "../DashbordPages/Products";
import CreateProduct from "../DashbordPages/CreateProduct";

export default function Dashpoard() {
  const [alignment, setAlignment] = useState("Create Products");
  const [Component,setComponent]=useState(<CreateProduct/>)
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
      fullWidth
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      // onClick={handleClick}   
       >
      <ToggleButton value="Create Products" sx={{bgcolor:"grey"}} onClick={()=>setComponent(<CreateProduct/>)}>
        <ControlPointOutlined/>
        Create Products
      </ToggleButton>
      <ToggleButton value="Products" onClick={()=>setComponent(<Products/>)}>
        <LocalMallOutlined/>
        Products
      </ToggleButton>
    </ToggleButtonGroup>
    {/* run component here by click on toggle buttons */}
    {Component}
   </Box>
  );
}
