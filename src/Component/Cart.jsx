import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../Redux/Selected-Products";
import { useState } from "react";
import { Delete, Star } from "@mui/icons-material";
import Payment from "./Payment";

export default function Cart() {
  const items = useSelector((state) => state.SelectedProd.items);
  var [quantities, setQuantities] = useState(items.map(() => 1));
  const dispatch = useDispatch();
  console.log(items);
  const ClearCard = () => {
    dispatch(clearCart());
  };
  const data = Array.isArray(items) ? items : [];
  console.log(data);

  const [open, setOpen] = useState(false);

  const handleQuantityChange = (index, change) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(1, newQuantities[index] + change); // Prevent negative quantities
      return newQuantities;
    });
  };
  // Calculate total price
  const totalPrice = items.reduce((total, item, index) => {
    return total + item.attributes.ProductPrice * quantities[index];
  }, 0);
  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <Container>
      {items.length === 0 ? (
        <Typography variant="h3" textAlign={"center"} mt={4} mb={5}>
          {" "}
          Your Cart is Empty
        </Typography>
      ) : (
        items.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "80%",
                height: "13%",
                margin: "auto",
                mb: 2,
                mt: 4,
                bgcolor: "grey",
              }}
            >
              <img
                loading="lazy"
                alt="selected product to your card"
                src={item.attributes.image1}
                width={"10%"}
                height={"10%"}
              />
              <Box ml={3} flexGrow={1}>
                <Typography variant="h6">
                  {item.attributes.Productitle}
                </Typography>
                <Typography variant="h6">
                  {" "}
                  {item.attributes.ProductPrice} $
                </Typography>
                <Typography variant="h6">
                  {" "}
                  {item.attributes.Rating} <Star />
                </Typography>
              </Box>
              <Button onClick={() => handleRemoveItem(index)}>
                <Delete />
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  bgcolor: "silver",
                }}
              >
                <Button
                  sx={{ height: "15px", color: "gray" }}
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </Button>
                <Typography> {quantities[index]} </Typography>
                <Button
                  sx={{ height: "15px", color: "gray" }}
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  -
                </Button>
              </Box>
            </Box>
          );
        })
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "30%",
          margin: "auto",
        }}
      >
        <Box flexGrow={1}>
          <Typography variant="h6" textAlign={"center"}>
            Total Price : {totalPrice.toFixed(2)} $
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "15em" }}
            onClick={() => setOpen(true)}
          >
            Buy Now
          </Button>
        </Box>
        <Button
          variant="contained"
          color="error"
          onClick={ClearCard}
          sx={{ mt: 4 }}
        >
          Clear Card
        </Button>
      </Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          role="presentation"
          height={'100%'}
        >
          <Payment  open={setOpen} price={totalPrice}/>
        </Box>
        {/* <Button  color="error" onClose={() => setOpen(false)}>Close</Button> */}
      </Drawer>
    </Container>
  );
}
