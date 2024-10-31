import {
  EastOutlined,
  EmailOutlined,
  LockOutlined,
  PersonAddAltOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "../../App.css";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState(null);
  const theme = useTheme();
  const handleSend = () => {

    setPassword("");
    setemail("");
  };
  const InputsArr = [
    {
      title: "Email Adress",
      Ico: <EmailOutlined />,
      value: email,
    },
    {
      title: "Password",
      Ico: <LockOutlined />,
      value: password,
    },
  ];
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        mt: "2em",
      }}
    >
      <Typography variant="h4" mb={1} textAlign={"center"} color={"GrayText"}>
        Login To Your Account
      </Typography>
      <Paper className="form"
        sx={{
          bgcolor: theme.palette.favColor.main,
          boxShadow: "0px 0px 20px rgba(0, 0, 2)",
        }}
      >
        {InputsArr.map((item, index) => {
          return (
            <FormControl
              key={index}
              variant="standard"
              sx={{
                color: theme.palette.text.main,
                marginBottom: "1rem",
                p: "2px",
              }}
              fullWidth
            >
              <InputLabel htmlFor="input-with-icon-adornment">
                {item.title}
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={item.value}
                required
                type={item.value}
                onChange={(e) => {
                  item.title === "Password"
                    ? setPassword(e.target.value)
                    : setemail(e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">{item.Ico}</InputAdornment>
                }
              />
            </FormControl>
          );
        })}
        <Typography variant="p" mb={1}>
          {" "}
          Forget Your Password ?
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={handleSend}
          sx={{
            width: "80%",
            marginLeft: "35px",
            display: "block",
            marginBottom: "5px",
          }}
        >
          Login
          <EastOutlined sx={{ ml: "5px", fontSize: "15px" }} />
        </Button>
      </Paper>
      <Typography variant="h6" textAlign={"center"}>
        Don &apos; t have an acount {}
        <Link to="/Register">
          SignUp <PersonAddAltOutlined sx={{ mr: "5px", fontSize: "20px" }} />
        </Link>
      </Typography>
      <Toaster />
    </Box>
  );
}
