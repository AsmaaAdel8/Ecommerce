import {
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from "@mui/material";
import { useState } from "react";
import "../../App.css";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
export default function InfoGrop() {
  const [alignment, setAlignment] = useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const RowData = [
    {
      value: "fast",
      title1: "Fast Delivery",
      title2: "Start From $10",
      icon: <ElectricBoltIcon sx={{fontSize:40}}/>,
    },
    {
      value: "guarantee",
      title1: "ony Guarantee",
      title2: "7 Days Back",
      icon: <AccessAlarmsIcon sx={{fontSize:40}}/>,
    },
    {
      value: "days",
      title1: "356 Days",
      title2: "For Free Return",
      icon: <DataSaverOnIcon sx={{fontSize:40}}/>,
    },
    {
      value: "payment",
      title1: "Payment",
      title2: "Secure System",
      icon: <EventAvailableIcon sx={{fontSize:40}}/>,
    },
  ];
  return (
    <Container sx={{ my: "1em"  }}>
      <ToggleButtonGroup
        className="info_grop"
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        fullWidth
      >
        {RowData.map((item) => {
          return (
            <ToggleButton value={item.value} sx={{minWidth:"25%"}} className="flex" key={item.title1}>
              {item.icon}
              <Box sx={{ display: "flex", flexDirection: "column" } }>
                <Typography variant="h6">
                  {item.title1}
                </Typography>
                <Typography variant="body1">
                  {item.title2}
                </Typography>
              </Box>
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Container>
  );
}
