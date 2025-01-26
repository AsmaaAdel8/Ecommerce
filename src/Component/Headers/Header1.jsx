import { ExpandMore, Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  MenuItem,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

const options = ["AR", "EN"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = (index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <Container>
      <AppBar
        position="fixed"
        sx={{
          height: 43,
          justifyContent: "center",
          alignItems: "space-between",
          padding: "18px",
          backgroundColor: "rgb(63, 19, 19)",
        }}
      >
        <Toolbar>
          <Typography
            variant="p"
            color="initial"
            style={{
              backgroundColor: "rgb(184, 15, 15)",
              borderRadius: "25px",
              width: "40px",
              height: "23px",
              textAlign: "center",
              marginRight: "8px",
              color: "white",
            }}
          >
            Hot
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            E-Commerce
          </Link>
          <Box flexGrow={1} />

          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
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
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <Box
            sx={{
              cursor: "pointer",
              marginRight: "8px",
            }}
          >
            <Twitter sx={{ fontSize: "16px", marginRight: "8px" }} />
            <Facebook sx={{ fontSize: "16px", marginRight: "8px" }} />
            <Instagram sx={{ fontSize: "16px", marginRight: "8px" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
