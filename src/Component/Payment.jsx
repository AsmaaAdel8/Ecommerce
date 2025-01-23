import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";

export default function Payment( total ) {
// console.log(total)
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "max-content",
        maxWidth: "100%",
        mx: "auto",
        // to make the demo resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />} mb={5}>
        Payment the price : {total.price}
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card number</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <Input endDecorator={<CreditCardIcon />} />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input endDecorator={<InfoOutlined />} />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>Card holder name</FormLabel>
          <Input placeholder="Enter cardholder's full name" />
        </FormControl>
        <Typography color="gray">save card</Typography>
        <Checkbox label="Save card" sx={{ gridColumn: "1/-1", my: 1 , width:'40%'}} />
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button variant="solid" color="primary">
            Buy Now!!
          </Button>
          <Button  color="error" onClose={() => total.open(false)}>Close</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
