import { GetProductData } from "../Sign/Check";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Container } from "@mui/material";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
export default function Productes() {
  const dataPromses = [GetProductData()];
  const products = () => {
    Promise.all(dataPromses).then((productData) => {
      // console.log(productData);
      return productData[0].map((product, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.attributes.ProductImage.data[0].attributes.url}
              alt={product.attrbiutes.Productitle}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.attributes.Productitle}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.attributes.ProductDescription}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.attributes.ProductPrice}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.attributes.Rating}
                <StarOutlinedIcon />
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ));
    });
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", gap: 2, flexWrap: "wrap" }}
    >
      {products()}
      <h2>Products</h2>
    </Container>
  );
}
