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
  ChildCare,
  ElectricRickshaw,
  FilterList,
  Home,
  Man,
  ProductionQuantityLimits,
  Woman,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addProduct, Filer } from "../../Redux/Product-Slice";

export default function MainContent() {
  const dispatch = useDispatch();
  const [catigory, setCatigory] = useState(""); // Default category


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
        onChange={(event, newValue) => {
          setCatigory(newValue);
          console.log(newValue);
          dispatch(Filer(newValue));
        }}
      >
        <BottomNavigationAction
          label="All Products"
          // value="All products"
          onClick={()=>{dispatch(addProduct())}}
          icon={<ProductionQuantityLimits />}
        />
        <BottomNavigationAction label="women" value="women" icon={<Woman />} />
        <BottomNavigationAction label="men" value="men" icon={<Man />} />
        <BottomNavigationAction
          label="children"
          value="children"
          icon={<ChildCare />}
        />
        <BottomNavigationAction
          label="electrones"
          value="electrones"
          icon={<ElectricRickshaw />}
        />
        <BottomNavigationAction label="home" value="home" icon={<Home />} />
      </BottomNavigation>
      <Box component="main" sx={{ bgcolor: "background.default", p: 3 }}>
        <HomeProductes />
      </Box>
    </Container>
  );
}
