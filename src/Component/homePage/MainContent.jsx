import Box from "@mui/material/Box";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
} from "@mui/material";
import HomeProductes from "./HomeProductes";
import "../../App.css";
import { useState } from "react";
import {
  ElectricRickshaw,
  FilterList,
  Home,
  Man,
  ProductionQuantityLimits,
  Woman,
} from "@mui/icons-material";
// import { useGetProductsByNameQuery } from '../../Redux/Product-Slice';

export default function MainContent() {
  const All = "product?populate=*";
  const female = "product?populate=*&filters[Catigory][$eq]=women";
  const male = "product?populate=*&filters[Catigory][$eq]=men";

  const [catigory, setCatigory] = useState(All); // Default category
  
  const handleChange = (event, newValue) => {
    setCatigory(newValue);
  };

  return (
    <Container>
      <Typography variant="h6">
        <FilterList /> Selected Products
      </Typography>
      <Typography variant="body1">
        All our new arrivals in a exclusive brand selection
      </Typography>
      <BottomNavigation
        sx={{ width: "100%" }}
        value={catigory}
        onChange={(e) => handleChange(e.target.value)}
      >
        <BottomNavigationAction
          label="All Products"
          value={All}
          icon={<ProductionQuantityLimits />}
        />
        <BottomNavigationAction label="Women" value={female} icon={<Woman />} />
        <BottomNavigationAction label="Men" value={male} icon={<Man />} />
        <BottomNavigationAction
          label="Electronics"
          value="electrones"
          icon={<ElectricRickshaw />}
        />
        <BottomNavigationAction
          label="Home products"
          value="home"
          icon={<Home />}
        />
      </BottomNavigation>
      <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
        <HomeProductes />
      </Box>
    </Container>
  );
}
