import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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
  return (
    <Container>
      <Grid container mt={4} ml={2} spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Input placeholder="First-Name" variant="outlined" type="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input placeholder="Last-Name" variant="outlined" type="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input placeholder="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Input placeholder="Phone-Number" variant="outlined" type="number" />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Input placeholder="Adress" variant="outlined" type="text" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="body1">BirthDay</Typography>
          <Input placeholder="BirthDay" variant="outlined" type="date" />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button variant="outlined" component="label">
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ float: "right", mt: "-250px" }}>
        <Skeleton variant="circular" width={180} height={180} sx={{ mb: 4 }} />
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
        <Paper sx={{ width: "50%", mr: 2 ,p:1}}>
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
        <Paper sx={{ width: "50%" ,p:1}}>
          <Paper sx={{ display: "flex" }}>
            <Typography variant="h6" flexGrow={1}>
              Remove Account
            </Typography>
            <Button variant="outlined" component="label">
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
