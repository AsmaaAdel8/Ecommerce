import {
  EastOutlined,
  EmailOutlined,
  LockOutlined,
  PersonAddAltOutlined,
  PersonOutlined,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputAdornment,
  InputLabel,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../App.css";
import { CreateUser } from "./Check";
import CheckIcon from '@mui/icons-material/Check';
export default function Register() {
  const loading = false;
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    Admin: "",
  });
  const theme = useTheme();
  const handleSend = async () => {
  //  if (formData.password.trim() !== formData.confirmPassword.trim()) {
  //     alert("Passwords do not match");
  //     return;
  //   } else {
      const action = dispatch(CreateUser(formData));
      if (CreateUser .fulfilled.match(action)) {
        return(<Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
         User  created successfully!
        </Alert>)
        // Reset form or perform other actions
      } else {
        alert('Error creating user:', action.payload);
      }
      setformData({
        Name: "",
        email: "",
        password: "",
        confirmPassword: "",
        Admin: "",
      });
    // }
  };
  const InputsArr = [
    {
      title: "Full Name",
      Ico: <PersonOutlined />,
      type: "text",
      key: "Name",
    },
    {
      title: "Email",
      Ico: <EmailOutlined />,
      type: "email",
      key: "email",
    },
    {
      title: "Password",
      Ico: <LockOutlined />,
      type: "password",
      key: "password",
    },
    {
      title: "Confirm Password",
      Ico: <LockOutlined />,
      type: "password",
      key: "confirmPassword",
    },
  ];
  const handleChange = (key, value) => {
    setformData({ [key]: value });
  };
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
        Create your acount
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
              <InputLabel htmlFor="input-with-icon-adornment">
                {item.title}
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                type={item.type}
                value={formData[item.key]}
                required
                onChange={(e) => {
                  handleChange(item.key, e.target.value);
                }}
                startAdornment={
                  <InputAdornment position="start">{item.Ico}</InputAdornment>
                }
              />
            </FormControl>
          );
        })}
        <FormControlLabel control={<Checkbox />} label="Admin" />
        <Button
          type="submit"
          variant="contained"
          onClick={handleSend}
          color="success"
          sx={{
            width: "80%",
            marginLeft: "35px",
            display: "block",
            marginBottom: "5px",
          }}
        >
          {loading ? (
            <Box className="flex">
              loading...
              {/* <CircularProgress /> */}
            </Box>
          ) : (
            <Box className="flex" justifyContent={"center"}>
              SignUp
              <PersonAddAltOutlined />
            </Box>
          )}
        </Button>
      </Paper>
      <Typography variant="h6" textAlign={"center"}>
        Already have an acount {}
        <Link to="/login">
          login <EastOutlined fontSize="10px" />
        </Link>
      </Typography>
      <Toaster />
    </Box>
  );
}