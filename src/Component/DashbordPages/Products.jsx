import { Delete, Star } from "@mui/icons-material";
import { Avatar, IconButton, Paper, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DeleteProduct, GetProductData } from "../Sign/Check";
import { useEffect, useState } from "react";

export default function Products() {
    const UrlImg="http://localhost:1337";
    const theme = useTheme();
    const [products, setProducts] = useState([]);
    const handleDelete=(id)=>{
      DeleteProduct(id);
    }
    // function to get data from api
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetProductData();
          console.log("Fetched data:", data.data); // Log the entire response
          if (data.data) {
            setProducts(data.data); // Assuming the response structure is { data: [...] }
          } else {
            console.error("Unexpected response structure:", data);
          }
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      };
      fetchData(); // Call the async function
    }, []);
  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: "2em",
        width: "100%",
        bgcolor: theme.palette.favColor.main,
        boxShadow: "0px 0px 20px rgba(0,0,2)",
      }}
    >
      <Table sx={{ Width: "90%" }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>PRODUCTS</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">CATIGORY</TableCell>
            <TableCell align="right">RATING</TableCell>
            <TableCell align="right">FUATURED</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Avatar
                  alt="product image"
                  src={`${UrlImg}${product.attributes.ProductImage.data[0].attributes.url}`}
                  sx={{ width: 50, height: 50 }}
                />
                {product.attributes.Productitle}
              </TableCell>

              <TableCell align="right">${product.attributes.ProductPrice}</TableCell>
              <TableCell align="right">{product.attributes.Catigory}</TableCell>
              <TableCell align="right">{product.attributes.Rating}</TableCell>
              <TableCell align="right">
                <Star sx={{bgcolor:"yellowGreen" , borderRadius:"50%"}}/>
              </TableCell>
              <IconButton align="right" onClick={() => handleDelete(product.id)} sx={{float:"right",mr:4,mt:'-8px'}}>
                <Delete />
              </IconButton>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
