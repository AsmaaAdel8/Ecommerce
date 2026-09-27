import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Paper,
  // Skeleton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import admin from "../../public/admin-panel.png";
import user from "../../public/user.png";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Profile() {
  const [User, setUser] = useState({
    FName: "",
    lName: "",
    email: "",
    adress: "",
    phone: "",
    dOfBirth: "",
    picture: "",
  });
const DataUser=JSON.parse(localStorage.getItem("userData"));
const users=JSON.parse(localStorage.getItem("user"));
// console.log(users);
  return (
    <Container>
      <Grid container mt={4} ml={2} spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Input
          placeholder={users ? users.data.Name : DataUser.data.FName}
            variant="outlined"
            type="text"
            value={User.FName}
            onChange={(e) =>
              setUser({
                ...User,
                FName: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input variant="outlined" type="text"
          placeholder={!DataUser ? "Last-Name" : DataUser.data.lName}
          value={User.lName}
            onChange={(e) =>
              setUser({
                ...User,
                lName: e.target.value,
              })
            } />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input variant="outlined" type="email" 
          placeholder={users ? users.data.email : DataUser.data.email}
          value={User.email}
            onChange={(e) =>
              setUser({
                ...User,
                email: e.target.value,
              })
            }/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input variant="outlined" type="number" 
          placeholder={!DataUser ? "Phone-Number" : DataUser.phone}
          value={User.phone}
            onChange={(e) =>
              setUser({
                ...User,
                phone: e.target.value,
              })
            }/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Input variant="outlined" type="text" 
          placeholder={!DataUser ? "Address" : DataUser.adress}
          value={User.adress}
            onChange={(e) =>
              setUser({
                ...User,
                adress: e.target.value,
              })
            }/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1">BirthDay</Typography>
          <Input variant="outlined" type="date" 
          placeholder={!DataUser ? "Date Of Birth" : DataUser.dOfBirth}
          value={User.dOfBirth}
            onChange={(e) =>
              setUser({
                ...User,
                dOfBirth: e.target.value,
              })
            }/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button variant="outlined" component="label" 
          onClick={()=>localStorage.setItem("userData", JSON.stringify(User))}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ float: "right", mt: "-250px" }}>
        {users.data.Admin ? 
        <img src={admin} style={{width:"130px",height:"130px",margin:"center",marginBottom:"30px",marginRight:"-130px"}}/>
          : <img src={user} style={{width:"130px",height:"130px",margin:"center",marginBottom:"30px",marginRight:"-130px"}}/>}
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </Box>
      <Box sx={{ display: "flex", mt: 4 }}>
        <Paper sx={{ width: "50%", mr: 2, p: 1 }}>
          <Paper sx={{ display: "flex" }}>
            <Typography variant="h6" flexGrow={1}>
              Password
            </Typography>
            <Button variant="outlined" component="label">
              Change Password
            </Button>
          </Paper>
          <Typography variant="body1">
            you cane change your Password by click in this button here.
          </Typography>
        </Paper>
        <Paper sx={{ width: "50%", p: 1 }}>
          <Paper sx={{ display: "flex" }}>
            <Typography variant="h6" flexGrow={1}>
              Remove Account
            </Typography>
            <Button variant="outlined" component="label" 
            onClick={()=>{
              alert("Are You sure want delet your account?");
              
            }}>
              remove account
            </Button>
          </Paper>
          <Typography variant="body1">
            you cane remove you account by click in this button here.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
