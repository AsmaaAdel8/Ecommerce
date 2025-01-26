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
// import { SetNewProduct } from "../Sign/Check";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../Redux/SendProduct-slice";
export default function CreateProduct() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.addProduct);
  const [productData, setProductData] = useState({
    Productitle: "",
    Description: "",
    ProductPrice: "",
    Catigory: "",
    Rating: "",
    image1: null,
  });
  const handleSubmit = () => {
    if (
      !productData.Productitle ||
      !productData.Description ||
      !productData.ProductPrice ||
      !productData.Catigory ||
      !productData.Rating ||
      !productData.image1
    ) {
      alert("Please fill in all the fields");
      return;
    }
    dispatch(GetProduct(productData));
  };
  const options = ["WEMEN", "MEN", "CHILDREN", "ELECTRONES", "HOME"];
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductData({ ...productData, ProductImage: reader.result });
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
            value={productData.Productitle}
            fullWidth
            onChange={(e) =>
              setProductData({ ...productData, Productitle: e.target.value })
            }
          />
          <InputLabel htmlFor="descr">Description</InputLabel>
          <Input
            type="text"
            id="descr"
            value={productData.Description}
            onChange={(e) =>
              setProductData({
                ...productData,
                Description: e.target.value,
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
            value={productData.Rating}
            onChange={(e) =>
              setProductData({ ...productData, Rating: e.target.value })
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
            value={productData.Catigory}
            onChange={(event, newValue) => {
              setProductData({
                ...productData,
                Catigory: newValue,
              });
            }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <input
            type="file"
            placeholder="Chose Images"
            name="imageFile"
            accept="image/*"
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
            disabled={status === "loading"}
            style={{
              padding: "5px",
              backgroundColor: theme.palette.success.main,
              border: "none",
              fontSize: "15px",
              width: "25em",
              marginLeft: "20%",
            }}
          >
            {status === "loading" ? "Adding..." : "Add Product"}
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
