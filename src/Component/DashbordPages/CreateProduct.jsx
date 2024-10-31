import {
  Autocomplete,
  Button,
  Container,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import "../../App.css";
import { Star } from "@mui/icons-material";
import { useState } from "react";
import { SetNewProduct } from "../Sign/Check";

export default function CreateProduct() {
  const theme = useTheme();
  const [productData, setProductData] = useState({
    ProductName: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductCategory: "",
    Rate: "",
    Images: "",
  });
  const handleSubmit = () => {
    const NewProduct=JSON.stringify(productData)
    console.log(NewProduct);
    
    SetNewProduct(NewProduct)
  };
  const options = ["WEMEN", "MEN", "CHILDREN", "ELECTRONES", "HOME"];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductData({ ...productData, Images: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Typography variant="h5" textAlign={"center"} mb={1}>
        Create new Product
      </Typography>
      <Paper
        sx={{
          bgcolor: theme.palette.favColor.main,
          boxShadow: "0px 0px 20px rgba(0, 0, 2)",
          padding: "10px",
        }}
      >
        <div>
          <InputLabel htmlFor="name">Product Name</InputLabel>
          <Input
            type="text"
            id="name"
            value={productData.ProductName}
            fullWidth
            onChange={(e) =>
              setProductData({ ...productData, ProductName: e.target.value })
            }
          />
          <InputLabel htmlFor="descr">Description</InputLabel>
          <Input
            type="text"
            id="descr"
            value={productData.ProductDescription}
            onChange={(e) =>
              setProductData({
                ...productData,
                ProductDescription: e.target.value,
              })
            }
            fullWidth
          />
          <InputLabel htmlFor="input-with-icon-adornment">Price</InputLabel>
          <Input
            type="number"
            fullWidth
            id="input-with-icon-adornment"
            value={productData.ProductPrice}
            onChange={(e) =>
              setProductData({ ...productData, ProductPrice: e.target.value })
            }
            startAdornment={
              <InputAdornment position="start"> $</InputAdornment>
            }
          />
          <InputLabel htmlFor="input-with-icon-adornment">Rate</InputLabel>
          <Input
            type="number"
            fullWidth
            id="input-with-icon-adornment"
            value={productData.Rate}
            onChange={(e) =>
              setProductData({ ...productData, Rate: e.target.value })
            }
            startAdornment={
              <InputAdornment position="start">
                <Star sx={{ color: "yellow" }} />
              </InputAdornment>
            }
            inputProps={{
              min: 0, 
              max: 5, // (assuming a 5-star rating)
            }}
          />
          <Autocomplete
            disablePortal
            fullWidth
            options={options}
            sx={{ width: 300, mt: 2, mb: 2 }}
            value={productData.ProductCategory}
            onChange={(event,newValue) => {
              setProductData({
                ...productData,
                ProductCatigory: newValue,
              });
            }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <input
            type="file"
            placeholder="Chose Images"
            name="imageFile" accept="image/*"
            onChange={handleImageChange}
            style={{
              margin: "auto",
              fontSize: "15px",
              display: "block",
              marginBottom: 2,
            }}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            style={{
              padding: "5px",
              backgroundColor: theme.palette.success.main,
              border: "none",
              fontSize: "15px",
              width: "25em",
              marginLeft: "20%",
            }}
          >
            Upload Data
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
