import { Delete, Star } from "@mui/icons-material";
import { Avatar, Paper, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GetProductData } from "../Sign/Check";

function createData(product, price,catigory, stock) {
  return { product, price, catigory, stock};
}

const rows = [
  createData("Jacket", 159,'men', 6.0),
  createData("Watch", 237, 'women',9.0),
];
export default function Products() {
  const dataPromses = [GetProductData()];
  // function to get data from api
  const products = () => {
    Promise.all(dataPromses).then((productData) => {
      console.log(productData);
    });
  };
  const theme = useTheme();
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
            <TableCell align="right">INSTOCK</TableCell>
            <TableCell align="right">FUATURED</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
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
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 50, height: 50 }}
                />
                {row.product}
              </TableCell>

              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">{row.catigory}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">
                <Star sx={{bgcolor:"yellowGreen" , borderRadius:"50%"}}/>
              </TableCell>
              <TableCell align="right">
                <Delete />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
