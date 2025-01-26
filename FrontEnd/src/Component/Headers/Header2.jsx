import {
  alpha,
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  ExpandMore,
  Lock,
  Login,
  Logout,
  PersonAddAlt,
  PersonPin,
} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../Redux/getUsers-slice";
// import { Shopping } from "../../Redux/Selected-Products";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const options = ["All Categories", "CAR", "Clothes", "Electronics"];
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const { items } = useSelector((state) => state.users);
  console.log(items);
  
  // disapear login bage and dashbord depind on data of users
  const dispatch = useDispatch();
  const number  = useSelector((state) => state.SelectedProd.num);
  console.log(number)
  // const User = false; // if user have an account or not
  // const Admin = true; // if you user r admin
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const logout=()=>{
  dispatch(LogOut());
  document.getElementById('shop').style.display="none";
}

  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          marginTop: "4em",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack sx={{ alignItems: "center" }}>
          <ShoppingCartOutlinedIcon />
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            E-Commerce
          </Link>
        </Stack>
        <Search
          style={{
            border: "0.5px solid",
            borderRadius: "25px",
            width: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.favColor.main,
                borderBottomRightRadius: 22,
                borderTopRightRadius: 22,
                p: "0",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    width: "30%",
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ fontSize: "16px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  sx={{ fontSize: "13px" }}
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Search>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {! items && (
          <Link to={"/Cart"}>
            <IconButton aria-label="cart" >
              <StyledBadge badgeContent={number} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
          )}
          {items === "showAdminDashboard" && (
            <Link
              to="Dashpoard"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "green",
                margin: "0 5px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                width: "7em",
                justifyContent: "center",
              }}
            >
              <Lock fontSize="5px" />
              <Typography variant="span">Dashpoard</Typography>
            </Link>
          )}
          { !items ? (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Link
                to="Profile"
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.favColor.main,
                  margin: "0 5px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  width: "5em",
                  justifyContent: "center",
                }}
              >
                <PersonPin fontSize="5px" />
                <Typography variant="span">Profile</Typography>
              </Link>
              <Link
                to="login"
                onClick={ logout }
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.main,
                  backgroundColor: theme.palette.favColor.main,
                  margin: "0 5px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  width: "5em",
                  justifyContent: "center",
                }}
              >
                <Logout fontSize="5px" />
                <Typography variant="span">LogOut</Typography>
              </Link>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Link
                to="login"
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.favColor.main,
                  margin: "0 5px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  width: "5em",
                  justifyContent: "center",
                }}
              >
                <Login fontSize="5px" />
                <Typography variant="span">Login</Typography>
              </Link>
              <Link
                to="Register"
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.favColor.main,
                  margin: "0 5px",
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  width: "5em",
                  justifyContent: "center",
                }}
              >
                <PersonAddAlt fontSize="5px" />
                <Typography variant="span">Register</Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}
