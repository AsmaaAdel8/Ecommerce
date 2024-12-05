import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../App.css";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/Product-Slice";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}
export default function HomeProductes() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const UrlImg = "http://localhost:1337";
  const {items , status , error} = useSelector((state) => state.addProduct);
  const [data]=items;
  console.log(data);
  useEffect(() => {
    dispatch(addProduct());
  },[]);

  // the varible which returns the data from the api
  const handleClickOpen = (product) => {
    setOpen(true);
    setSelectedProduct(product);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 1, sm: 2, md: 2 }}
      m={"auto"}
    >
      {status==="loading" && (
      <Box width={"100%"}>
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </Box>
       )} 
      {data &&
        data.map((product, index) => {
          return (
            <Grid item md={4} key={index} sm={6} xl={3}>
              <Card >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: "40%" }}
                    image={`${UrlImg}${product.attributes.ProductImage.data[0].attributes.url}`}
                    alt="product image"
                    draggable="false"
                    loading="lazy"
                  />
                  <CardContent>
                    <Box className="flex">
                      <Typography gutterBottom variant="h5" component="div">
                        {product.attributes.Productitle}
                      </Typography>
                      <Typography variant="h5" sx={{ color: "text.secondary" }}>
                        ${product.attributes.ProductPrice}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      {product.attributes.Description}
                    </Typography>
                    <Box className="flex">
                      <Button
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => handleClickOpen(product)}
                      >
                        Add To Card
                      </Button>
                      <Rating
                        name="read-only"
                        value={product.attributes.productRating}
                        readOnly
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <Box className="flex">
          {selectedProduct && (
            <>
              <Box width={"50%"} height={"100%"} mr={2}>
                <img
                  width={"100%"}
                  height={"100%"}
                  style={{ float: "left" }}
                  src={`${UrlImg}${selectedProduct.attributes.ProductImage.data[0].attributes.url}`}
                  alt="product image"
                  draggable="false"
                  loading="lazy"
                />
              </Box>
              <Box>
                <Box className="flex">
                  <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                  >
                    {selectedProduct.attributes.Productitle}
                  </DialogTitle>
                  <Typography variant="h5">
                    ${selectedProduct.attributes.ProductPrice}
                  </Typography>
                </Box>
                <Box className="flex">
                  <img
                    width={"90px"}
                    height={"50%"}
                    src={`${UrlImg}${selectedProduct.attributes.ProductImage.data[1].attributes.url}`}
                    alt="product image"
                    draggable="false"
                    loading="lazy"
                  />
                  {selectedProduct.attributes.ProductImage.data[2] && (
                    <img
                      width={"90px"}
                      height={"50%"}
                      src={`${UrlImg}${selectedProduct.attributes.ProductImage.data[2].attributes.url}`}
                      alt="product image"
                    />
                  )}
                </Box>
                <DialogContent>
                  <DialogContentText>
                    {selectedProduct.attributes.Description}
                  </DialogContentText>
                  <DialogContentText>
                    <Rating
                      precision={0.1}
                      name="read-only"
                      value={selectedProduct.attributes.Rating}
                      readOnly
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Buy Now
                  </Button>
                  <Button autoFocus onClick={handleClose}>
                    Cancel
                  </Button>
                </DialogActions>
              </Box>
            </>
          )}
        </Box>
      </Dialog>

      {error && <p>{error}</p>}
      <Box width={"100%"}>
        <Typography variant="h5">{error}</Typography>
      </Box>
    </Grid>
  );
}
