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
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../../Redux/getUsers-slice";

// import { useSelector } from "react-redux";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(GetUsers());
    console.log(data);
  }, []);
  const [data] = items;
  const handleSend = () => {
    if (!email || !password) {
      alert("Email and Password are required.");
      return;
    } else {
      data.map((user) => {
        if (user.email === email && user.password === password) {
          alert("Login Successfull");
          window.location.href = "/";
          // and will remove login and regster buttons and but user name
        }
      });
    }
    // Clear the inputs
    setPassword("");
    setemail("");
  };
  const InputsArr = [
    {
      title: "Email Adress",
      Ico: <EmailOutlined />,
      value: email,
      type: "email",
    },
    {
      title: "Password",
      Ico: <LockOutlined />,
      value: password,
      type: "password",
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
      <Paper
        className="form"
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
              <InputLabel htmlFor="input-with-icon-adornment" id={item.title}>
                {item.title}
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={item.value}
                required
                type={item.type}
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
